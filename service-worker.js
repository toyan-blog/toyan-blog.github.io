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

var precacheConfig = [["404.html","63d7cbb4a53f9d9892efa8ffaa400799"],["CORS-JSONP/index.html","70d42875104bf0368267710c8beb302e"],["JVM-summary/index.html","b9c129338dc5c116458a74250d4dfe4c"],["algorithm-sort/index.html","7e39587c1be94c3ee7f1a1dcb10e47b7"],["algorithm/index.html","ccd600b2ef898f8d7d91de0452bccede"],["archives/2017/09/index.html","25b7b9d82525b43ae5efc677f9c27993"],["archives/2017/12/index.html","20f8c74e88577b30c23148e52e96d67f"],["archives/2017/index.html","f9568e3186d5627d929e19cc7601a92c"],["archives/2018/03/index.html","711b9a253075ff605384001681b0a70f"],["archives/2018/08/index.html","239b9699c1b841adbc2a484c725ae7a0"],["archives/2018/09/index.html","7bb9a1f739940bf65682584b55952646"],["archives/2018/10/index.html","be63b3b15d6a1a048c8c0564be878a53"],["archives/2018/index.html","7432810517942f40cd4686764194d272"],["archives/2018/page/2/index.html","aa02b4684b5fc02604af8d0417dcc02a"],["archives/2020/02/index.html","815cf6007c0552acddf1e4132e2d89bb"],["archives/2020/index.html","976759a51db551762c1513f6c11866ac"],["archives/index.html","9b66ac65331518e499cab62b443ab4ca"],["archives/page/2/index.html","c9fffbd99825fdd955f7713018f27da6"],["categories/Java/index.html","4d5bd73c406093237559b040752eb280"],["categories/Java/集合/index.html","d640c5047205e70a5a4fe1d1e2c03e68"],["categories/Web/Spring/index.html","ba0235143381208a0ef96bd89e3c3a0f"],["categories/Web/index.html","6fad5d78f9f87495dbf4316e47f67273"],["categories/Web/前端/index.html","73eb8b22f8c6a9b6f26eb76e109378aa"],["categories/algorithm/index.html","d25db6dde850c54951303d8ae4382fe1"],["categories/algorithm/leetcode/index.html","ddf19123f282bd629fd5e151394172ce"],["categories/algorithm/sort/index.html","9210f89630d0559a64a425884b47c028"],["categories/hexo/index.html","b819a133c81196a6b862a055b52c57c6"],["categories/index.html","fe78b14119d5a3d405522a9a23d03cb2"],["categories/基础知识总结/JVM/index.html","83ead5a6e5449344a4fc4e91a6d85e37"],["categories/基础知识总结/Java-Web/index.html","705d0dda62c1b665dea592caa0ba26fe"],["categories/基础知识总结/Java/index.html","080fd37531d1e45dd17afd7783e22ef0"],["categories/基础知识总结/SQL/index.html","7c578f6825e346b61f241128e4ff9353"],["categories/基础知识总结/index.html","1db62d5dfc78db402523b8bc054e017d"],["categories/基础知识总结/并发编程/index.html","c052654c9668cf6d7406d526873bff39"],["categories/基础知识总结/操作系统/index.html","5cb468cbb47e062a5f2986f8ad460fbf"],["categories/基础知识总结/数据库/index.html","900292d9ff03fe98d2ea9991163a3eb2"],["categories/基础知识总结/计算机网络/index.html","1d081a6a441c6b7474e5c93696e7c644"],["categories/设计模式/index.html","bc625bbba6ed170e98579391a4c225ba"],["categories/随笔/index.html","8b921912f0c22d218d13d3eeb33edb7e"],["css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["css/index.css","7cfc369f97c2871fd96c7afe2cb088ec"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["database-summary/index.html","931df0f6ac39b0aff894e42a17a9a42b"],["gallery/index.html","2e57594a076b0ad158acafb04f60ca5c"],["hashMap/index.html","060a7fd404ea8de87069a22cab402fbc"],["hello-world/index.html","10f14cdb26cddcf80e63c58157ca2809"],["images/icons/icon-144.png","77ff48fc0e9d1928e7de882687a2206b"],["images/icons/icon-192.png","84dc14588b23f97779da8f8b0969d4ad"],["images/icons/icon-36.png","5c953ea6f63a79f355784c3f9f895b70"],["images/icons/icon-48.png","8b51531a5c3dd42e5c67451b890c4472"],["images/icons/icon-72.png","bf9669545978443a03c14e07664dc885"],["images/icons/icon-96.png","7669c9f2e04be5935dd5b43832d3bd97"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","98946f0b7037b4b0bc9d1e28116bda15"],["ioc-and-aop/index.html","6b90562720023b2b5d186f90a5fb4be4"],["java-concurrent-summary/index.html","0db00e4d19f2db96f0e6dfe89b687600"],["java-summary/index.html","4bcdd11fdab55356a946abe38cffd2f5"],["java-web-summary/index.html","eeb8737a3d656b87994aba4825a09dae"],["js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","911db4268f0f6621073afcced9e1bfef"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["network-summary/index.html","a4b272cb72ad575be4b2084e73c0e0ca"],["page/2/index.html","c3ca597a96fd9bdf1a1c4e8f5a8e8c56"],["singleton-mode/index.html","b6344e9576d3716f99f0e5464106871a"],["slides/index.html","39a14ed94b10620cc369075e52868d5c"],["sql-summary/index.html","f294415ccc98adeba085a01b3e576d37"],["system-summary/index.html","ec29c633321df732ad76f493636cb0ac"],["tags/JVM/index.html","2594fae8ccdbeebeaa7aae406fedcf69"],["tags/Java-Web/index.html","02dc42e74198c123b83dc659fe95a0c9"],["tags/Java/index.html","69f79e003faca24078f0424f3c96873a"],["tags/SQL/index.html","5e833c7ce1dc470618a60ae34c6296da"],["tags/Spring/index.html","24b4d8935a019ee4531d0a4dbdcdf044"],["tags/hexo/index.html","60c9e22f039d35a67c30a8c3d0de7576"],["tags/index.html","9b24fd66d99474d9d8a68070744c71ee"],["tags/前端/index.html","b27e27650dc3f595a7c07d70c0ed93e4"],["tags/并发编程/index.html","c7c27593d8302ae95c14eb0fb61a5b19"],["tags/操作系统/index.html","437932ff15df57cfc4f0060b94fb9f9f"],["tags/数据库/index.html","3083465e76c570236be9dd9d91abcf59"],["tags/算法/index.html","1a31e6851aa6619692af6e78a179f2fb"],["tags/计算机网络/index.html","1fef3bd529e79b813da75b53633ecbd8"],["tags/设计模式/index.html","d21bbea6b6dae10b90e7d2bb224f5409"],["tags/随笔/index.html","a5222bc60b380d684d09ab27f3d53f7c"],["view-for-internet/index.html","e597731008933cd7eb384345b4b2910d"],["xss-and-csrf/index.html","c6bbd05d8cea002457e2626f544e9fc9"]];
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







