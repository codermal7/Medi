self.addEventListener("fetch", (function(e) {
    if (navigator.onLine) return !0;
    e.respondWith(caches.match(e.request).then((function(t) {
        return t || fetch(e.request)
    })))
}));