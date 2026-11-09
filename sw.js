// Mo Focus service worker.
// It only caches app files for offline use. User data (settings, tasks, statistics) lives in
// localStorage, which a service worker cannot read or delete, so updates never touch it.
// When you change any app file, bump VERSION so phones fetch the new files.
const VERSION = 'mofocus-v7';
const FILES = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png', './icons/favicon-32.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('mofocus-') && k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

const sameOrigin = url => new URL(url).origin === self.location.origin;
const isFont = url => /^https:\/\/fonts\.(googleapis|gstatic)\.com\//.test(url);

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (!sameOrigin(req.url) && !isFont(req.url)) return; // music players and other services go straight to the network

  // The page itself: network first, so a new version shows up on the next open; cached copy when offline.
  if (req.mode === 'navigate' || (sameOrigin(req.url) && /\/(index\.html)?$/.test(new URL(req.url).pathname))) {
    e.respondWith(fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put('./index.html', copy)); }
      return res;
    }).catch(() => caches.match('./index.html').then(r => r || caches.match('./'))));
    return;
  }

  // Everything else: cache first, then network.
  e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => {
    if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
    return res;
  })));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({type: 'window'}).then(cs => cs.length ? cs[0].focus() : self.clients.openWindow('./')));
});
