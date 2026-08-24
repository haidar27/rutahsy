const CACHE_NAME = 'rutasy-v1';

self.addEventListener('install', (event) => {
  // Langsung aktifkan service worker baru
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Langsung ambil alih kontrol halaman
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Biarkan semua request berjalan normal ke internet (Online Mode)
  event.respondWith(fetch(event.request));
});