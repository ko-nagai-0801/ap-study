/* =====================================================
   service-worker.js — PWA キャッシュ管理
   ===================================================== */

const CACHE_NAME = 'ap-study-v1';

const STATIC_ASSETS = [
  '/ap-study/',
  '/ap-study/index.html',
  '/ap-study/assets/css/style.css',
  '/ap-study/assets/js/data.js',
  '/ap-study/assets/js/store.js',
  '/ap-study/assets/js/router.js',
  '/ap-study/assets/js/pages.js',
  '/ap-study/assets/js/main.js',
  '/ap-study/manifest.json',
];

// ─── インストール：静的アセットをキャッシュ ──────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// ─── アクティベート：古いキャッシュを削除 ───────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// ─── フェッチ：キャッシュファースト戦略 ─────────────
self.addEventListener('fetch', event => {
  // POST リクエストはキャッシュしない
  if (event.request.method !== 'GET') return;

  // Google Fonts 等の外部リソースはネットワーク優先
  if (!event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
    return;
  }

  // 静的アセット：キャッシュファースト
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200) return response;
        const toCache = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, toCache));
        return response;
      });
    })
  );
});
