/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","63d7cbb4a53f9d9892efa8ffaa400799"],["CORS-JSONP/index.html","17b594db4aa66a6fb1d51ceec56d727a"],["JVM-summary/index.html","d6c9fc8aac418625ebcccb3e67e646f8"],["algorithm-sort/index.html","e8d7e866ed4cf6de50f9400ce2ef4294"],["algorithm/index.html","c0847071d41cc789495ca4d63eea376b"],["archives/2017/09/index.html","d6ce1a1dea66d9d954136f7f1f40657b"],["archives/2017/12/index.html","7077ad106cfaed351de6fc854d8f44fe"],["archives/2017/index.html","326fb3482fdfb6458a167bdf607fbedb"],["archives/2018/03/index.html","14ae88e28c99addedd228934905dc461"],["archives/2018/08/index.html","c4656b07609ad68cc60a1564d7037b5d"],["archives/2018/09/index.html","61503dc024ccbc49138cd3707a8807c9"],["archives/2018/10/index.html","e76dc634f96402c5a8423ef02f3c5ff9"],["archives/2018/index.html","3ddb5b55bcf36e0c0f160ab736e80800"],["archives/2018/page/2/index.html","c80e5b7699619e9b93c40f1f2107998e"],["archives/2019/10/index.html","01a650b9cbb4ca21491b33f612faf8a2"],["archives/2019/index.html","6a2f9c25767a05d14d5a12889f2ea0bf"],["archives/2020/02/index.html","751c194a9f389ab3b88a6acaddfcb90e"],["archives/2020/index.html","47ad89388dc060ffbcd1b285190fd4bb"],["archives/index.html","942eb346841181eaf26d89ad21ceb469"],["archives/page/2/index.html","afed16ca053f9c04e4e614d5bddf4611"],["categories/Java/index.html","ffc53c254283f3d8ad532eb2f061224f"],["categories/Java/集合/index.html","8d871397599e85080524948bff84f30d"],["categories/Web/Spring/index.html","91b107a8e9e8803198771718bbd9b261"],["categories/Web/index.html","c58d498f76cf50709c864bcd44a1ba3e"],["categories/Web/前端/index.html","4d1b61075a6ed18c12469abc32e2058e"],["categories/Web/服务/index.html","3c36ed3174609372414b0f367322d16d"],["categories/algorithm/index.html","1fa69bac15c7baf5b7e8cd9b4491d1e4"],["categories/algorithm/leetcode/index.html","c3f64fd20d32de2a3d7d48a0be205d16"],["categories/algorithm/sort/index.html","3a5b22eb8003be4fdfe13309a0b8b5e2"],["categories/hexo/index.html","17b518ad7ee6ab0c21e35441aba4002e"],["categories/index.html","2b81113a3cd54ab0cbc5ad43061d36bb"],["categories/基础知识总结/JVM/index.html","c5bf7288c2ee58338976bb27ed27d4ad"],["categories/基础知识总结/Java-Web/index.html","c573d5f1827e8de2667b1f2c635a77f0"],["categories/基础知识总结/Java/index.html","eae8065ac5fb56672d1f6e7ea4c4c620"],["categories/基础知识总结/SQL/index.html","f1cb504e69ee5cb589e96575d969bd2e"],["categories/基础知识总结/index.html","20305318e18c9b9b86ac90c761bdff73"],["categories/基础知识总结/并发编程/index.html","e254c767b4ee30061f3aa470b9d58482"],["categories/基础知识总结/操作系统/index.html","21ae91f8f1c0ea471dd959cf49a0fbce"],["categories/基础知识总结/数据库/index.html","c8c77c1ce4e047ad02723ece3519b69c"],["categories/基础知识总结/计算机网络/index.html","8a0244defdf7fb69af70125cf5ac55d6"],["categories/设计模式/index.html","66e61a344e316c6c94532be8f6ef6e99"],["categories/随笔/index.html","35ca50a27d4023d26a7faffe94114556"],["css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["css/index.css","7cfc369f97c2871fd96c7afe2cb088ec"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["database-summary/index.html","5be99f5c3e18f6197a051bf0da537254"],["disaster-recovery/index.html","c5f07950868c09bb4a17f5ef89177efa"],["gallery/index.html","c673237b43e7cc2bf95696a853191921"],["hashMap/index.html","d9a214a22fa8bf75ba2945eb31844701"],["hello-world/index.html","d38e1d821b6910cfc97e892e61d1732e"],["images/icons/icon-144.png","77ff48fc0e9d1928e7de882687a2206b"],["images/icons/icon-192.png","84dc14588b23f97779da8f8b0969d4ad"],["images/icons/icon-36.png","5c953ea6f63a79f355784c3f9f895b70"],["images/icons/icon-48.png","8b51531a5c3dd42e5c67451b890c4472"],["images/icons/icon-72.png","bf9669545978443a03c14e07664dc885"],["images/icons/icon-96.png","7669c9f2e04be5935dd5b43832d3bd97"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","ec24d15abf572852d1c591faf13dfaf1"],["ioc-and-aop/index.html","979aec10b429d27d85fa6566c47c466b"],["java-concurrent-summary/index.html","5f8d03c36d2c2f9102ea31f2d024a466"],["java-summary/index.html","0ea6aad4d8945b28551d92afcf297fe6"],["java-web-summary/index.html","021814aab3d56d556f33527d3ada53d7"],["js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","911db4268f0f6621073afcced9e1bfef"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["network-summary/index.html","8633401d46a4d1d403c022ce2eff779e"],["page/2/index.html","c3f9087f599a390dcd4e1e298f6583cd"],["singleton-mode/index.html","58f928d94f885c95ebc9905bb8e03525"],["slides/index.html","003ab3eeaaafa13be9a38cf87c2ad504"],["sql-summary/index.html","7eb9ced901dd70b6a91878ea4389f2e8"],["system-summary/index.html","aec137e3755d5d0d2639fc0204a8c864"],["tags/JVM/index.html","5ca0d144ea498f1188a7797c18e8397a"],["tags/Java-Web/index.html","de894b335dda9e9cd513cd38a86275ad"],["tags/Java/index.html","b33520d85828db5279655580d762a363"],["tags/SQL/index.html","a0551e368643dc7a949e86132c180c98"],["tags/Spring/index.html","07f7d4aaef1f760b13b3d09551d0cc90"],["tags/Web/index.html","891344fa7fd65e2bd8be7d7b480a6f81"],["tags/hexo/index.html","27416d89bf455b11592201158bedcefc"],["tags/index.html","a8a807b5d49155906cc29f753e5c55bc"],["tags/前端/index.html","3b152b2375c905b14eb90f6ced362d29"],["tags/并发编程/index.html","4a4314ce41704e4f14c95c7699c82b37"],["tags/操作系统/index.html","07adca55b3b5e9e26aa0559cf46a60cc"],["tags/数据库/index.html","08461c80381936812eec5eab0f1116df"],["tags/算法/index.html","dee037802e4568898c3bf51a160b0b70"],["tags/计算机网络/index.html","51a0eed0a50ccc53acb1f0019de6106f"],["tags/设计模式/index.html","1f25627edd2cd0532a396c4e498afff9"],["tags/随笔/index.html","c07bbc766e641851cd9ddb4be9b3f484"],["view-for-internet/index.html","f7c41ed4dca8af0c92469f539cc04cf0"],["xss-and-csrf/index.html","d1e13a0f61823fcf808185a442ac8d9a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







