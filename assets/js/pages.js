/* =====================================================
   pages.js — 全ページ レンダラー
   ===================================================== */

const Pages = (() => {

  // ─── ユーティリティ ──────────────────────────────────
  function mount(html) {
    const app = document.getElementById('app');
    if (app) { app.innerHTML = html; app.classList.add('fade-in'); }
  }

  function diffLabel(d) {
    const labels = ['', '基本', '標準', '応用', '難', '超難'];
    const classes = ['', 'diff-1', 'diff-2', 'diff-3', 'diff-4', 'diff-5'];
    return `<span class="badge ${classes[d]}">${labels[d]}</span>`;
  }

  function categoryColor(id) {
    const colors = {
      algorithm: '#7950F2', network: '#1971C2',
      database: '#0CA678', security: '#E03131', os: '#E67700',
    };
    return colors[id] || '#3B5BDB';
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function showToast(msg, type = '') {
    const c = document.getElementById('toast-container');
    if (!c) return;
    const t = document.createElement('div');
    t.className = `toast${type ? ' toast--' + type : ''}`;
    t.textContent = msg;
    c.appendChild(t);
    setTimeout(() => t.remove(), 3000);
  }

  function fmtTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  // ─── ホームページ ──────────────────────────────────── //
  function renderHome() {
    const stats = Store.getOverallStats();
    const hasPrev = stats.totalAttempts > 0;

    const progressBanner = hasPrev ? `
      <section class="section" style="padding-top:32px; padding-bottom:0;">
        <div class="container">
          <div class="progress-banner">
            <div class="progress-banner__icon">${stats.streak > 0 ? '🔥' : '📚'}</div>
            <div class="progress-banner__info">
              <div class="progress-banner__title">
                ${stats.streak > 0 ? `${stats.streak}日連続学習中！` : '学習を再開しましょう'}
              </div>
              <div class="progress-banner__sub">
                累計 ${stats.totalAttempts} 問回答 ／ 正答率 ${stats.accuracy}% ／
                今日 ${stats.todayTotal} 問
              </div>
            </div>
            <div class="progress-banner__actions">
              <a href="#/quiz" class="btn btn-primary btn-sm">▶ 続きから</a>
              <a href="#/dashboard" class="btn btn-secondary btn-sm">📊 ダッシュボード</a>
            </div>
          </div>
        </div>
      </section>` : '';

    const subjectCards = SUBJECTS_DATA.map(s => `
      <a href="#/subjects/${s.id}" class="subject-card" style="--card-color: ${s.color};">
        <div class="subject-card__icon">${s.icon}</div>
        <div class="subject-card__name">${s.name}</div>
        <div class="subject-card__desc">${s.description}</div>
        <div class="subject-card__meta">
          <span>午前 ${s.amCount}</span>
          <span class="badge badge-neutral">重要度 ${'★'.repeat(s.importance)}${'☆'.repeat(5 - s.importance)}</span>
        </div>
      </a>
    `).join('');

    mount(`
      <div class="fade-in">
        <!-- ヒーロー -->
        <section class="hero">
          <div class="container">
            <div class="hero__label">🎯 国家資格対策 — 無料・登録不要</div>
            <h1 class="hero__title">応用情報技術者試験を<br>体系的に攻略する</h1>
            <p class="hero__subtitle">
              ${hasPrev
                ? `${stats.streak > 0 ? `🔥 ${stats.streak}日連続学習中！` : '学習を再開しましょう'} 累計 <strong>${stats.totalAttempts}</strong> 問回答 · 正答率 <strong>${stats.accuracy}%</strong>`
                : '分野別テキスト解説・過去問演習・弱点分析・用語集を一つのサイトで。今すぐ学習を始めよう。'}
            </p>
            <div class="hero__actions">
              ${hasPrev
                ? `<a href="#/quiz" class="btn hero__cta-primary">▶ 続きから演習する</a>
                   <a href="#/dashboard" class="btn hero__cta-secondary">📊 ダッシュボード</a>`
                : `<a href="#/quiz" class="btn hero__cta-primary">✏️ 演習を始める（無料）</a>
                   <a href="#/subjects" class="btn hero__cta-secondary">📚 分野別に学ぶ</a>`}
            </div>
            <div class="hero__meta">
              <div class="hero__meta-item">
                <div class="hero__meta-value">${QUESTIONS_DATA.length}</div>
                <div class="hero__meta-label">収録問題数</div>
              </div>
              <div class="hero__meta-item">
                <div class="hero__meta-value">${SUBJECTS_DATA.length}</div>
                <div class="hero__meta-label">対応分野</div>
              </div>
              <div class="hero__meta-item">
                <div class="hero__meta-value">${GLOSSARY_DATA.length}</div>
                <div class="hero__meta-label">用語集収録数</div>
              </div>
              ${hasPrev ? `
              <div class="hero__meta-item">
                <div class="hero__meta-value" style="color:var(--color-primary);">${Math.round(stats.totalAttempted / QUESTIONS_DATA.length * 100)}%</div>
                <div class="hero__meta-label">問題攻略率</div>
              </div>` : `
              <div class="hero__meta-item">
                <div class="hero__meta-value">100%</div>
                <div class="hero__meta-label">無料・登録不要</div>
              </div>`}
            </div>
          </div>
        </section>

        ${progressBanner}

        <!-- 対応分野 -->
        <section class="section">
          <div class="container">
            <div class="section-header section-header--flex">
              <div>
                <h2 class="section-title">分野別に学ぶ</h2>
                <p class="section-subtitle">テキスト解説 + 演習問題がセットで学べる</p>
              </div>
              <a href="#/subjects" class="btn btn-outline btn-sm">すべての分野 →</a>
            </div>
            <div class="grid-3">${subjectCards}</div>
          </div>
        </section>

        <!-- 試験情報バナー -->
        <section class="section" style="padding-top:0;">
          <div class="container">
            <div class="exam-info-banner">
              <div class="exam-info-banner__content">
                <div class="exam-info-banner__title">📅 次回試験スケジュール</div>
                <div class="exam-info-banner__details">
                  <div class="exam-info-banner__item">
                    春期試験<strong>4月 第3日曜日</strong>
                  </div>
                  <div class="exam-info-banner__item">
                    秋期試験<strong>10月 第3日曜日</strong>
                  </div>
                  <div class="exam-info-banner__item">
                    合格基準<strong>午前・午後 各 60 点以上</strong>
                  </div>
                </div>
              </div>
              <a href="#/exam-info" class="btn btn-outline" style="border-color:rgba(255,255,255,.5);color:#fff;flex-shrink:0;">
                試験情報を見る →
              </a>
            </div>
          </div>
        </section>

        <!-- 学習の流れ -->
        <section class="section" style="background: var(--color-surface); border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
          <div class="container">
            <h2 class="section-title" style="text-align:center; margin-bottom:8px;">3 ステップで合格へ</h2>
            <p class="section-subtitle" style="text-align:center; margin-bottom:40px;">効率的な学習サイクルで着実にスコアアップ</p>
            <div class="grid-3">
              <div class="card" style="text-align:center;">
                <div style="font-size:2.5rem; margin-bottom:16px;">📖</div>
                <div style="font-size:.8rem; color:var(--color-primary); font-weight:700; margin-bottom:8px;">STEP 1</div>
                <h3 class="card-title" style="text-align:center; margin-bottom:8px;">分野別テキストで理解</h3>
                <p style="font-size:.875rem; color:var(--color-text-sub); line-height:1.7;">
                  5 分野の解説テキストで概念をしっかり理解。図表と要点まとめで効率よくインプット。
                </p>
              </div>
              <div class="card" style="text-align:center;">
                <div style="font-size:2.5rem; margin-bottom:16px;">✏️</div>
                <div style="font-size:.8rem; color:var(--color-primary); font-weight:700; margin-bottom:8px;">STEP 2</div>
                <h3 class="card-title" style="text-align:center; margin-bottom:8px;">過去問演習でアウトプット</h3>
                <p style="font-size:.875rem; color:var(--color-text-sub); line-height:1.7;">
                  分野別・ランダム・模擬試験の 3 モードで演習。解説付きで間違えた問題も確実に定着。
                </p>
              </div>
              <div class="card" style="text-align:center;">
                <div style="font-size:2.5rem; margin-bottom:16px;">📊</div>
                <div style="font-size:.8rem; color:var(--color-primary); font-weight:700; margin-bottom:8px;">STEP 3</div>
                <h3 class="card-title" style="text-align:center; margin-bottom:8px;">弱点分析で効率改善</h3>
                <p style="font-size:.875rem; color:var(--color-text-sub); line-height:1.7;">
                  ダッシュボードで分野別正答率を可視化。弱点を重点的に学習して合格に近づく。
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    `);
  }

  // ─── 分野一覧 ─────────────────────────────────────── //
  function renderSubjects() {
    const cards = SUBJECTS_DATA.map(s => {
      const catStats = Store.getCategoryStats().find(c => c.id === s.id);
      const accuracy = catStats && catStats.attempts > 0 ? catStats.accuracy : null;
      return `
        <a href="#/subjects/${s.id}" class="subject-card" style="--card-color: ${s.color};">
          <div class="subject-card__icon">${s.icon}</div>
          <div class="subject-card__name">${s.name}</div>
          <div class="subject-card__desc">${s.description}</div>
          ${accuracy !== null ? `
            <div style="margin-top:4px;">
              <div style="display:flex;align-items:center;justify-content:space-between;font-size:.8rem;color:var(--color-text-muted);margin-bottom:4px;">
                <span>正答率</span><span>${accuracy}%</span>
              </div>
              <div class="progress"><div class="progress-bar" style="width:${accuracy}%"></div></div>
            </div>` : ''}
          <div class="subject-card__meta">
            <span>午前 ${s.amCount}</span>
            <span class="badge badge-neutral">重要度 ${'★'.repeat(s.importance)}</span>
          </div>
        </a>`;
    }).join('');

    mount(`
      <div class="page fade-in">
        <div class="container">
          <div class="page-header">
            <h1 class="page-title">分野別学習</h1>
            <p class="page-subtitle">各分野のテキスト解説と演習問題で体系的に学習しましょう</p>
          </div>
          <div class="grid-3">${cards}</div>
        </div>
      </div>
    `);
  }

  // ─── 分野詳細 ─────────────────────────────────────── //
  function renderSubjectDetail(subjectId) {
    const subject = SUBJECTS_DATA.find(s => s.id === subjectId);
    if (!subject) { render404(); return; }

    const catQuestions = QUESTIONS_DATA.filter(q => q.category === subjectId);
    const catStats = Store.getCategoryStats().find(c => c.id === subjectId);

    const sectionNavItems = subject.sections.map(sec =>
      `<a href="#sec-${sec.id}">${sec.title}</a>`
    ).join('');

    const sectionsHtml = subject.sections.map((sec, i) => `
      <section class="content-section" id="sec-${sec.id}">
        <h2 class="content-section__title">
          <span style="background:${subject.color};color:#fff;border-radius:50%;width:28px;height:28px;display:inline-flex;align-items:center;justify-content:center;font-size:.8rem;font-weight:700;flex-shrink:0;">${i + 1}</span>
          ${sec.title}
        </h2>
        <div class="content-body">${sec.content}</div>
        <div class="key-points-list">
          ${sec.keyPoints.map(kp => `<div class="key-point-item">${kp}</div>`).join('')}
        </div>
      </section>
    `).join('');

    const previewQuestions = catQuestions.slice(0, 3).map(q => `
      <div class="card" style="padding:16px;">
        <div style="display:flex;align-items:flex-start;gap:10px;">
          <div style="flex:1;">
            <div style="display:flex;gap:6px;margin-bottom:8px;flex-wrap:wrap;">
              ${diffLabel(q.difficulty)}
              ${q.tags.slice(0,2).map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
            <p style="font-size:.875rem;color:var(--color-text);line-height:1.6;">${q.question.length > 80 ? q.question.slice(0,80) + '…' : q.question}</p>
          </div>
        </div>
      </div>
    `).join('');

    mount(`
      <div class="fade-in">
        <!-- ヒーロー -->
        <div class="subject-hero" style="background: linear-gradient(135deg, ${subject.color} 0%, ${subject.color}cc 100%);">
          <div class="container">
            <div style="font-size:.85rem;opacity:.75;margin-bottom:8px;">
              <a href="#/subjects" style="color:inherit;opacity:.7;">分野別学習</a> / ${subject.name}
            </div>
            <div class="subject-hero__icon">${subject.icon}</div>
            <h1 class="subject-hero__title">${subject.name}</h1>
            <p class="subject-hero__desc">${subject.description}</p>
            <div class="subject-hero__meta">
              <span>📋 午前出題 ${subject.amCount}</span>
              <span>❓ 収録問題 ${catQuestions.length} 問</span>
              ${catStats && catStats.attempts > 0
                ? `<span>✅ 正答率 ${catStats.accuracy}%</span>`
                : '<span>✅ まだ未解答</span>'}
            </div>
          </div>
        </div>

        <div class="page" style="padding-top:24px;">
          <div class="container">

            <!-- セクションナビ -->
            <div class="section-nav">${sectionNavItems}</div>

            <!-- 解説セクション -->
            ${sectionsHtml}

            <!-- 演習 CTA -->
            <div class="card" style="margin-top:8px; text-align:center; padding:32px;">
              <div style="font-size:2rem; margin-bottom:12px;">✏️</div>
              <h3 style="font-size:1.1rem; font-weight:700; margin-bottom:8px;">問題を解いて理解を定着させよう</h3>
              <p style="color:var(--color-text-sub); font-size:.9rem; margin-bottom:24px;">
                ${catQuestions.length} 問の演習問題で、学んだ内容を確認しましょう。
              </p>
              <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
                <a href="#/quiz?mode=category&category=${subjectId}" class="btn btn-primary btn-lg">
                  ✏️ この分野の問題を解く
                </a>
                <a href="#/quiz" class="btn btn-secondary">
                  📋 全分野ランダム
                </a>
              </div>
            </div>

            <!-- 問題プレビュー -->
            ${previewQuestions ? `
              <div style="margin-top:32px;">
                <h2 style="font-size:1.1rem;font-weight:700;margin-bottom:16px;">この分野の問題（プレビュー）</h2>
                <div style="display:flex;flex-direction:column;gap:10px;">${previewQuestions}</div>
                <div style="text-align:center;margin-top:16px;">
                  <a href="#/quiz?mode=category&category=${subjectId}" class="btn btn-outline">すべての問題を解く →</a>
                </div>
              </div>` : ''}

          </div>
        </div>
      </div>
    `);

    // セクションナビのスムーズスクロール
    document.querySelectorAll('.section-nav a').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
          const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) + 80;
          window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
        }
      });
    });
  }

  // ─── クイズセットアップ ────────────────────────────── //
  function renderQuizSetup() {
    const query = Router.getQuery();
    const presetMode = query.mode || 'random';

    // 年度一覧（データから動的生成）
    const availableYears = [...new Set(QUESTIONS_DATA.map(q => q.year).filter(Boolean))].sort((a,b) => b-a);
    // タグ人気順（上位18個）
    const tagCounts = {};
    QUESTIONS_DATA.forEach(q => (q.tags||[]).forEach(t => { tagCounts[t] = (tagCounts[t]||0)+1; }));
    const popularTags = Object.entries(tagCounts).sort((a,b)=>b[1]-a[1]).slice(0,18).map(([t])=>t);
    const presetCategory = query.category || '';

    const categoryOptions = [
      { id: '', name: 'すべての分野' },
      ...SUBJECTS_DATA.map(s => ({ id: s.id, name: s.name })),
    ].map(o => `<option value="${o.id}" ${presetCategory === o.id ? 'selected' : ''}>${o.name}</option>`).join('');

    mount(`
      <div class="page fade-in">
        <div class="container" style="max-width:640px;">
          <div class="page-header">
            <h1 class="page-title">✏️ 過去問演習</h1>
            <p class="page-subtitle">学習モードと分野を選んで演習を開始しましょう</p>
          </div>

          <!-- モード選択 -->
          <h2 style="font-size:1rem;font-weight:700;margin-bottom:12px;">学習モード</h2>
          <div class="mode-grid" id="mode-grid">
            <div class="mode-card ${presetMode === 'random' ? 'selected' : ''}" data-mode="random">
              <div class="mode-card__icon">🎲</div>
              <div class="mode-card__title">ランダム演習</div>
              <div class="mode-card__desc">分野をまたいでランダムに出題。バランスよく実力をつける。</div>
            </div>
            <div class="mode-card ${presetMode === 'category' ? 'selected' : ''}" data-mode="category">
              <div class="mode-card__icon">📚</div>
              <div class="mode-card__title">分野別演習</div>
              <div class="mode-card__desc">特定の分野に絞って集中的に演習する。</div>
            </div>
            <div class="mode-card ${presetMode === 'weak' ? 'selected' : ''}" data-mode="weak">
              <div class="mode-card__icon">🎯</div>
              <div class="mode-card__title">弱点集中</div>
              <div class="mode-card__desc">正答率が低い問題を優先的に出題。苦手を克服する。</div>
            </div>
            <div class="mode-card ${presetMode === 'exam' ? 'selected' : ''}" data-mode="exam">
              <div class="mode-card__icon">⏱️</div>
              <div class="mode-card__title">模擬試験（25問）</div>
              <div class="mode-card__desc">25 問 × 80分タイマー付き。本番形式で実力を測る。</div>
            </div>
            <div class="mode-card mode-card--featured ${presetMode === 'mock_exam' ? 'selected' : ''}" data-mode="mock_exam">
              <div class="mode-card__icon">🏆</div>
              <div class="mode-card__title">本番模擬試験（AP午前）</div>
              <div class="mode-card__desc">80 問 × 150分。実際の試験と同じ形式。合否判定付き。</div>
            </div>
            <div class="mode-card ${presetMode === 'bookmark' ? 'selected' : ''}" data-mode="bookmark">
              <div class="mode-card__icon">★</div>
              <div class="mode-card__title">ブックマーク復習</div>
              <div class="mode-card__desc">★マークした問題だけを集中演習する。</div>
            </div>
            <div class="mode-card ${presetMode === 'review' ? 'selected' : ''}" data-mode="review">
              <div class="mode-card__icon">🔄</div>
              <div class="mode-card__title">間隔反復復習</div>
              <div class="mode-card__desc">今日の復習期限が来た問題を優先出題。記憶定着を最大化。</div>
            </div>
          </div>

          <!-- 分野選択（分野別モード時のみ） -->
          <div id="category-select-wrap" style="margin-bottom:20px; ${presetMode !== 'category' ? 'display:none;' : ''}">
            <label class="form-label" for="category-select">分野を選択</label>
            <select class="form-control" id="category-select">${categoryOptions}</select>
          </div>

          <!-- 難易度フィルター -->
          <div style="margin-bottom:20px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
              <label class="form-label" style="margin:0;">難易度フィルター</label>
              <span id="diff-display" style="font-weight:700;color:var(--color-primary);font-size:.9rem;">すべて</span>
            </div>
            <div style="display:flex;gap:8px;align-items:center;">
              <select class="form-control" id="diff-min" style="flex:1;">
                <option value="1">1 基本</option>
                <option value="2">2 標準</option>
                <option value="3">3 応用</option>
                <option value="4">4 難</option>
                <option value="5">5 超難</option>
              </select>
              <span style="color:var(--color-text-muted);">〜</span>
              <select class="form-control" id="diff-max" style="flex:1;">
                <option value="1">1 基本</option>
                <option value="2">2 標準</option>
                <option value="3">3 応用</option>
                <option value="4">4 難</option>
                <option value="5" selected>5 超難</option>
              </select>
            </div>
            <p style="font-size:.75rem;color:var(--color-text-muted);margin-top:6px;">難易度 1（基本）〜 5（超難）の範囲を指定できます</p>
          </div>

          <!-- 年度フィルター -->
          <div style="margin-bottom:20px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
              <label class="form-label" style="margin:0;">出題年度</label>
              <span id="year-display" style="font-weight:700;color:var(--color-primary);font-size:.9rem;">すべて</span>
            </div>
            <div style="display:flex;gap:6px;flex-wrap:wrap;">
              <button class="filter-btn active" data-year="">すべて</button>
              ${availableYears.map(y => `<button class="filter-btn" data-year="${y}">${y}年</button>`).join('')}
            </div>
          </div>

          <!-- タグフィルター -->
          <div style="margin-bottom:20px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
              <label class="form-label" style="margin:0;">タグ絞り込み</label>
              <span id="tag-display" style="font-weight:700;color:var(--color-primary);font-size:.85rem;">指定なし</span>
            </div>
            <div id="tag-chip-wrap" style="display:flex;gap:6px;flex-wrap:wrap;">
              ${popularTags.map(t => `<button class="filter-btn tag-chip" data-tag="${t}" style="font-size:.75rem;">${t}</button>`).join('')}
            </div>
            <p style="font-size:.75rem;color:var(--color-text-muted);margin-top:6px;">複数選択可。選択なしはすべてのタグが対象です。</p>
          </div>

          <!-- 問題数 -->
          <div id="count-wrap" style="margin-bottom:28px; ${(presetMode === 'exam' || presetMode === 'mock_exam') ? 'display:none;' : ''}">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
              <label class="form-label" style="margin:0;">問題数</label>
              <span id="count-display" style="font-weight:700;color:var(--color-primary);font-family:var(--font-en);">10 問</span>
            </div>
            <input type="range" id="count-range" min="5" max="25" step="5" value="10"
              style="width:100%;accent-color:var(--color-primary);">
            <div style="display:flex;justify-content:space-between;font-size:.75rem;color:var(--color-text-muted);margin-top:4px;">
              <span>5 問</span><span>10</span><span>15</span><span>20</span><span>25 問</span>
            </div>
          </div>

          <button class="btn btn-primary btn-lg btn-full" id="start-quiz-btn">
            演習を開始する →
          </button>

          <p style="text-align:center;font-size:.8rem;color:var(--color-text-muted);margin-top:12px;">
            回答結果はブラウザに自動保存されます（登録不要）
          </p>
        </div>
      </div>
    `);

    // ─── イベント ─────────────────────────────────────
    let currentMode = presetMode;

    document.querySelectorAll('.mode-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        currentMode = card.dataset.mode;
        document.getElementById('category-select-wrap').style.display = currentMode === 'category' ? '' : 'none';
        document.getElementById('count-wrap').style.display = (currentMode === 'exam' || currentMode === 'mock_exam') ? 'none' : '';
        document.getElementById('start-quiz-btn').textContent =
          currentMode === 'mock_exam' ? '🏆 本番模擬試験を開始 →' : '演習を開始する →';
      });
    });

    document.getElementById('count-range').addEventListener('input', function () {
      document.getElementById('count-display').textContent = this.value + ' 問';
    });

    function updateDiffDisplay() {
      const mn = parseInt(document.getElementById('diff-min').value);
      const mx = parseInt(document.getElementById('diff-max').value);
      if (mn === 1 && mx === 5) {
        document.getElementById('diff-display').textContent = 'すべて';
      } else if (mn === mx) {
        const labels = ['', '基本', '標準', '応用', '難', '超難'];
        document.getElementById('diff-display').textContent = `${mn} ${labels[mn]}のみ`;
      } else {
        document.getElementById('diff-display').textContent = `難易度 ${mn} 〜 ${mx}`;
      }
    }
    document.getElementById('diff-min').addEventListener('change', updateDiffDisplay);
    document.getElementById('diff-max').addEventListener('change', updateDiffDisplay);

    // ─── 年度フィルター ──────────────────────────────
    let selectedYear = '';
    document.querySelectorAll('.filter-btn[data-year]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn[data-year]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedYear = btn.dataset.year;
        document.getElementById('year-display').textContent = selectedYear ? selectedYear + '年' : 'すべて';
      });
    });

    // ─── タグフィルター ──────────────────────────────
    const selectedTags = new Set();
    document.querySelectorAll('.tag-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const tag = btn.dataset.tag;
        if (selectedTags.has(tag)) { selectedTags.delete(tag); btn.classList.remove('active'); }
        else { selectedTags.add(tag); btn.classList.add('active'); }
        const arr = [...selectedTags];
        document.getElementById('tag-display').textContent = arr.length ? arr.join('・') : '指定なし';
      });
    });

    document.getElementById('start-quiz-btn').addEventListener('click', () => {
      const category = document.getElementById('category-select').value;
      const count = currentMode === 'mock_exam' ? 80 : currentMode === 'exam' ? 25 : parseInt(document.getElementById('count-range').value);
      const diffMin = parseInt(document.getElementById('diff-min').value);
      const diffMax = parseInt(document.getElementById('diff-max').value);
      startQuiz(currentMode, category, count, diffMin, diffMax, selectedYear, [...selectedTags]);
    });
  }

  // ─── クイズ開始ロジック ────────────────────────────── //
  function startQuiz(mode, category, count, diffMin = 1, diffMax = 5, year = '', tags = []) {
    let pool = [...QUESTIONS_DATA];

    // 難易度フィルター
    if (diffMin > 1 || diffMax < 5) {
      pool = pool.filter(q => q.difficulty >= diffMin && q.difficulty <= diffMax);
    }

    // 年度フィルター
    if (year) {
      pool = pool.filter(q => String(q.year) === String(year));
    }

    // タグフィルター（選択タグをひとつでも含む問題）
    if (tags.length > 0) {
      pool = pool.filter(q => (q.tags || []).some(t => tags.includes(t)));
    }

    if (mode === 'category' && category) {
      pool = pool.filter(q => q.category === category);
    } else if (mode === 'weak') {
      const weak = Store.getWeakQuestions(20);
      if (weak.length > 0) pool = pool.filter(q => weak.some(w => w.id === q.id));
    } else if (mode === 'bookmark') {
      pool = pool.filter(q => Store.getProgress(q.id).bookmarked);
    } else if (mode === 'review') {
      const due = Store.getDueQuestions(count);
      if (due.length > 0) pool = due;
    } else if (mode === 'mock_exam') {
      // カテゴリごとに均等に選出（合計 count=80 問）
      const catIds = [...new Set(pool.map(q => q.category))];
      const perCat = Math.floor(count / catIds.length);
      const remainder = count % catIds.length;
      const picked = [];
      catIds.forEach((cat, i) => {
        const catPool = shuffle(pool.filter(q => q.category === cat));
        picked.push(...catPool.slice(0, perCat + (i < remainder ? 1 : 0)));
      });
      pool = picked.length > 0 ? picked : pool;
    }

    if (pool.length === 0) {
      showToast('該当する問題がありません', 'error');
      return;
    }

    // スマートランダム：random/exam モードは未解答・低正答率を優先
    let questions;
    if (mode === 'random' || mode === 'exam') {
      const weighted = pool.map(q => {
        const p = Store.getProgress(q.id);
        if (p.attempts === 0) return { q, w: 3 };          // 未解答：高優先
        if (p.correct / p.attempts < 0.5) return { q, w: 2 }; // 低正答率：中優先
        return { q, w: 1 };                                 // 習得済み：通常
      });
      const total = weighted.reduce((s, e) => s + e.w, 0);
      const picked = [];
      const available = [...weighted];
      const need = Math.min(count, pool.length);
      while (picked.length < need && available.length > 0) {
        let r = Math.random() * available.reduce((s, e) => s + e.w, 0);
        let idx = 0;
        for (let i = 0; i < available.length; i++) {
          r -= available[i].w;
          if (r <= 0) { idx = i; break; }
        }
        picked.push(available[idx].q);
        available.splice(idx, 1);
      }
      questions = picked;
    } else {
      questions = shuffle(pool).slice(0, Math.min(count, pool.length));
    }

    // Store のクイズ状態を設定
    Store.quiz.questions     = questions;
    Store.quiz.currentIndex  = 0;
    Store.quiz.answers       = [];
    Store.quiz.startTime     = Date.now();
    Store.quiz.mode          = mode;
    Store.quiz.category      = category;
    Store.quiz.isAnswered    = false;
    Store.quiz.selectedChoice = null;
    Store.quiz.sessionId     = Date.now().toString();
    Store.quiz.timeLimit     = mode === 'mock_exam' ? 150 * 60 : mode === 'exam' ? 80 * 60 : questions.length * 90; // mock_exam=150分、exam=80分、通常=1.5分/問
    Store.quiz.timeLeft      = Store.quiz.timeLimit;

    renderQuestion();
  }

  // ─── 問題表示 ─────────────────────────────────────── //
  function renderQuestion() {
    const q = Store.quiz;
    const question = q.questions[q.currentIndex];
    if (!question) { endQuiz(); return; }

    const total     = q.questions.length;
    const current   = q.currentIndex + 1;
    const pct       = Math.round((q.currentIndex / total) * 100);
    const isExam    = q.mode === 'exam';
    const color     = categoryColor(question.category);

    const choicesHtml = question.choices.map(c => `
      <button class="choice" data-index="${c.index}" aria-label="選択肢 ${['ア','イ','ウ','エ'][c.index]}">
        <span class="choice-label">${['ア','イ','ウ','エ'][c.index]}</span>
        <span class="choice-text">${c.text}</span>
      </button>
    `).join('');

    mount(`
      <div class="page fade-in">
        <div class="container">
          <div class="quiz-layout">

            <!-- ヘッダー -->
            <div class="quiz-header">
              <div class="quiz-progress-wrap">
                <div class="quiz-counter">${current} / ${total} 問</div>
                <div class="progress"><div class="progress-bar" style="width:${pct}%"></div></div>
              </div>
              <div class="quiz-timer${isExam ? ' quiz-timer--exam' : ''}" id="quiz-timer">${fmtTime(q.timeLeft)}</div>
              <button class="btn btn-secondary btn-sm" id="quit-btn">中断</button>
            </div>

            <!-- 問題カード -->
            <div class="question-card">
              <div class="question-meta">
                <span class="question-number">Q${current}</span>
                <span class="badge" style="background:${color}22;color:${color};">${question.categoryName}</span>
                ${diffLabel(question.difficulty)}
                ${question.tags.slice(0,2).map(t => `<span class="tag">${t}</span>`).join('')}
                <button class="bookmark-btn" id="bookmark-btn" aria-label="ブックマーク" title="ブックマーク">☆</button>
              </div>
              <p class="question-text">${question.question}</p>
              <div class="choices" id="choices">${choicesHtml}</div>
              <div id="explanation-area"></div>
            </div>

            <!-- アクション -->
            <div class="quiz-actions">
              <button class="btn btn-secondary" id="skip-btn">スキップ</button>
              <button class="btn btn-primary" id="confirm-btn" disabled>回答する</button>
            </div>

          </div>
        </div>
      </div>
    `);

    // タイマー（全モード共通）
    if (Store.quiz.timeLeft !== null) {
      clearInterval(Store.quiz.timerInterval);
      const timerEl = document.getElementById('quiz-timer');
      Store.quiz.timerInterval = setInterval(() => {
        Store.quiz.timeLeft--;
        if (timerEl) {
          timerEl.textContent = fmtTime(Store.quiz.timeLeft);
          const warn = isExam ? 300 : Math.min(120, Store.quiz.timeLimit * 0.1);
          if (Store.quiz.timeLeft <= warn) timerEl.classList.add('warning');
          if (Store.quiz.timeLeft <= 60)  timerEl.classList.add('danger');
        }
        if (Store.quiz.timeLeft <= 0) { clearInterval(Store.quiz.timerInterval); endQuiz(); }
      }, 1000);
    }

    // 選択肢クリック
    document.querySelectorAll('.choice').forEach(btn => {
      btn.addEventListener('click', () => {
        if (Store.quiz.isAnswered) return;
        document.querySelectorAll('.choice').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        Store.quiz.selectedChoice = parseInt(btn.dataset.index);
        document.getElementById('confirm-btn').disabled = false;
      });
    });

    // 回答確定
    document.getElementById('confirm-btn').addEventListener('click', () => {
      if (Store.quiz.selectedChoice === null) return;
      confirmAnswer(question);
    });

    // スキップ
    document.getElementById('skip-btn').addEventListener('click', () => {
      Store.quiz.answers.push({ questionId: question.id, selected: -1, correct: false });
      Store.quiz.currentIndex++;
      Store.quiz.isAnswered = false;
      Store.quiz.selectedChoice = null;
      renderQuestion();
    });

    // 中断
    document.getElementById('quit-btn').addEventListener('click', () => {
      clearInterval(Store.quiz.timerInterval);
      endQuiz();
    });

    // キーボードショートカット（1〜4: 選択肢、Enter: 確定）
    function keyHandler(e) {
      const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3 };
      if (!Store.quiz.isAnswered && keyMap[e.key] !== undefined) {
        const btn = document.querySelector(`.choice[data-index="${keyMap[e.key]}"]`);
        if (btn) btn.click();
      }
      if (e.key === 'Enter') {
        const confirmBtn = document.getElementById('confirm-btn');
        if (confirmBtn && !confirmBtn.disabled) confirmBtn.click();
        else if (Store.quiz.isAnswered) {
          const nextBtn = document.getElementById('next-btn');
          if (nextBtn) nextBtn.click();
        }
      }
    }
    document.removeEventListener('keydown', window._quizKeyHandler);
    window._quizKeyHandler = keyHandler;
    document.addEventListener('keydown', keyHandler);

    // ブックマーク
    const bookmarkBtn = document.getElementById('bookmark-btn');
    if (bookmarkBtn) {
      const prog = Store.getProgress(question.id);
      if (prog.bookmarked) { bookmarkBtn.textContent = '★'; bookmarkBtn.classList.add('bookmarked'); }
      bookmarkBtn.addEventListener('click', () => {
        const bm = Store.toggleBookmark(question.id);
        bookmarkBtn.textContent = bm ? '★' : '☆';
        bookmarkBtn.classList.toggle('bookmarked', bm);
        showToast(bm ? '★ ブックマーク済み' : 'ブックマークを解除しました');
      });
    }
  }

  // ─── 回答確定・解説表示 ───────────────────────────── //
  function confirmAnswer(question) {
    const selected  = Store.quiz.selectedChoice;
    const isCorrect = selected === question.answer;

    Store.quiz.isAnswered = true;
    Store.recordAnswer(question.id, selected, isCorrect);
    Store.quiz.answers.push({ questionId: question.id, selected, correct: isCorrect });

    // 間隔反復データを更新（正解=5、不正解=1）
    Store.updateSR(question.id, isCorrect ? 5 : 1);

    // 選択肢の色付け
    document.querySelectorAll('.choice').forEach(btn => {
      const idx = parseInt(btn.dataset.index);
      btn.classList.add('answered');
      if (idx === question.answer)  btn.classList.add('correct');
      if (idx === selected && !isCorrect) btn.classList.add('wrong');
    });

    // 解説表示
    const expArea = document.getElementById('explanation-area');
    if (expArea) {
      // 同カテゴリの関連問題（まだ未解答または低正答率）
      const related = QUESTIONS_DATA
        .filter(q => q.category === question.category && q.id !== question.id)
        .map(q => {
          const p = Store.getProgress(q.id);
          const rate = p.attempts > 0 ? p.correct / p.attempts : -1;
          return { q, rate };
        })
        .sort((a, b) => a.rate - b.rate) // 低正答率・未解答を優先
        .slice(0, 3);

      const tagsHtml = (question.tags || []).map(t =>
        `<span class="badge badge-neutral" style="font-size:.7rem;">${t}</span>`
      ).join(' ');

      const relatedHtml = related.length > 0 ? `
        <div class="explanation__related">
          <div style="font-size:.8rem;font-weight:700;color:var(--color-text-muted);margin-bottom:8px;">📎 同分野の関連問題</div>
          ${related.map(({ q, rate }) => {
            const rateStr = rate < 0 ? '未解答' : Math.round(rate * 100) + '%';
            return `
              <div class="related-item" data-qid="${q.id}" style="cursor:pointer;">
                <span class="related-item__text">${q.question.slice(0, 45)}…</span>
                <span class="badge ${rate < 0 ? 'badge-neutral' : rate < 0.5 ? 'badge-error' : 'badge-success'}" style="font-size:.65rem;white-space:nowrap;">${rateStr}</span>
              </div>`;
          }).join('')}
        </div>` : '';

      const existingMemo = Store.getMemo(question.id);
      expArea.innerHTML = `
        <div class="explanation explanation--${isCorrect ? 'correct' : 'wrong'}">
          <div class="explanation__result">
            <span>${isCorrect ? '✅ 正解！' : '❌ 不正解'}</span>
            ${!isCorrect ? `<span style="font-size:.875rem;font-weight:400;color:var(--color-text);">正解：<strong>${['ア','イ','ウ','エ'][question.answer]}</strong></span>` : ''}
          </div>
          <div style="margin-bottom:8px;">${tagsHtml}</div>
          <p class="explanation__text">${question.explanation}</p>
          ${relatedHtml}
          <div class="memo-area">
            <div class="memo-area__label">📝 メモ</div>
            <textarea class="memo-textarea" id="memo-textarea" placeholder="この問題についてのメモを入力…" rows="3">${existingMemo}</textarea>
            <div class="memo-actions">
              <button class="btn btn-secondary btn-sm" id="memo-save-btn">保存</button>
              ${existingMemo ? `<button class="btn btn-outline btn-sm" id="memo-clear-btn">削除</button>` : ''}
            </div>
          </div>
        </div>
      `;

      // 関連問題クリックでクイズセットアップへ（カテゴリ絞り込み）
      expArea.querySelectorAll('.related-item').forEach(el => {
        el.addEventListener('click', () => {
          Router.navigate('/quiz', { category: question.category });
        });
      });

      // メモ保存
      const memoSave = document.getElementById('memo-save-btn');
      if (memoSave) {
        memoSave.addEventListener('click', () => {
          const text = document.getElementById('memo-textarea').value;
          Store.setMemo(question.id, text);
          showToast(text.trim() ? '📝 メモを保存しました' : 'メモを削除しました', 'success');
        });
      }
      const memoClear = document.getElementById('memo-clear-btn');
      if (memoClear) {
        memoClear.addEventListener('click', () => {
          document.getElementById('memo-textarea').value = '';
          Store.setMemo(question.id, '');
          showToast('メモを削除しました');
        });
      }
    }

    // ボタン切替
    const confirmBtn = document.getElementById('confirm-btn');
    if (confirmBtn) {
      confirmBtn.id = 'next-btn';
      const isLast = Store.quiz.currentIndex >= Store.quiz.questions.length - 1;
      confirmBtn.textContent = isLast ? '結果を見る →' : '次の問題へ →';
      confirmBtn.disabled = false;
      confirmBtn.onclick = () => {
        document.removeEventListener('keydown', window._quizKeyHandler);
        if (isLast) { clearInterval(Store.quiz.timerInterval); endQuiz(); }
        else {
          Store.quiz.currentIndex++;
          Store.quiz.isAnswered = false;
          Store.quiz.selectedChoice = null;
          renderQuestion();
        }
      };
    }
    const skipBtn = document.getElementById('skip-btn');
    if (skipBtn) skipBtn.style.display = 'none';
  }

  // ─── クイズ終了 ───────────────────────────────────── //
  function endQuiz() {
    const q        = Store.quiz;
    const durationSec = Math.round((Date.now() - q.startTime) / 1000);
    const correct  = q.answers.filter(a => a.correct).length;
    const total    = q.answers.length;

    Store.saveSession({
      mode: q.mode, category: q.category,
      total, correct, durationSec,
      questionIds: q.questions.map(qst => qst.id),
    });

    // バッジチェック
    const newBadges = Store.checkBadges();
    newBadges.forEach(b => {
      setTimeout(() => showToast(`🏆 実績解除：${b.icon} ${b.name}`, 'success'), 500);
    });

    Router.navigate('/result');
  }

  // ─── 結果ページ ───────────────────────────────────── //
  function renderResult() {
    const q = Store.quiz;
    if (!q.answers || q.answers.length === 0) {
      mount(`
        <div class="page fade-in">
          <div class="container" style="max-width:640px;">
            <div class="empty-state">
              <div class="empty-state__icon">📋</div>
              <h2 class="empty-state__title">セッションが見つかりません</h2>
              <p class="empty-state__text">まず問題を解いてから結果を確認しましょう。</p>
              <a href="#/quiz" class="btn btn-primary">演習を始める</a>
            </div>
          </div>
        </div>
      `);
      return;
    }

    const correct = q.answers.filter(a => a.correct).length;
    const total   = q.answers.length;
    const pct     = Math.round(correct / total * 100);
    const duration = Math.round((Date.now() - q.startTime) / 1000);
    const timeLimit = q.timeLimit || 0;
    const avgSec  = total > 0 ? Math.round(duration / total) : 0;
    const timeUsedPct = timeLimit > 0 ? Math.min(100, Math.round(duration / timeLimit * 100)) : 0;
    const timeRemain = timeLimit > 0 ? Math.max(0, timeLimit - duration) : 0;

    let grade = '', gradeStyle = '';
    if (pct >= 80)      { grade = 'S'; gradeStyle = 'background:var(--color-success);color:#fff;'; }
    else if (pct >= 60) { grade = 'A'; gradeStyle = 'background:var(--color-primary);color:#fff;'; }
    else if (pct >= 40) { grade = 'B'; gradeStyle = 'background:var(--color-warning);color:#fff;'; }
    else                { grade = 'C'; gradeStyle = 'background:var(--color-error);color:#fff;'; }

    // 本番模擬試験：合否判定（AP午前 60% = 48点以上で合格）
    const isMockExam = q.mode === 'mock_exam';
    const passThreshold = 60; // %
    const passed = pct >= passThreshold;
    const mockExamBanner = isMockExam ? `
      <div class="mock-exam-verdict ${passed ? 'mock-exam-verdict--pass' : 'mock-exam-verdict--fail'}">
        <div class="mock-exam-verdict__icon">${passed ? '🎉' : '📖'}</div>
        <div class="mock-exam-verdict__text">
          <div class="mock-exam-verdict__title">${passed ? '合格圏内！' : '不合格（要復習）'}</div>
          <div class="mock-exam-verdict__sub">
            AP午前試験基準：${total}問中${Math.ceil(total * 0.6)}問（60%）以上正解で合格。
            あなたの結果：${correct}問正解（${pct}%）
          </div>
        </div>
      </div>` : '';

    // 分野別集計
    const catMap = {};
    q.answers.forEach(a => {
      const question = QUESTIONS_DATA.find(qst => qst.id === a.questionId);
      if (!question) return;
      if (!catMap[question.category]) catMap[question.category] = { name: question.categoryName, correct: 0, total: 0 };
      catMap[question.category].total++;
      if (a.correct) catMap[question.category].correct++;
    });

    const catBreakdown = Object.entries(catMap).map(([id, v]) => {
      const acc = Math.round(v.correct / v.total * 100);
      const color = categoryColor(id);
      return `
        <div style="margin-bottom:12px;">
          <div style="display:flex;align-items:center;justify-content:space-between;font-size:.875rem;margin-bottom:4px;">
            <span style="color:var(--color-text);">${v.name}</span>
            <span style="font-weight:700;color:${color};">${acc}% (${v.correct}/${v.total})</span>
          </div>
          <div class="progress">
            <div class="progress-bar" style="width:${acc}%;background:${color};"></div>
          </div>
        </div>`;
    }).join('');

    // 難易度別集計
    const diffMap = { 1:{name:'基本',correct:0,total:0}, 2:{name:'標準',correct:0,total:0},
                      3:{name:'応用',correct:0,total:0}, 4:{name:'難',correct:0,total:0}, 5:{name:'超難',correct:0,total:0} };
    const diffColors = { 1:'#51cf66', 2:'#339af0', 3:'#f59f00', 4:'#f76707', 5:'#e03131' };
    q.answers.forEach(a => {
      const question = QUESTIONS_DATA.find(qst => qst.id === a.questionId);
      if (!question) return;
      const d = question.difficulty;
      diffMap[d].total++;
      if (a.correct) diffMap[d].correct++;
    });
    const diffBreakdown = Object.entries(diffMap)
      .filter(([, v]) => v.total > 0)
      .map(([d, v]) => {
        const acc = Math.round(v.correct / v.total * 100);
        return `
          <div class="result-diff-row">
            <span class="result-diff-label" style="color:${diffColors[d]};">${v.name}</span>
            <div class="result-diff-bar-wrap">
              <div class="result-diff-bar" style="width:${acc}%;background:${diffColors[d]};"></div>
            </div>
            <span class="result-diff-pct">${acc}%<span style="font-weight:400;color:var(--color-text-muted);font-size:.75rem;"> (${v.correct}/${v.total})</span></span>
          </div>`;
      }).join('');

    // 時間分析
    const timeAnalysisHtml = timeLimit > 0 ? `
      <div class="card" style="margin-bottom:24px;">
        <h2 class="card-title" style="margin-bottom:20px;">⏱ 時間分析</h2>
        <div class="result-time-grid">
          <div class="result-time-item">
            <div class="result-time-value">${fmtTime(duration)}</div>
            <div class="result-time-label">消費時間</div>
          </div>
          <div class="result-time-item">
            <div class="result-time-value">${fmtTime(timeLimit)}</div>
            <div class="result-time-label">制限時間</div>
          </div>
          <div class="result-time-item">
            <div class="result-time-value" style="color:${timeRemain > 0 ? 'var(--color-success)' : 'var(--color-error)'};">${fmtTime(timeRemain)}</div>
            <div class="result-time-label">残り時間</div>
          </div>
          <div class="result-time-item">
            <div class="result-time-value">${avgSec}秒</div>
            <div class="result-time-label">平均/問</div>
          </div>
        </div>
        <div style="margin-top:16px;">
          <div style="display:flex;align-items:center;justify-content:space-between;font-size:.8rem;margin-bottom:6px;color:var(--color-text-muted);">
            <span>時間消費率</span><span>${timeUsedPct}%</span>
          </div>
          <div class="progress" style="height:10px;">
            <div class="progress-bar" style="width:${timeUsedPct}%;background:${timeUsedPct >= 90 ? 'var(--color-error)' : timeUsedPct >= 70 ? 'var(--color-warning)' : 'var(--color-success)'};transition:width .6s ease;"></div>
          </div>
        </div>
      </div>` : '';

    // 間違えた問題一覧
    const wrongAnswers = q.answers
      .filter(a => !a.correct)
      .map(a => {
        const question = QUESTIONS_DATA.find(qst => qst.id === a.questionId);
        if (!question) return '';
        return `
          <div class="review-item review-item--wrong">
            <span class="review-item__icon">❌</span>
            <div class="review-item__text">
              <div style="font-weight:600;margin-bottom:2px;">${question.question.slice(0, 60)}${question.question.length > 60 ? '…' : ''}</div>
              <div style="font-size:.8rem;color:var(--color-text-muted);">
                正解：${['ア','イ','ウ','エ'][question.answer]} /
                あなたの回答：${a.selected >= 0 ? ['ア','イ','ウ','エ'][a.selected] : 'スキップ'}
              </div>
            </div>
          </div>`;
      }).join('');

    mount(`
      <div class="page fade-in">
        <div class="container" style="max-width:720px;">
          <h1 class="page-title" style="text-align:center; margin-bottom:32px;">${isMockExam ? '🏆 本番模擬試験 結果' : '演習結果'}</h1>

          ${mockExamBanner}

          <!-- スコア -->
          <div class="result-hero">
            <div class="result-score">${pct}<span style="font-size:2rem;">%</span></div>
            <div class="result-label">${correct} 問正解 / ${total} 問中</div>
            <span class="result-grade" style="${gradeStyle}">グレード ${grade}</span>
            <div class="stats-row">
              <div class="stat-item">
                <div class="stat-value">${correct}</div>
                <div class="stat-label">正解</div>
              </div>
              <div class="stat-item">
                <div class="stat-value" style="color:var(--color-error);">${total - correct}</div>
                <div class="stat-label">不正解</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">${fmtTime(duration)}</div>
                <div class="stat-label">所要時間</div>
              </div>
            </div>
          </div>

          <!-- 分野別 -->
          ${Object.keys(catMap).length > 0 ? `
            <div class="card" style="margin-bottom:24px;">
              <h2 class="card-title" style="margin-bottom:20px;">📊 分野別正答率</h2>
              ${catBreakdown}
            </div>` : ''}

          <!-- 難易度別 -->
          ${diffBreakdown ? `
            <div class="card" style="margin-bottom:24px;">
              <h2 class="card-title" style="margin-bottom:20px;">🎯 難易度別正答率</h2>
              ${diffBreakdown}
            </div>` : ''}

          <!-- 時間分析 -->
          ${timeAnalysisHtml}

          <!-- 間違えた問題 -->
          ${wrongAnswers ? `
            <div class="card" style="margin-bottom:24px;">
              <h2 class="card-title" style="margin-bottom:16px;">❌ 間違えた問題</h2>
              <div class="review-list">${wrongAnswers}</div>
            </div>` : `
            <div class="card" style="margin-bottom:24px;text-align:center;padding:32px;">
              <div style="font-size:2rem;margin-bottom:8px;">🎉</div>
              <h2 class="card-title" style="text-align:center;">全問正解！素晴らしい！</h2>
            </div>`}

          <!-- アクション -->
          <div style="display:flex; gap:12px; flex-wrap:wrap; justify-content:center;">
            <a href="#/quiz" class="btn btn-primary btn-lg">もう一度演習する</a>
            <a href="#/dashboard" class="btn btn-secondary btn-lg">📊 ダッシュボード</a>
            <a href="#/subjects" class="btn btn-outline btn-lg">📚 分野別に学ぶ</a>
          </div>

        </div>
      </div>
    `);
  }

  // ─── 学習ヒートマップ生成 ─────────────────────────── //
  function buildHeatmap(sessions) {
    const countMap = {};
    sessions.forEach(s => {
      const day = new Date(s.date).toDateString();
      countMap[day] = (countMap[day] || 0) + (s.total || 0);
    });
    const today = new Date(); today.setHours(0,0,0,0);
    const todayStr = today.toDateString();
    // Start on Sunday 12 weeks before the current week's Sunday
    const start = new Date(today);
    start.setDate(today.getDate() - today.getDay() - 12 * 7);
    const cells = [];
    for (let week = 0; week < 13; week++) {
      for (let day = 0; day < 7; day++) {
        const d = new Date(start);
        d.setDate(start.getDate() + week * 7 + day);
        if (d > today) { cells.push('<div class="heatmap-cell heatmap-cell--future"></div>'); continue; }
        const key = d.toDateString();
        const count = countMap[key] || 0;
        const lv = count === 0 ? 0 : count < 5 ? 1 : count < 15 ? 2 : count < 30 ? 3 : 4;
        const isT = key === todayStr;
        const label = `${d.getMonth()+1}/${d.getDate()} ${count > 0 ? count+'問' : '記録なし'}`;
        cells.push(`<div class="heatmap-cell heatmap-cell--${lv}${isT?' heatmap-cell--today':''}" title="${label}"></div>`);
      }
    }
    const dayLabels = ['日','月','火','水','木','金','土'].map(d =>
      `<div class="heatmap-day-label">${d}</div>`).join('');
    return `
      <div class="heatmap-wrap">
        <div class="heatmap-day-labels">${dayLabels}</div>
        <div class="heatmap">${cells.join('')}</div>
      </div>
      <div class="heatmap-legend">
        少ない
        <div class="heatmap-legend-cell heatmap-cell--0"></div>
        <div class="heatmap-legend-cell heatmap-cell--1"></div>
        <div class="heatmap-legend-cell heatmap-cell--2"></div>
        <div class="heatmap-legend-cell heatmap-cell--3"></div>
        <div class="heatmap-legend-cell heatmap-cell--4"></div>
        多い
      </div>`;
  }

  // ─── SVG レーダーチャート ─────────────────────────── //
  function buildRadarChart(catStats) {
    const size = 320; const cx = size / 2; const cy = size / 2; const r = 120;
    const N = catStats.length;
    if (N < 3) return '';

    function pt(i, pct) {
      const angle = -Math.PI / 2 + (2 * Math.PI * i) / N;
      return {
        x: cx + r * (pct / 100) * Math.cos(angle),
        y: cy + r * (pct / 100) * Math.sin(angle),
      };
    }

    // 背景グリッド（同心多角形）
    const gridLevels = [20, 40, 60, 80, 100];
    const gridLines = gridLevels.map(lv => {
      const pts = Array.from({ length: N }, (_, i) => {
        const p = pt(i, lv);
        return `${p.x},${p.y}`;
      }).join(' ');
      return `<polygon points="${pts}" fill="none" stroke="var(--color-border)" stroke-width="${lv === 60 ? 1.5 : 0.8}" ${lv === 60 ? 'stroke-dasharray="4,3"' : ''}/>`;
    }).join('');

    // パーセント数字ラベル（右軸上）
    const gridLabels = gridLevels.map(lv => {
      const p = pt(0, lv);
      return `<text x="${p.x + 4}" y="${p.y - 3}" font-size="8" fill="var(--color-text-muted)">${lv}%</text>`;
    }).join('');

    // 軸線
    const axes = Array.from({ length: N }, (_, i) => {
      const p = pt(i, 100);
      return `<line x1="${cx}" y1="${cy}" x2="${p.x}" y2="${p.y}" stroke="var(--color-border)" stroke-width="1"/>`;
    }).join('');

    // データポリゴン
    const dataPoints = catStats.map((c, i) => {
      const acc = c.attempts > 0 ? c.accuracy : 0;
      const p = pt(i, acc);
      return `${p.x},${p.y}`;
    }).join(' ');

    // ドット
    const dots = catStats.map((c, i) => {
      const acc = c.attempts > 0 ? c.accuracy : 0;
      const p = pt(i, acc);
      const color = acc >= 70 ? 'var(--color-success)' : acc >= 50 ? 'var(--color-warning)' : 'var(--color-error)';
      return `<circle cx="${p.x}" cy="${p.y}" r="4" fill="${color}" stroke="var(--color-surface)" stroke-width="1.5"/>`;
    }).join('');

    // ラベル
    const labels = catStats.map((c, i) => {
      const angle = -Math.PI / 2 + (2 * Math.PI * i) / N;
      const lx = cx + (r + 22) * Math.cos(angle);
      const ly = cy + (r + 22) * Math.sin(angle);
      const anchor = Math.abs(lx - cx) < 5 ? 'middle' : lx < cx ? 'end' : 'start';
      const short = c.name.length > 6 ? c.name.slice(0, 6) : c.name;
      const accLabel = c.attempts > 0 ? `(${c.accuracy}%)` : '';
      return `
        <text x="${lx}" y="${ly - 4}" text-anchor="${anchor}" font-size="9.5" font-weight="600" fill="var(--color-text)">${short}</text>
        <text x="${lx}" y="${ly + 8}" text-anchor="${anchor}" font-size="8.5" fill="var(--color-text-muted)">${accLabel}</text>
      `;
    }).join('');

    const hasData = catStats.some(c => c.attempts > 0);
    return `
      <svg viewBox="0 0 ${size} ${size}" style="width:100%;max-width:${size}px;display:block;margin:0 auto;">
        ${gridLines}${gridLabels}${axes}
        ${hasData ? `<polygon points="${dataPoints}" fill="rgba(59,91,219,.18)" stroke="var(--color-primary)" stroke-width="2" stroke-linejoin="round"/>` : ''}
        ${hasData ? dots : ''}
        ${labels}
        ${!hasData ? `<text x="${cx}" y="${cy+6}" text-anchor="middle" font-size="12" fill="var(--color-text-muted)">演習後に表示されます</text>` : ''}
      </svg>
    `;
  }

  // ─── SVG リングチャート ──────────────────────────────
  function buildRingChart(pct, label, size, color) {
    size  = size  || 110;
    color = color || 'var(--color-primary)';
    const r    = (size - 18) / 2;
    const cx   = size / 2;
    const cy   = size / 2;
    const circ = 2 * Math.PI * r;
    const dash = ((pct / 100) * circ).toFixed(1);
    const gap  = (circ - dash).toFixed(1);
    return `
      <svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" style="display:block;margin:0 auto;">
        <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--color-surface-2)" stroke-width="12"/>
        <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="12"
          stroke-dasharray="${dash} ${gap}" stroke-linecap="round"
          transform="rotate(-90 ${cx} ${cy})" style="transition:stroke-dasharray .6s ease;"/>
        <text x="${cx}" y="${cy + 6}" text-anchor="middle" font-size="18" font-weight="700" fill="var(--color-text)">${pct}%</text>
      </svg>
      <div class="ring-chart-label">${label}</div>`;
  }

  // ─── 試験日カウントダウンウィジェット ────────────────
  function buildExamCountdown(stats) {
    const examDate  = Store.getSetting('examDate');
    const dailyGoal = Store.getSetting('dailyGoal') || 20;
    const todayDone = stats.todayTotal;
    const goalPct   = Math.min(100, Math.round(todayDone / dailyGoal * 100));
    const covPct    = Math.min(100, Math.round(stats.totalAttempted / QUESTIONS_DATA.length * 100));

    let cdInner = '';
    if (examDate) {
      const exam = new Date(examDate + 'T00:00:00');
      const diffDays = Math.max(0, Math.ceil((exam - new Date()) / 86400000));
      const urgColor = diffDays <= 30 ? 'var(--color-error)' : diffDays <= 90 ? 'var(--color-warning)' : 'var(--color-success)';
      cdInner = `
        <div class="cd-days" style="color:${urgColor};">${diffDays}</div>
        <div class="cd-days-label">日後に試験</div>
        <div class="cd-date">${exam.getFullYear()}/${exam.getMonth()+1}/${exam.getDate()}</div>`;
    } else {
      cdInner = `<div class="cd-nodate">試験日を設定すると<br>カウントダウンが表示されます</div>`;
    }

    return `
      <div class="countdown-widget">
        <div class="cd-left">
          <h3 class="cd-title">📅 試験日まで</h3>
          <div class="cd-inner">${cdInner}</div>
          <div class="cd-setrow">
            <input type="date" id="exam-date-input" class="form-control"
              style="max-width:160px;font-size:.85rem;"
              value="${examDate || ''}"
              min="${new Date().toISOString().slice(0,10)}">
            <button class="btn btn-primary btn-sm" id="exam-date-save">設定</button>
          </div>
          <div class="cd-goal-row">
            <label style="font-size:.8rem;color:var(--color-text-muted);">1日目標</label>
            <input type="number" id="daily-goal-input" class="form-control"
              style="width:72px;font-size:.85rem;" value="${dailyGoal}" min="1" max="100">
            <span style="font-size:.8rem;color:var(--color-text-muted);">問</span>
            <button class="btn btn-secondary btn-sm" id="daily-goal-save">更新</button>
          </div>
        </div>
        <div class="cd-rings">
          <div class="ring-wrap">
            ${buildRingChart(goalPct, '今日の目標達成率', 110, 'var(--color-success)')}
            <div class="ring-sub">${todayDone} / ${dailyGoal} 問</div>
          </div>
          <div class="ring-wrap">
            ${buildRingChart(covPct, '問題攻略率', 110, 'var(--color-primary)')}
            <div class="ring-sub">${stats.totalAttempted} / ${QUESTIONS_DATA.length} 問</div>
          </div>
          <div class="ring-wrap">
            ${buildRingChart(stats.accuracy, '全体正答率', 110, stats.accuracy >= 60 ? 'var(--color-success)' : 'var(--color-error)')}
            <div class="ring-sub">${stats.totalAttempts} 問回答</div>
          </div>
        </div>
      </div>`;
  }

  // ─── ダッシュボード ────────────────────────────────── //
  function renderDashboard() {
    const stats    = Store.getOverallStats();
    const catStats = Store.getCategoryStats();
    const badges   = Store.getEarnedBadges();
    const recent   = Store.getRecentSessions(7);

    const statCards = [
      { icon: '✏️', value: stats.totalAttempts, label: '総回答数' },
      { icon: '✅', value: stats.accuracy + '%', label: '全体正答率' },
      { icon: '🔥', value: stats.streak + '日', label: '連続学習' },
      { icon: '📅', value: stats.todayTotal, label: '今日の回答数' },
      { icon: '🔄', value: Store.getDueQuestions(999).length, label: '今日の復習数' },
    ].map(s => `
      <div class="stat-card">
        <div class="stat-card__icon">${s.icon}</div>
        <div class="stat-card__value">${s.value}</div>
        <div class="stat-card__label">${s.label}</div>
      </div>
    `).join('');

    // 分野別正答率バーチャート (SVG)
    const chartWidth = 600; const barH = 28; const gap = 10; const labelW = 160; const maxBarW = chartWidth - labelW - 60;
    const chartHeight = catStats.length * (barH + gap);
    const bars = catStats.map((c, i) => {
      const y = i * (barH + gap);
      const w = c.attempts > 0 ? Math.round(c.accuracy / 100 * maxBarW) : 0;
      const color = categoryColor(c.id);
      return `
        <text class="bar-chart-label" x="${labelW - 8}" y="${y + barH / 2 + 4}" text-anchor="end">${c.name}</text>
        <rect x="${labelW}" y="${y}" width="${maxBarW}" height="${barH}" fill="var(--color-surface-2)" rx="4"/>
        <rect x="${labelW}" y="${y}" width="${w}" height="${barH}" fill="${color}" rx="4"/>
        <text class="bar-chart-value" x="${labelW + w + 6}" y="${y + barH / 2 + 4}">${c.attempts > 0 ? c.accuracy + '%' : '未回答'}</text>
      `;
    }).join('');

    const svgChart = catStats.some(c => c.attempts > 0)
      ? `<svg class="chart-svg" viewBox="0 0 ${chartWidth} ${chartHeight}" style="max-height:300px;">${bars}</svg>`
      : `<p style="color:var(--color-text-muted);text-align:center;padding:20px 0;">まだ演習履歴がありません</p>`;

    // 正答率推移折れ線グラフ（直近10セッション）
    function buildTrendChart(sessions) {
      const pts = sessions.slice(0, 10).reverse();
      if (pts.length < 2) return '<p style="color:var(--color-text-muted);text-align:center;padding:20px 0;">2 回以上演習すると表示されます</p>';
      const W = 400; const H = 120; const padL = 36; const padR = 16; const padT = 12; const padB = 28;
      const plotW = W - padL - padR; const plotH = H - padT - padB;
      const accs = pts.map(s => Math.round(s.correct / s.total * 100));
      const xStep = plotW / (pts.length - 1);
      const yScale = v => padT + plotH - (v / 100 * plotH);
      // 60点ライン
      const y60 = yScale(60);
      // 折れ線
      const polyline = pts.map((_, i) => `${padL + i * xStep},${yScale(accs[i])}`).join(' ');
      // 点
      const dots = pts.map((s, i) => {
        const x = padL + i * xStep; const y = yScale(accs[i]);
        const color = accs[i] >= 60 ? '#2F9E44' : '#E03131';
        return `<circle cx="${x}" cy="${y}" r="4" fill="${color}" stroke="var(--color-surface)" stroke-width="2"/>`;
      }).join('');
      // X軸ラベル
      const xLabels = pts.map((s, i) => {
        const d = new Date(s.date);
        return `<text x="${padL + i * xStep}" y="${H - 6}" text-anchor="middle" class="bar-chart-label" font-size="9">${d.getMonth()+1}/${d.getDate()}</text>`;
      }).join('');
      // Y軸目盛り
      const yLabels = [0,20,40,60,80,100].map(v => `
        <line x1="${padL}" y1="${yScale(v)}" x2="${padL + plotW}" y2="${yScale(v)}" stroke="var(--color-border-light)" stroke-width="1"/>
        <text x="${padL - 4}" y="${yScale(v) + 4}" text-anchor="end" class="bar-chart-label" font-size="9">${v}</text>
      `).join('');
      return `<svg viewBox="0 0 ${W} ${H}" style="width:100%;max-height:140px;">
        ${yLabels}
        <line x1="${padL}" y1="${y60}" x2="${padL+plotW}" y2="${y60}" stroke="#E03131" stroke-width="1" stroke-dasharray="4,3" opacity=".5"/>
        <text x="${padL+plotW+2}" y="${y60+3}" font-size="9" fill="#E03131" opacity=".7">60%</text>
        <polyline points="${polyline}" fill="none" stroke="var(--color-primary)" stroke-width="2.5" stroke-linejoin="round"/>
        ${dots}${xLabels}
      </svg>`;
    }
    const trendChart = buildTrendChart(recent);

    // 最近のセッション
    const recentHtml = recent.length > 0
      ? recent.map(s => {
          const d = new Date(s.date);
          const dateStr = `${d.getMonth()+1}/${d.getDate()} ${d.getHours()}:${String(d.getMinutes()).padStart(2,'0')}`;
          const acc = Math.round(s.correct / s.total * 100);
          return `
            <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid var(--color-border-light);">
              <div>
                <div style="font-size:.875rem;font-weight:600;">${s.total} 問 (${s.mode === 'exam' ? '模擬試験' : s.mode === 'category' ? '分野別' : s.mode === 'weak' ? '弱点集中' : 'ランダム'})</div>
                <div style="font-size:.8rem;color:var(--color-text-muted);">${dateStr} · ${fmtTime(s.durationSec || 0)}</div>
              </div>
              <span class="badge ${acc >= 60 ? 'badge-success' : 'badge-error'}">${acc}%</span>
            </div>`;
        }).join('')
      : '<p style="color:var(--color-text-muted);padding:20px 0;">まだ演習履歴がありません</p>';

    mount(`
      <div class="page fade-in">
        <div class="container">
          <div class="page-header">
            <h1 class="page-title">📊 学習ダッシュボード</h1>
            <p class="page-subtitle">あなたの学習進捗を確認しましょう</p>
          </div>

          <!-- 試験日カウントダウン + 進捗リング -->
          ${buildExamCountdown(stats)}

          <!-- 統計カード -->
          <div class="stats-grid">${statCards}</div>

          <div class="grid-2" style="gap:24px;">
            <!-- 分野別正答率チャート + レーダー -->
            <div class="chart-wrap">
              <h2 class="chart-title">📊 分野別正答率</h2>
              ${svgChart}
              <div style="margin-top:24px;">
                <h2 class="chart-title" style="margin-bottom:12px;">🕸 弱点レーダーチャート</h2>
                ${buildRadarChart(catStats)}
              </div>
            </div>

            <!-- 正答率推移 -->
            <div class="chart-wrap">
              <h2 class="chart-title" style="margin-bottom:12px;">📈 正答率の推移（直近 10 回）</h2>
              ${trendChart}
              <div style="margin-top:12px;">
                <h3 style="font-size:.875rem;font-weight:700;margin-bottom:8px;">🕐 最近の演習</h3>
                ${recentHtml}
              </div>
              ${recent.length > 0 ? `<a href="#/quiz" class="btn btn-primary btn-full" style="margin-top:16px;">今日も演習する</a>` : `
                <a href="#/quiz" class="btn btn-primary btn-full" style="margin-top:16px;">演習を始める →</a>`}
            </div>
          </div>

          <!-- 弱点分析 -->
          ${renderWeakList()}

          <!-- 学習カレンダー -->
          <div class="chart-wrap heatmap-section" style="margin-top:24px;">
            <h2 class="chart-title" style="margin-bottom:12px;">📆 学習カレンダー（直近 3 ヶ月）</h2>
            ${buildHeatmap(Store.getRecentSessions(500))}
          </div>

          <!-- 実績バッジ -->
          <div class="chart-wrap" style="margin-top:24px;">
            <h2 class="chart-title" style="margin-bottom:16px;">🏆 実績バッジ</h2>
            <div class="badge-grid">
              ${badges.map(b => `
                <div class="badge-item ${b.earned ? 'badge-item--earned' : 'badge-item--locked'}">
                  <div class="badge-item__icon">${b.earned ? b.icon : '🔒'}</div>
                  <div class="badge-item__name">${b.name}</div>
                  <div class="badge-item__desc">${b.desc}</div>
                </div>
              `).join('')}
            </div>
            <p style="font-size:.75rem;color:var(--color-text-muted);margin-top:12px;text-align:center;">
              ${badges.filter(b => b.earned).length} / ${badges.length} 個獲得
            </p>
          </div>

          <!-- エクスポート / インポート / リセット / レポート -->
          <div style="text-align:center;margin-top:40px;padding-top:24px;border-top:1px solid var(--color-border);">
            <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-bottom:12px;">
              <a href="#/report" class="btn btn-secondary btn-sm">🖨 学習レポートを印刷</a>
              <button class="btn btn-secondary btn-sm" id="export-btn">⬇️ データをエクスポート</button>
              <label class="btn btn-secondary btn-sm" style="cursor:pointer;">
                ⬆️ データをインポート
                <input type="file" id="import-file" accept=".json" style="display:none;">
              </label>
            </div>
            <button class="btn btn-secondary btn-sm" id="reset-btn" style="color:var(--color-error);">
              🗑 学習データをリセット
            </button>
          </div>
        </div>
      </div>
    `);

    document.getElementById('exam-date-save').addEventListener('click', () => {
      const v = document.getElementById('exam-date-input').value;
      if (v) { Store.setSetting('examDate', v); showToast('試験日を設定しました', 'success'); renderDashboard(); }
      else   { Store.setSetting('examDate', null); showToast('試験日をクリアしました'); renderDashboard(); }
    });

    document.getElementById('daily-goal-save').addEventListener('click', () => {
      const v = parseInt(document.getElementById('daily-goal-input').value, 10);
      if (v > 0) { Store.setSetting('dailyGoal', v); showToast('1日目標を更新しました', 'success'); renderDashboard(); }
    });

    document.getElementById('export-btn').addEventListener('click', () => {
      Store.exportData();
      showToast('データをエクスポートしました', 'success');
    });

    document.getElementById('import-file').addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        const ok = Store.importData(ev.target.result);
        if (ok) {
          showToast('データをインポートしました', 'success');
          renderDashboard();
        } else {
          showToast('インポートに失敗しました（ファイル形式が無効）', 'error');
        }
        e.target.value = '';
      };
      reader.readAsText(file);
    });

    document.getElementById('reset-btn').addEventListener('click', () => {
      if (confirm('学習データをすべてリセットしますか？この操作は取り消せません。')) {
        Store.resetAll();
        showToast('学習データをリセットしました', 'success');
        renderDashboard();
      }
    });
  }

  function renderWeakList() {
    const weak = Store.getWeakQuestions(5);
    if (weak.length === 0) return '';
    const items = weak.map(q => `
      <div class="review-item review-item--wrong" style="cursor:pointer;" onclick="location.hash='#/subjects/${q.category}'">
        <span class="review-item__icon">⚠️</span>
        <div class="review-item__text">
          <div style="font-weight:600;margin-bottom:2px;">${q.question.slice(0,60)}${q.question.length>60?'…':''}</div>
          <div style="font-size:.8rem;color:var(--color-text-muted);">
            正答率 ${Math.round(q.correctRate * 100)}% (${q.attempts} 回回答)
            · ${q.categoryName}
          </div>
        </div>
        <a href="#/quiz?mode=category&category=${q.category}" class="btn btn-secondary btn-sm" onclick="event.stopPropagation()">復習</a>
      </div>
    `).join('');
    return `
      <div class="chart-wrap" style="margin-top:24px;">
        <h2 class="chart-title" style="margin-bottom:16px;">🎯 弱点問題</h2>
        <div class="review-list">${items}</div>
        <a href="#/quiz?mode=weak" class="btn btn-outline" style="margin-top:16px;width:100%;">弱点集中モードで演習する</a>
      </div>`;
  }

  // ─── 試験情報ページ ────────────────────────────────── //
  function renderExamInfo() {
    mount(`
      <div class="page fade-in">
        <div class="container">
          <div class="page-header">
            <h1 class="page-title">ℹ️ 試験情報</h1>
            <p class="page-subtitle">応用情報技術者試験（AP試験）の概要・日程・出題範囲</p>
          </div>

          <!-- 試験概要 -->
          <div class="exam-summary-grid">
            <div class="exam-summary-card">
              <h2 class="exam-summary-card__title">📋 試験概要</h2>
              <div class="info-row">
                <span class="info-row__label">主催</span>
                <span class="info-row__value">独立行政法人 情報処理推進機構（IPA）</span>
              </div>
              <div class="info-row">
                <span class="info-row__label">実施回数</span>
                <span class="info-row__value">年 2 回（春期：4 月 / 秋期：10 月）</span>
              </div>
              <div class="info-row">
                <span class="info-row__label">IPAスキルレベル</span>
                <span class="info-row__value">レベル 3（全 4 段階）</span>
              </div>
              <div class="info-row">
                <span class="info-row__label">受験料</span>
                <span class="info-row__value">7,500 円（税込）</span>
              </div>
              <div class="info-row">
                <span class="info-row__label">合格率（直近）</span>
                <span class="info-row__value">約 20〜25%</span>
              </div>
            </div>

            <div class="exam-summary-card">
              <h2 class="exam-summary-card__title">📅 試験スケジュール</h2>
              <div class="info-row">
                <span class="info-row__label">申込受付</span>
                <span class="info-row__value">試験の約 3 ヶ月前</span>
              </div>
              <div class="info-row">
                <span class="info-row__label">春期試験日</span>
                <span class="info-row__value">4 月 第 3 日曜日</span>
              </div>
              <div class="info-row">
                <span class="info-row__label">秋期試験日</span>
                <span class="info-row__value">10 月 第 3 日曜日</span>
              </div>
              <div class="info-row">
                <span class="info-row__label">合格発表</span>
                <span class="info-row__value">試験日の約 2 ヶ月後</span>
              </div>
              <div class="info-row" style="border:none;">
                <span class="info-row__label"></span>
                <span class="info-row__value">
                  <a href="https://www.ipa.go.jp/shiken/" target="_blank" rel="noopener" class="btn btn-primary btn-sm">IPA 公式サイト ↗</a>
                </span>
              </div>
            </div>
          </div>

          <!-- 午前・午後 詳細 -->
          <div class="exam-summary-grid">
            <div class="exam-summary-card">
              <h2 class="exam-summary-card__title">🌅 午前試験</h2>
              <div class="info-row">
                <span class="info-row__label">時間</span>
                <span class="info-row__value">9:30〜12:00（150 分）</span>
              </div>
              <div class="info-row">
                <span class="info-row__label">問題形式</span>
                <span class="info-row__value">四肢択一（80 問）</span>
              </div>
              <div class="info-row">
                <span class="info-row__label">合格基準</span>
                <span class="info-row__value">60 点以上（100 点満点換算）</span>
              </div>
              <div class="info-row">
                <span class="info-row__label">合格ライン</span>
                <span class="info-row__value">80 問中 48 問以上正解</span>
              </div>
              <div class="info-row" style="border:none;">
                <span class="info-row__label">注意</span>
                <span class="info-row__value" style="color:var(--color-error);">午前不合格 → 午後は採点されない</span>
              </div>
            </div>

            <div class="exam-summary-card">
              <h2 class="exam-summary-card__title">🌆 午後試験</h2>
              <div class="info-row">
                <span class="info-row__label">時間</span>
                <span class="info-row__value">13:00〜15:30（150 分）</span>
              </div>
              <div class="info-row">
                <span class="info-row__label">問題形式</span>
                <span class="info-row__value">記述式（11 問中 5 問選択）</span>
              </div>
              <div class="info-row">
                <span class="info-row__label">必須問題</span>
                <span class="info-row__value">情報セキュリティ（問 1 必須）</span>
              </div>
              <div class="info-row">
                <span class="info-row__label">合格基準</span>
                <span class="info-row__value">60 点以上（100 点満点換算）</span>
              </div>
              <div class="info-row" style="border:none;">
                <span class="info-row__label">配点</span>
                <span class="info-row__value">各問 20 点 × 5 問 ＝ 100 点</span>
              </div>
            </div>
          </div>

          <!-- 午前試験の出題分野 -->
          <div class="card" style="margin-bottom:24px;">
            <h2 class="card-title" style="margin-bottom:20px;">📊 午前試験 出題分野と配点</h2>
            <table class="content-table">
              <thead>
                <tr>
                  <th>大分類</th><th>中分類</th><th>出題数（目安）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td rowspan="4">テクノロジ系（約 50 問）</td><td>基礎理論（アルゴリズム・論理演算等）</td><td>約 10 問</td></tr>
                <tr><td>コンピュータシステム（CPU・OS・ハードウェア等）</td><td>約 10 問</td></tr>
                <tr><td>技術要素（ネットワーク・DB・セキュリティ等）</td><td>約 22 問</td></tr>
                <tr><td>開発技術（ソフトウェア開発・テスト等）</td><td>約 8 問</td></tr>
                <tr><td rowspan="2">マネジメント系（約 15 問）</td><td>プロジェクトマネジメント</td><td>約 7 問</td></tr>
                <tr><td>サービスマネジメント</td><td>約 8 問</td></tr>
                <tr><td rowspan="3">ストラテジ系（約 15 問）</td><td>システム戦略・経営戦略</td><td>約 10 問</td></tr>
                <tr><td>企業と法務・会計</td><td>約 5 問</td></tr>
                <tr><td><strong>合計</strong></td><td><strong>80 問</strong></td></tr>
              </tbody>
            </table>
          </div>

          <!-- 午後試験 選択分野 -->
          <div class="card" style="margin-bottom:24px;">
            <h2 class="card-title" style="margin-bottom:20px;">🌆 午後試験 選択分野一覧</h2>
            <div class="grid-2" style="gap:12px;">
              ${[
                { num: '問1', name: '情報セキュリティ', note: '必須', badge: 'badge-error' },
                { num: '問2', name: '経営戦略', note: '選択（4 問選択）', badge: 'badge-neutral' },
                { num: '問3', name: 'プログラミング', note: '選択', badge: 'badge-neutral' },
                { num: '問4', name: 'システムアーキテクチャ', note: '選択', badge: 'badge-neutral' },
                { num: '問5', name: 'ネットワーク', note: '選択', badge: 'badge-neutral' },
                { num: '問6', name: 'データベース', note: '選択', badge: 'badge-neutral' },
                { num: '問7', name: '組込みシステム開発', note: '選択', badge: 'badge-neutral' },
                { num: '問8', name: '情報システム開発', note: '選択', badge: 'badge-neutral' },
                { num: '問9', name: 'プロジェクトマネジメント', note: '選択', badge: 'badge-neutral' },
                { num: '問10', name: 'サービスマネジメント', note: '選択', badge: 'badge-neutral' },
                { num: '問11', name: 'システム監査', note: '選択', badge: 'badge-neutral' },
              ].map(d => `
                <div style="display:flex;align-items:center;gap:10px;padding:10px 14px;background:var(--color-surface-2);border-radius:var(--radius-md);">
                  <span style="font-size:.75rem;color:var(--color-text-muted);min-width:32px;">${d.num}</span>
                  <span style="flex:1;font-size:.875rem;font-weight:600;">${d.name}</span>
                  <span class="badge ${d.badge}">${d.note}</span>
                </div>`).join('')}
            </div>
          </div>

          <!-- 学習アドバイス -->
          <div class="card" style="background:var(--color-primary-bg);border-color:var(--color-primary);">
            <h2 class="card-title" style="margin-bottom:16px;">💡 合格のための学習アドバイス</h2>
            <ul style="display:flex;flex-direction:column;gap:12px;">
              ${[
                '午前試験は <strong>過去問の反復練習</strong> が最も効果的。直近 3〜5 年分を繰り返し解こう。',
                '午後試験は <strong>セキュリティ必須</strong> のため、最優先で対策する。',
                '午後は問題文の中に答えのヒントがある。<strong>問題文を丁寧に読む</strong> 習慣をつけよう。',
                '午後の選択 4 問は事前に決めておく。自分の得意分野（業務経験など）を活かして選択する。',
                '合格基準は午前・午後それぞれ <strong>60 点以上</strong>。どちらか一方でも 60 点未満なら不合格。',
              ].map(t => `
                <li style="display:flex;gap:10px;font-size:.875rem;line-height:1.7;">
                  <span style="color:var(--color-primary);flex-shrink:0;">▶</span>
                  <span>${t}</span>
                </li>`).join('')}
            </ul>
          </div>

        </div>
      </div>
    `);
  }

  // ─── 用語集ページ ─────────────────────────────────── //
  function renderGlossary() {
    const categories = [...new Set(GLOSSARY_DATA.map(g => g.category))];

    mount(`
      <div class="page fade-in">
        <div class="container">
          <div class="page-header">
            <h1 class="page-title">📖 用語集</h1>
            <p class="page-subtitle">応用情報技術者試験によく出る重要用語 ${GLOSSARY_DATA.length} 語</p>
          </div>

          <div class="glossary-search-wrap">
            <input type="search" id="glossary-search" class="form-control"
              placeholder="用語を検索（例：ACID、OSI、PDCA）" aria-label="用語を検索">
          </div>

          <div class="glossary-filters" id="glossary-filters">
            <button class="filter-btn active" data-cat="">すべて</button>
            ${categories.map(c => `<button class="filter-btn" data-cat="${c}">${c}</button>`).join('')}
          </div>

          <div class="glossary-list" id="glossary-list">
            ${GLOSSARY_DATA.map(g => `
              <div class="glossary-item" data-cat="${g.category}" data-term="${g.term.toLowerCase()}">
                <div class="glossary-item__header">
                  <span class="glossary-item__term">${g.term}</span>
                  <span class="badge badge-neutral glossary-item__cat">${g.category}</span>
                </div>
                <p class="glossary-item__def">${g.definition}</p>
              </div>
            `).join('')}
          </div>

          <p id="glossary-empty" style="display:none;text-align:center;padding:48px 0;color:var(--color-text-muted);">
            該当する用語が見つかりませんでした
          </p>
        </div>
      </div>
    `);

    let currentCat = '';
    let currentSearch = '';

    function applyFilter() {
      let visible = 0;
      document.querySelectorAll('.glossary-item').forEach(item => {
        const catMatch  = !currentCat   || item.dataset.cat === currentCat;
        const defText   = item.querySelector('.glossary-item__def').textContent.toLowerCase();
        const searchMatch = !currentSearch || item.dataset.term.includes(currentSearch) || defText.includes(currentSearch);
        const show = catMatch && searchMatch;
        item.style.display = show ? '' : 'none';
        if (show) visible++;
      });
      document.getElementById('glossary-empty').style.display = visible === 0 ? '' : 'none';
    }

    document.getElementById('glossary-search').addEventListener('input', function () {
      currentSearch = this.value.toLowerCase().trim();
      applyFilter();
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCat = btn.dataset.cat;
        applyFilter();
      });
    });
  }

  // ─── 学習計画ページ ────────────────────────────────── //
  function renderPlan() {
    const now = new Date();

    function getExamDate(year, month) { // month: 3=April, 9=October (0-indexed)
      const d = new Date(year, month, 1);
      let sundays = 0;
      while (sundays < 3) {
        if (d.getDay() === 0) sundays++;
        if (sundays < 3) d.setDate(d.getDate() + 1);
      }
      return d;
    }

    const y = now.getFullYear();
    const spring = getExamDate(y, 3);
    const fall   = getExamDate(y, 9);
    let nextExam;
    if (now < spring)      nextExam = { date: spring, name: `${y}年 春期（4月）` };
    else if (now < fall)   nextExam = { date: fall,   name: `${y}年 秋期（10月）` };
    else                   nextExam = { date: getExamDate(y+1, 3), name: `${y+1}年 春期（4月）` };

    const daysLeft  = Math.max(0, Math.ceil((nextExam.date - now) / 86400000));
    const weeksLeft = Math.floor(daysLeft / 7);

    const stats    = Store.getOverallStats();
    const dailyMin = weeksLeft >= 12 ? 60 : weeksLeft >= 8 ? 90 : weeksLeft >= 4 ? 120 : 180;

    const phases = [];
    if (weeksLeft >= 12) {
      phases.push({ icon:'📚', name:'インプット期',  weeks: Math.floor(weeksLeft*.5),  desc:'全分野の基礎知識習得' });
      phases.push({ icon:'✏️', name:'問題演習期',    weeks: Math.floor(weeksLeft*.3),  desc:'分野別過去問演習' });
      phases.push({ icon:'🎯', name:'弱点克服期',    weeks: Math.floor(weeksLeft*.15), desc:'苦手分野の集中対策' });
      phases.push({ icon:'🔥', name:'直前対策期',    weeks: Math.ceil(weeksLeft*.05),  desc:'模擬試験・総復習' });
    } else if (weeksLeft >= 8) {
      phases.push({ icon:'📚', name:'基礎固め期',    weeks: Math.floor(weeksLeft*.4),  desc:'重要分野を優先学習' });
      phases.push({ icon:'✏️', name:'問題演習期',    weeks: Math.floor(weeksLeft*.4),  desc:'過去問中心の演習' });
      phases.push({ icon:'🔥', name:'直前対策期',    weeks: Math.ceil(weeksLeft*.2),   desc:'模擬試験・弱点補強' });
    } else if (weeksLeft >= 4) {
      phases.push({ icon:'✏️', name:'問題演習期',    weeks: Math.floor(weeksLeft*.5),  desc:'高頻出分野を重点演習' });
      phases.push({ icon:'🎯', name:'弱点克服期',    weeks: Math.floor(weeksLeft*.3),  desc:'苦手分野の集中対策' });
      phases.push({ icon:'🔥', name:'直前対策期',    weeks: Math.ceil(weeksLeft*.2),   desc:'模擬試験・最終確認' });
    } else {
      phases.push({ icon:'🔥', name:'直前対策期',    weeks: weeksLeft,                 desc:'模擬試験＋弱点問題を徹底復習' });
    }

    const weekPlan = [
      { day:'月', task:'テクノロジ系（アルゴリズム・OS）演習',    min: dailyMin },
      { day:'火', task:'テクノロジ系（ネットワーク・DB）演習',    min: dailyMin },
      { day:'水', task:'テクノロジ系（セキュリティ）演習',        min: dailyMin },
      { day:'木', task:'マネジメント系（PM・SM）演習',            min: dailyMin },
      { day:'金', task:'ストラテジ系（経営・法務）演習',          min: dailyMin },
      { day:'土', task:'弱点復習・ランダム演習',                  min: Math.round(dailyMin * 1.5) },
      { day:'日', task:'模擬試験 or 休養',                        min: Math.round(dailyMin * 2) },
    ];

    const priorities = [
      { name:'情報セキュリティ',       stars:5, reason:'午後必須問題' },
      { name:'アルゴリズム',           stars:5, reason:'午前・午後の基礎' },
      { name:'ネットワーク',           stars:4, reason:'高配点・出題頻度高' },
      { name:'データベース',           stars:4, reason:'午後選択で定番' },
      { name:'システムアーキテクチャ', stars:4, reason:'午後選択で得点源' },
      { name:'プロジェクト管理',       stars:3, reason:'EVM等の計算問題' },
      { name:'サービス管理',           stars:3, reason:'ITIL系の知識問題' },
      { name:'ソフトウェア開発',       stars:3, reason:'開発手法・テスト技法' },
      { name:'経営・法務',             stars:2, reason:'暗記系で得点しやすい' },
      { name:'OS・ハードウェア',       stars:2, reason:'午前でコンスタントに出題' },
    ];

    const fmtMin = m => m >= 60 ? `${m/60|0}時間${m%60?m%60+'分':''}` : `${m}分`;

    mount(`
      <div class="page fade-in">
        <div class="container">
          <div class="page-header">
            <h1 class="page-title">📅 学習計画</h1>
            <p class="page-subtitle">試験日までの効率的な学習スケジュール</p>
          </div>

          <!-- カウントダウン -->
          <div class="plan-exam-countdown">
            <div>
              <div class="plan-exam-label">次回試験</div>
              <div class="plan-exam-name">${nextExam.name}</div>
            </div>
            <div class="plan-countdown">
              <div class="plan-countdown-value">${daysLeft}</div>
              <div class="plan-countdown-unit">日後</div>
            </div>
            <div style="text-align:right;">
              <div class="plan-exam-label">残り週数</div>
              <div class="plan-exam-name">${weeksLeft} 週間</div>
            </div>
          </div>

          <!-- 現状スタッツ -->
          <div class="stats-grid" style="margin-bottom:24px;">
            ${[
              { icon:'✏️', value: stats.totalAttempts,   label:'累計回答数' },
              { icon:'✅', value: stats.accuracy + '%',  label:'現在の正答率' },
              { icon:'📚', value: stats.totalAttempted,  label:'演習済み問題数' },
              { icon:'🎯', value: stats.accuracy >= 60 ? '合格圏' : '要強化',
                label:'ステータス',
                style: `color:${stats.accuracy >= 60 ? 'var(--color-success)' : 'var(--color-warning)'};` },
            ].map(s => `
              <div class="stat-card">
                <div class="stat-card__icon">${s.icon}</div>
                <div class="stat-card__value" style="${s.style||''}">${s.value}</div>
                <div class="stat-card__label">${s.label}</div>
              </div>`).join('')}
          </div>

          <!-- 学習フェーズ -->
          <div class="card" style="margin-bottom:24px;">
            <h2 class="card-title" style="margin-bottom:16px;">📋 推奨学習フェーズ</h2>
            <div class="plan-phases">
              ${phases.map(p => `
                <div class="plan-phase">
                  <div class="plan-phase__icon">${p.icon}</div>
                  <div class="plan-phase__body">
                    <div class="plan-phase__name">${p.name}</div>
                    <div class="plan-phase__desc">${p.desc}</div>
                  </div>
                  <div class="plan-phase__weeks">${p.weeks}週</div>
                </div>`).join('')}
            </div>
          </div>

          <!-- 週間スケジュール -->
          <div class="card" style="margin-bottom:24px;">
            <h2 class="card-title" style="margin-bottom:8px;">🗓 推奨週間スケジュール</h2>
            <p style="font-size:.875rem;color:var(--color-text-sub);margin-bottom:16px;">
              1日あたり目安：<strong>${fmtMin(dailyMin)}</strong>
            </p>
            <div class="plan-schedule">
              ${weekPlan.map(w => `
                <div class="plan-schedule-item">
                  <span class="plan-schedule-day">${w.day}</span>
                  <span class="plan-schedule-task">${w.task}</span>
                  <span class="plan-schedule-duration">${fmtMin(w.min)}</span>
                </div>`).join('')}
            </div>
          </div>

          <!-- 分野別優先度 -->
          <div class="card" style="margin-bottom:32px;">
            <h2 class="card-title" style="margin-bottom:16px;">⚡ 分野別優先度</h2>
            <div class="plan-priority-grid">
              ${priorities.map(p => `
                <div class="plan-priority-item">
                  <div class="plan-priority-name">${p.name}</div>
                  <div class="plan-priority-stars">${'★'.repeat(p.stars)}${'☆'.repeat(5-p.stars)}</div>
                  <div class="plan-priority-reason">${p.reason}</div>
                </div>`).join('')}
            </div>
          </div>

          <div style="text-align:center;">
            <a href="#/quiz" class="btn btn-primary btn-lg">今すぐ演習を始める →</a>
            <a href="#/glossary" class="btn btn-secondary btn-lg" style="margin-left:12px;">📖 用語集を見る</a>
          </div>
        </div>
      </div>
    `);
  }

  // ─── 午後試験対策ページ ────────────────────────────── //
  function renderPmExam() {
    const subjects = [
      {
        num: '問 1', title: '情報セキュリティ', required: true, icon: '🔒',
        desc: '全受験者が必須。個人情報漏えい・不正アクセス・暗号化・脆弱性対策など実務的なシナリオが出題される。',
        strategy: '問題文の「脅威」「リスク」「対策」を正確に読み取る。ISMSのPDCAサイクル、JIS Q 27001の概念を押さえる。記述は「〜を防ぐため、〜を実施する」の形で書く。',
        keyTopics: ['インシデントレスポンス', 'リスクアセスメント', 'ISMS', 'ペネトレーションテスト', 'フィッシング対策'],
      },
      {
        num: '問 2', title: 'プログラミング（アルゴリズム）', required: true, icon: '💻',
        desc: '全受験者が必須。擬似コードによるアルゴリズムのトレース・穴埋め・修正が中心。',
        strategy: '擬似コードを丁寧にトレースする。変数の値を表で追うと確実。再帰・ソート・探索・データ構造（スタック・キュー・木）が頻出。先に選択問題で4問を選んでから取り組む順序で時間管理する。',
        keyTopics: ['配列操作', 'ソートアルゴリズム', '再帰処理', 'スタック・キュー', '二分探索木'],
      },
      {
        num: '問 3', title: 'データベース', required: false, icon: '🗃️',
        desc: 'E-R図・SQL・正規化・トランザクション設計が出題。SQL の集合演算・副問合せは必出。',
        strategy: 'E-R図はエンティティの主キーと関係線を丁寧に確認。SQL は内部結合・外部結合・EXISTS の使い分けを練習。集計関数（SUM/AVG/COUNT）と GROUP BY/HAVING も頻出。',
        keyTopics: ['E-Rモデル', 'SQL JOIN・副問合せ', '正規化（第3正規形）', 'トランザクション', 'ロック・ACID'],
      },
      {
        num: '問 4', title: 'ネットワーク', required: false, icon: '🌐',
        desc: 'TCP/IP プロトコル・ルーティング・セキュリティ（VPN・ファイアウォール）の設計・構成問題。',
        strategy: 'ネットワーク構成図を丁寧に読む。サブネットマスク計算は必ず練習しておく。パケットフィルタリングルールの読み取り・設定は頻出。DNS・DHCP・NAT の動作を正確に理解する。',
        keyTopics: ['サブネット計算', 'ルーティングプロトコル', 'ファイアウォール設計', 'VPN', 'DNS・DHCP'],
      },
      {
        num: '問 5', title: '組込みシステム開発', required: false, icon: '⚙️',
        desc: '状態遷移図・割込み処理・RTOS・ハードウェアインタフェースの設計問題。',
        strategy: '状態遷移図は全状態と遷移条件を書き出して確認。タイムチャートの読み取りと作成を練習する。割込み優先度・タスクスケジューリングの動作トレースが頻出。',
        keyTopics: ['状態遷移図', 'リアルタイムOS', '割込み処理', 'タイマ・カウンタ', 'A/D・D/A変換'],
      },
      {
        num: '問 6', title: 'システムアーキテクチャ', required: false, icon: '🏗️',
        desc: '性能・信頼性・スケーラビリティを考慮したシステム設計問題。稼働率計算も頻出。',
        strategy: '稼働率の直列・並列計算は確実に。処理能力・ボトルネックの計算問題を繰り返し練習。クラウドの IaaS/PaaS/SaaS の使い分け、仮想化技術の理解を深める。',
        keyTopics: ['稼働率計算', 'キャパシティ計画', '仮想化・クラウド', 'スケールアウト', 'バックアップ戦略'],
      },
      {
        num: '問 7', title: 'プロジェクトマネジメント', required: false, icon: '📊',
        desc: 'WBS・EVM・リスク管理・スケジュール管理の計算・判断問題。',
        strategy: 'EVM の PV/EV/AC/CPI/SPI の計算は完全マスター必須。ガントチャートとアローダイアグラム（PERT）のクリティカルパス計算を練習。リスク対応戦略（回避・軽減・転嫁・受容）の使い分けを整理する。',
        keyTopics: ['EVM指標計算', 'アローダイアグラム', 'クリティカルパス', 'リスク対応', 'ステークホルダ管理'],
      },
      {
        num: '問 8', title: 'サービスマネジメント', required: false, icon: '🛠️',
        desc: 'ITIL に基づくサービス設計・移行・運用のプロセス問題。SLA・変更管理・問題管理が頻出。',
        strategy: 'ITIL の各プロセスの目的と用語を正確に覚える。インシデント管理・問題管理・変更管理・リリース管理の違いと連携を理解する。SLA の稼働率計算（稼働率 = MTBF / (MTBF + MTTR)）を練習する。',
        keyTopics: ['インシデント管理', '問題管理', '変更管理', 'SLA', 'キャパシティ管理'],
      },
      {
        num: '問 9', title: 'システム監査', required: false, icon: '🔍',
        desc: '内部統制・監査手続き・リスクアプローチ・コンプライアンスに関する判断問題。',
        strategy: '「システム監査基準」と「システム管理基準」（IPA公表）の目的を理解する。監査人の独立性・予備調査・本調査・監査報告の流れを把握。内部統制の 4 目的（業務の有効性・財務報告の信頼性・法令遵守・資産の保全）を整理する。',
        keyTopics: ['監査手続き', '内部統制', 'リスクアプローチ', 'ITガバナンス', 'BCP'],
      },
      {
        num: '問 10', title: 'システム戦略・経営戦略', required: false, icon: '📈',
        desc: 'CIO の役割・IT 投資評価・情報化戦略の立案・経営改革との連携に関する総合問題。',
        strategy: 'ROI・NPV・IRR の投資評価指標を計算できるようにする。EA（エンタープライズアーキテクチャ）の 4 層と IT 化の関係を理解。デジタルトランスフォーメーション（DX）・アジャイル経営の概念も押さえておく。',
        keyTopics: ['IT投資評価', 'エンタープライズアーキテクチャ', 'DX', 'SCM・CRM・ERP', 'ビジネスモデル'],
      },
      {
        num: '問 11', title: 'ソフトウェア開発（選択）', required: false, icon: '🛠️',
        desc: '開発手法・テスト設計・品質管理に関する問題。アジャイル・ウォータフォール・テスト技法が出題。',
        strategy: 'ソフトウェア品質（JIS X 0129/ISO 25010）の特性（機能性・信頼性・使用性・効率性など）を整理。テスト技法（同値分割・境界値分析・デシジョンテーブル）の適用を練習する。',
        keyTopics: ['テスト設計技法', 'ソフトウェア品質', 'レビュー', 'バグ管理', '形式手法'],
      },
    ];

    const timeTable = [
      { time: '0〜5分', action: '問題全体を見渡して選択問題（問3〜11から4題）を決める' },
      { time: '5〜55分', action: '問1（情報セキュリティ）を解く（50分）' },
      { time: '55〜105分', action: '問2（プログラミング）を解く（50分）' },
      { time: '105〜145分', action: '選択問題1・2を解く（各20分）' },
      { time: '145〜175分', action: '選択問題3・4を解く（各15分）' },
      { time: '175〜180分', action: '解答の見直し・未解答チェック' },
    ];

    mount(`
      <div class="page fade-in">
        <div class="container">
          <div class="page-header">
            <h1 class="page-title">📝 午後試験対策</h1>
            <p class="page-subtitle">応用情報技術者試験 午後試験（記述式）完全攻略ガイド</p>
          </div>

          <!-- 試験概要 -->
          <div class="card" style="margin-bottom:24px;">
            <h2 class="card-title" style="margin-bottom:16px;">📋 午後試験の概要</h2>
            <div class="grid-2" style="gap:16px;">
              ${[
                { label:'試験時間', value:'150分' },
                { label:'問題数', value:'11問（問1・問2必須 + 選択問題4問）' },
                { label:'解答方式', value:'記述式（穴埋め・選択・短文記述）' },
                { label:'合格ライン', value:'午前・午後ともに60点以上' },
              ].map(r => `
                <div class="pm-overview-row">
                  <span class="pm-overview-label">${r.label}</span>
                  <span class="pm-overview-value">${r.value}</span>
                </div>
              `).join('')}
            </div>
            <div class="key-point" style="margin-top:16px;">
              <strong>選択問題の戦略：</strong>問3〜11の9問から4問を選択。得意分野を事前に2〜3つ決めておき、
              試験当日に問題を見てから最終決定する。問題冒頭の状況設定を読んで難易度を素早く判定すること。
            </div>
          </div>

          <!-- 時間配分 -->
          <div class="card" style="margin-bottom:24px;">
            <h2 class="card-title" style="margin-bottom:16px;">⏱ 推奨時間配分（150分）</h2>
            <div class="pm-time-table">
              ${timeTable.map(r => `
                <div class="pm-time-row">
                  <span class="pm-time-range">${r.time}</span>
                  <span class="pm-time-action">${r.action}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- 各問題の攻略ポイント -->
          <h2 style="font-size:1.2rem;font-weight:700;margin-bottom:16px;">📌 問題別攻略ポイント</h2>
          ${subjects.map(s => `
            <div class="card pm-subject-card" style="margin-bottom:16px;">
              <div class="pm-subject-header">
                <div class="pm-subject-num">${s.num}</div>
                <div class="pm-subject-title">${s.icon} ${s.title}</div>
                ${s.required ? '<span class="badge badge-error">必須</span>' : '<span class="badge badge-neutral">選択</span>'}
              </div>
              <p class="pm-subject-desc">${s.desc}</p>
              <div class="pm-subject-strategy">
                <strong>攻略ポイント：</strong>${s.strategy}
              </div>
              <div class="pm-topic-chips">
                ${s.keyTopics.map(t => `<span class="tag">${t}</span>`).join('')}
              </div>
            </div>
          `).join('')}

          <!-- 記述対策 -->
          <div class="card" style="margin-bottom:32px;">
            <h2 class="card-title" style="margin-bottom:16px;">✍️ 記述解答のコツ</h2>
            <div class="pm-tips-grid">
              ${[
                { icon:'📏', title:'字数を意識する', desc:'「40字以内」なら35〜40字を目安に。余白が多いと減点対象になる場合がある。' },
                { icon:'🎯', title:'設問の条件を必ず使う', desc:'「本文中の語句を用いて」「具体的な理由を」などの指示は必ず守る。' },
                { icon:'🔢', title:'番号・固有名詞を入れる', desc:'曖昧な表現より「〇〇という手法を用いて」と具体的に書く方が採点者に伝わる。' },
                { icon:'🔗', title:'因果関係を明示する', desc:'「〜の恐れがあるため、〜を実施する」「〜により〜が可能となる」の形を使う。' },
                { icon:'🔄', title:'PDCA・ISMSを意識', desc:'情報セキュリティの設問は PDCA サイクルとリスク対応の文脈で答えると高得点を狙えます。' },
                { icon:'⏰', title:'解けない問題は後回し', desc:'迷ったら飛ばして次へ。全体を解いてから戻る方が時間効率が上がる。' },
              ].map(t => `
                <div class="pm-tip-card">
                  <div class="pm-tip-icon">${t.icon}</div>
                  <div>
                    <div class="pm-tip-title">${t.title}</div>
                    <div class="pm-tip-desc">${t.desc}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <div style="text-align:center;">
            <a href="#/quiz?mode=random" class="btn btn-primary btn-lg">午前問題の演習へ →</a>
            <a href="#/subjects" class="btn btn-secondary btn-lg" style="margin-left:12px;">分野別テキストを読む</a>
          </div>
        </div>
      </div>
    `);
  }

  // ─── 試験直前まとめシート ──────────────────────────── //
  function renderCheatsheet() {
    const sheets = [
      {
        id: 'calc', title: '計算公式まとめ', icon: '🔢', color: '#7950F2',
        items: [
          { label: '稼働率（直列）', formula: 'A₁ × A₂ × … × Aₙ', note: '全て稼働が必要' },
          { label: '稼働率（並列）', formula: '1 − (1−A₁)(1−A₂)…(1−Aₙ)', note: '1台でも稼働すればOK' },
          { label: '稼働率（MTBF/MTTR）', formula: 'MTBF ÷ (MTBF + MTTR)', note: 'MTBF：平均故障間隔、MTTR：平均修復時間' },
          { label: 'CPI（EVM）', formula: 'EV ÷ AC', note: '<1 コスト超過、>1 コスト節約' },
          { label: 'SPI（EVM）', formula: 'EV ÷ PV', note: '<1 遅延、>1 前倒し' },
          { label: 'EAC（完成時総コスト）', formula: 'BAC ÷ CPI', note: '現在のCPI継続を仮定' },
          { label: 'NPV（正味現在価値）', formula: 'Σ(キャッシュフロー/(1+r)ⁿ) − 初期投資', note: '>0 なら投資効果あり' },
          { label: 'ROI', formula: '(利益 ÷ 投資額) × 100 (%)', note: '投資対効果' },
          { label: 'キャッシュヒット率', formula: 'キャッシュアクセス時間×h + 主記憶時間×(1−h)', note: 'h：ヒット率' },
          { label: '通信チャネル数', formula: 'n(n−1) ÷ 2', note: 'n：メンバ数' },
          { label: 'サブネットホスト数', formula: '2ʰ − 2', note: 'h：ホスト部ビット数（ネットワーク・BC除く）' },
          { label: 'PERT期待値', formula: '(楽観値 + 4×最頻値 + 悲観値) ÷ 6', note: '三点見積もり' },
        ],
      },
      {
        id: 'security', title: '情報セキュリティ頻出', icon: '🔒', color: '#E03131',
        items: [
          { label: '対称鍵（共通鍵）暗号', formula: 'AES / DES / 3DES', note: '高速・鍵配送問題あり' },
          { label: '公開鍵暗号', formula: 'RSA / 楕円曲線（ECDSA）', note: '低速・鍵配送問題なし' },
          { label: 'ハイブリッド暗号', formula: 'データ→AES暗号化、AES鍵→RSA公開鍵で暗号化', note: 'TLS/HTTPSが採用' },
          { label: 'デジタル署名', formula: '送信者の秘密鍵でハッシュを暗号化', note: '否認防止・改ざん検知（機密性なし）' },
          { label: 'ハッシュ関数', formula: 'SHA-256 / SHA-3', note: '一方向性・衝突耐性（MD5/SHA-1は非推奨）' },
          { label: 'PKI証明書チェーン', formula: 'サーバ証明書 → 中間CA → ルートCA', note: '公開鍵の正当性を保証' },
          { label: 'CVSS スコア', formula: 'Base Score 0.0〜10.0（高い=深刻）', note: '7.0以上は重大' },
          { label: '多要素認証', formula: '知識 × 所持 × 生体（異種2つ以上）', note: '同種の組合せはMFAでない' },
          { label: 'XSS対策', formula: 'HTML エスケープ（出力時）', note: '&lt; &gt; &amp; &quot;' },
          { label: 'SQLインジェクション対策', formula: 'プレースホルダ（バインド変数）使用', note: '入力値を SQL 文字列として扱わない' },
          { label: 'CSRF対策', formula: 'CSRFトークン / SameSite Cookie', note: '正規フォームからの送信のみ受理' },
        ],
      },
      {
        id: 'network', title: 'ネットワーク頻出', icon: '🌐', color: '#1971C2',
        items: [
          { label: 'OSI 参照モデル', formula: '物→データリンク→ネットワーク→トランスポート→セッション→プレゼン→アプリ', note: '第1〜7層' },
          { label: 'TCP/IP', formula: 'HTTP(80) / HTTPS(443) / SMTP(25) / DNS(53) / SSH(22)', note: 'ウェルノウンポート' },
          { label: 'IPv4 プライベートアドレス', formula: '10.x / 172.16〜31.x / 192.168.x', note: 'インターネット不使用' },
          { label: 'サブネットマスク /24', formula: '255.255.255.0 → ホスト254台', note: '/25→126台 /26→62台 /27→30台' },
          { label: 'NAPT（IPマスカレード）', formula: 'プライベートIP＋ポート → グローバルIP共有', note: '家庭用ルータの標準動作' },
          { label: 'DNS レコード', formula: 'A(IPv4) / AAAA(IPv6) / MX(メール) / CNAME(別名) / TXT(テキスト/SPF)', note: '' },
          { label: 'TLS ハンドシェイク', formula: 'Client Hello → Server Hello → 証明書検証 → 鍵交換 → Finished', note: 'TLS1.3は1-RTT' },
          { label: 'BGP', formula: 'AS間ルーティング（EGP）/ TCP 179番', note: 'パスベクタ型' },
          { label: 'STP（スパニングツリー）', formula: 'ループ防止：冗長ポートをブロッキング状態に', note: 'ブロードキャストストーム防止' },
          { label: 'VLAN', formula: 'L2スイッチで論理的にネットワーク分割', note: 'タグ VLAN: IEEE 802.1Q' },
        ],
      },
      {
        id: 'db', title: 'データベース頻出', icon: '🗃️', color: '#0CA678',
        items: [
          { label: 'ACID 特性', formula: '原子性(A)・一貫性(C)・独立性(I)・永続性(D)', note: 'トランザクションの基本要件' },
          { label: '正規化の段階', formula: '1NF→2NF（部分従属除去）→3NF（推移従属除去）→BCNF', note: '通常は3NFで実用的' },
          { label: 'SQL集計', formula: 'GROUP BY → HAVING（集計後条件）/ WHERE（集計前条件）', note: '順序: WHERE → GROUP BY → HAVING → SELECT' },
          { label: 'JOIN種別', formula: 'INNER JOIN(共通) / LEFT JOIN(左全+右NULL) / CROSS JOIN(直積)', note: '' },
          { label: 'インデックス', formula: 'SELECT高速化 / INSERT・UPDATE・DELETE低下', note: 'B+木：等値・範囲検索に有効' },
          { label: '分離レベル', formula: 'READ UNCOMMITTED < READ COMMITTED < REPEATABLE READ < SERIALIZABLE', note: '高いほど整合性↑ 性能↓' },
          { label: 'CAP定理', formula: 'C(整合性)・A(可用性)・P(分断耐性)は同時に3つ保証不可', note: 'NoSQL はAP系が多い' },
          { label: 'デッドロック対策', formula: 'ロック順序統一 / タイムアウト / 待ちグラフ検出', note: '' },
        ],
      },
      {
        id: 'pm', title: 'プロジェクト管理頻出', icon: '📊', color: '#E67700',
        items: [
          { label: 'EVM 指標', formula: 'PV(予算コスト) / EV(出来高) / AC(実際コスト)', note: 'BAC：計画総コスト' },
          { label: 'スケジュール差異', formula: 'SV = EV − PV（負→遅延）', note: '' },
          { label: 'コスト差異', formula: 'CV = EV − AC（負→超過）', note: '' },
          { label: 'クリティカルパス', formula: 'フロート=0 の経路。遅延するとプロジェクト全体が遅延', note: 'アローダイアグラムで算出' },
          { label: 'PERT 3点見積もり', formula: '期待値=(O+4M+P)/6、分散=((P−O)/6)²', note: 'O:楽観、M:最頻、P:悲観' },
          { label: 'リスク期待値（EMV）', formula: '発生確率 × 影響額', note: 'リスク予備費算出に使用' },
          { label: 'PMBOK プロセス群', formula: '立上げ→計画→実行→監視コントロール→終結', note: '憲章は立上げで作成' },
          { label: '通信チャネル', formula: 'n(n−1)/2', note: '人数増→チャネル急増' },
        ],
      },
      {
        id: 'os', title: 'OS・ハードウェア頻出', icon: '⚙️', color: '#E67700',
        items: [
          { label: 'LRU', formula: '最も長く未参照のページを置換', note: 'ページ置換アルゴリズム' },
          { label: 'FIFO', formula: '最初に読み込まれたページを置換', note: 'ベラディの異常が発生しうる' },
          { label: 'デッドロック条件', formula: '相互排除 / 占有と待機 / 非横取り / 循環待機（4条件同時成立）', note: '1つ除去で防止' },
          { label: 'スレッショルディング', formula: 'ページフォルト多発 → スワップ頻発 → CPU利用率激減', note: 'メモリ増設で対処' },
          { label: 'ハイパーバイザ', formula: 'タイプ1：ベアメタル（本番用）/ タイプ2：ホストOS型（開発用）', note: '' },
          { label: 'コンテナ vs VM', formula: 'コンテナ：カーネル共有・高速起動 / VM：完全分離・高セキュリティ', note: 'Dockerはnamespace+cgroups' },
          { label: 'RAID比較', formula: 'RAID0:速度 / RAID1:ミラー / RAID5:分散パリティ1台 / RAID6:2台故障耐', note: '' },
          { label: 'キャッシュ実効アクセス時間', formula: 'h×Tc + (1−h)×Tm', note: 'h:ヒット率、Tc:キャッシュ、Tm:主記憶' },
        ],
      },
    ];

    const activeId = sheets[0].id;

    mount(`
      <div class="page fade-in">
        <div class="container" id="cheatsheet-root">
          <div class="page-header cs-header">
            <div>
              <h1 class="page-title">📋 試験直前まとめシート</h1>
              <p class="page-subtitle">重要公式・頻出ポイントを分野別に整理</p>
            </div>
            <button class="btn btn-outline btn-sm no-print" onclick="window.print()" style="flex-shrink:0;">
              🖨 印刷する
            </button>
          </div>

          <!-- タブ -->
          <div class="cs-tabs no-print" id="cs-tabs">
            ${sheets.map(s => `
              <button class="cs-tab${s.id === activeId ? ' active' : ''}" data-id="${s.id}">
                ${s.icon} ${s.title}
              </button>`).join('')}
          </div>

          <!-- シート本体（全シートを描画・タブで表示切替） -->
          <div id="cs-content">
            ${sheets.map(s => `
              <div class="cs-sheet${s.id === activeId ? '' : ' cs-sheet--hidden'}" data-id="${s.id}">
                <div class="cs-sheet-title" style="border-left:4px solid ${s.color};">
                  ${s.icon} ${s.title}
                </div>
                <div class="cs-table-wrap">
                  <table class="cs-table">
                    <thead>
                      <tr>
                        <th>項目</th>
                        <th>公式・定義</th>
                        <th>補足</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${s.items.map(item => `
                        <tr>
                          <td class="cs-label">${item.label}</td>
                          <td class="cs-formula"><code>${item.formula}</code></td>
                          <td class="cs-note">${item.note}</td>
                        </tr>`).join('')}
                    </tbody>
                  </table>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- 印刷時は全シート表示 -->
          <p class="cs-print-note no-print" style="text-align:center;margin-top:24px;font-size:.8rem;color:var(--color-text-muted);">
            印刷時は全分野が出力されます
          </p>
        </div>
      </div>
    `);

    // タブ切り替え
    document.querySelectorAll('.cs-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        document.querySelectorAll('.cs-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.cs-sheet').forEach(el => {
          el.classList.toggle('cs-sheet--hidden', el.dataset.id !== id);
        });
      });
    });
  }

  // ─── 404 ─────────────────────────────────────────── //
  function render404() {
    mount(`
      <div class="page fade-in">
        <div class="container">
          <div class="empty-state">
            <div class="empty-state__icon">🔍</div>
            <h1 class="empty-state__title">ページが見つかりません</h1>
            <p class="empty-state__text">お探しのページは存在しないか、移動しました。</p>
            <a href="#/" class="btn btn-primary">トップに戻る</a>
          </div>
        </div>
      </div>
    `);
  }

  // ─── 全問題ブラウザ ───────────────────────────────── //
  function renderQuestions() {
    const categories = [{ id: '', name: 'すべて' }, ...SUBJECTS_DATA.map(s => ({ id: s.id, name: s.name }))];
    const years = ['', ...[...new Set(QUESTIONS_DATA.map(q => q.year).filter(Boolean))].sort((a,b) => b-a)];
    const diffs = [0,1,2,3,4,5];

    let filterCat  = '';
    let filterYear = '';
    let filterDiff = 0;
    let filterStatus = ''; // '', 'unanswered', 'correct', 'incorrect', 'bookmarked', 'memo'
    let searchText = '';

    function getFiltered() {
      return QUESTIONS_DATA.filter(q => {
        if (filterCat  && q.category !== filterCat) return false;
        if (filterYear && String(q.year) !== String(filterYear)) return false;
        if (filterDiff && q.difficulty !== filterDiff) return false;
        if (searchText) {
          const t = searchText.toLowerCase();
          if (!q.question.toLowerCase().includes(t) && !(q.tags||[]).join(' ').toLowerCase().includes(t)) return false;
        }
        if (filterStatus) {
          const p = Store.getProgress(q.id);
          if (filterStatus === 'unanswered' && p.attempts > 0) return false;
          if (filterStatus === 'correct'    && (p.attempts === 0 || p.correct/p.attempts < 1)) return false;
          if (filterStatus === 'incorrect'  && (p.attempts === 0 || p.correct/p.attempts >= 0.5)) return false;
          if (filterStatus === 'bookmarked' && !p.bookmarked) return false;
          if (filterStatus === 'memo'       && !Store.hasMemo(q.id)) return false;
        }
        return true;
      });
    }

    function renderList() {
      const filtered = getFiltered();
      const listEl = document.getElementById('q-list');
      if (!listEl) return;
      if (filtered.length === 0) {
        listEl.innerHTML = '<div class="search-empty" style="padding:48px 0;text-align:center;">条件に一致する問題が見つかりません</div>';
        return;
      }
      document.getElementById('q-count').textContent = `${filtered.length} 問`;
      listEl.innerHTML = filtered.map(q => {
        const p  = Store.getProgress(q.id);
        const sr = Store.getSRData(q.id);
        const acc = p.attempts > 0 ? Math.round(p.correct / p.attempts * 100) : null;
        const accBadge = acc === null
          ? '<span class="badge badge-neutral">未解答</span>'
          : `<span class="badge ${acc >= 70 ? 'badge-success' : 'badge-error'}">${acc}%</span>`;
        const bm = p.bookmarked ? '★' : '☆';
        const hasMemo = Store.hasMemo(q.id);
        const diffStars = '★'.repeat(q.difficulty) + '☆'.repeat(5 - q.difficulty);
        const nextRev = sr ? new Date(sr.nextReview).toLocaleDateString('ja-JP', {month:'numeric',day:'numeric'}) : '—';
        return `
          <div class="q-row" data-id="${q.id}">
            <div class="q-row__main">
              <div class="q-row__meta">
                <span class="badge badge-neutral" style="font-size:.7rem;">${q.categoryName}</span>
                <span style="font-size:.75rem;color:var(--color-warning);">${diffStars}</span>
                ${q.year ? `<span style="font-size:.75rem;color:var(--color-text-muted);">${q.year}年</span>` : ''}
                ${hasMemo ? `<span class="q-memo-icon" title="メモあり">📝</span>` : ''}
              </div>
              <div class="q-row__text">${q.question.slice(0,80)}${q.question.length>80?'…':''}</div>
              <div class="q-row__tags">${(q.tags||[]).map(t=>`<span class="badge badge-neutral" style="font-size:.65rem;">${t}</span>`).join(' ')}</div>
            </div>
            <div class="q-row__stats">
              ${accBadge}
              <span style="font-size:.7rem;color:var(--color-text-muted);" title="次回復習日">🔄 ${nextRev}</span>
              <span class="q-bm-btn ${p.bookmarked ? 'active' : ''}" data-id="${q.id}" title="ブックマーク">${bm}</span>
            </div>
          </div>`;
      }).join('');

      listEl.querySelectorAll('.q-bm-btn').forEach(btn => {
        btn.addEventListener('click', e => {
          e.stopPropagation();
          Store.toggleBookmark(btn.dataset.id);
          renderList();
        });
      });
      listEl.querySelectorAll('.q-row').forEach(row => {
        row.addEventListener('click', e => {
          if (e.target.classList.contains('q-bm-btn')) return;
          const q = QUESTIONS_DATA.find(q => q.id === row.dataset.id);
          if (!q) return;
          Router.navigate('/quiz', { category: q.category });
        });
      });
    }

    document.getElementById('app').innerHTML = `
      <section class="container" style="padding-top:80px;padding-bottom:64px;max-width:900px;">
        <h1 class="page-title">📝 問題一覧</h1>
        <p style="color:var(--color-text-muted);margin-bottom:24px;">全 ${QUESTIONS_DATA.length} 問。フィルターで絞り込んでから演習に進めます。</p>

        <!-- フィルターバー -->
        <div class="q-filter-bar">
          <input type="search" id="q-search" class="form-control" placeholder="🔍 問題文・タグを検索…" style="flex:1;min-width:180px;">

          <select id="q-cat" class="form-control" style="min-width:130px;">
            ${categories.map(c=>`<option value="${c.id}">${c.name}</option>`).join('')}
          </select>

          <select id="q-year" class="form-control" style="min-width:100px;">
            ${years.map(y=>`<option value="${y}">${y ? y+'年' : '年度'}</option>`).join('')}
          </select>

          <select id="q-diff" class="form-control" style="min-width:100px;">
            <option value="0">難易度</option>
            ${[1,2,3,4,5].map(d=>`<option value="${d}">${'★'.repeat(d)} (${d})</option>`).join('')}
          </select>

          <select id="q-status" class="form-control" style="min-width:110px;">
            <option value="">進捗</option>
            <option value="unanswered">未解答</option>
            <option value="incorrect">苦手（&lt;50%）</option>
            <option value="correct">得意（100%）</option>
            <option value="bookmarked">★ブックマーク</option>
            <option value="memo">📝メモあり</option>
          </select>
        </div>
        <div style="font-size:.85rem;color:var(--color-text-muted);margin-bottom:16px;">
          <span id="q-count">${QUESTIONS_DATA.length} 問</span> 表示中
          <a href="#/quiz" class="btn btn-primary btn-sm no-print" style="float:right;margin-top:-4px;">演習を開始 →</a>
        </div>

        <!-- 問題リスト -->
        <div id="q-list"></div>
      </section>`;

    renderList();

    // フィルターイベント
    document.getElementById('q-search').addEventListener('input', e => { searchText = e.target.value; renderList(); });
    document.getElementById('q-cat').addEventListener('change',   e => { filterCat  = e.target.value; renderList(); });
    document.getElementById('q-year').addEventListener('change',  e => { filterYear = e.target.value; renderList(); });
    document.getElementById('q-diff').addEventListener('change',  e => { filterDiff = parseInt(e.target.value)||0; renderList(); });
    document.getElementById('q-status').addEventListener('change',e => { filterStatus = e.target.value; renderList(); });
  }

  // ─── フラッシュカード ──────────────────────────────── //
  function renderFlashcard() {
    const cats = [{ id: '', name: 'すべて' }, ...SUBJECTS_DATA.map(s => ({ id: s.id, name: s.name })),
      { id: 'database', name: 'データベース' }, { id: 'software-dev', name: 'ソフトウェア開発' },
      { id: 'business-strategy', name: 'ビジネスストラテジ' }, { id: 'legal', name: '法規・標準' },
      { id: 'system-arch', name: 'システムアーキテクチャ' }, { id: 'service-mgmt', name: 'サービスマネジメント' },
    ];
    // 重複除去
    const seenCats = new Set();
    const uniqueCats = cats.filter(c => { if (seenCats.has(c.id)) return false; seenCats.add(c.id); return true; });

    let _known = new Set(JSON.parse(localStorage.getItem('ap_fc_known') || '[]'));
    let _catFilter = '';
    let _cards = [];
    let _idx = 0;
    let _flipped = false;
    let _showKnown = false;

    function saveKnown() {
      localStorage.setItem('ap_fc_known', JSON.stringify([..._known]));
    }

    function getCards() {
      let data = GLOSSARY_DATA.filter(g => !_catFilter || g.category === _catFilter);
      if (!_showKnown) data = data.filter(g => !_known.has(g.term));
      return data.length > 0 ? data : GLOSSARY_DATA.filter(g => !_catFilter || g.category === _catFilter);
    }

    function renderCard() {
      const cardEl  = document.getElementById('fc-card');
      const frontEl = document.getElementById('fc-front');
      const backEl  = document.getElementById('fc-back');
      const counterEl = document.getElementById('fc-counter');
      const knownEl   = document.getElementById('fc-known-count');
      if (!cardEl) return;
      _cards = getCards();
      if (_cards.length === 0) {
        cardEl.innerHTML = '<div class="fc-empty">全カードを学習済みです！🎉</div>';
        document.getElementById('fc-known-btn').style.display = 'none';
        document.getElementById('fc-unknown-btn').style.display = 'none';
        if (counterEl) counterEl.textContent = '0 / 0';
        return;
      }
      if (_idx >= _cards.length) _idx = 0;
      const card = _cards[_idx];
      _flipped = false;
      cardEl.classList.remove('flipped');
      if (frontEl) frontEl.textContent = card.term;
      if (backEl)  backEl.textContent  = card.definition;
      if (counterEl) counterEl.textContent = `${_idx + 1} / ${_cards.length}`;
      if (knownEl)   knownEl.textContent   = `既知 ${_known.size} / ${GLOSSARY_DATA.length}`;
      const isKnown = _known.has(card.term);
      document.getElementById('fc-known-btn').textContent    = isKnown ? '✅ 既知済み' : '✅ 覚えた！';
      document.getElementById('fc-known-btn').className      = `btn ${isKnown ? 'btn-success' : 'btn-primary'} btn-sm`;
      document.getElementById('fc-unknown-btn').style.display = '';
      document.getElementById('fc-known-btn').style.display   = '';
    }

    const catOptions = uniqueCats.map(c => `<option value="${c.id}">${c.name}</option>`).join('');

    document.getElementById('app').innerHTML = `
      <section class="container" style="padding-top:80px;padding-bottom:64px;max-width:680px;">
        <div class="page-header">
          <h1 class="page-title">🃏 単語フラッシュカード</h1>
          <p class="page-subtitle">カードをタップ / クリックで裏返し。用語の定義を確認しましょう。</p>
        </div>

        <!-- コントロール -->
        <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:24px;">
          <select id="fc-cat" class="form-control" style="flex:1;min-width:150px;">${catOptions}</select>
          <label style="display:flex;align-items:center;gap:6px;font-size:.875rem;cursor:pointer;white-space:nowrap;">
            <input type="checkbox" id="fc-show-known"> 既知も表示
          </label>
          <span id="fc-known-count" style="font-size:.85rem;color:var(--color-text-muted);white-space:nowrap;">既知 0 / ${GLOSSARY_DATA.length}</span>
        </div>

        <!-- カード -->
        <div class="fc-card" id="fc-card" title="クリックで裏返す">
          <div class="fc-card-inner">
            <div class="fc-front" id="fc-front"></div>
            <div class="fc-back" id="fc-back"></div>
          </div>
        </div>

        <!-- ナビゲーション -->
        <div class="fc-nav">
          <button class="btn btn-secondary btn-sm" id="fc-prev">← 前</button>
          <span id="fc-counter" style="font-size:.9rem;color:var(--color-text-muted);">1 / 1</span>
          <button class="btn btn-secondary btn-sm" id="fc-next">次 →</button>
        </div>

        <!-- アクション -->
        <div class="fc-actions">
          <button class="btn btn-outline btn-sm" id="fc-unknown-btn">❌ まだ覚えていない</button>
          <button class="btn btn-primary btn-sm" id="fc-known-btn">✅ 覚えた！</button>
        </div>

        <!-- プログレス -->
        <div style="margin-top:20px;">
          <div style="display:flex;justify-content:space-between;font-size:.75rem;color:var(--color-text-muted);margin-bottom:4px;">
            <span>学習進捗</span>
            <span id="fc-pct">0%</span>
          </div>
          <div class="progress" style="height:8px;">
            <div class="progress-bar" id="fc-prog-bar" style="width:0%;transition:width .4s;"></div>
          </div>
        </div>
      </section>`;

    renderCard();
    updateProg();

    function updateProg() {
      const pct = Math.round(_known.size / GLOSSARY_DATA.length * 100);
      const pb = document.getElementById('fc-prog-bar');
      const pt = document.getElementById('fc-pct');
      if (pb) pb.style.width = pct + '%';
      if (pt) pt.textContent = pct + '%';
    }

    document.getElementById('fc-card').addEventListener('click', () => {
      document.getElementById('fc-card').classList.toggle('flipped');
      _flipped = !_flipped;
    });

    document.getElementById('fc-prev').addEventListener('click', () => {
      _idx = (_idx - 1 + _cards.length) % _cards.length;
      renderCard();
    });
    document.getElementById('fc-next').addEventListener('click', () => {
      _idx = (_idx + 1) % _cards.length;
      renderCard();
    });

    document.getElementById('fc-known-btn').addEventListener('click', () => {
      if (_cards[_idx]) {
        const term = _cards[_idx].term;
        if (_known.has(term)) { _known.delete(term); } else { _known.add(term); }
        saveKnown();
        updateProg();
        _idx = (_idx + 1) % Math.max(1, getCards().length);
        renderCard();
      }
    });
    document.getElementById('fc-unknown-btn').addEventListener('click', () => {
      _idx = (_idx + 1) % Math.max(1, _cards.length);
      renderCard();
    });

    document.getElementById('fc-cat').addEventListener('change', e => {
      _catFilter = e.target.value; _idx = 0; renderCard();
    });
    document.getElementById('fc-show-known').addEventListener('change', e => {
      _showKnown = e.target.checked; _idx = 0; renderCard();
    });

    // キーボード操作
    function fcKeyHandler(e) {
      if (e.key === ' ' || e.key === 'Enter') { document.getElementById('fc-card').click(); e.preventDefault(); }
      if (e.key === 'ArrowRight') document.getElementById('fc-next').click();
      if (e.key === 'ArrowLeft')  document.getElementById('fc-prev').click();
      if (e.key === 'k' || e.key === 'K') document.getElementById('fc-known-btn').click();
    }
    document.removeEventListener('keydown', window._fcKeyHandler);
    window._fcKeyHandler = fcKeyHandler;
    document.addEventListener('keydown', fcKeyHandler);
  }

  // ─── 学習レポート ─────────────────────────────────── //
  function renderReport() {
    const stats    = Store.getOverallStats();
    const catStats = Store.getCategoryStats();
    const badges   = Store.getEarnedBadges().filter(b => b.earned);
    const weak     = Store.getWeakQuestions(10);
    const recent   = Store.getRecentSessions(10);
    const today    = new Date().toLocaleDateString('ja-JP', { year:'numeric', month:'long', day:'numeric' });

    const catRows = catStats.map(c => {
      const acc = c.attempts > 0 ? c.accuracy : null;
      const bar = acc !== null ? `<div style="height:8px;background:#e9ecef;border-radius:4px;margin-top:4px;"><div style="height:8px;width:${acc}%;background:${categoryColor(c.id)};border-radius:4px;"></div></div>` : '';
      return `
        <tr>
          <td style="padding:6px 8px;">${c.name}</td>
          <td style="padding:6px 8px;text-align:center;">${c.attempts}</td>
          <td style="padding:6px 8px;text-align:center;">${c.correct}</td>
          <td style="padding:6px 8px;min-width:120px;">${acc !== null ? acc + '%' : '未解答'}${bar}</td>
        </tr>`;
    }).join('');

    const weakRows = weak.map(q => `
      <tr>
        <td style="padding:6px 8px;font-size:.8rem;">${q.question.slice(0, 55)}…</td>
        <td style="padding:6px 8px;text-align:center;">${q.categoryName}</td>
        <td style="padding:6px 8px;text-align:center;">${q.attempts}</td>
        <td style="padding:6px 8px;text-align:center;">${Math.round(q.correctRate * 100)}%</td>
      </tr>`).join('');

    mount(`
      <div class="page fade-in report-page">
        <div class="container" style="max-width:800px;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;flex-wrap:wrap;gap:12px;">
            <div>
              <h1 style="font-size:1.5rem;font-weight:700;margin:0;">📊 学習レポート</h1>
              <p style="color:var(--color-text-muted);margin:4px 0 0;font-size:.875rem;">出力日: ${today}</p>
            </div>
            <div style="display:flex;gap:8px;" class="no-print">
              <button class="btn btn-primary btn-sm" onclick="window.print()">🖨 印刷 / PDF保存</button>
              <a href="#/dashboard" class="btn btn-secondary btn-sm">← ダッシュボードへ</a>
            </div>
          </div>

          <!-- 総合成績 -->
          <div class="report-section">
            <h2 class="report-section__title">総合成績</h2>
            <div class="report-summary-grid">
              <div class="report-summary-item">
                <div class="report-summary-value">${stats.totalAttempts}</div>
                <div class="report-summary-label">総回答数</div>
              </div>
              <div class="report-summary-item">
                <div class="report-summary-value">${stats.accuracy}%</div>
                <div class="report-summary-label">全体正答率</div>
              </div>
              <div class="report-summary-item">
                <div class="report-summary-value">${stats.totalAttempted}</div>
                <div class="report-summary-label">挑戦問題数</div>
              </div>
              <div class="report-summary-item">
                <div class="report-summary-value">${stats.streak}日</div>
                <div class="report-summary-label">連続学習日数</div>
              </div>
              <div class="report-summary-item">
                <div class="report-summary-value">${stats.sessionsCount}</div>
                <div class="report-summary-label">演習回数</div>
              </div>
              <div class="report-summary-item">
                <div class="report-summary-value">${badges.length}</div>
                <div class="report-summary-label">バッジ獲得数</div>
              </div>
            </div>
          </div>

          <!-- 分野別 -->
          <div class="report-section">
            <h2 class="report-section__title">分野別正答率</h2>
            <table class="report-table">
              <thead>
                <tr><th>分野</th><th>回答数</th><th>正解数</th><th>正答率</th></tr>
              </thead>
              <tbody>${catRows}</tbody>
            </table>
          </div>

          <!-- レーダーチャート -->
          <div class="report-section">
            <h2 class="report-section__title">弱点レーダーチャート</h2>
            ${buildRadarChart(catStats)}
          </div>

          <!-- 弱点問題 -->
          ${weak.length > 0 ? `
          <div class="report-section">
            <h2 class="report-section__title">苦手問題（正答率 60% 未満）</h2>
            <table class="report-table">
              <thead><tr><th>問題</th><th>分野</th><th>回答</th><th>正答率</th></tr></thead>
              <tbody>${weakRows}</tbody>
            </table>
          </div>` : ''}

          <!-- バッジ -->
          ${badges.length > 0 ? `
          <div class="report-section">
            <h2 class="report-section__title">獲得バッジ</h2>
            <div style="display:flex;flex-wrap:wrap;gap:12px;">
              ${badges.map(b => `
                <div style="display:flex;align-items:center;gap:6px;padding:8px 12px;background:var(--color-surface-2);border-radius:8px;">
                  <span style="font-size:1.25rem;">${b.icon}</span>
                  <span style="font-size:.85rem;font-weight:600;">${b.name}</span>
                </div>`).join('')}
            </div>
          </div>` : ''}

          <!-- 直近セッション -->
          ${recent.length > 0 ? `
          <div class="report-section">
            <h2 class="report-section__title">直近 ${recent.length} 回の演習</h2>
            <table class="report-table">
              <thead><tr><th>日時</th><th>モード</th><th>問題数</th><th>正解</th><th>正答率</th><th>時間</th></tr></thead>
              <tbody>
                ${recent.map(s => {
                  const d = new Date(s.date);
                  const dateStr = `${d.getMonth()+1}/${d.getDate()} ${d.getHours()}:${String(d.getMinutes()).padStart(2,'0')}`;
                  const modeLabel = s.mode === 'mock_exam' ? '本番模擬' : s.mode === 'exam' ? '模擬試験' : s.mode === 'category' ? '分野別' : s.mode === 'weak' ? '弱点集中' : 'ランダム';
                  const acc = Math.round(s.correct / s.total * 100);
                  return `<tr>
                    <td style="padding:5px 8px;font-size:.8rem;">${dateStr}</td>
                    <td style="padding:5px 8px;font-size:.8rem;">${modeLabel}</td>
                    <td style="padding:5px 8px;text-align:center;">${s.total}</td>
                    <td style="padding:5px 8px;text-align:center;">${s.correct}</td>
                    <td style="padding:5px 8px;text-align:center;font-weight:700;color:${acc>=60?'#2F9E44':'#E03131'};">${acc}%</td>
                    <td style="padding:5px 8px;text-align:center;">${fmtTime(s.durationSec||0)}</td>
                  </tr>`;
                }).join('')}
              </tbody>
            </table>
          </div>` : ''}

          <p style="text-align:center;color:var(--color-text-muted);font-size:.75rem;margin-top:24px;" class="no-print">
            応用情報技術者試験 攻略サイト — ${today} 出力
          </p>
        </div>
      </div>
    `);
  }

  // ─── 公開 API ─────────────────────────────────────────
  return {
    renderHome, renderSubjects, renderSubjectDetail,
    renderQuizSetup, renderQuestion, renderResult,
    renderDashboard, renderExamInfo,
    renderGlossary, renderPlan, renderPmExam, renderCheatsheet,
    renderQuestions, renderFlashcard, renderReport, render404,
  };
})();
