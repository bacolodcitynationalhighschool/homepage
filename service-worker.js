self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("pwa-cache-v1").then((cache) => {
            return cache.addAll([
                "/homepage/",  // Ensure this matches your GitHub Pages URL
                "/homepage/index.html",
                "/homepage/style.css",
                "/homepage/script.js",
                "/homepage/manifest.json",
                "/homepage/logo192.png",  // Adjust this to your icon file
                "/homepage/logo512.png",
            ]);
        })
    );
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== "pwa-cache-v1") {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
