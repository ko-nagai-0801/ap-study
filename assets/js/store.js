/* =====================================================
   store.js — アプリ状態管理・localStorage 永続化
   ===================================================== */

const Store = (() => {
  const PREFIX = 'ap_';

  // ─── デフォルト状態 ──────────────────────────────────
  const defaultProgress = {}; // { questionId: { attempts, correct, lastAnswered, bookmarked } }
  const defaultSessions = []; // [{ id, date, mode, category, total, correct, durationSec, questionIds }]
  const defaultSettings = { theme: 'light', dailyGoal: 20 };

  // ─── localStorage ユーティリティ ─────────────────────
  function lsGet(key, fallback) {
    try {
      const v = localStorage.getItem(PREFIX + key);
      return v !== null ? JSON.parse(v) : fallback;
    } catch { return fallback; }
  }

  function lsSet(key, value) {
    try { localStorage.setItem(PREFIX + key, JSON.stringify(value)); }
    catch (e) {
      // QuotaExceededError: 古いセッション履歴を削除して再試行
      if (e.name === 'QuotaExceededError') {
        const sessions = lsGet('sessions', []);
        if (sessions.length > 20) {
          lsSet('sessions', sessions.slice(-20));
          try { localStorage.setItem(PREFIX + key, JSON.stringify(value)); } catch {}
        }
      }
    }
  }

  // ─── メモリキャッシュ ─────────────────────────────────
  let _progress = lsGet('progress', defaultProgress);
  let _sessions = lsGet('sessions', defaultSessions);
  let _settings = { ...defaultSettings, ...lsGet('settings', {}) };

  // クイズセッション（メモリのみ・永続化不要）
  const _quiz = {
    questions:     [],
    currentIndex:  0,
    answers:       [],    // { questionId, selected, correct }
    startTime:     null,
    mode:          'random',
    category:      null,
    isAnswered:    false,
    selectedChoice: null,
    timerInterval: null,
    timeLeft:      null,
    timeLimit:     null,
    sessionId:     null,
  };

  // ─── 進捗 CRUD ────────────────────────────────────────
  function recordAnswer(questionId, selectedIndex, isCorrect) {
    if (!_progress[questionId]) {
      _progress[questionId] = { attempts: 0, correct: 0, lastAnswered: null, bookmarked: false };
    }
    _progress[questionId].attempts++;
    if (isCorrect) _progress[questionId].correct++;
    _progress[questionId].lastAnswered = new Date().toISOString();
    lsSet('progress', _progress);
  }

  function toggleBookmark(questionId) {
    if (!_progress[questionId]) {
      _progress[questionId] = { attempts: 0, correct: 0, lastAnswered: null, bookmarked: false };
    }
    _progress[questionId].bookmarked = !_progress[questionId].bookmarked;
    lsSet('progress', _progress);
    return _progress[questionId].bookmarked;
  }

  function getProgress(questionId) {
    return _progress[questionId] || { attempts: 0, correct: 0, lastAnswered: null, bookmarked: false };
  }

  // ─── セッション保存 ───────────────────────────────────
  function saveSession(session) {
    _sessions.push({ ...session, id: Date.now().toString(), date: new Date().toISOString() });
    // 最大 100 件
    if (_sessions.length > 100) _sessions = _sessions.slice(-100);
    lsSet('sessions', _sessions);
  }

  // ─── 統計計算 ─────────────────────────────────────────
  function getOverallStats() {
    const ids = Object.keys(_progress);
    const attempted = ids.filter(id => _progress[id].attempts > 0);
    const totalAttempts = attempted.reduce((s, id) => s + _progress[id].attempts, 0);
    const totalCorrect  = attempted.reduce((s, id) => s + _progress[id].correct, 0);
    const accuracy = totalAttempts > 0 ? Math.round(totalCorrect / totalAttempts * 100) : 0;

    // 今日の学習
    const todayStr = new Date().toDateString();
    const todaySessions = _sessions.filter(s => new Date(s.date).toDateString() === todayStr);
    const todayTotal   = todaySessions.reduce((s, s2) => s + s2.total, 0);
    const todayCorrect = todaySessions.reduce((s, s2) => s + s2.correct, 0);

    // 連続学習日数
    const streak = calcStreak();

    return {
      totalAttempted: attempted.length,
      totalCorrect, totalAttempts, accuracy,
      todayTotal, todayCorrect, streak,
      sessionsCount: _sessions.length,
    };
  }

  function getCategoryStats() {
    const map = {};
    QUESTIONS_DATA.forEach(q => {
      const p = _progress[q.id] || { attempts: 0, correct: 0 };
      if (!map[q.category]) {
        map[q.category] = { name: q.categoryName, attempts: 0, correct: 0 };
      }
      map[q.category].attempts += p.attempts;
      map[q.category].correct  += p.correct;
    });
    return Object.entries(map).map(([id, v]) => ({
      id, name: v.name,
      accuracy: v.attempts > 0 ? Math.round(v.correct / v.attempts * 100) : 0,
      attempts: v.attempts, correct: v.correct,
    }));
  }

  function getWeakQuestions(limit = 10) {
    return QUESTIONS_DATA
      .map(q => {
        const p = _progress[q.id] || { attempts: 0, correct: 0 };
        const rate = p.attempts > 0 ? p.correct / p.attempts : -1;
        return { ...q, attempts: p.attempts, correctRate: rate };
      })
      .filter(q => q.attempts >= 2 && q.correctRate < 0.6)
      .sort((a, b) => a.correctRate - b.correctRate)
      .slice(0, limit);
  }

  function getRecentSessions(limit = 10) {
    return [..._sessions].reverse().slice(0, limit);
  }

  function calcStreak() {
    if (_sessions.length === 0) return 0;
    const days = new Set(_sessions.map(s => new Date(s.date).toDateString()));
    let streak = 0;
    const d = new Date();
    while (days.has(d.toDateString())) {
      streak++;
      d.setDate(d.getDate() - 1);
    }
    return streak;
  }

  // ─── 設定 ─────────────────────────────────────────────
  function getSetting(key) { return _settings[key]; }
  function setSetting(key, value) {
    _settings[key] = value;
    lsSet('settings', _settings);
  }

  // ─── 実績バッジ ───────────────────────────────────────
  const BADGE_DEFS = [
    { id: 'first_answer',   icon: '🎉', name: '初回解答',       desc: 'はじめて問題に回答した',           check: (s) => s.totalAttempts >= 1 },
    { id: 'ten_answers',    icon: '🔟', name: '10問突破',        desc: '累計10問以上回答した',             check: (s) => s.totalAttempts >= 10 },
    { id: 'fifty_answers',  icon: '🏅', name: '50問突破',        desc: '累計50問以上回答した',             check: (s) => s.totalAttempts >= 50 },
    { id: 'hundred_answers',icon: '💯', name: '100問突破',       desc: '累計100問以上回答した',            check: (s) => s.totalAttempts >= 100 },
    { id: 'two_hundred',    icon: '🚀', name: '200問突破',       desc: '累計200問以上回答した',            check: (s) => s.totalAttempts >= 200 },
    { id: 'accuracy_70',    icon: '⭐', name: '正答率70%',       desc: '全体正答率が70%以上',              check: (s) => s.totalAttempts >= 20 && s.accuracy >= 70 },
    { id: 'accuracy_80',    icon: '🌟', name: '正答率80%',       desc: '全体正答率が80%以上',              check: (s) => s.totalAttempts >= 20 && s.accuracy >= 80 },
    { id: 'streak_3',       icon: '🔥', name: '3日連続',         desc: '3日連続で学習した',                check: (s) => s.streak >= 3 },
    { id: 'streak_7',       icon: '🔥🔥', name: '7日連続',      desc: '7日連続で学習した',                check: (s) => s.streak >= 7 },
    { id: 'five_sessions',  icon: '📚', name: '5回演習',         desc: '演習セッションを5回以上完了した',  check: (s) => s.sessionsCount >= 5 },
    { id: 'perfect_session',icon: '✨', name: '満点セッション',  desc: '1回のセッションで全問正解した',    check: (s, sessions) => sessions.some(ss => ss.total >= 5 && ss.correct === ss.total) },
    { id: 'all_categories', icon: '🌈', name: '全分野制覇',      desc: 'すべての分野で1問以上解答した',    check: (s, sessions, catStats) => catStats.every(c => c.attempts > 0) },
  ];

  let _badges = lsGet('badges', []);

  function checkBadges() {
    const stats = getOverallStats();
    const catStats = getCategoryStats();
    const sessions = _sessions;
    const newlyEarned = [];
    BADGE_DEFS.forEach(def => {
      if (!_badges.includes(def.id) && def.check(stats, sessions, catStats)) {
        _badges.push(def.id);
        newlyEarned.push(def);
      }
    });
    if (newlyEarned.length > 0) lsSet('badges', _badges);
    return newlyEarned;
  }

  function getEarnedBadges() {
    return BADGE_DEFS.map(def => ({ ...def, earned: _badges.includes(def.id) }));
  }

  // ─── 間隔反復（SM-2 簡易版） ─────────────────────────
  // sr_data: { questionId: { interval, easeFactor, nextReview } }
  let _srData = lsGet('sr_data', {});

  function _initSR(questionId) {
    if (!_srData[questionId]) {
      _srData[questionId] = { interval: 0, easeFactor: 2.5, nextReview: new Date().toISOString() };
    }
    return _srData[questionId];
  }

  /**
   * SM-2 アルゴリズムで次回復習日を更新
   * quality: 0-5（3以上で正解扱い）
   *   5=完璧 4=少し考えた 3=辛うじて正解 2=誤答後正解 1=誤答 0=完全不正解
   */
  function updateSR(questionId, quality) {
    const sr = _initSR(questionId);
    if (quality >= 3) {
      if (sr.interval === 0)      sr.interval = 1;
      else if (sr.interval === 1) sr.interval = 6;
      else sr.interval = Math.round(sr.interval * sr.easeFactor);
    } else {
      sr.interval = 1; // 不正解は翌日に再出題
    }
    sr.easeFactor = Math.max(1.3, sr.easeFactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    const next = new Date();
    next.setDate(next.getDate() + sr.interval);
    sr.nextReview = next.toISOString();
    lsSet('sr_data', _srData);
  }

  /** 今日以前に復習期限が来ている問題を返す */
  function getDueQuestions(limit = 20) {
    const now = new Date();
    return QUESTIONS_DATA.filter(q => {
      const sr = _srData[q.id];
      if (!sr) return true; // 未学習 → 今日が対象
      return new Date(sr.nextReview) <= now;
    }).slice(0, limit);
  }

  function getSRData(questionId) {
    return _srData[questionId] || null;
  }

  // ─── メモ（ノート） ───────────────────────────────────
  let _memos = lsGet('memos', {}); // { questionId: string }

  function getMemo(questionId) { return _memos[questionId] || ''; }
  function setMemo(questionId, text) {
    if (text.trim() === '') {
      delete _memos[questionId];
    } else {
      _memos[questionId] = text;
    }
    lsSet('memos', _memos);
  }
  function hasMemo(questionId) { return !!_memos[questionId]; }
  function getMemoCount() { return Object.keys(_memos).length; }

  // ─── データリセット ───────────────────────────────────
  function resetAll() {
    _progress = {}; _sessions = []; _badges = []; _srData = {}; _memos = {};
    lsSet('progress', _progress);
    lsSet('sessions', _sessions);
    lsSet('badges', _badges);
    lsSet('sr_data', _srData);
    lsSet('memos', _memos);
  }

  // ─── エクスポート / インポート ────────────────────────
  function exportData() {
    const payload = {
      version: 1,
      exportedAt: new Date().toISOString(),
      progress: _progress,
      sessions: _sessions,
      badges: _badges,
      sr_data: _srData,
      memos: _memos,
      settings: lsGet('settings', {}),
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = `ap-study-backup-${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function importData(jsonText) {
    try {
      const data = JSON.parse(jsonText);
      if (!data.version || !data.progress) throw new Error('不正なフォーマット');
      _progress = data.progress || {};
      _sessions = data.sessions || [];
      _badges   = data.badges   || [];
      _srData   = data.sr_data  || {};
      _memos    = data.memos    || {};
      lsSet('progress', _progress);
      lsSet('sessions', _sessions);
      lsSet('badges',   _badges);
      lsSet('sr_data',  _srData);
      lsSet('memos',    _memos);
      if (data.settings) {
        Object.entries(data.settings).forEach(([k, v]) => setSetting(k, v));
      }
      return true;
    } catch (e) {
      return false;
    }
  }

  // ─── 公開 API ─────────────────────────────────────────
  return {
    quiz: _quiz,
    recordAnswer, toggleBookmark, getProgress,
    saveSession, getOverallStats, getCategoryStats,
    getWeakQuestions, getRecentSessions,
    checkBadges, getEarnedBadges,
    updateSR, getDueQuestions, getSRData,
    exportData, importData,
    getMemo, setMemo, hasMemo, getMemoCount,
    getSetting, setSetting, resetAll,
  };
})();
