'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "053d9437014748c35cfcf5c1e4024709",
"assets/assets/data/phrasal_verbs.json": "3f9a3ff76682b0f2981a1a32e7cd0209",
"assets/assets/fonts/SFProDisplay-Bold.ttf": "42d79eba974955740a95cc0fb71ca247",
"assets/assets/fonts/SFProDisplay-Light.ttf": "2cd731774226a9ab428ffdd82ff90825",
"assets/assets/fonts/SFProDisplay-Medium.ttf": "70830fa4b0f259734f7e52903f3efd59",
"assets/assets/fonts/SFProDisplay-Regular.ttf": "d09549c1ab4a5947a007561521e45da3",
"assets/assets/fonts/SFProDisplay-Semibold.ttf": "bfddc2a3b6bc31c9c25a8f391450dd00",
"assets/assets/images/dashboard/chat/ic_send.png": "d6b3c4215710317ea600b2dab39e39ab",
"assets/assets/images/dashboard/common/ic_back.png": "63d9fe3c8f10fb0fe5e85f6ca8260150",
"assets/assets/images/dashboard/home/a.png": "532257872e3ee893b115963e4f09ba37",
"assets/assets/images/dashboard/home/b.png": "314c5a3d13f47b9a538317ad88825214",
"assets/assets/images/dashboard/home/c.png": "281db72ddaabd81b6f176c351063f225",
"assets/assets/images/dashboard/home/d.png": "60b78c007733b2f0009e136cba6b771f",
"assets/assets/images/dashboard/home/e.png": "d0d1bfefeb916bf3b0e7364e08b7f0ab",
"assets/assets/images/dashboard/home/f.png": "f73879117d06fb067dbd13956dee9547",
"assets/assets/images/dashboard/home/g.png": "fb48c2aaf663100b48bf6abb49710949",
"assets/assets/images/dashboard/home/h.png": "13ee176858eee5e70e0f1caf005aad07",
"assets/assets/images/dashboard/home/i.png": "76060f59cab1c00b4787d23217adc9bd",
"assets/assets/images/dashboard/home/ic_avatar.png": "d3e293cf3af3865934a4dfce2f511ec6",
"assets/assets/images/dashboard/home/ic_back.png": "774ed6fb62c68adbe50cfa3980db7c25",
"assets/assets/images/dashboard/home/ic_cate.png": "3d6aa16fb30a04d67c6b84589e7b6b82",
"assets/assets/images/dashboard/home/ic_chat.png": "67a345d86fde8e5b6e986eb15e057652",
"assets/assets/images/dashboard/home/ic_close.png": "91b2d7aeeec0a38b8e6e8f07f46841c3",
"assets/assets/images/dashboard/home/ic_direction.png": "3d7e04ca3fd6663e67684106f460a9b2",
"assets/assets/images/dashboard/home/ic_dollar.png": "ca89a764d51df195801df66e03ebdecf",
"assets/assets/images/dashboard/home/ic_header_green.png": "0306cf8e15150a51b2055c42b07932cd",
"assets/assets/images/dashboard/home/ic_header_yellow.png": "b41374fde4ffe3befc27229f119c6552",
"assets/assets/images/dashboard/home/ic_job.png": "e095512f4aa3acaad74392afdb2a5c4c",
"assets/assets/images/dashboard/home/ic_location.png": "60eaef6407bb6accc145b9db0f81f5f9",
"assets/assets/images/dashboard/home/ic_location_grey.png": "bccda5ab2f6158309d961310664cb6ad",
"assets/assets/images/dashboard/home/ic_marker.png": "e74618dbadb6cbe90e0748c98a3fd802",
"assets/assets/images/dashboard/home/ic_phone.png": "2ad5c14acde069ad8dd9b4e5540c837f",
"assets/assets/images/dashboard/home/ic_saved.png": "9f5e65c4883e6c81d49d59f90be8a736",
"assets/assets/images/dashboard/home/ic_share.png": "8a09d4af63b0f4d677f305d1d9251133",
"assets/assets/images/dashboard/home/ic_unsave.png": "6fdae04fe0273e92fa4f34cb10bd06e3",
"assets/assets/images/dashboard/home/j.png": "8fc0427a8180bbab2a3eb23b59e4a4d0",
"assets/assets/images/dashboard/home/k.png": "88c7894f841951bbb5350f1d20328e1d",
"assets/assets/images/dashboard/home/l.png": "f34c6d14172b67153b72a72e89feff52",
"assets/assets/images/dashboard/home/m.png": "3fb812232c2709a2bdb0742a40fcc6c1",
"assets/assets/images/dashboard/home/n.png": "beb25da323643e7a4028ef389bbc56bb",
"assets/assets/images/dashboard/home/o.png": "a617dd9a8c741315af6fda068b26a4b8",
"assets/assets/images/dashboard/home/p.png": "61264c8068e6e11443d1e2bcf14cfaaf",
"assets/assets/images/dashboard/home/q.png": "4dbd1159cd32c68ab8dac5b4ce299b93",
"assets/assets/images/dashboard/home/r.png": "6f9627bad323fa8f1d5d4bd5f4f6026e",
"assets/assets/images/dashboard/home/s.png": "5e46598f3d4eb631695f7a2c57599af3",
"assets/assets/images/dashboard/home/t.png": "6b8940281d39846e50dbdd1ee0a1b0ec",
"assets/assets/images/dashboard/home/u.png": "bbfb8f5cf24c9c490ec0795503263886",
"assets/assets/images/dashboard/home/v.png": "8c20148b1a3446456ce29041e54d9bc9",
"assets/assets/images/dashboard/home/w.png": "8179ae61030813d252e8a91e007dc70c",
"assets/assets/images/dashboard/home/x.png": "b76484c4914e6432d2b3f8b4505f644b",
"assets/assets/images/dashboard/home/y.png": "4152d13a3dce1c9074d53a2ccdc21c59",
"assets/assets/images/dashboard/home/z.png": "24c8b9d231e78918f4611e0344fd21fa",
"assets/assets/images/dashboard/menu/menu_chat_active.png": "c9b4dda5a4f522fee20e64e7fca93b3d",
"assets/assets/images/dashboard/menu/menu_chat_inactive.png": "93a4af0e736381e32a4ec8f78bce6727",
"assets/assets/images/dashboard/menu/menu_home_active.png": "993c45fec3b1812c0deecc7cf6041b44",
"assets/assets/images/dashboard/menu/menu_home_active_2.png": "076cb5b354c2b2d64f1fbc422c19ce9b",
"assets/assets/images/dashboard/menu/menu_home_inactive.png": "eb8f9e779fb3cd1022a79b2d7074e5a0",
"assets/assets/images/dashboard/menu/menu_home_inactive_2.png": "f36bb8c3bde879cdad39fa8379844101",
"assets/assets/images/dashboard/menu/menu_post_job.png": "5a8cbc5eddaf2196cd1a6db9e5553e81",
"assets/assets/images/dashboard/menu/menu_profile_active.png": "cb5369e227865888dd3c58c4e0f71488",
"assets/assets/images/dashboard/menu/menu_profile_active_2.png": "5c4f03eebabb8b21552262d9619f445f",
"assets/assets/images/dashboard/menu/menu_profile_inactive.png": "09878601c322981be38dcefcfae790d5",
"assets/assets/images/dashboard/menu/menu_profile_inactive_2.png": "a3058b60aa44cb1591472b0150c1f2a6",
"assets/assets/images/dashboard/menu/menu_save_active.png": "c557166e3ad5455823fbd152b26c434d",
"assets/assets/images/dashboard/menu/menu_save_active_2.png": "826b52ffccf3756f28acf00b64096a38",
"assets/assets/images/dashboard/menu/menu_save_inactive.png": "7e59f8b6faefd7763a436379950a1f4c",
"assets/assets/images/dashboard/menu/menu_save_inactive_2.png": "fde2f27deadb794f9ebfc938fcf5e182",
"assets/assets/images/dashboard/menu/menu_search_active.png": "699efa53117f44544e0501d97db48015",
"assets/assets/images/dashboard/menu/menu_search_inactive.png": "bf404b40d8709c0eb4ecea15ffe9187e",
"assets/assets/images/dashboard/profile/ic_arrow_right.png": "2df31cc886f67dfb0cbb82057efdb6af",
"assets/assets/images/dashboard/profile/ic_check.png": "38466a42fcff326bd98dc4d9f42a0969",
"assets/assets/images/dashboard/profile/ic_edit.png": "935d59696b2013d7ad463f8ccdcc0efa",
"assets/assets/images/dashboard/profile/ic_edit_avatar.png": "faf9bb1e5c404ad315d340a266a0ff11",
"assets/assets/images/dashboard/profile/ic_email.png": "e1409db03b10ffee09eefcdbdcbe6c8e",
"assets/assets/images/dashboard/profile/ic_have_noti.png": "86ff14a6f657285dfeb1dd640ea19f95",
"assets/assets/images/dashboard/profile/ic_noti.png": "40e806f5d0ce4715fcd7163b39707510",
"assets/assets/images/dashboard/profile/ic_phone.png": "83f9722e5df1fc8dc7e12ef240019e1a",
"assets/assets/images/dashboard/profile/ic_setting.png": "3215f8e00fd7a2b5615942c231ccf736",
"assets/assets/images/dashboard/profile/ic_usa.png": "f57336b26b98aa0003e05bf94c4bd4af",
"assets/assets/images/login/bg_login.jpg": "18af170a473a2cf78c9e1d0c068a9064",
"assets/assets/images/login/bg_login_1.jpg": "eea5d183113f987e9427150b15b838ff",
"assets/assets/images/login/bg_login_2.jpg": "da27b8ed44a7fe79b03504f013675f3d",
"assets/assets/images/login/bg_login_2_bk.jpg": "20b9fb45b1f9d3734e2b8cccb7deea90",
"assets/assets/images/login/bg_login_3.jpg": "219c0d79f74b1f13fe0ce8420ecc148d",
"assets/assets/images/login/bg_signup_2.jpg": "03813e761b1fe0669048382556d4d55d",
"assets/assets/images/login/ic_apple.png": "7fdf04e9dfffcac970981fc02eb94448",
"assets/assets/images/login/ic_fb.png": "b5367bb43ac7160672d7cb8839a68d25",
"assets/assets/images/login/ic_google.png": "0421e6c42d56f3634f1a98d9a03cb006",
"assets/assets/images/login/ic_jobs_rabbit.png": "c7f65e4b18896cd8081a63f992dc7c39",
"assets/assets/images/login/ic_password.png": "cad98b419f19e3c24d6bfa0c96403878",
"assets/assets/images/login/ic_username.png": "076ee0cd2a4f40704614bf3f2ac9a85b",
"assets/assets/images/login/logo_white.png": "eecf649e1f37dededc579a6411bdc357",
"assets/assets/images/login/logo_white_bk.png": "fdee543a4002e4803a015caf9d4abdf3",
"assets/FontManifest.json": "a72d921eed474080af569cd6b8bc1acb",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "95b5c534fc0b059fac2dfc08d51d0a26",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "16038404772ab08c1e660d5932edb342",
"/": "16038404772ab08c1e660d5932edb342",
"main.dart.js": "e23e011f59893d75775893e43295a762",
"manifest.json": "5ebbb811242141b90f7695ce7935ceab",
"version.json": "0d0deada7dc744dca13fc5f0ece577c1"
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
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
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
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
