/**
 * NWU CMPG122 — Offline-First PWA Service Worker
 * Versioned app-shell cache with safe non-disruptive update handling
 * (never forces reloads during active examination sessions).
 */
const CACHE_NAME = 'cmpg122-shell-v9.2.1';
const APP_SHELL_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './js/data/definitions_data.js',
  './js/data/curriculum.js',
  './js/data/questions_bank.js',
  './js/data/code_labs_data.js',
  './js/data.js',
  './js/csharp_engine.js',
  './js/modules/icons_and_diagrams.js',
  './js/modules/persistence.js',
  './js/modules/analytics.js',
  './js/modules/definitions_engine.js',
  './js/modules/exam_engine.js',
  './js/modules/keyboard_shortcuts.js',
  './js/modules/question_renderer.js',
  './js/app.js',
  './js/telemetry.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith('cmpg122-shell-') && key !== CACHE_NAME)
          .map((oldKey) => caches.delete(oldKey))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) =>
      cache.match(event.request, { ignoreSearch: true }).then((cached) => {
        if (cached) {
          // Stale-while-revalidate background refresh for local shell files
          fetch(event.request)
            .then((resp) => {
              if (resp && resp.status === 200 && resp.type === 'basic') {
                cache.put(event.request, resp.clone());
              }
            })
            .catch(() => {});
          return cached;
        }

        return fetch(event.request)
          .then((resp) => {
            if (resp && resp.status === 200 && resp.type === 'basic') {
              cache.put(event.request, resp.clone());
            }
            return resp;
          })
          .catch(() => {
            if (event.request.mode === 'navigate') {
              return cache.match('./index.html');
            }
            return new Response('Offline', { status: 503, statusText: 'Offline' });
          });
      })
    )
  );
});
