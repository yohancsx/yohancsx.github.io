'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8002a8260361e630be895af57d82cc15",
".git/config": "87a422633c0393c29af4ee982ed22e39",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4934dd7478d2bf75a7c76a06f22b16a4",
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
".git/index": "78898c8cea82acd8464aaa3904dec8fe",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "497c6e9e45aca32b252c92274ee8fe85",
".git/logs/refs/heads/master": "497c6e9e45aca32b252c92274ee8fe85",
".git/logs/refs/remotes/origin/master": "02dfd4ca9c068b72a3974dcd51e93d81",
".git/objects/03/414a3db66d96d3dc201bf22a45b248597ea03d": "24c86aecafc28c64effb4d1b5e3b1711",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/3b1d2e289d0ded7a943adf9184babdc9cb0969": "4cb7b638d7f84fd9d10a57747ababd8e",
".git/objects/05/8ac3e1ff019ac0cc8ac3e97804317ea9c2327f": "0d4bbd5e2602fe711f7c344e37ce1764",
".git/objects/06/029d64457c0735898863a94f0bb21dac620103": "06b525774e91f814435e1baab41529f0",
".git/objects/0f/5495d1af100ac7887fcec1a3a8eeb32e521a85": "2f674f8c812f47cffecd5426c1257422",
".git/objects/0f/77575174e4ec5224b4766f11ec337c6b358392": "774e02fc394b622fa1380cb2df9f2996",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1e/04a99fa13c86ab8cbb8fecbe68e23e78c7f3a0": "fb88f9c87fe7a26506d63c8abf28b135",
".git/objects/1f/02b933523df610e48fa53543396a1dff52f179": "f6659d2792b3d0ba854b5ca512f67fc8",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/b0335f751bb76a6b0b3702b63c17c0166e8196": "4b44b63fc813c169f633a15dbd3f132c",
".git/objects/27/5d65b1eec105babcfabffe53ee6fe05df5a6b9": "a8cad7aeca91e546d82912c3f4a8feac",
".git/objects/27/dc7fe49211083c96ac4417e78f46f86ca15c67": "532d735ea445869fbb66005cb89efbb7",
".git/objects/29/b12914a89e512bbd03aa2772d53f2a2396adda": "69dea53bd85bce85a63c2ba4d4000619",
".git/objects/2c/a4c8e15017607492934854369ac9cc8e405f34": "c7d1a42752714ecb04040b77bdaa94e5",
".git/objects/2d/162ce46ad36f551fa87917ce2fe1a8b1ce2c07": "f834c1c8e4db071e3d73c832507a3f93",
".git/objects/2e/e888108d899e2b0c785b2e551e35d987d5d1f5": "c4033561d3a4bbc0de9777ca7701e496",
".git/objects/2e/ed8f966770fc9adf25de629e91db4bd9879060": "f99d3bcecb70601043f94c3beed450d5",
".git/objects/2e/eddfef51a03033180bac4d2d46adf3de06fef4": "0b496f5a8c1cdfe5659b9d1a4ca44ed2",
".git/objects/2f/93d8725108a206848eb34d4d8cdaa5dfd80793": "11a52126e4ea2783b64baa482fb36378",
".git/objects/30/725d4ba4d3f701ad2c46779c92b91d9a5f53d8": "e575368cd28a3ca8b7e000b47d0c8da7",
".git/objects/34/09af3a5402ac1bf6096e58ae51161915405620": "442e7a1ea5539483b7d38dd55a6a36b9",
".git/objects/34/24c7634c2610de56a7a5eaf350fea14c3ceabe": "42d27c59f8e37a4cfd39edf40df67e5b",
".git/objects/34/8d24e22feb6b62daba8bfbf98530d020e5fa29": "be63a7a25d5e7489052bb361e716188a",
".git/objects/36/b84503e331c770f56948ffd1fcfaab312dd6ae": "d93299a066931e217e2fa76429920796",
".git/objects/3a/17bf2ed99476c32812bd78282576fae251cb86": "4a6cd32deef3f2e66cd68f152c79b2bb",
".git/objects/3d/49095dfa7aad685ba0a2d010236c9abb0a0842": "420ef4c0c6778d2af0c00acb83460943",
".git/objects/3f/69f9ed319051d55568f8c0da4e6c19792a064e": "0c2e99c35dbc70006cc5a04481de95b1",
".git/objects/41/6695b573fdd36326168db830d62e1c929b4957": "717bbc37279d588ea9000d273a73d9f8",
".git/objects/44/eab5ba6549d58a3a18e5c57c600595e351bbf6": "68ba4b75915dca4c82b98601f0251722",
".git/objects/45/b4fdd391db940f1079f3c46dffd825fdbd3ea2": "bd25adab224f81957378554cca910715",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/6a6c51a241b350ec2dac18aa3654e6fcdc9637": "b8e9c598789c0f27b1e6ca9a10471301",
".git/objects/49/2efb8c7ce68533e07b94a4a0bf257e104c0b23": "8b5874ece36aa8ccaaedf3e147ea37a5",
".git/objects/4a/6b67b20e158e02dfce9b55173fc76899142e77": "69d7f5a1ac78d45ef2de5a518ac37746",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/52/69508ef1e368625e86d531b417136f0803e21c": "ba8f33e1f92ab88679d6a41909ad226a",
".git/objects/52/c67e68071e42a108be919b7e69b2f1950de4f5": "39f656a21ed5141cb33cb835c6ba0830",
".git/objects/56/196c070bb1d34f917b457cc5d0aa1a6fe7d044": "68ff75ecf7cd049f0213886048bd161f",
".git/objects/57/41ddc1af62e21cec6d022fddbfc7f0d182a010": "e7b72bf8a9fb343e603ee7310360550d",
".git/objects/58/02763106c31b7343c635388957c808a85b5c3b": "6dc5c83bbe0e551c336f34195a4816e0",
".git/objects/59/c0bdd61cb0e3ba41212790dfab1dcc94bb6863": "7e6a997e59efa1518181cd2a8ab669e2",
".git/objects/5a/29d907f5f17137b81ac3024f5ad710c816dc3d": "abfb5646ea94266047f09ac2ab01d0a0",
".git/objects/5d/721c7078b875528ddd9ee68ffc040e50dd9860": "6de77b45ac483b6c6c496fcc96a7da90",
".git/objects/60/d9eba18669b3d8375c193498e6eba4498be75c": "d725706e1565df0c108952231a8ef7d7",
".git/objects/62/3327f0375d8263e6a198b8d5222323ecb44c78": "66da71ed797bb86f29536e7961844618",
".git/objects/65/25c0e1d633bbe042e67850e05f09b5788f23ca": "9eab4ac473ab57373d78671357f51660",
".git/objects/69/094ac06b182dadbb49c879c44f193ad6b719bd": "4c23d08d5063aca44dfe9ff2ed3e13e8",
".git/objects/71/3ff961fd1d128f229b4a09e72b4e18bbc1eb68": "2c22410c937136207069657458ea62f8",
".git/objects/76/72eb3f209d35adf9d7268dd97151a84782b05a": "5b9e692a9e3716e4406e7e768ac45952",
".git/objects/77/179dd2c057c702b2bad810ecc53ab9441a6bbd": "165d0aa6427d67a10539f2915b8ea83e",
".git/objects/79/a1031b0097ff8d200d25f726cb59c12f350e40": "78a360339972fc0caa962ab784342745",
".git/objects/7c/11c0b277594db0d721da0a28ceef37b113ec28": "53094f831bf0d3b6e61a697bbc2748b5",
".git/objects/7d/f588d214a2e781f6c00bd293a7ffa0eba648d8": "ec2888676904b725ac1dd61cdd401d06",
".git/objects/80/09f67824fbd326f1e0b8db8fbe6f1bbddad894": "2336d6934ae3b561e0168ff89ec13ff6",
".git/objects/80/706e6fa0b5fab8f68f1a0f13f4a3fe72acb79b": "ea80202cfb09151bfaaf99be50c236fb",
".git/objects/80/8aa373cc1cf3355d2c8965ac1e449fd53bda9e": "597e9a3ffd7b78ec96adbd95d1271a14",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/83/ed9e6710ba716181e4d479d258cd596ef3799d": "a4c64f2e9ce6b2af6fb35a4c33986911",
".git/objects/84/7049fb8c07c31d11dcda64656d7d9ce1ff27c3": "eadc546840aa8aeb998bed7a7b0b469a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/9a4e93b070ae875d0ea8b04cf3693eda98e7df": "29cf8df4eaa43bd06ebb91ad957e06ae",
".git/objects/8a/937e6f042f75c49f60d43b860a1ac5d7cd31b1": "0349f2305f8c1cff27631785c4af6e6d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/fdecccc342408849b4ff0fe0b9fc5e38be69f5": "12ac2949343d78c8d1ff1ab3dc597b3c",
".git/objects/8d/69667b00ce432a85dc27f9e10e8e6c1a38b236": "5aac92e66d5c32fe3e0329ed6cf387b4",
".git/objects/91/b024ddaa0cd7430a02b48e59a2786cabf7367e": "c3b3b78b5e98df18ce10deb57c84ec34",
".git/objects/93/07913c40e822359cfb252bb006281c8e15aa5a": "13d90fcd12adedd504531982fe24b206",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/97/9728d08fbc0dae7334e5fbecdb4b828b97eefa": "1f65cb8c77a072d1f71006b9d497fd6a",
".git/objects/98/ad56b413e934d3364b03b0baab423a072f008a": "af65691bb72a1c3a2047166aad766d2f",
".git/objects/9a/128edd4ad8102ce7db0b9d4c00e46d25e654d3": "82c2eb4155ee6427cfabd2ac2340e310",
".git/objects/9a/2e858fc86e3e086f76e4ef408d501a23e9bb52": "3f7cc6c78e52d863c390cef8c174db23",
".git/objects/9d/5753defb4b253f34b4576a3d4a494c48dc1900": "eaa879f6e7868b3711810d70c22fc6de",
".git/objects/a1/02fb028b54890357b8d3ddf2d724e3d4145dc7": "0b6df5b9916416d9b47f5a42264d5450",
".git/objects/a3/b3c82ac9e5bd5dcd88a337e05e856da50f45a9": "b9859bab24d5a63930e287a2ab19af16",
".git/objects/a7/666b48cc79fb803bcfe50ec338e75fca273797": "87ec2d4f8261f65784e55e4039a1f4ac",
".git/objects/a7/719fd239eca370184153e970410e7117e463c1": "72aafc85d901cbf42d5f59d9169475b9",
".git/objects/a8/f0d4c8837132c8d892d7b6b64c7d7bfc806c6e": "35406fa57b933707e90758386ca1a109",
".git/objects/ac/97ea79147da22c11bc5f4f47defb29c25684c9": "063c717890bc9e9c5a942ea4eaa1c38f",
".git/objects/b1/b74ff26b8fc881263c8d5b9ad80db7e4335ed2": "1d2c4084fc966f3d54d48db0cbae1ce7",
".git/objects/b4/bdba1f6dfc2b36464a7fd5b82371dba7854c31": "1a6e29154150a073f0e46b8f08c2a41d",
".git/objects/b5/f9e05c5d93c84d08f1640244709b0f6d5b8a65": "484207349fbcca25dc2bbcc4d731712f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/477c1fe5a2a78cbdb929c0b4fe168fe8c5d280": "9d8cd4b32a9852998c5743bb105e6e50",
".git/objects/bd/571956531469f75c6c9e7fe8d9f0080452e6d5": "4d8ec16094210b77905f07af6fc99fbd",
".git/objects/c0/f2b86469e7d2cdfc0718211640fe203d2d6ca1": "c63c64693891cf5090faf28452215895",
".git/objects/c3/29d03f370f907919e2c372108a972329479b07": "34b16187907a7481423bbf564822daf2",
".git/objects/c6/48cce7fe3d7769fcb43e25cc3d466794bc5cbf": "3b28a8a785bf0d03df4bc40ebdaad20e",
".git/objects/cb/f4c4bc6c84319d56dd4c8e445098e8418c905a": "7b05581d54fdc66a2a76c863e90c069b",
".git/objects/ce/c00969c468a5de9852f55810ad32251fcced84": "c6b58359e928c4fcc227939853e8d1b6",
".git/objects/d0/a5912947ceb27505c2661b95b18352688a4b73": "5c7526ce1c2c2423ec7c6459cc90b530",
".git/objects/d2/4ceb96804c5ff7b8344b9aff4c55d9c40c57c0": "29a21355f6d515288e58f94449b8f023",
".git/objects/d3/c3322a1489ff91f051da991a5a33eb6a595ee3": "6868607ec932c8099bb07357d5f12fc1",
".git/objects/d8/b2e272c2d97896410f684b27bbb97d802f7ce1": "81665ca7684c44cee8d75b3bbe19677a",
".git/objects/da/0059eb16f90391a0f576073a833bce2e6371f2": "ce08d4439f1c174ad45c725b0e7b29a2",
".git/objects/da/78ef178463ab9072eaa647301a931f459c230e": "8d3369e6c5d18cfb7b63e762d17b3d50",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e0/4702bc7c5aff794ecd5ad03eefb86afe4b38ea": "8e50367b561240daded9e1bab7ea81cc",
".git/objects/e2/fb1ae3fc6a5878111678245fc70caa741f2e29": "7dbfbfe1b81918fc9fdb6adb82e59887",
".git/objects/e4/40081876df135f6d27f5cf764233f85ac6194b": "f62aaa149c5552e5da6461af2ba85e52",
".git/objects/e4/d1f214eef6d202b2b6a6d067a6ac1687e5f61c": "e7ad1cb8fbe15488a72ac479b313ab68",
".git/objects/e9/f1a6fb5d607edde4eb2d72bc6a0f05da3e639e": "a64b4f6a8d5e442c3543f06d69a6d68d",
".git/objects/ea/8da6af0dc3f9ad41db185b2af7477ac1363d18": "574d42571e3285b45b8bf0272baabafb",
".git/objects/ea/f83434a83c32292f89d53742c2963d6f25d049": "d9847ec20fa727d92c4b242577ce0d28",
".git/objects/ee/9674d33108c941990c2e533bc8c927d8b71b9c": "1b1bb101a078e3eea9e97e566e079192",
".git/objects/ee/9aa6684cda5c7a59dc5478a87c0e14135fd9ba": "0677da0fea595fca1bf70ff774c386fb",
".git/objects/f1/fc7a88cd9b698840b8360ad6e97204d4ace1c6": "e6c04de880cf4642d01f62d166ae9ca0",
".git/objects/f6/617c27b1ae3993f9ec91bbbdb4f7b7c405ea86": "4e64a4a0b3435c51e5b4bfbcc8cb5a3e",
".git/objects/f6/a06cb01239e0fe38a50ddb5d089c6bdbf5bcd6": "74ad8eff2c0cb19b1eb60f82d236dd31",
".git/objects/f7/7b018c6202acf1b6e6c0664918f05976a552dc": "11ce34c4c7b870b1924b279afad85779",
".git/objects/f9/693a13ce407a997f3d707d712a5d387e9906bd": "fa319753240a1b367adfb5842b7698f8",
".git/objects/f9/b2731cc26923c8d20ce2eeb7be6529b1b9ce68": "3fdea27f73e2324b6c503d0e7f4ad376",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fd/e622124c465ad1d08d40e6f48bd2ee1692a73f": "7d579b09af43d04025c3bd6ca671307e",
".git/ORIG_HEAD": "12b31d7185c3084eee548610904fe80c",
".git/refs/heads/master": "3c86dc0a20e3514462c45ab06d1fd2d5",
".git/refs/remotes/origin/master": "3c86dc0a20e3514462c45ab06d1fd2d5",
"assets/AssetManifest.json": "3cfdf9d02e7cb903df60dc2a02172552",
"assets/assets/images/035-google-plus.png": "7593f6c27c87666a0e19976347e4fc08",
"assets/assets/images/039-github.png": "b37b05a713d8eebcbb475119e587859b",
"assets/assets/images/045-facebook.png": "001c080bc3fe2c7cb7efd84eadab628d",
"assets/assets/images/fluttericon.png": "2160afacf4eca8e549c0b64e541ba3a7",
"assets/assets/images/icons8-flutter-50.png": "dd07eb3c2c7f03251cea89f7f8f5d02b",
"assets/assets/images/matlab-icon-png-3.png": "7452a9e3a2da12f9c2ffa4de03e715d4",
"assets/assets/images/moon.png": "5f0d1674397c5ea11700cc5043a17bf0",
"assets/assets/images/pngfuel.com.png": "2677bd7abf96260c3b2cd44c786dbbe6",
"assets/assets/images/production.png": "9c22146000ce34627517b32003eff3b9",
"assets/assets/images/python.png": "c64cae3355a3419b21d9deed16db1be2",
"assets/assets/images/robot.png": "468a945902701381a66d366f7947ca72",
"assets/assets/images/sun.png": "0115b6613cbf4326b0febe98dd384a7b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/NOTICES": "08a372e0ed61d048f65eeb1c905df75a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.ico": "c9183bb6f9ee8b1ab0f1d490a0db82ba",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/leaficon-192.png": "8507ed7215035b53f225e678af3f9529",
"icons/leaficon-512.png": "c64e4f066a38954dfcef2da8ae70188e",
"index.html": "cc5325e470a834507c616f57edc23cd2",
"/": "cc5325e470a834507c616f57edc23cd2",
"main.dart.js": "9208d433987dfdf8d1ef631b028dd75e",
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
