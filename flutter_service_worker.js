'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "42f0a9ababe2f0aae19c8983acacad9d",
".git/config": "87a422633c0393c29af4ee982ed22e39",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8bf43d16e02db2f0f075b8c027683f06",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "230163b285ed8960b5ce1a1e3757ee0b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e5abc2ef0a7cfb1ff5a331a21f987a34",
".git/logs/refs/heads/master": "e5abc2ef0a7cfb1ff5a331a21f987a34",
".git/logs/refs/remotes/origin/master": "cee979d38b6fd2f9f9c8ca36652a0478",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0f/77575174e4ec5224b4766f11ec337c6b358392": "774e02fc394b622fa1380cb2df9f2996",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1e/04a99fa13c86ab8cbb8fecbe68e23e78c7f3a0": "fb88f9c87fe7a26506d63c8abf28b135",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/b0335f751bb76a6b0b3702b63c17c0166e8196": "4b44b63fc813c169f633a15dbd3f132c",
".git/objects/2d/162ce46ad36f551fa87917ce2fe1a8b1ce2c07": "f834c1c8e4db071e3d73c832507a3f93",
".git/objects/2e/eddfef51a03033180bac4d2d46adf3de06fef4": "0b496f5a8c1cdfe5659b9d1a4ca44ed2",
".git/objects/2f/93d8725108a206848eb34d4d8cdaa5dfd80793": "11a52126e4ea2783b64baa482fb36378",
".git/objects/30/725d4ba4d3f701ad2c46779c92b91d9a5f53d8": "e575368cd28a3ca8b7e000b47d0c8da7",
".git/objects/34/8d24e22feb6b62daba8bfbf98530d020e5fa29": "be63a7a25d5e7489052bb361e716188a",
".git/objects/41/6695b573fdd36326168db830d62e1c929b4957": "717bbc37279d588ea9000d273a73d9f8",
".git/objects/44/eab5ba6549d58a3a18e5c57c600595e351bbf6": "68ba4b75915dca4c82b98601f0251722",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/6a6c51a241b350ec2dac18aa3654e6fcdc9637": "b8e9c598789c0f27b1e6ca9a10471301",
".git/objects/49/2efb8c7ce68533e07b94a4a0bf257e104c0b23": "8b5874ece36aa8ccaaedf3e147ea37a5",
".git/objects/4a/6b67b20e158e02dfce9b55173fc76899142e77": "69d7f5a1ac78d45ef2de5a518ac37746",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/52/69508ef1e368625e86d531b417136f0803e21c": "ba8f33e1f92ab88679d6a41909ad226a",
".git/objects/56/196c070bb1d34f917b457cc5d0aa1a6fe7d044": "68ff75ecf7cd049f0213886048bd161f",
".git/objects/5a/29d907f5f17137b81ac3024f5ad710c816dc3d": "abfb5646ea94266047f09ac2ab01d0a0",
".git/objects/71/3ff961fd1d128f229b4a09e72b4e18bbc1eb68": "2c22410c937136207069657458ea62f8",
".git/objects/79/a1031b0097ff8d200d25f726cb59c12f350e40": "78a360339972fc0caa962ab784342745",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/937e6f042f75c49f60d43b860a1ac5d7cd31b1": "0349f2305f8c1cff27631785c4af6e6d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/fdecccc342408849b4ff0fe0b9fc5e38be69f5": "12ac2949343d78c8d1ff1ab3dc597b3c",
".git/objects/91/b024ddaa0cd7430a02b48e59a2786cabf7367e": "c3b3b78b5e98df18ce10deb57c84ec34",
".git/objects/93/07913c40e822359cfb252bb006281c8e15aa5a": "13d90fcd12adedd504531982fe24b206",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/9a/128edd4ad8102ce7db0b9d4c00e46d25e654d3": "82c2eb4155ee6427cfabd2ac2340e310",
".git/objects/9d/5753defb4b253f34b4576a3d4a494c48dc1900": "eaa879f6e7868b3711810d70c22fc6de",
".git/objects/a7/719fd239eca370184153e970410e7117e463c1": "72aafc85d901cbf42d5f59d9169475b9",
".git/objects/a8/f0d4c8837132c8d892d7b6b64c7d7bfc806c6e": "35406fa57b933707e90758386ca1a109",
".git/objects/ac/97ea79147da22c11bc5f4f47defb29c25684c9": "063c717890bc9e9c5a942ea4eaa1c38f",
".git/objects/b1/b74ff26b8fc881263c8d5b9ad80db7e4335ed2": "1d2c4084fc966f3d54d48db0cbae1ce7",
".git/objects/b5/f9e05c5d93c84d08f1640244709b0f6d5b8a65": "484207349fbcca25dc2bbcc4d731712f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bd/571956531469f75c6c9e7fe8d9f0080452e6d5": "4d8ec16094210b77905f07af6fc99fbd",
".git/objects/c0/f2b86469e7d2cdfc0718211640fe203d2d6ca1": "c63c64693891cf5090faf28452215895",
".git/objects/d0/a5912947ceb27505c2661b95b18352688a4b73": "5c7526ce1c2c2423ec7c6459cc90b530",
".git/objects/d2/4ceb96804c5ff7b8344b9aff4c55d9c40c57c0": "29a21355f6d515288e58f94449b8f023",
".git/objects/d3/c3322a1489ff91f051da991a5a33eb6a595ee3": "6868607ec932c8099bb07357d5f12fc1",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e2/fb1ae3fc6a5878111678245fc70caa741f2e29": "7dbfbfe1b81918fc9fdb6adb82e59887",
".git/objects/ea/8da6af0dc3f9ad41db185b2af7477ac1363d18": "574d42571e3285b45b8bf0272baabafb",
".git/objects/ee/9aa6684cda5c7a59dc5478a87c0e14135fd9ba": "0677da0fea595fca1bf70ff774c386fb",
".git/objects/f1/fc7a88cd9b698840b8360ad6e97204d4ace1c6": "e6c04de880cf4642d01f62d166ae9ca0",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/ORIG_HEAD": "12b31d7185c3084eee548610904fe80c",
".git/refs/heads/master": "30010bfa8dde2862b5182043479f68db",
".git/refs/remotes/origin/master": "30010bfa8dde2862b5182043479f68db",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/NOTICES": "457f9375ebb528665f830240bc00a4e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "cc5325e470a834507c616f57edc23cd2",
"/": "cc5325e470a834507c616f57edc23cd2",
"main.dart.js": "2b6f375e0b0b9a84d02c033d19b25d9d",
"manifest.json": "27e66ada17efaa41f1d8a7c3357daa02",
"README.md": "797dd3699b9212ce8bd46d8c77b1a3de"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a 'reload' param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
