self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('tanja-tom-wedding').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/index.html?homescreen=1',
                '/?homescreen=1',
                '/favicon.ico',
                '/style.css',
                '/manifest.json',
                'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css',
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});