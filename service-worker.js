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

var precacheConfig = [["404.html","e6f99f1cb3dd2cd593a55d0efab4c836"],["CORS-JSONP/index.html","66c13c5894357f603b848024e5d7f7af"],["JVM-summary/index.html","002dbd56c7a4be17639c42de7888a498"],["RBTree/index.html","becd0d9d3499d1dbb77e3afb4ab35c4c"],["algorithm-sort/index.html","1bda6dc053d4781a3a572b2865541103"],["algorithm/index.html","db143d52f6700da5d15f17ec9c595d9e"],["archives/2017/09/index.html","fb63abbf37305beea2676dc0518464a1"],["archives/2017/12/index.html","48be48cd778b43af5009c3b0f7467c0b"],["archives/2017/index.html","fcd38cc85a797f5a697e283feda6ed40"],["archives/2018/03/index.html","928f44df5b728256a85eed360178753e"],["archives/2018/08/index.html","023efb6e2a4b9cfa39d679eebda33f87"],["archives/2018/09/index.html","d4d0dde21c2f933f01857c21d639c37f"],["archives/2018/10/index.html","2814e8acb2b2023d22a062f8169ecbbb"],["archives/2018/index.html","8e7bdab7c2e9b23de972c55536b18d2e"],["archives/2018/page/2/index.html","0784bc09a7dcfe61fa67429a01a5fb3e"],["archives/2019/08/index.html","341936ef0e6975fed40d78a57a948153"],["archives/2019/09/index.html","b91cb6e5e46650b0a586f59b696d0bd1"],["archives/2019/10/index.html","f5b72e9a2df88be2dc02fe73140337cc"],["archives/2019/11/index.html","fdd6ae0f8798ff98a291e75e25a49aa2"],["archives/2019/12/index.html","b4e903be900b3255145fefebfc858407"],["archives/2019/index.html","388cf4355c4c5497c5177dd5afb95449"],["archives/2020/01/index.html","43d0ad2dd8ed9007e2fe26b38c7ffdd1"],["archives/2020/02/index.html","76cabdd7701576352fbbef64a2f965f3"],["archives/2020/index.html","620c4b504c33799ebac56f0eeb9560f5"],["archives/index.html","ff415aa3ea56279769e5d3ae379b7867"],["archives/page/2/index.html","35bbc14185a552bc96c09e8ef168d76d"],["archives/page/3/index.html","b2d601b28cd6d0b9ef6b3a03dd64b85a"],["categories/Java/JVM/index.html","9e92d325f19842302e536c32300e23fd"],["categories/Java/index.html","7d6a839344c0e2cd6cc097b64b644a4b"],["categories/Java/锁/index.html","a18798eef1ef713eead990fcc3848e16"],["categories/Java/集合/index.html","04a54b24f2af1bf5246ea9596f0f3ea3"],["categories/Mysql/index.html","bf541eb45d8b2ed8e134ff99ac9988c7"],["categories/Web/Mybatis/index.html","31a8874cb4fda30de322308d9ededea5"],["categories/Web/Spring/index.html","ebc96435691886dff92f17977cf54297"],["categories/Web/index.html","c7c6fca0266b6969c8ced34703e7ffad"],["categories/Web/前端/index.html","3ec13d55cc625ef6adafb81a7aade91a"],["categories/Web/服务/index.html","61109c5c2174cbc3fc892b1eb2e51a6e"],["categories/algorithm/RBTree/index.html","fa809b1da21098c103b16afa052d48c9"],["categories/algorithm/index.html","32846334d879080d35b49fa799884a41"],["categories/algorithm/leetcode/index.html","facd00989fc916091968c75ecf867c82"],["categories/algorithm/sort/index.html","2daa6ed2eab4eedfa86009413c35d328"],["categories/hexo/index.html","332698d1a444e627a4834fb732921d03"],["categories/index.html","ad941e6623aaf14a168c94e72c08d5cd"],["categories/基础知识总结/JVM/index.html","6cf469de1f29caf2a0c0b811660cf04d"],["categories/基础知识总结/Java-Web/index.html","1defe3be676978bb9465c39ccc4c879b"],["categories/基础知识总结/Java/index.html","abb309395d6fc836ba8ae878c0a53e6a"],["categories/基础知识总结/SQL/index.html","5163c68009478288feeebf7d4f7b6136"],["categories/基础知识总结/index.html","967ce1eb4e0e1769be25bbb5f28db8da"],["categories/基础知识总结/并发编程/index.html","4c2fa571e9173ed1ebb854e9682126ad"],["categories/基础知识总结/操作系统/index.html","b15db4a85a948e8f8ce7471a6815019f"],["categories/基础知识总结/数据库/index.html","7bebef4f610c8303a6ebef7e78b61253"],["categories/基础知识总结/计算机网络/index.html","ecb583e42309ba757abde7e98b440d3f"],["categories/设计模式/index.html","9c2afb19f7048b66b7c1b9eddb9fedae"],["categories/随笔/index.html","6d41e90a75c794ade377160d9d1ccef2"],["css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["css/index.css","7cfc369f97c2871fd96c7afe2cb088ec"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["database-summary/index.html","052ccb751703ecdc1d9e8d8f71d9cbfe"],["disaster-recovery/index.html","ceec654fabce125dda4d6e6b17333ceb"],["distributed-lock/index.html","6b04670ea4794d26b78be5826ef6e09d"],["gallery/index.html","3f112ccc209a4e1d6eae74871d495529"],["hashMap/index.html","98f66445486abdc1ad02c60b8d63030f"],["hello-world/index.html","414992e6cd899dbfa59aeee12fc9aba4"],["images/icons/icon-144.png","77ff48fc0e9d1928e7de882687a2206b"],["images/icons/icon-192.png","84dc14588b23f97779da8f8b0969d4ad"],["images/icons/icon-36.png","5c953ea6f63a79f355784c3f9f895b70"],["images/icons/icon-48.png","8b51531a5c3dd42e5c67451b890c4472"],["images/icons/icon-72.png","bf9669545978443a03c14e07664dc885"],["images/icons/icon-96.png","7669c9f2e04be5935dd5b43832d3bd97"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","69eb84e30cc0080cba7967e6a5353beb"],["ioc-and-aop/index.html","3801bdc0ee479f144c969d93e1712f58"],["java-concurrent-summary/index.html","83497a51f7a720a16d409b721cbab6f4"],["java-summary/index.html","a28d3f95fc299f9e64d2722c3e5458f5"],["java-web-summary/index.html","2b85c9ac9e6d94cd3d81b82156708b7f"],["js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","911db4268f0f6621073afcced9e1bfef"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["jvm-metaspaceSize/index.html","47b011f43d8d4470a1dcc481b444e0c7"],["live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["mybatis-cache/index.html","03994be1968098e735527b7f60fb1538"],["mysql-lock/index.html","443cf9639aeddf037a10b189915249dc"],["network-summary/index.html","b70d15ffd037cd6f5dd25c052c1f2cf9"],["page/2/index.html","29bd035181a56b72ca3c3f6d37995cb8"],["page/3/index.html","83eb8aa99327489aabaea0c2c2e76f0f"],["service-avalanche/index.html","8ec986dea36506736c87fdc9c2dd3cfa"],["singleton-mode/index.html","4373a66cae4f55ed46910cdd06e61c7c"],["slides/index.html","4c8a6536e81caa13142b6a400a1c2183"],["spring-logger/index.html","919a8b0d3cf5d927bdea5cd2accfcbeb"],["spring-transactional/index.html","55a81f7d32ad1c804ec68658833e370c"],["sql-summary/index.html","30b33b4bcf0bb21d6aba8cfcaa04409d"],["system-summary/index.html","f8b911df4222e201621c7b97722b9f88"],["tags/JVM/index.html","becff61aef754a805896d764f2367df6"],["tags/Java-Web/index.html","2cbd25fa4285bc2db78c3d3db2c4b660"],["tags/Java/index.html","a5ba76b0846a7d5338f603362abba385"],["tags/Mybatis/index.html","a0cd12243ac10c6aaceca48f94d9c0ae"],["tags/SQL/index.html","13774d1dfac5f2c9e0f8da864feb7cb6"],["tags/Spring/index.html","b09b9779cc8f0ce49360eccc2787cf7d"],["tags/Spring事务/index.html","e8ebf08fc56f7730b6fe2c8899cebaaf"],["tags/Web/index.html","88e248946e6faa36b4109c60b38c7f89"],["tags/hexo/index.html","4522ba98eb2c1a315a8e61141ca8a55b"],["tags/index.html","a8f8a2a6fbad0a5fe7e1eccfcb1d9b64"],["tags/lock/index.html","ec281173ecfcad16c89437cea72c52e8"],["tags/log/index.html","5f793333b38e4414636273914c6c12a4"],["tags/前端/index.html","7886986440563b5f97cf77f402b10808"],["tags/并发编程/index.html","ad12dedf86b41a86201100e527591da8"],["tags/操作系统/index.html","9cfeba17467dfd997226be2a50c0163b"],["tags/数据库/index.html","57754207a070a4dbb7c573bd50d436db"],["tags/算法/index.html","59e5d66357b2e056f93a826a904d7674"],["tags/计算机网络/index.html","e20d69905a415d3d64e3fcd0861864bd"],["tags/设计模式/index.html","37b4a7e8815dd9d6e9eb49d7e3b7ec54"],["tags/随笔/index.html","6673403a3f3ea834be68e3ae82950c2c"],["view-for-internet/index.html","3ead1817c20332d444564a996b337914"],["xss-and-csrf/index.html","4a4342cfabef11b3a0a6817435d40b28"]];
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







