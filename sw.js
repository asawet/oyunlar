/* Oyun Merkezi service worker: keeps the hub and every game in games.json playable offline. */
const CACHE = "oyun-merkezi-v1";
const FONT_CACHE = "oyun-merkezi-fonts-v1";
const CORE = ["./", "games.json", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png"];
const NETWORK_WAIT_MS = 4000;
const FONT_HOSTS = new Set(["fonts.googleapis.com", "fonts.gstatic.com"]);
const url = p => new URL(p, self.registration.scope).href;
const clean = href => { const u = new URL(href); u.search = ""; u.hash = ""; return u.href; };

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE.map(p => new Request(url(p), { cache: "reload" })))).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith("oyun-merkezi-") && k !== CACHE && k !== FONT_CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("message", e => {
  const type = e.data && e.data.type;
  if (type === "sync") e.waitUntil(syncGames());
  if (type === "status") e.waitUntil(status().then(broadcast));
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const u = new URL(req.url);
  if (FONT_HOSTS.has(u.hostname)) { e.respondWith(fontFirst(req)); return; }
  if (u.origin === self.location.origin && req.url.startsWith(self.registration.scope)) e.respondWith(networkFirst(e));
});

async function networkFirst(e) {
  const req = e.request, cache = await caches.open(CACHE), key = clean(req.url);
  const hit = await cache.match(key);
  const net = fetch(req).then(async res => {
    if (res.ok && res.type === "basic") await cache.put(key, res.clone());
    return res;
  });
  e.waitUntil(net.catch(() => {}));
  if (hit) {
    const wait = new Promise(done => setTimeout(() => done(hit), NETWORK_WAIT_MS));
    return Promise.race([net.then(r => r.ok ? r : hit).catch(() => hit), wait]);
  }
  try { return await net; }
  catch (err) {
    if (req.mode === "navigate") { const home = await cache.match(url("./")); if (home) return home; }
    throw err;
  }
}

async function fontFirst(req) {
  const cache = await caches.open(FONT_CACHE), hit = await cache.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok || res.type === "opaque") await cache.put(req, res.clone());
  return res;
}

function localRefs(text, base, pattern) {
  const found = new Set();
  for (const m of text.matchAll(pattern)) {
    const ref = m[1].trim();
    if (!ref || /^(data:|blob:|#|mailto:|javascript:)/i.test(ref)) continue;
    try {
      const abs = clean(new URL(ref, base).href);
      if (abs.startsWith(base.slice(0, base.lastIndexOf("/") + 1))) found.add(abs);
    } catch (_) {}
  }
  return found;
}

async function get(href) {
  const res = await fetch(href, { cache: "no-cache" });
  if (!res.ok) throw new Error(href);
  return res;
}

async function cacheGame(cache, path) {
  const base = url(path), page = await get(base), html = await page.clone().text();
  const files = new Map([[base, page]]);
  for (const href of localRefs(html, base, /(?:src|href)\s*=\s*["']([^"']+)["']/gi)) {
    if (href === base || href.endsWith("/") || href.endsWith(".html")) continue;
    const res = await get(href);
    files.set(href, res);
    if (href.endsWith(".css")) {
      const css = await res.clone().text();
      for (const asset of localRefs(css, href, /url\(\s*["']?([^"')]+)["']?\s*\)/gi)) {
        if (!files.has(asset)) files.set(asset, await get(asset));
      }
    }
  }
  await Promise.all([...files].map(([href, res]) => cache.put(href, res)));
}

const gameList = list => (Array.isArray(list) ? list : []).filter(g => g && g.title && typeof g.path === "string" && g.path.startsWith("games/"));

async function syncGames() {
  const cache = await caches.open(CACHE);
  let games;
  try {
    const res = await get(url("games.json"));
    await cache.put(url("games.json"), res.clone());
    games = gameList(await res.json());
  } catch (_) { await broadcast(await status()); return; }

  broadcast({ type: "offline", state: "saving", ready: 0, total: games.length });
  let ready = 0;
  for (const g of games) {
    try { await cacheGame(cache, g.path); ready++; } catch (_) {}
    broadcast({ type: "offline", state: "saving", ready, total: games.length });
  }
  const keep = games.map(g => url(g.path)), root = url("games/");
  for (const req of await cache.keys()) {
    if (req.url.startsWith(root) && !keep.some(k => req.url.startsWith(k))) await cache.delete(req);
  }
  broadcast({ type: "offline", state: ready === games.length ? "ready" : "partial", ready, total: games.length });
}

async function status() {
  const cache = await caches.open(CACHE), saved = await cache.match(url("games.json"));
  const games = saved ? gameList(await saved.json().catch(() => [])) : [];
  let ready = 0;
  for (const g of games) if (await cache.match(url(g.path))) ready++;
  return { type: "offline", state: ready === games.length ? "ready" : "partial", ready, total: games.length };
}

async function broadcast(msg) {
  for (const c of await self.clients.matchAll({ includeUncontrolled: true, type: "window" })) c.postMessage(msg);
}
