const CACHE_NAME = "bba-school-app-v2";

const filesToCache = [
   "index.html",
    "calendar.html",
    "announcements.html",
    "style.css",
    "logo-e1673281046458.png"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      return response || fetch(event.request);
    })
  );
});
