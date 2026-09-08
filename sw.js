self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('jarak-sekolah-v1').then((cache) => {
      return cache.addAll([
        './index.html',
        // Tambahkan file CSS/JS lain jika ingin di-cache secara offline
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
