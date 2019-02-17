// self.addEventListener('install', function(e) {
//   e.waitUntil(
//     caches.open('video-store').then(function(cache) {
//       return cache.addAll([
//         // '/signin/testApp/',
//         // '/signin/testApp/index.html',
//         // '/signin/testApp/index.js',
//         // '/signin/testApp/style.css',
//         // '/signin/testApp/images/fox1.jpg',
//         // '/signin/testApp/images/fox2.jpg',
//         // '/signin/testApp/images/fox3.jpg',
//         // '/signin/testApp/images/fox4.jpg'
//       ]);
//     })
//   );
//  });

//  self.addEventListener('fetch', function(e) {
//    console.log(e.request.url);
//    e.respondWith(
//      caches.match(e.request).then(function(response) {
//        return response || fetch(e.request);
//      })
//    );
//  });
