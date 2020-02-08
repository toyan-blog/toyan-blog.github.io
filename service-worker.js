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

var precacheConfig = [["404.html","63d7cbb4a53f9d9892efa8ffaa400799"],["CORS-JSONP/index.html","326eeff3123323b6826197edb179bf3e"],["JVM-summary/index.html","d5a97dbcd220ec1920ac6ec91b6aaaf1"],["algorithm-sort/index.html","615b0ee2dfddf35e6beb01f6a1cb9d7a"],["algorithm/index.html","0bc79d9869cf87af1a6fdae0e7503cd2"],["archives/2017/09/index.html","c2619ab49c47cd38d8001e8cf59b6d26"],["archives/2017/12/index.html","ab66d77a5f3d29473f4173e3dd2425d1"],["archives/2017/index.html","c1206a2e788bfb7214928c0a4c7df72e"],["archives/2018/03/index.html","3afb6e68719ca7f3dc657ae703397e36"],["archives/2018/08/index.html","bdd2f43f5a580e7cdf4b911aa72181cb"],["archives/2018/09/index.html","c2cb8195da3c21cb3412ba1822930a10"],["archives/2018/10/index.html","6bb5953a4af6f04d2f04969009cf3781"],["archives/2018/index.html","7f1cf4ec94c07830a4ab77164cf58fdf"],["archives/2018/page/2/index.html","06a9539e003bcf13c6d08bf584dc04d9"],["archives/2019/08/index.html","47bbdddae13fd55ca0318cd3cfc1f42b"],["archives/2019/09/index.html","d9f8f6f7244d229e8187a4adc47b16e0"],["archives/2019/10/index.html","d993045c8df6472d851b6776900178be"],["archives/2019/11/index.html","cebc27b60692a8638faa31f822484d81"],["archives/2019/index.html","6c3dde5df831094a9fe225cc872c3807"],["archives/2020/01/index.html","89fd00d70e2833f5cc4690e383a1b8c5"],["archives/2020/02/index.html","65a263fddd932059c1cb5f98d2e1239a"],["archives/2020/index.html","d783495958a9e2af951f17d4e637e17e"],["archives/index.html","fed4f1722f923b28e54670b5ab4808c0"],["archives/page/2/index.html","d2a78160d7b669b7de67699b21c35235"],["archives/page/3/index.html","c17b8eb59928b063f82789a338e4d49c"],["categories/Java/index.html","2f71d574079355601a32f1c6728470b6"],["categories/Java/锁/index.html","3562286664616c2fafe45a3ac54ab7f8"],["categories/Java/集合/index.html","a8b1accae30ecfed670966cf52ec0dc3"],["categories/Web/Mybatis/index.html","2c2798d0736667f4de9b055219dc74cb"],["categories/Web/Spring/index.html","3846922a921fec710d3dc775f08876b8"],["categories/Web/index.html","f00fa15dc304dedb6ae157feb239ec87"],["categories/Web/前端/index.html","9a67b52d65c57c7db0414219fcdf9a24"],["categories/Web/服务/index.html","56006fab4c0a8a47ad9c35ba4dc748fc"],["categories/algorithm/index.html","9981dd71929ae6dd5787ceaf252d4101"],["categories/algorithm/leetcode/index.html","9a5820a665ba4076cd632c060f43890e"],["categories/algorithm/sort/index.html","6fd540ed962f875db7c14ac751f8b4bd"],["categories/hexo/index.html","6f3a5fe3612feeda50a0cd41c9446be0"],["categories/index.html","bd187c47a2c281f97a88200b67774ec6"],["categories/基础知识总结/JVM/index.html","d0d280c2d112a14545203a5846429f20"],["categories/基础知识总结/Java-Web/index.html","969bc6c42c2acdd75752efbd2e013b46"],["categories/基础知识总结/Java/index.html","e58888146df611d30392bd08ea5703cc"],["categories/基础知识总结/SQL/index.html","7801feb55715903d336603d5d1fc006e"],["categories/基础知识总结/index.html","6239578469c64238496fd36589180005"],["categories/基础知识总结/并发编程/index.html","fbdf564a446c519a259a9bdee862c6e9"],["categories/基础知识总结/操作系统/index.html","fe19481c8d4d9be9f8840ac9f764f2f3"],["categories/基础知识总结/数据库/index.html","8d113fa9417bc644f46ea6444ac42d20"],["categories/基础知识总结/计算机网络/index.html","74a370600c1cdb2c3006fd886e372b1e"],["categories/设计模式/index.html","f4b7721dffdc4b992aa5ed69e3bcf8a4"],["categories/随笔/index.html","585e9487c8c46afa0497a7f393de95f8"],["css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["css/index.css","7cfc369f97c2871fd96c7afe2cb088ec"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["database-summary/index.html","bd03cefe2b0c9d132b2f7024fed448f6"],["disaster-recovery/index.html","f20f8ab39ea09704bda4d318ade8d67b"],["distributed-lock/index.html","3c5992d9c65824c5360f245df5d09cc7"],["gallery/index.html","77f4dad477fd8546b789e65e7574a878"],["hashMap/index.html","d767b52290e68b9a32f7289b8a1b95ca"],["hello-world/index.html","3b101a80c7a6f9661cb439c300c14da0"],["images/icons/icon-144.png","77ff48fc0e9d1928e7de882687a2206b"],["images/icons/icon-192.png","84dc14588b23f97779da8f8b0969d4ad"],["images/icons/icon-36.png","5c953ea6f63a79f355784c3f9f895b70"],["images/icons/icon-48.png","8b51531a5c3dd42e5c67451b890c4472"],["images/icons/icon-72.png","bf9669545978443a03c14e07664dc885"],["images/icons/icon-96.png","7669c9f2e04be5935dd5b43832d3bd97"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","ac7c5ca88f0ff8609e6e2bbbb6dbfa81"],["ioc-and-aop/index.html","829c42f4f09f6e06ea95e805d88e7074"],["java-concurrent-summary/index.html","84578f1633efb43fc8ca3af119211788"],["java-summary/index.html","09015b1d5c328edb518dfe8ac5c1a120"],["java-web-summary/index.html","9b7b1d83bd9d46c718f74fcef51af1eb"],["js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","911db4268f0f6621073afcced9e1bfef"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["mybatis-cache/index.html","961768857840d738fe5a28cadc02f06e"],["network-summary/index.html","b28f049dff0c783b4e29846a35f7e211"],["page/2/index.html","12d3c636dbe6c6a0f3435373b8977913"],["page/3/index.html","ea11c83f6740bec03935954676fcd37b"],["service-avalanche/index.html","aeb3e22749c4168f7c85cc2fb6aac770"],["singleton-mode/index.html","a8282c845c19ed3a5e3bb3cbc281d9d8"],["slides/index.html","9cf3494df908ee18acb977e015018ee9"],["spring-logger/index.html","c6743bc4bcb74c2ac6a41d78a0fa4bf4"],["sql-summary/index.html","c1d46088e5dd97d7325d9a510abce764"],["system-summary/index.html","a0e8770f5f59739cbb58fba5157fa603"],["tags/JVM/index.html","97c3699a185d0dc9022fa212f89e5453"],["tags/Java-Web/index.html","639960b6933e065d7f034b022390f069"],["tags/Java/index.html","8c13e5843b8b49a284fe395cbfb39f30"],["tags/Mybatis/index.html","4fb933b356e8fd6e96f778c920d0d914"],["tags/SQL/index.html","cb4f873760362cf4aa5d71e7e316796d"],["tags/Spring/index.html","3ae1b1fbb1e26ef5bbd5677d43f1148b"],["tags/Web/index.html","15402d521c77c5f2b2b3745ea8b64fbe"],["tags/hexo/index.html","2af4bf30d76857b3147f7c7f6c3bd707"],["tags/index.html","b7a1c2f04285479182f4fd1f918199d1"],["tags/lock/index.html","6a41b7430338909067182be78368fa74"],["tags/log/index.html","56f49aeaf005298780402a91a3b8ddea"],["tags/前端/index.html","0fc82e2f8e8db36cfc010d6d3fe7e064"],["tags/并发编程/index.html","fbfdc6d26132992b8ce0cb9932f2d0ad"],["tags/操作系统/index.html","b5580d477a75ea96305568c153326f2a"],["tags/数据库/index.html","a21910a965f18c275363226da30bc9e8"],["tags/算法/index.html","92fcf930f81edc01c393eed1b7a570ec"],["tags/计算机网络/index.html","236559b27cf49bbe2440578ecbe87163"],["tags/设计模式/index.html","99c9cffb19815f7c37b388e35f36a198"],["tags/随笔/index.html","2bab776d08b936bf0500e2f33460f385"],["view-for-internet/index.html","69272283491504cea06aab602df70844"],["xss-and-csrf/index.html","ad2aa4a21e29d87b408a78a8c5a6c453"]];
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







