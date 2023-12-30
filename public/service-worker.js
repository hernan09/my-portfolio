// public/service-worker.js
const cacheName = 'portfolio-cache-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/static/css/main.chunk.css',
  '/static/js/bundle.js',
  '/static/js/main.chunk.js',
  '/favicon.ico',
  '/logo192.png',
  '/logo512.png',
];

// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
