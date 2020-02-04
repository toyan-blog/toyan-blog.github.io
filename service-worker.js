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

var precacheConfig = [["404.html","63d7cbb4a53f9d9892efa8ffaa400799"],["CORS-JSONP/index.html","e72b7323e3e2b05e8d22c6554e73a125"],["JVM-summary/index.html","d8ccae97fd5eca4bdc70728413c284a3"],["algorithm-sort/index.html","905ec6e63441806594136cb097f43280"],["archives/2017/09/index.html","b1b2c1ac4c697286293234cfeaab3361"],["archives/2017/12/index.html","81d85e911aea16b07780de4224c19743"],["archives/2017/index.html","6e8edddb033a6ff65dbcb6816e694504"],["archives/2018/03/index.html","eb7e877525c3891b6cc4d12f7743686e"],["archives/2018/08/index.html","c9ced447d55fb19cb4a378245a8fc5a3"],["archives/2018/09/index.html","0f47c5edcb4eb6dfca14a94f2303a818"],["archives/2018/10/index.html","b7a2668d1439054f975ca215a4a894f4"],["archives/2018/index.html","dff9295184cc2c67e179bf9e428c2034"],["archives/2020/02/index.html","7e4ae6dbb20f828de1cb9c2a232df0ba"],["archives/2020/index.html","689ce1014fd1e8bb008279afa458abdd"],["archives/index.html","46a62a9c3b3ef5d4dfaea623f9237eba"],["archives/page/2/index.html","eae8562a79507f3afa091c0844de51c3"],["categories/Java/index.html","5f9da00b59daae0239e248d0d0bbbe36"],["categories/Java/集合/index.html","8ad048bb4d7d3cc39bae78f47d05e02b"],["categories/Web/Spring/index.html","167d8d043739b9f4a20bcf5e1bac1b36"],["categories/Web/index.html","a5f681cee6eb41446817e79badb41c63"],["categories/Web/前端/index.html","e1c2cb412467f64a3357b14023ee9cc2"],["categories/algorithm/index.html","b9909b22cfeddf2b658311723d48a78b"],["categories/algorithm/sort/index.html","46538f98d0d32ca4bdf2b7daa3724bc3"],["categories/hexo/index.html","933f472a8271cd2014b5b6a99a99de80"],["categories/index.html","27b84532742d0050639002d8cda9b877"],["categories/基础知识总结/JVM/index.html","aedeaa546170e870742bb4cf8a23d5a9"],["categories/基础知识总结/Java-Web/index.html","c8396566f4757965277b0db3ea3b29d6"],["categories/基础知识总结/Java/index.html","e2241c874097aad42d21c3c2fbfd57e7"],["categories/基础知识总结/SQL/index.html","98a480813e3bc802e0b9e7cb42d4eddf"],["categories/基础知识总结/index.html","3640326a2ce20fd8d4b9e79b340b6b1e"],["categories/基础知识总结/并发编程/index.html","62a497ac3bbaed55ee466e38703d33c4"],["categories/基础知识总结/操作系统/index.html","ef1dd949e49dccd044bb6e55f8f8b9b8"],["categories/基础知识总结/数据库/index.html","1701e32a0c08b289eebd7265e5373903"],["categories/设计模式/index.html","256da275690a86fdc65f804f82b5d965"],["css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["css/index.css","7cfc369f97c2871fd96c7afe2cb088ec"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["database-summary/index.html","1b404136a8b2d3fe2a36de15aa7af40c"],["gallery/index.html","016674b3cc39248c616784e1c932079f"],["hashMap/index.html","47fef1adcd4b5ea0a81faa4c308466e4"],["hello-world/index.html","3896fb809230ab1920537fb42177e45c"],["images/icons/icon-144.png","77ff48fc0e9d1928e7de882687a2206b"],["images/icons/icon-192.png","84dc14588b23f97779da8f8b0969d4ad"],["images/icons/icon-36.png","5c953ea6f63a79f355784c3f9f895b70"],["images/icons/icon-48.png","8b51531a5c3dd42e5c67451b890c4472"],["images/icons/icon-72.png","bf9669545978443a03c14e07664dc885"],["images/icons/icon-96.png","7669c9f2e04be5935dd5b43832d3bd97"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","efb1c41a6d2c5a56eb7232907ae990bc"],["ioc-and-aop/index.html","b84f7a97cf9f5e335d2466aa6f87ce4b"],["java-concurrent-summary/index.html","8aaac3c8ab0776f965ae869a4c9af8f3"],["java-summary/index.html","1f65fcddfaa073dd1501f09b4218d8f3"],["java-web-summary/index.html","fee7b80d1afdde7a5114d1e1a06ce6eb"],["js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","911db4268f0f6621073afcced9e1bfef"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["page/2/index.html","7a5d31d500dae82d5ef701d98552bed2"],["singleton-mode/index.html","73f1d84e8a695c0fff4790cb24beb530"],["slides/index.html","7ee2a65c031995751cb76884f8af1964"],["sql-summary/index.html","3e36d731e7e6b383dc877ba4aefa542b"],["system-summary/index.html","635ea5d9ea8e26f3831ca6a9b71db0b1"],["tags/JVM/index.html","f201182bd59ddbf1b216b8a3178ee7e3"],["tags/Java-Web/index.html","f3278aa38db485a1444a8012e06d97f2"],["tags/Java/index.html","bd63e50649a997d88a72377254d58b02"],["tags/SQL/index.html","f8b3ee14913e06ae60e962bff30970cf"],["tags/Spring/index.html","669344377b111ee1bc05b827a46fcf87"],["tags/hexo/index.html","2740880d99cb052907613ad9436860c7"],["tags/index.html","eae5be691b17e04832047bd8f37b10be"],["tags/前端/index.html","edd198c9df7d24465fd4d9edf92ab420"],["tags/并发编程/index.html","e3f4448bab3d2f476ab6e67772ba9f8c"],["tags/操作系统/index.html","1a70575b00a94165b3cfe4d9cff1e5d1"],["tags/数据库/index.html","803084ce94678f893a965c4058b2d7a5"],["tags/算法/index.html","ecc8e747bf8c333d95a2b656abb11acf"],["tags/设计模式/index.html","6bafb1a9b7fa1f69b04db96274f6934c"],["xss-and-csrf/index.html","60c253292013c23135611f744bc034fb"]];
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







