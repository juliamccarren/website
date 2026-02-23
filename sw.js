const CACHE_NAME = 'julia-site-v1';
const ASSETS = [
    '/',
    window.location.pathname,
    '../js/tailwindcss.js',
    '../js/lucide.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});