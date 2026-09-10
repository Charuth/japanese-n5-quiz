const CACHE = 'n5-quiz-v2';
const FILES = ['/japanese-n5-quiz/index.html', '/japanese-n5-quiz/index2.html'];

self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});