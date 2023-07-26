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

var precacheConfig = [["404.html","598e7a6abf7af95b1bb7be15742c24b1"],["CORS-JSONP/index.html","8fcc58b964b945ec9f101e315ac2c9b5"],["JVM-summary/index.html","d9dc0a5933a0a8f8a24cc5ae8f98c031"],["RBTree/index.html","5656a529393457deb1bb87b5b5722730"],["algorithm-sort/index.html","e011ca164ccfc8f12aee824ca1c90140"],["algorithm/index.html","f4800c670625f1e0181fb07cc8229454"],["archives/2017/09/index.html","6dde26b064c9a6e0daac6ca84cec7750"],["archives/2017/12/index.html","32925d8892dee83187194bbc79c25538"],["archives/2017/index.html","fc0e8c8feec2fd55c4dcdd3700201ad9"],["archives/2018/03/index.html","f4ef023c1644820beb4251a6a3b1cec6"],["archives/2018/08/index.html","5e849294f6620b3682b4adabd32060be"],["archives/2018/09/index.html","c7094d83b06e02c3d5d42fb4d98852ef"],["archives/2018/10/index.html","65af43f3eb2d1174309890c1709e0d08"],["archives/2018/index.html","130331af27d7be7b4437537c03db4ffc"],["archives/2018/page/2/index.html","03a9c07cf9964290d6b27d325ca3bbeb"],["archives/2019/08/index.html","cb7850891e38795956f97768b43829c4"],["archives/2019/09/index.html","a2560c9e4e70ae9dfcf88fd2fd7b4a3d"],["archives/2019/10/index.html","9e62ea5b08ce0fd5b1a8c3b9e57b0149"],["archives/2019/11/index.html","9ed36d77e933b3ab200befb2e45bd60c"],["archives/2019/12/index.html","2300be2403b5e7f8792be8200726e5f3"],["archives/2019/index.html","4ceedde72b19659b6624aa6c9fd0d2d9"],["archives/2020/01/index.html","0fddce83b2de4aa0fa66d241f1277007"],["archives/2020/02/index.html","8f5317e8b5f12cbefa2e39b85e2d2cee"],["archives/2020/04/index.html","0d57d41f68fb2c25ec2a6cc3d4c6ced0"],["archives/2020/index.html","8ec4d325667407d94fae88e6100c7d01"],["archives/2021/02/index.html","59821cd29d3e1fa69a207512ebd6577c"],["archives/2021/index.html","4de9c067785c190e272865396e24e203"],["archives/index.html","50fa279416605348e75b6d9e4bba0fde"],["archives/page/2/index.html","7e409959799bd1866a14e72e250a7a38"],["archives/page/3/index.html","1e9b503ce4b0375e617ba7ca1b02367f"],["categories/Java/JVM/index.html","3591a88dd2d9636fd34fc44a1a8fb701"],["categories/Java/index.html","7b8235e70298076a19bcff44f5f72c61"],["categories/Java/锁/index.html","bb5306ac7929d458ff4bb3606adc1340"],["categories/Java/集合/index.html","4dfe38819820d329b153e20ac8b831f9"],["categories/Mysql/index.html","ff396fda4341f98eba4aced18da3ce64"],["categories/Web/Mybatis/index.html","6072111a83a8f60b2796e866373a6c54"],["categories/Web/Spring/index.html","0fa56ddfd94bfa9ce5338de4de249dd3"],["categories/Web/index.html","7107e82099ab06927a41d2f154302814"],["categories/Web/前端/index.html","41baedb78c0a9772398623b3038509d9"],["categories/Web/服务/index.html","1c66c3ada922817e4c539df00fb87fd6"],["categories/algorithm/RBTree/index.html","48066fd6142f3c625742502ac54fb516"],["categories/algorithm/index.html","f7b774db3eb30b2531e6f97bd1f67ead"],["categories/algorithm/leetcode/index.html","79115905de0ac3a17948915bf12a23e1"],["categories/algorithm/sort/index.html","b17b881247303fbf107267df64c70bfa"],["categories/hexo/index.html","56d8745902a4aed534637d993e051727"],["categories/index.html","28dddab3d88688809bf74bdec43ee612"],["categories/吴军/index.html","a60e61fdf26e33f533e061ca9c623c5e"],["categories/吴军/谷歌方法论/index.html","c602ff5a85e8621c78f205f963f1d3f2"],["categories/基础知识总结/JVM/index.html","f132ce10a33f35cabb36703ab7556424"],["categories/基础知识总结/Java-Web/index.html","8f1f36d834848bb494ce2e5f9ad957b3"],["categories/基础知识总结/Java/index.html","845fee2768715613164ec28e5183cb2e"],["categories/基础知识总结/SQL/index.html","4125066072899281d7b4c6f14d187a58"],["categories/基础知识总结/index.html","db0bf221c6900126f160b6643621da8e"],["categories/基础知识总结/并发编程/index.html","7d352b1fdb8ce1c6187684fcb28c9bc3"],["categories/基础知识总结/操作系统/index.html","49fd3f46beaffae4d9ff7ee2ae657fce"],["categories/基础知识总结/数据库/index.html","ab946e11f55f9d12a1760892b4ca965b"],["categories/基础知识总结/计算机网络/index.html","dc3089dd8f6d424b94b50859c2fab218"],["categories/设计模式/index.html","232afd13848fd76bbeb5b82bf1101985"],["categories/随笔/index.html","de14be9e6ca88d2cfbf23f8217b4df0f"],["css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["css/index.css","7cfc369f97c2871fd96c7afe2cb088ec"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["database-summary/index.html","888a8d5eeb58e18670655eb89286f59a"],["disaster-recovery/index.html","49566b6c975dab14f04072f55dc277d2"],["distributed-lock/index.html","f8285c71715f94ce9425c9691bff6d47"],["gallery/index.html","d0e3f2db6efe090e135fa69ddd5a5363"],["hashMap/index.html","1716054fa02eba1e61472e9172c431a0"],["hello-world/index.html","fdb3347f0ffb331f35b891d1036f5005"],["images/icons/icon-144.png","77ff48fc0e9d1928e7de882687a2206b"],["images/icons/icon-192.png","84dc14588b23f97779da8f8b0969d4ad"],["images/icons/icon-36.png","5c953ea6f63a79f355784c3f9f895b70"],["images/icons/icon-48.png","8b51531a5c3dd42e5c67451b890c4472"],["images/icons/icon-72.png","bf9669545978443a03c14e07664dc885"],["images/icons/icon-96.png","7669c9f2e04be5935dd5b43832d3bd97"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","ca68268ad22d27885e2b7cc35a3e5e62"],["ioc-and-aop/index.html","92c419c69544d31feda17b84c0e7ad92"],["java-concurrent-summary/index.html","e6025b2ca88f75bd341c4541b31c1dba"],["java-summary/index.html","f76b3a37d3cf3ade67fcaad0b85c1a3c"],["java-web-summary/index.html","a401ea022954c313658260d6f0ab9f3f"],["js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","911db4268f0f6621073afcced9e1bfef"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["jvm-metaspaceSize/index.html","555cbe7ce66bee46242f0fb7f7208399"],["letter/index.html","8f714666bb2b04a4d09ea02b3db62607"],["live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["mybatis-cache/index.html","11d03fd4704ca18fcb0242c2072b055b"],["mysql-lock/index.html","5148ec2474b29da7ba8c38a85f4fcf1f"],["network-summary/index.html","cf8c8783ab29863bd1b3c92d9eda896b"],["page/2/index.html","eb6504f942e6258e69dca4a094b122ea"],["page/3/index.html","788a35d55c08e9cb301ab4637d65ee1b"],["service-avalanche/index.html","8c072b7daec59c2c99dc4027505cf3e4"],["singleton-mode/index.html","8b679db43cc0c471690d4aa059ea1c84"],["slides/index.html","53d37d874203c9facb7254c7e10321ab"],["spring-logger/index.html","b9f797b4f3f7495295393579139c722b"],["spring-transactional/index.html","e412f8b4054d07e6d0d6862486e209ad"],["sql-summary/index.html","a0877df4d0dba1689b0bec64078a2a65"],["system-summary/index.html","df95fbe66d54e9f261f64675a362c32a"],["tags/JVM/index.html","029f6dfe4e45a6b5a54026fb7b170b63"],["tags/Java-Web/index.html","3b469e4a5970fdf34000212118680e03"],["tags/Java/index.html","ee2921d986a1ddaed517d72fd243b824"],["tags/Mybatis/index.html","3648d5bea8113e26e8c5cb64150e20d8"],["tags/SQL/index.html","67bb4dde53a5326a3046ee774bb10d8c"],["tags/Spring/index.html","f845d6243ec93528e25d214a245ae282"],["tags/Spring事务/index.html","a4e1c93b811a1700a6915db46bae1c50"],["tags/Web/index.html","521961c9b9c180b67c001d9b9a23ed9b"],["tags/hexo/index.html","a7494302c3525c426d89a7def2638567"],["tags/index.html","d6beefde51af655dc53b977d52928874"],["tags/lock/index.html","d3454c6a7cffcc99ee44d76f44c94216"],["tags/log/index.html","3b17436110004db74f1c589a020ca5a4"],["tags/前端/index.html","095fcc849cbe130b2c7d0848d5631b62"],["tags/并发编程/index.html","5a68108a924e9f7cd9ec5c56d99bff6d"],["tags/操作系统/index.html","0c88c87de657e87a3b276736b2eaf6e8"],["tags/数据库/index.html","0ce40fc56fc284baaa388f7854dc7dd2"],["tags/方法论/index.html","3f67372e9c2b019c77b047917ede066d"],["tags/算法/index.html","e04ba4cddec5e2ed510ec1dad492a237"],["tags/计算机网络/index.html","475969e74f8b90f68d8193c3dc7c0cee"],["tags/设计模式/index.html","b81867c1ecfe159669df0a690b1cbf5b"],["tags/随笔/index.html","28029dc97d16b5fb9828671ecf37a39d"],["view-for-internet/index.html","68693a581bc3cf0a52c2db959a67c839"],["xss-and-csrf/index.html","31b8a57837143a28030b134edc4c36e3"]];
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







