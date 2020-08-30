const filesToCache = [
	"Taipei.htm",
	"Taipei.json",
	"Taipei.png",
	"TaipeiFavIcon_16x16.png",
	"TaipeiFavIcon_192x192.png",
	"TaipeiFavIcon_512x512.png",
	"TaipeiGame.htm",
	"TaipeiGame.js",
	"TaipeiShare.png"
];

const staticCacheName = "taipei-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});