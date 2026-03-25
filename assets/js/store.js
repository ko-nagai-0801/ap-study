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

  // ─── データリセット ───────────────────────────────────
  function resetAll() {
    _progress = {}; _sessions = [];
    lsSet('progress', _progress);
    lsSet('sessions', _sessions);
  }

  // ─── 公開 API ─────────────────────────────────────────
  return {
    quiz: _quiz,
    recordAnswer, toggleBookmark, getProgress,
    saveSession, getOverallStats, getCategoryStats,
    getWeakQuestions, getRecentSessions,
    getSetting, setSetting, resetAll,
  };
})();
