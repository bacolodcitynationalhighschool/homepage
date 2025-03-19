self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("pwa-cache").then((cache) => {
      return cache.addAll([
        "/homepage/",
        "/homepage/index.html",
        "/homepage/styles.css",
        "/homepage/script.js",
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
      ]);
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
