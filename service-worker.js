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

var precacheConfig = [["404.html","63d7cbb4a53f9d9892efa8ffaa400799"],["CORS-JSONP/index.html","0112737f216cdec00dbb29b4117f3dea"],["JVM-summary/index.html","d34f431efa2ffbf56b7a71cb0b1333c3"],["algorithm-sort/index.html","944aa5777b59f7b3086c0e19c3bfaa2e"],["algorithm/index.html","d570b5f334c32a71c635e9fdd7dc67f5"],["archives/2017/09/index.html","e152c48c852f4fd5958c0d43c8f60c5f"],["archives/2017/12/index.html","2a41dac17ce4be2f1e3d05e8c65f2486"],["archives/2017/index.html","ff7e88e5c756694433d3315d46347de1"],["archives/2018/03/index.html","2815f3fe5ef475d2d297aba95656f602"],["archives/2018/08/index.html","607ff5813d5d572fd02bb185c3c4449d"],["archives/2018/09/index.html","3415d9eb4c8f9d256a036cd49ea4dbb8"],["archives/2018/10/index.html","a74e9a3c8cd333959cef058186171886"],["archives/2018/index.html","5c5647e99da4d5760b868cb0e9f5c43a"],["archives/2018/page/2/index.html","ea2fa4f40efff2fd35dd18d427b6a98e"],["archives/2019/08/index.html","be38010ce08ba069cc1eeb56fad19fe7"],["archives/2019/09/index.html","a4e37876fad921cc02c208e032c834c8"],["archives/2019/10/index.html","99ec3f0de1f724d838b86bbf53916f0e"],["archives/2019/11/index.html","5a8b969e9fcc4a8022ab611e167dd5ad"],["archives/2019/index.html","6ab6d7d2f0ab16587e18136036f8dd9c"],["archives/2020/01/index.html","093d9fffcf9660dd74f9d0f474981886"],["archives/2020/02/index.html","2dbdd61e2e8616f6613a6c06ae17fb68"],["archives/2020/index.html","47e32e525e0d343cf9abf73a7e1101b2"],["archives/index.html","808ae2d9c3527bb9daf263b026e51531"],["archives/page/2/index.html","e213e2db350a6edff3e9c5605abeef8d"],["archives/page/3/index.html","b6d1c65802efd0a91e56cde060301277"],["categories/Java/JVM/index.html","4aac9340ec6b14e351823bf77bedb30e"],["categories/Java/index.html","a371b085e461bf894cb2fc2378771922"],["categories/Java/锁/index.html","9825213d195c1664c638006e8fb45b32"],["categories/Java/集合/index.html","7207e6693258fc0776715d9b3cfee869"],["categories/Mysql/index.html","18a5e6cf7b05095ebe99e3427715692e"],["categories/Web/Mybatis/index.html","8c9f3128cb8535c9ce30817e49841c39"],["categories/Web/Spring/index.html","f5278d75d6464fe9634708c5f852b3fc"],["categories/Web/index.html","bc712e61fe9562032d72ef0e1c239264"],["categories/Web/前端/index.html","ad3663e9dfcd4da5c5b8214f973c781c"],["categories/Web/服务/index.html","f34a576699a652d30dfb18ba8a2d728b"],["categories/algorithm/index.html","53cb3ed1b1adda473b7f3cd8bb056499"],["categories/algorithm/leetcode/index.html","991bef170ba8e606e8e63ee5769fd794"],["categories/algorithm/sort/index.html","873b4eb8173f175280429d6f815926e6"],["categories/hexo/index.html","05dac8b8d15bb8fd2ddbdebd198874e0"],["categories/index.html","836fbba59583f0c6f57add8a3d2620f4"],["categories/基础知识总结/JVM/index.html","55b88f459d967ba1edf17b2446c48901"],["categories/基础知识总结/Java-Web/index.html","c27bddb8b2ac8326478a05ff7175a038"],["categories/基础知识总结/Java/index.html","710a76cbff6d19a8e7bbe765441fbffb"],["categories/基础知识总结/SQL/index.html","5f17402ed2d833a10f06e98ab3b299f5"],["categories/基础知识总结/index.html","0f485b31f9b86d4b776dfc7cfec9aaa9"],["categories/基础知识总结/并发编程/index.html","0a40e47c6f32516e22245e5c50139779"],["categories/基础知识总结/操作系统/index.html","5b79ebce16746e13ab590784b97829fe"],["categories/基础知识总结/数据库/index.html","9ba5dde2a936994858bf6034f9e87cf2"],["categories/基础知识总结/计算机网络/index.html","46042eebcf36d1127f542d6b2602e3d6"],["categories/设计模式/index.html","63a2ee5dd01cef477e3a61503e29265d"],["categories/随笔/index.html","f36d545864ab5df3945fe023b82c1286"],["css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["css/index.css","7cfc369f97c2871fd96c7afe2cb088ec"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["database-summary/index.html","0c9a54719094af81d0a72548d96a4f73"],["disaster-recovery/index.html","90401ee0c48ff905c80f791d778171a2"],["distributed-lock/index.html","b016a72a7a4d75ed6ad1786cc6068d1b"],["gallery/index.html","947fa472e9d2c55fd14af57d4cd5cc5e"],["hashMap/index.html","ec906e644573c44a2a95fbc52dabb0a6"],["hello-world/index.html","fe5ea09c6621fba72cadf63a2ada5123"],["images/icons/icon-144.png","77ff48fc0e9d1928e7de882687a2206b"],["images/icons/icon-192.png","84dc14588b23f97779da8f8b0969d4ad"],["images/icons/icon-36.png","5c953ea6f63a79f355784c3f9f895b70"],["images/icons/icon-48.png","8b51531a5c3dd42e5c67451b890c4472"],["images/icons/icon-72.png","bf9669545978443a03c14e07664dc885"],["images/icons/icon-96.png","7669c9f2e04be5935dd5b43832d3bd97"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","29a6fdb496f2ecd30190ce44343f0a9d"],["ioc-and-aop/index.html","c2fb63fd794758f367be9bbc889e6909"],["java-concurrent-summary/index.html","58db908e2f766dc5f5241da8ee92772a"],["java-summary/index.html","6645ef1b4d03b44d061720a9b5a36161"],["java-web-summary/index.html","f3a0885bfc92bba8181cd34bceff80c4"],["js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","911db4268f0f6621073afcced9e1bfef"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["jvm-metaspaceSize/index.html","2d26e46fc04a86238a69a9d9be9bed67"],["live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["mybatis-cache/index.html","d99097bb79a6d497a9e8bb19033bf866"],["mysql-lock/index.html","1cf72933ddc203d4af73d4dc9d44aef3"],["network-summary/index.html","597e66f1f5f30bb9a22c8b86c868ada8"],["page/2/index.html","83d7dba545526cab1ba5bbd20587e301"],["page/3/index.html","779bd6f8d3967885d7ce43a013a0e9cc"],["service-avalanche/index.html","082ccb78575279b3b38ecabc835f09e7"],["singleton-mode/index.html","d37b3eb87e9b5afd7837d737aaf0bab2"],["slides/index.html","8dbc2f19dfcd2c10c114ccf94c915618"],["spring-logger/index.html","785fe43e77c97e2ae690269b03f038b7"],["spring-transactional/index.html","92b1b84bc820ee4100160920c50a4e95"],["sql-summary/index.html","7daa1c778267fce5a0cd67d932f5fb87"],["system-summary/index.html","8399ddfc423f88495f46832dc79d2e97"],["tags/JVM/index.html","654b5b1f509b840f03f7232c124c5896"],["tags/Java-Web/index.html","e2f71aba581e4f0c73869f32d605ac0c"],["tags/Java/index.html","e1d5d50ee79b7bcebd398a87bdd449b8"],["tags/Mybatis/index.html","c8c85eebb89dfd884730b471c54a125d"],["tags/SQL/index.html","3362a8ad3867b593915681efcb29c646"],["tags/Spring/index.html","f0f80b4b18f4d7bc0086bc7d8de0c9bc"],["tags/Spring事务/index.html","ee41bd0ee6bc10858e94aea46eaed454"],["tags/Web/index.html","003d0f4479e1663edbdc93ee79c6bfc5"],["tags/hexo/index.html","ebfb7c490729e47b9eeb5655d419bc12"],["tags/index.html","11ad26995a91eb794760309f98bd8885"],["tags/lock/index.html","693474ec39fa90bf80dc21a8d6a861be"],["tags/log/index.html","ae93b56c4374cede640663a8563afba7"],["tags/前端/index.html","26bbbd26ab491838c22e74473af92311"],["tags/并发编程/index.html","b353942df690f1a067b891ef1fdbe405"],["tags/操作系统/index.html","09fdec5dacf251d4187ccf14bdb02da7"],["tags/数据库/index.html","55d14917bef6da6d2adee8a448dbcf5a"],["tags/算法/index.html","43b7418f24d1b0dd3b64ad70809c2ad2"],["tags/计算机网络/index.html","75fafdfd27505c12d8db1ff311710c83"],["tags/设计模式/index.html","a2f293b9f7b118d881808a6d9641c3a2"],["tags/随笔/index.html","22c14b8102832f2d07cf90d059652f0b"],["view-for-internet/index.html","9683e71b936cc24bc86fbce5878c5756"],["xss-and-csrf/index.html","7864944d40e48c43efeb9f87aa07daaf"]];
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







