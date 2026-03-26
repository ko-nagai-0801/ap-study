/* =====================================================
   router.js — ハッシュルーター
   ===================================================== */

const Router = (() => {
  // ─── ルート定義 ──────────────────────────────────────
  const routes = {
    '/':           () => Pages.renderHome(),
    '/subjects':   () => Pages.renderSubjects(),
    '/quiz':       () => Pages.renderQuizSetup(),
    '/result':     () => Pages.renderResult(),
    '/dashboard':  () => Pages.renderDashboard(),
    '/exam-info':  () => Pages.renderExamInfo(),
    '/glossary':   () => Pages.renderGlossary(),
    '/plan':       () => Pages.renderPlan(),
    '/pm-exam':    () => Pages.renderPmExam(),
    '/cheatsheet':  () => Pages.renderCheatsheet(),
    '/questions':   () => Pages.renderQuestions(),
    '/flashcard':   () => Pages.renderFlashcard(),
  };

  // 動的ルート: /subjects/:id
  function matchDynamic(path) {
    const m = path.match(/^\/subjects\/(.+)$/);
    if (m) return { handler: () => Pages.renderSubjectDetail(m[1]), params: { id: m[1] } };
    return null;
  }

  // ─── 現在のルート取得 ────────────────────────────────
  function getPath() {
    const hash = location.hash || '#/';
    return hash.replace(/^#/, '').split('?')[0] || '/';
  }

  function getQuery() {
    const hash = location.hash || '#/';
    const qs = hash.split('?')[1] || '';
    return Object.fromEntries(new URLSearchParams(qs));
  }

  // ─── ルーティング実行 ────────────────────────────────
  function resolve() {
    const path = getPath();
    const app  = document.getElementById('app');
    if (!app) return;

    // アクティブナビリンク更新
    updateNavLinks(path);

    // ルート検索
    if (routes[path]) {
      routes[path]();
    } else {
      const dynamic = matchDynamic(path);
      if (dynamic) { dynamic.handler(); }
      else { Pages.render404(); }
    }

    // ページトップへスクロール
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function updateNavLinks(path) {
    document.querySelectorAll('.nav__link, .drawer__link').forEach(el => {
      const href = (el.getAttribute('href') || '').replace('#', '');
      const isActive = href === path || (href !== '/' && path.startsWith(href));
      el.classList.toggle('active', isActive);
    });
  }

  // ─── ナビゲーション ───────────────────────────────────
  function navigate(path, query = {}) {
    const qs = new URLSearchParams(query).toString();
    location.hash = qs ? `${path}?${qs}` : path;
  }

  // ─── 初期化 ──────────────────────────────────────────
  function init() {
    window.addEventListener('hashchange', resolve);
    resolve();
  }

  return { init, navigate, getPath, getQuery };
})();
