/* AFRIKAPITAL — Service Worker
   Stratégie "réseau d'abord" (network-first) :
   - En ligne : on prend toujours la DERNIÈRE version (jamais de version figée).
   - Hors-ligne : on sert la dernière version mise en cache.
   Ne met en cache QUE les fichiers de l'appli (même origine).
   Laisse passer Supabase, les CDN et WhatsApp sans y toucher.
*/
const CACHE = "afrikapital-v4";
const ASSETS = [
  "./app.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon.png",
  "./icon-maskable-192.png",
  "./icon-maskable-512.png"
];

self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS).catch(() => {})));
});

self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return; // écritures (Supabase) : réseau direct
  let url;
  try { url = new URL(req.url); } catch (_) { return; }
  if (url.origin !== self.location.origin) return; // Supabase / CDN / WhatsApp : pas de cache

  e.respondWith((async () => {
    try {
      const fresh = await fetch(req);
      if (fresh && fresh.status === 200) {
        const cache = await caches.open(CACHE);
        cache.put(req, fresh.clone());
      }
      return fresh;
    } catch (err) {
      const cached = await caches.match(req);
      if (cached) return cached;
      if (req.mode === "navigate") {
        const home = await caches.match("./app.html");
        if (home) return home;
      }
      throw err;
    }
  })());
});
