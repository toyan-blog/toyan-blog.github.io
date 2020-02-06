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

var precacheConfig = [["404.html","63d7cbb4a53f9d9892efa8ffaa400799"],["CORS-JSONP/index.html","f88dce956700b470ba7ac3ab6749d02a"],["JVM-summary/index.html","1ec1a0f2d0f0a1e90f91cd7f4b514055"],["algorithm-sort/index.html","a21e570485dafc0a9b89244011e49c9c"],["archives/2017/09/index.html","4b20839e077daf46e3098558f44c6efe"],["archives/2017/12/index.html","8e9f28b4c0653d031ff01aabd621915e"],["archives/2017/index.html","5a1c7796c7c85ad9b9caf277739ceffb"],["archives/2018/03/index.html","83844ce5b92fc8f93246dd05365a514b"],["archives/2018/08/index.html","6485ead8a4023b97aeaad53195b73ec7"],["archives/2018/09/index.html","a9bc7d6c7207f7661cb34fa0aab7f420"],["archives/2018/10/index.html","e22dd25b32c34499d742b29cbe0edbdc"],["archives/2018/index.html","3e8848a4a045d097258ba08ca22194b1"],["archives/2020/02/index.html","947effab55e667b7d3a597a4ba884ea1"],["archives/2020/index.html","4b26d3a8929aa4583dc3616f12234af6"],["archives/index.html","4719eb7db2e6115e2d553ce923af0d46"],["archives/page/2/index.html","061a9c73fb98c86405c8e662b5c90c87"],["categories/Java/index.html","a8ebeca073fb685301ab2db35a186683"],["categories/Java/集合/index.html","ea5484733a2d0ca5eb359b935e8803a7"],["categories/Web/Spring/index.html","182b00154757089110e7a04d74b4241d"],["categories/Web/index.html","82640e6cfc9a1c8a20e76e99719d37b9"],["categories/Web/前端/index.html","c5b382cb152169f8372bff747adf682a"],["categories/algorithm/index.html","e9ca1dae7cdd4d7a2b3a6c9b5467008d"],["categories/algorithm/sort/index.html","0916ebba41142e712493d0d940c5aacb"],["categories/hexo/index.html","e45fbe61a1a8e446ec5385e2edbdb21c"],["categories/index.html","e58ec900c4094899650c91451b6325f1"],["categories/基础知识总结/JVM/index.html","084dd291c77569f41927f8b8c4e24a5e"],["categories/基础知识总结/Java-Web/index.html","6f183f08faef67618061e087e0fbab1c"],["categories/基础知识总结/Java/index.html","09a085d223c70ea57fd0a16be86af211"],["categories/基础知识总结/SQL/index.html","8a077c2fa0d9fc789f85bcd6ef476f64"],["categories/基础知识总结/index.html","a7383e1d55d380bcdf913bcb3a0e484b"],["categories/基础知识总结/并发编程/index.html","eecc2602f1386caab756372eddaa0be1"],["categories/基础知识总结/操作系统/index.html","f753e15e4aa467258c661f018e411f70"],["categories/基础知识总结/数据库/index.html","b03eb7f990dcea70dfe8ba82a2da0b0b"],["categories/基础知识总结/计算机网络/index.html","1ef5360291f7500d15d2891175c4b44b"],["categories/设计模式/index.html","145216464ce271bab0f1ff71ef85579e"],["css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["css/index.css","7cfc369f97c2871fd96c7afe2cb088ec"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["database-summary/index.html","b0f882925c83b2c7d50d5ab5aba43880"],["gallery/index.html","1c920698cd082877dd5ba97aebe31b5b"],["hashMap/index.html","6736c2cb7136b249566f94640b7c9608"],["hello-world/index.html","eef57b52229b5c7c76373efcc5332e75"],["images/icons/icon-144.png","77ff48fc0e9d1928e7de882687a2206b"],["images/icons/icon-192.png","84dc14588b23f97779da8f8b0969d4ad"],["images/icons/icon-36.png","5c953ea6f63a79f355784c3f9f895b70"],["images/icons/icon-48.png","8b51531a5c3dd42e5c67451b890c4472"],["images/icons/icon-72.png","bf9669545978443a03c14e07664dc885"],["images/icons/icon-96.png","7669c9f2e04be5935dd5b43832d3bd97"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","4ffccfd24e04f0698cdb1ecdad562523"],["ioc-and-aop/index.html","f6c9be8142d6006dfa2d95bf7ba173d1"],["java-concurrent-summary/index.html","76880328ecfa87e6ecf260972a4de64d"],["java-summary/index.html","56cb87fc78439ee331f2f6674654b964"],["java-web-summary/index.html","597aa87e4fb2da337a783805d806b00f"],["js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","911db4268f0f6621073afcced9e1bfef"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["network-summary/index.html","9803b4706d2cde541e78ab0695c3282d"],["page/2/index.html","6336919f1dc3108f71f20f5adb010e70"],["singleton-mode/index.html","7a98b913b210a052b37a0387ad04c8ee"],["slides/index.html","c9e8daf023d4fa58f0545a18465ac9ea"],["sql-summary/index.html","08b57e86b178585c9f960b214179128c"],["system-summary/index.html","46adf001be1af2e43000c4b21ad2fd77"],["tags/JVM/index.html","baf5dc22195856f31ca15089ce1b76aa"],["tags/Java-Web/index.html","aa6ac022cd0d85737db3f906ed68f028"],["tags/Java/index.html","2d0ba6a63cb01786c603ad3a7d4331d4"],["tags/SQL/index.html","36c8661bfa5314d58f079570eb77a3df"],["tags/Spring/index.html","3f434075c6d0cbe35e2e0f342fe71fa2"],["tags/hexo/index.html","72ac06faddad3260e192686762b6e92e"],["tags/index.html","351a37dc29b3020686a23b5f30dfea34"],["tags/前端/index.html","2bfb832c67a8690dfeacded92bf75990"],["tags/并发编程/index.html","ffd33078022b1fde0f648f99796e44cb"],["tags/操作系统/index.html","d0953e638e23abdabd6e384a0e72888c"],["tags/数据库/index.html","642b8ea8cee2004364f2175f4d3f5547"],["tags/算法/index.html","12bdab15e08d9baefa3c19998f71af81"],["tags/计算机网络/index.html","e0cb703d4fd66d9c987bb6746515bb47"],["tags/设计模式/index.html","e052bd49dfd4ef4608668aa701433b2d"],["xss-and-csrf/index.html","7728547c5189f8847b7a050400fd4af6"]];
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







