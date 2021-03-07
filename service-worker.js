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

var precacheConfig = [["404.html","ef1a031d11a75ad8387078399d82be2f"],["CORS-JSONP/index.html","353589497103f1471be875d1aa7484ca"],["JVM-summary/index.html","983c88cb9691601490892c17fd094ca6"],["RBTree/index.html","b1ba53108ac2b480cb0d0621147ac54a"],["algorithm-sort/index.html","9a461c322ea303d31ef96c84890e3aff"],["algorithm/index.html","b4f418c397e05d7077fb30b066f993e2"],["archives/2017/09/index.html","63ec6bad1402b594a43efe0b534700dc"],["archives/2017/12/index.html","1399aaf307107b9cd80972807518676c"],["archives/2017/index.html","717d74f08a0b12ef469e1451b07b8f8b"],["archives/2018/03/index.html","aeb37e6aca837c153d02179118b54523"],["archives/2018/08/index.html","75fb8d0c04967b92a6be31931910ea7a"],["archives/2018/09/index.html","0d1b546281d261284c13845811d3d99b"],["archives/2018/10/index.html","51b8ac75ea8050788bec056a5f453059"],["archives/2018/index.html","d39181918062d31ebd90cd39df915782"],["archives/2018/page/2/index.html","2ac6b4c51aee33026025ac293a5f91e2"],["archives/2019/08/index.html","2ecefbc3dfd6fbad0e36f790a7407c5d"],["archives/2019/09/index.html","65bf84114cdd1b179899aa2c781cfba4"],["archives/2019/10/index.html","5449329dbd43e7d4144d42a3b52ee884"],["archives/2019/11/index.html","a8d16635f71ab40f78bf2cf3500df002"],["archives/2019/12/index.html","b33d8b1bc143e7fa849c2457bd0047d9"],["archives/2019/index.html","43feca40f6ca24721c5b601a4f3d64b5"],["archives/2020/01/index.html","d51b023825862b6b657ce1d99316efe7"],["archives/2020/02/index.html","ac7a80778d25758f8fcb2d6704c1ffdc"],["archives/2020/04/index.html","07ee5366422061dd2b267f8a5eb03b97"],["archives/2020/index.html","60ed68463d88cfd157a3a932317854dd"],["archives/2021/02/index.html","ebbda8f47cab8d2e5d88bcd4173d5c05"],["archives/2021/index.html","f16ac088b0eba50299316bc46db0b510"],["archives/index.html","a40ae5431ec66551b9430f21d1799c9e"],["archives/page/2/index.html","e457289b1fcbf5ec68d5a9b228bd1bf2"],["archives/page/3/index.html","0446e1162b9c96e7362d25badf06de4e"],["categories/Java/JVM/index.html","003ad5795854c5af90b998595ed56868"],["categories/Java/index.html","2ce876e425decd882a49c5eb6d54363c"],["categories/Java/锁/index.html","cc3e2a413c6f4b95b50160218afa3666"],["categories/Java/集合/index.html","abc266a7a7d4645f66f0d24febe03cfb"],["categories/Mysql/index.html","3ed77d3b9df087fdbb3cf28f1bf6f601"],["categories/Web/Mybatis/index.html","47723858eec01d1d9307f81ee3d2be6a"],["categories/Web/Spring/index.html","e818637e36ebafa63fda650057610f10"],["categories/Web/index.html","a34bd6adaff68738cda159afb2c56a30"],["categories/Web/前端/index.html","e0616dd3755640ba2378874939e347be"],["categories/Web/服务/index.html","e38d09a395d9c909ee4ff263621629aa"],["categories/algorithm/RBTree/index.html","fc72b464a580e0288707259b23638430"],["categories/algorithm/index.html","9bb1278bf00ab6dc094d0fa0d6b25237"],["categories/algorithm/leetcode/index.html","8b8b513647d3ab9aed4dc10cf4430bed"],["categories/algorithm/sort/index.html","df0e243f7e28d86807febeede72a8123"],["categories/hexo/index.html","c4b0c04755204de933ab865c17dc1ae7"],["categories/index.html","cc6bdf15182f875ed85fcdf04144e478"],["categories/吴军/index.html","9a7810598c4925d47f5f4ada032af4a7"],["categories/吴军/谷歌方法论/index.html","9c5734f0fb37836bf891f0903a1b8317"],["categories/基础知识总结/JVM/index.html","81d7c3e0cfe39296c6a2ae6be170f8f2"],["categories/基础知识总结/Java-Web/index.html","420b216a73315cf0d5e920616f3d22d5"],["categories/基础知识总结/Java/index.html","09a8cd799730fa8c5e630e75b1d64164"],["categories/基础知识总结/SQL/index.html","5dc08052a7a7672585fc7b2e31161f5e"],["categories/基础知识总结/index.html","7a89edf50a90cdb5f8dddd87bd7217e5"],["categories/基础知识总结/并发编程/index.html","5dd85f136950edb8c800729f4b5fa606"],["categories/基础知识总结/操作系统/index.html","399ded016b17367801a22b5f090f7548"],["categories/基础知识总结/数据库/index.html","d4c25e9bf682e845b610acc1b446deef"],["categories/基础知识总结/计算机网络/index.html","4968c28828fd04a0e61a57fd6b5f1473"],["categories/设计模式/index.html","5a135dc20bfd294f7e553e803d5865ea"],["categories/随笔/index.html","21dc1f444cd04cad0b5178a25bc789e4"],["css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["css/index.css","7cfc369f97c2871fd96c7afe2cb088ec"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["database-summary/index.html","c20c608d593fd9d0930099fdd84bfa47"],["disaster-recovery/index.html","6a808e8e84187fcb99bfb2ecc704ddde"],["distributed-lock/index.html","9eaa8bb87716f13c4f0cc6bcf004e3a1"],["gallery/index.html","02ca30a3840d1254808498f1d7ea5afe"],["hashMap/index.html","a73b4f54ddcc6b859184bfc01c27cc3c"],["hello-world/index.html","a4145611ad9bc2dcb05c55f4eb920071"],["images/icons/icon-144.png","77ff48fc0e9d1928e7de882687a2206b"],["images/icons/icon-192.png","84dc14588b23f97779da8f8b0969d4ad"],["images/icons/icon-36.png","5c953ea6f63a79f355784c3f9f895b70"],["images/icons/icon-48.png","8b51531a5c3dd42e5c67451b890c4472"],["images/icons/icon-72.png","bf9669545978443a03c14e07664dc885"],["images/icons/icon-96.png","7669c9f2e04be5935dd5b43832d3bd97"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","d3e2c316d106b3484a15d5236aae6305"],["ioc-and-aop/index.html","61958e3600460df58bd6d39600775da9"],["java-concurrent-summary/index.html","3c052106f76491919030a9531ada4604"],["java-summary/index.html","4294d5454891e12e5df08101f1ab279c"],["java-web-summary/index.html","84aed55a6cb3cab8a2943e4488cec25e"],["js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","911db4268f0f6621073afcced9e1bfef"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["jvm-metaspaceSize/index.html","c4270b424d410f82227ac9e28d07ed3d"],["letter/index.html","b655f7a917063717a2da37147bad991c"],["live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["mybatis-cache/index.html","3fe7ca96a3c4678984491bb73c5cc3c8"],["mysql-lock/index.html","03c03008a21110bbec7d2d253059f211"],["network-summary/index.html","08cc30828636f5b48298738c40504e0b"],["page/2/index.html","2738a69c78bf50364eab3c7dc21965ca"],["page/3/index.html","78066e10a3408f48984277b5efcb4207"],["service-avalanche/index.html","94714f069034c5e24c2f2c609d390933"],["singleton-mode/index.html","bc98e44097ddeaab8f3e4e67926e13ab"],["slides/index.html","39592ab6a108222ed4b26c01c188b383"],["spring-logger/index.html","1f5e6317169d064eef4b8c6a5f016afc"],["spring-transactional/index.html","922e03799460aea0930a8f385cd3fb5d"],["sql-summary/index.html","4489387b5abbe8fe0fb22c89a89f9c7d"],["system-summary/index.html","8fd3db151f48ad2bd5925804c1723c9f"],["tags/JVM/index.html","8d6870915fc0f3a4a98fd6a3a0409d47"],["tags/Java-Web/index.html","d809761d6ba3104114a90269ef5de417"],["tags/Java/index.html","7d8a18e446d44c3962406e6d8b54b710"],["tags/Mybatis/index.html","278ce1b4f6a1d4c6cce0e5a7f87d22d3"],["tags/SQL/index.html","0329a8bbd16dba20e4b5f237696d9e08"],["tags/Spring/index.html","07dc6d4faf424049f60add9cd9192b4b"],["tags/Spring事务/index.html","f3b8e5892eab1481cf7d93f11bcbd368"],["tags/Web/index.html","15888acc6a04af3e708b72cf479582d1"],["tags/hexo/index.html","5f7d693e1d2df5104404f278eeae2d79"],["tags/index.html","3b322c3357413277919f89611db2aadb"],["tags/lock/index.html","5fb1b363e43a3bf193af548742c8a9a4"],["tags/log/index.html","d0cb05c5049ad8dfa2decff6e84e2c4f"],["tags/前端/index.html","ce96a2dddd338d69415ff095abf6d7d5"],["tags/并发编程/index.html","3ed7e973ddf6dec9c60412d410463a0a"],["tags/操作系统/index.html","745de20440f1222d7893bfb0ba373355"],["tags/数据库/index.html","c6e94015ed3c964f21a3ad4e48170490"],["tags/方法论/index.html","34c77fc302f0debfe15c16cd3a486199"],["tags/算法/index.html","c84674a36b70e92aeec0fb824ed5e91a"],["tags/计算机网络/index.html","6bd8650eb04e8d724f1efcdedfe33add"],["tags/设计模式/index.html","e1b15cd3e9993476b1efbe1fd80b6ae9"],["tags/随笔/index.html","19db09d15af93178550fb3d8764ba1f3"],["view-for-internet/index.html","dc3deb2433478f70c758cccfd2293754"],["xss-and-csrf/index.html","44e3c9c1c303f9a8a4451a11c42f3b0b"]];
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







