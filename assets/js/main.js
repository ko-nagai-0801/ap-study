/* =====================================================
   main.js — アプリ初期化
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ─── テーマ初期化 ────────────────────────────────────
  const savedTheme = Store.getSetting('theme') || 'light';
  applyTheme(savedTheme);

  // ─── ヘッダースクロール ───────────────────────────────
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  // ─── テーマトグル ────────────────────────────────────
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const curr = document.documentElement.dataset.theme;
    const next = curr === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    Store.setSetting('theme', next);
  });

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    const icon = document.getElementById('theme-icon');
    if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  // ─── モバイルドロワー ─────────────────────────────────
  const drawer   = document.getElementById('mobile-drawer');
  const overlay  = document.getElementById('overlay');
  const hamburger = document.getElementById('nav-hamburger');
  const closeBtn = document.getElementById('drawer-close');

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('show');
    drawer.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('show');
    drawer.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
  drawer.querySelectorAll('.drawer__link').forEach(a => {
    a.addEventListener('click', closeDrawer);
  });

  // Escape キーでドロワーを閉じる
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDrawer();
  });

  // ─── ローディング画面を非表示 ─────────────────────────
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.style.display = 'none';
  }

  // ─── 全文検索オーバーレイ ─────────────────────────
  const searchOverlay = document.getElementById('search-overlay');
  const searchInput   = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  function openSearch() {
    searchOverlay.classList.add('open');
    searchInput.value = '';
    renderSearchResults('');
    searchInput.focus();
  }
  function closeSearch() {
    searchOverlay.classList.remove('open');
    searchInput.blur();
  }

  // 検索インデックス構築
  function buildIndex() {
    const idx = [];
    SUBJECTS_DATA.forEach(s => {
      idx.push({ type: 'subject', icon: s.icon, title: s.name, sub: s.nameEn, href: `#/subjects/${s.id}`, q: s.name + ' ' + s.nameEn + ' ' + s.description });
    });
    QUESTIONS_DATA.forEach(q => {
      idx.push({ type: 'question', icon: '✏️', title: q.question.slice(0, 50) + (q.question.length > 50 ? '…' : ''), sub: q.categoryName + ' · ' + (q.year || '') + '年 · 難易度' + q.difficulty, href: null, q: q.question + ' ' + q.explanation + ' ' + q.tags.join(' '), data: q });
    });
    GLOSSARY_DATA.forEach(g => {
      idx.push({ type: 'glossary', icon: '📖', title: g.term, sub: g.category + ' — ' + g.definition.slice(0, 50) + '…', href: '#/glossary', q: g.term + ' ' + g.definition });
    });
    return idx;
  }
  let _searchIdx = null;

  function renderSearchResults(query) {
    if (!_searchIdx) _searchIdx = buildIndex();
    const q = query.trim().toLowerCase();
    if (!q) {
      searchResults.innerHTML = '<div class="search-empty">キーワードを入力してください</div>';
      return;
    }
    const hits = _searchIdx.filter(item => item.q.toLowerCase().includes(q)).slice(0, 12);
    if (hits.length === 0) {
      searchResults.innerHTML = '<div class="search-empty">「' + query + '」に一致する結果が見つかりません</div>';
      return;
    }
    searchResults.innerHTML = hits.map((item, i) => `
      <div class="search-result-item" data-idx="${i}" data-href="${item.href || ''}" data-type="${item.type}" tabindex="-1">
        <span class="search-result-icon">${item.icon}</span>
        <span class="search-result-body">
          <div class="search-result-title">${item.title}</div>
          <div class="search-result-sub">${item.sub}</div>
        </span>
        <span class="badge badge-neutral search-result-badge" style="font-size:.7rem;">
          ${{ subject:'分野', question:'問題', glossary:'用語集' }[item.type]}
        </span>
      </div>
    `).join('');
    _searchHits = hits;
    _searchActive = -1;

    searchResults.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('click', () => activateResult(+el.dataset.idx));
    });
  }

  let _searchHits = [];
  let _searchActive = -1;

  function activateResult(idx) {
    const item = _searchHits[idx];
    if (!item) return;
    if (item.href) {
      location.hash = item.href.replace('#', '');
    } else if (item.type === 'question' && item.data) {
      // クイズセットアップに遷移（カテゴリ絞り込み）
      Router.navigate('/quiz', { category: item.data.category });
    }
    closeSearch();
  }

  searchInput.addEventListener('input', () => renderSearchResults(searchInput.value));

  searchInput.addEventListener('keydown', e => {
    const items = searchResults.querySelectorAll('.search-result-item');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      _searchActive = Math.min(_searchActive + 1, items.length - 1);
      items.forEach((el, i) => el.classList.toggle('active', i === _searchActive));
      if (items[_searchActive]) items[_searchActive].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      _searchActive = Math.max(_searchActive - 1, 0);
      items.forEach((el, i) => el.classList.toggle('active', i === _searchActive));
      if (items[_searchActive]) items[_searchActive].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter') {
      if (_searchActive >= 0) activateResult(_searchActive);
      else if (_searchHits.length > 0) activateResult(0);
    }
  });

  document.getElementById('search-icon-btn').addEventListener('click', openSearch);
  searchOverlay.addEventListener('click', e => { if (e.target === searchOverlay) closeSearch(); });
  document.addEventListener('keydown', e => {
    if (e.key === '/' && !searchOverlay.classList.contains('open') &&
        !['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) {
      e.preventDefault(); openSearch();
    }
    if (e.key === 'Escape' && searchOverlay.classList.contains('open')) closeSearch();
  });

  // ─── ルーター起動 ────────────────────────────────────
  Router.init();
});
