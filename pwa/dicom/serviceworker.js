var staticCacheName = "pwa";

const assets = [
  "manifest.json",
  "serviceworker.js",
  "index.html",
  "src/main.css",
  "src/main.js",
  "src/favicon.ico",
  "src/icon-192x192.png",
  "src/icon-512x512.png",
  "src/fflate.module.js",
  "src/lil-gui-module.min.js",
  "src/NRRDLoader.js",
  "src/stats.module.js",
  "src/three.js",
  "src/TrackballControls.js",
  "src/Volume.js",
  "src/VolumeSlice.js"
];

self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", function(event) {
  console.log(event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});