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

var precacheConfig = [["404.html","ef1a031d11a75ad8387078399d82be2f"],["CORS-JSONP/index.html","2969895912935462934afc1df520e02e"],["JVM-summary/index.html","f29e3a4269d78783ac8d68c959d337f7"],["RBTree/index.html","8d7a38265253f6c1c91ebf9fcbafdbad"],["algorithm-sort/index.html","a722079978d069d1f35b8116d1f35872"],["algorithm/index.html","3c7119ab02707efb15df0a168dcba2fa"],["archives/2017/09/index.html","2a46830f93e2bd9a1ba331c82959da8b"],["archives/2017/12/index.html","2837b71c9f08c309c2ac45bd15a9da1c"],["archives/2017/index.html","69e764714f1004c5a20594fe1c3684c0"],["archives/2018/03/index.html","3b37a7c90b4d8c7f86446bd483767df6"],["archives/2018/08/index.html","5a987286e208df955c05f696efeedd62"],["archives/2018/09/index.html","5cd566544de8805b604ec3e1eeb8393f"],["archives/2018/10/index.html","4755bfa4c398b7e9fa71cf3ff8f14dc7"],["archives/2018/index.html","b4f2f7774cab8162d30a93f81198a0b4"],["archives/2018/page/2/index.html","29f829394170c067b5b68d4e27f28ebc"],["archives/2019/08/index.html","b820686ad7c0a0f5db80feb98f279a3b"],["archives/2019/09/index.html","15cd9fd196a4664bfff8372584f173d1"],["archives/2019/10/index.html","c50d473fa24217a26de7bca0245c6041"],["archives/2019/11/index.html","52de55f1f69c32b016dd5f216557983c"],["archives/2019/12/index.html","51c4d67aa506043d820ef0a1b48dbdba"],["archives/2019/index.html","5274551e479aff5a0417e8b36af8924b"],["archives/2020/01/index.html","5fd676a41668170c338cf74db7822cbf"],["archives/2020/02/index.html","f27588e27e0443820f6a1986b8adb882"],["archives/2020/index.html","65fa92a2744b70a3adb3541490b10da5"],["archives/index.html","a800a9daa5f130900dd28846f1781423"],["archives/page/2/index.html","d367e0bf0aae52b8f8543129a7b81232"],["archives/page/3/index.html","028f99c2d7fff472e6219bc12a35927e"],["categories/Java/JVM/index.html","22e3025ac604938dcaf1aeba94e2a094"],["categories/Java/index.html","77357ceb25ace1986702eedc83682db8"],["categories/Java/锁/index.html","b5d806fa9d268b53042048119f8770de"],["categories/Java/集合/index.html","fbece9474e67af4d838d6defe6e18a96"],["categories/Mysql/index.html","7d9e2bbddd6f9c952b6f2a002025ae7f"],["categories/Web/Mybatis/index.html","ca482536eb7a23084a30bad474a35063"],["categories/Web/Spring/index.html","449ca35d8f1879c34d329289b34c924a"],["categories/Web/index.html","9c083c152564f2f92c306fb32527c745"],["categories/Web/前端/index.html","606f311ff9f7b7cda8e35aa0c94ec8fc"],["categories/Web/服务/index.html","3d0a05bf57b247a308c7549234797079"],["categories/algorithm/RBTree/index.html","d4e7110967ba9950d16bba8a22277873"],["categories/algorithm/index.html","64c1c5eae8dd3026d7c163fb12baae77"],["categories/algorithm/leetcode/index.html","ff3856be4130e40a36927d5c81cbcdcc"],["categories/algorithm/sort/index.html","a46e578c2fbc0fb7454c39bb350c24a8"],["categories/hexo/index.html","030b062207d945d761d2d6f80a95d733"],["categories/index.html","aa4e74f2e780e1f760d51faedecff16c"],["categories/基础知识总结/JVM/index.html","59d2bdf147321c7bfb6e8b7202d854b3"],["categories/基础知识总结/Java-Web/index.html","24a6383318c37545b0acc16223036e02"],["categories/基础知识总结/Java/index.html","c851bf1c68af2f8bbe857caacd02c400"],["categories/基础知识总结/SQL/index.html","57d9ee4255f9d57e560bc4da7592bef7"],["categories/基础知识总结/index.html","64637c0bcb67f7a6fdf8c7d5fb42ea91"],["categories/基础知识总结/并发编程/index.html","ef0c41f81d6bbed1dd6ca973b129ac40"],["categories/基础知识总结/操作系统/index.html","af8ef751f51f3e004282d28690b965e1"],["categories/基础知识总结/数据库/index.html","dcb6b9024eed0861b33a938cb2a731ff"],["categories/基础知识总结/计算机网络/index.html","8f4ab7c8f139df8d1a7724a8b92eaaf8"],["categories/设计模式/index.html","c40aa6c37ef71287fb1a4b0817b22298"],["categories/随笔/index.html","219889434912250d823e50806b5b0208"],["css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["css/index.css","7cfc369f97c2871fd96c7afe2cb088ec"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["database-summary/index.html","be3bcea2f8a11a510105fb6b35e4b28d"],["disaster-recovery/index.html","8872ef2cc00baa40312de827c62b80b4"],["distributed-lock/index.html","2fb42d7741ad89d9adceb283a13119c2"],["gallery/index.html","cb666b8304edcb601a296f09a59aa3f9"],["hashMap/index.html","15952d5ca36f102bafe4bdc6fd0e0008"],["hello-world/index.html","44efbdbf6a45de9f44ac5c439c1c560d"],["images/icons/icon-144.png","77ff48fc0e9d1928e7de882687a2206b"],["images/icons/icon-192.png","84dc14588b23f97779da8f8b0969d4ad"],["images/icons/icon-36.png","5c953ea6f63a79f355784c3f9f895b70"],["images/icons/icon-48.png","8b51531a5c3dd42e5c67451b890c4472"],["images/icons/icon-72.png","bf9669545978443a03c14e07664dc885"],["images/icons/icon-96.png","7669c9f2e04be5935dd5b43832d3bd97"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","966f9b88f3c4039c565b307e531c393c"],["ioc-and-aop/index.html","95ccdb8ad4999d5d1991f18f1b4142ac"],["java-concurrent-summary/index.html","b527775377ef2ab82b10a32391b49a8e"],["java-summary/index.html","db14eb49beb78c8f5815a2b40e14155f"],["java-web-summary/index.html","121d1645a4bc934bbda3548a96e4f1ba"],["js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","911db4268f0f6621073afcced9e1bfef"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["jvm-metaspaceSize/index.html","34dd6634c54a1377c46d5ef3d7c094e4"],["live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["mybatis-cache/index.html","a741e677d7e194147e63bcc61ffcaceb"],["mysql-lock/index.html","1da68fd65104c08846f9ed4a955aafd6"],["network-summary/index.html","a4f4f8ad669b3d00378900963980a9b6"],["page/2/index.html","f988022f06125cd0e105e11bb3bd97ef"],["page/3/index.html","8156a73de801277902301910cd4faaf0"],["service-avalanche/index.html","9092521a4e24c44c7d98afcdee3bb131"],["singleton-mode/index.html","abdcfb38daea469b499a3100802acccf"],["slides/index.html","bb57f7c6e4fb4ee3436ec6fa4eb1b701"],["spring-logger/index.html","9bcd184e02af2ad29704c1fb03891fb3"],["spring-transactional/index.html","495b6850594d73d47b8f495092d72565"],["sql-summary/index.html","ead360d1ca23a7efac65ac3f5c38ed2c"],["system-summary/index.html","1f400b0fe7eb219c36ae83d751608e13"],["tags/JVM/index.html","e7d25d4ac25c06b45a1614004e206a00"],["tags/Java-Web/index.html","85fa09121a88ebcab8c4a0a738cbd6ba"],["tags/Java/index.html","1c9561f3440588701e0af0563b827761"],["tags/Mybatis/index.html","b04ed07cd79494df7da0fa4bad611893"],["tags/SQL/index.html","e24a9e0029a18beb11d7b69ad32a334d"],["tags/Spring/index.html","7d5301fb86f534f6a4679685c449730e"],["tags/Spring事务/index.html","8b2baccee9dedc7f946e46994e6c18e9"],["tags/Web/index.html","e56aa137dca1e1648803a64f1849ce7a"],["tags/hexo/index.html","b0e36893a5e80c91c0c589e520c33c29"],["tags/index.html","b49d71a0564b76f6c329f9078a6ad6a3"],["tags/lock/index.html","b051eb43c4688f0941d8dd5fa290097b"],["tags/log/index.html","18488317733a0475c7d90550c0d0bb93"],["tags/前端/index.html","33372e541ba5790712edb9694215786b"],["tags/并发编程/index.html","5069747f37d602ca168049d814c5c739"],["tags/操作系统/index.html","a57d70b8bdf23fe9037c84d4b4e878b3"],["tags/数据库/index.html","48fe40e46d0898bdefb28ae9593c7ed5"],["tags/算法/index.html","ceb8fb189320ee967a7d7ae32f6e63a6"],["tags/计算机网络/index.html","6bd1b121046003ae899d1780b4ef6304"],["tags/设计模式/index.html","0c83de573c8c489bfa89794acdeca6e7"],["tags/随笔/index.html","78d96683f005377841cca17f5662b1f9"],["view-for-internet/index.html","3674ecd48a5c60edfbb297702bcb9b6a"],["xss-and-csrf/index.html","95465b0d9407351ed2dc76cae31ff7c8"]];
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







