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

var precacheConfig = [["404.html","09321ab91ed9d57a785b44f747f050b8"],["CORS-JSONP/index.html","323f285af3beb27ddb5a06f974e0232d"],["JVM-summary/index.html","63aaec3c5aefefe1a23e1c32ea1dbc94"],["RBTree/index.html","7425dd000ae68b89422745943440d8c8"],["algorithm-sort/index.html","5af1a0d399f118f7337e535761456252"],["algorithm/index.html","5b99ce3a7efb88c2830cc4c19cfd6288"],["archives/2017/09/index.html","c299473e0897f4da67d3b5447c6c1e99"],["archives/2017/12/index.html","cd0057965a0d51141fc9c52b6652502d"],["archives/2017/index.html","236ba90bf1ebf941d0a53354866bbc90"],["archives/2018/03/index.html","81d4996e55bfc61fb74bc93c30b91272"],["archives/2018/08/index.html","e05a1024ca57438e0dbc6d6c5d1662a3"],["archives/2018/09/index.html","eb5eae628731cfbbcf6ecfb01115ca0a"],["archives/2018/10/index.html","190ef14e0fbd120191a2595469fdc440"],["archives/2018/index.html","5214f71fcce106f8f4d6fa7152e3b4ad"],["archives/2018/page/2/index.html","ed9c1c4210288d55ff905333b0092a15"],["archives/2019/08/index.html","d1fa019cb2d208c2a576af9776985186"],["archives/2019/09/index.html","1d65f807a2c42778e8c54559005d367e"],["archives/2019/10/index.html","2c3b6d5180436837330b4d7babc67159"],["archives/2019/11/index.html","8ecd9424f68f18ef10b0ee8eb49e2c90"],["archives/2019/12/index.html","2f45b9a647a9e9775e36314bcdac1b51"],["archives/2019/index.html","95a592f50815f47796ee7f49e9f70e8d"],["archives/2020/01/index.html","a7180c5caca28be4cb9b47dbad192b31"],["archives/2020/02/index.html","ee57537fe1324afb4f61210781545a22"],["archives/2020/index.html","be1166a5dc6b799541c8d44ac121adc6"],["archives/index.html","4a2e5b8a54739c8e7b1c1d97782c6cc1"],["archives/page/2/index.html","1412becce56278c8e3484a9a7b873664"],["archives/page/3/index.html","ed9bf7a37257d001bb6bb8d62efef9bd"],["categories/Java/JVM/index.html","376a7cbb63aff817016600486f164d7c"],["categories/Java/index.html","ac4136185f103c1788bd1fd8ae06f178"],["categories/Java/锁/index.html","59967546ea344b1538089a5d4756f1d0"],["categories/Java/集合/index.html","8112f6694a70c42c2f42dca2cb1c6f60"],["categories/Mysql/index.html","42dcc456dcb671a70d5685917faa4df1"],["categories/Web/Mybatis/index.html","24d0e064c00234e3460a81945927a2b8"],["categories/Web/Spring/index.html","57af99c615482889ea177aad0d7ff854"],["categories/Web/index.html","bfbec16362708ed3acb6add555110ca7"],["categories/Web/前端/index.html","c56cc6dd54a97d96a8483f767de2c7dc"],["categories/Web/服务/index.html","fdd4b6a5ee27c5a52b18b7a38aa234e6"],["categories/algorithm/RBTree/index.html","80764d8fcb24eb8012ba66ffaf1e8a57"],["categories/algorithm/index.html","104e33459646632203adca1b1729d5fe"],["categories/algorithm/leetcode/index.html","25503ffb3f30f767c4388613e5ea50b0"],["categories/algorithm/sort/index.html","ad394f9c50d7a3fc0ec2cca8c9a0ad71"],["categories/hexo/index.html","435b327d117211f19ba59e6061318917"],["categories/index.html","f9a05ae77736f340a6ef4619c3b97e7c"],["categories/基础知识总结/JVM/index.html","75f91380df450677239a0d5b7c04c4f9"],["categories/基础知识总结/Java-Web/index.html","c0e1feed827fd0868cf61ed4cf140fd5"],["categories/基础知识总结/Java/index.html","c6ce3df6813d820df598fd97ffcdad3a"],["categories/基础知识总结/SQL/index.html","5c3fa22478ea39acbae0d959566730c0"],["categories/基础知识总结/index.html","dd5ae00323790e30a7426385cfedc2a1"],["categories/基础知识总结/并发编程/index.html","01d9a49036ca8af6cab1bd8bb2fcad2b"],["categories/基础知识总结/操作系统/index.html","da0fe6b90f83c26645cb138ef8e82b07"],["categories/基础知识总结/数据库/index.html","39a493d1ac5c213288eea94e85a8230b"],["categories/基础知识总结/计算机网络/index.html","0b6b68ad69f66720123ff5ec1dea8fc1"],["categories/设计模式/index.html","4c2ce5354da6ff45fb005041be5cfb63"],["categories/随笔/index.html","ed9b77a27930decccdef6dc908a17844"],["css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["css/index.css","7cfc369f97c2871fd96c7afe2cb088ec"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["database-summary/index.html","4238b9e8b17fe59b5818b9a55df367b9"],["disaster-recovery/index.html","07f55d89a4145476d801477f49630bc2"],["distributed-lock/index.html","1c276048c628fda27b427b53db39c3c2"],["gallery/index.html","a2e1e620452352c3189030e5cd56e3f6"],["hashMap/index.html","34a6e53c49ec3c4c55d052545969e2a9"],["hello-world/index.html","89fe35313fb476a005d48bd1a98093f1"],["images/icons/icon-144.png","77ff48fc0e9d1928e7de882687a2206b"],["images/icons/icon-192.png","84dc14588b23f97779da8f8b0969d4ad"],["images/icons/icon-36.png","5c953ea6f63a79f355784c3f9f895b70"],["images/icons/icon-48.png","8b51531a5c3dd42e5c67451b890c4472"],["images/icons/icon-72.png","bf9669545978443a03c14e07664dc885"],["images/icons/icon-96.png","7669c9f2e04be5935dd5b43832d3bd97"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","4d34f54ef999d51cd2d63746fb3f5a82"],["ioc-and-aop/index.html","fc44330ad8e67da3277c9729ec0e0a5a"],["java-concurrent-summary/index.html","34afdfc06403b6240c8956ac19f3bd8f"],["java-summary/index.html","fc7e6d70e4133b42276c98f774698c20"],["java-web-summary/index.html","a280c781d5d01f7a968fe56750507b1e"],["js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","911db4268f0f6621073afcced9e1bfef"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["jvm-metaspaceSize/index.html","2c3c394a586c1da24615e783dc5566c7"],["live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["mybatis-cache/index.html","2afb04ae0302361a8bbddd93c6249b28"],["mysql-lock/index.html","dfec9a73713e7bed549d8911e94e12aa"],["network-summary/index.html","edaff678b10d970d0d41cf7129ae0c60"],["page/2/index.html","3151cf7476da4bc05d68a8a566bf3be9"],["page/3/index.html","8aa08702633cb6e209db94c33a2b2fff"],["service-avalanche/index.html","1262fc9de3ab4e459ed31a26a3390342"],["singleton-mode/index.html","bcf1c927984cd8fa9b530cb05a96390e"],["slides/index.html","7a45eaef75f771c8610b7c04281543e6"],["spring-logger/index.html","7bab459fb7b1bf5ca40998e410839689"],["spring-transactional/index.html","121af70be2441324c7355a28e742891a"],["sql-summary/index.html","f63e8c704f16358f16839c7f2b0ff0c8"],["system-summary/index.html","fdf385eea5c1f03baffb0632c25b2490"],["tags/JVM/index.html","fefe9636bfb729a9f233e8d3c9406df2"],["tags/Java-Web/index.html","a2f0662c514b2cc4ea13118429382aa3"],["tags/Java/index.html","1cfff071a6770cdc985c27a6030c22c7"],["tags/Mybatis/index.html","cf41dd0badc2e1202ec24cd95f59ae8e"],["tags/SQL/index.html","524d021d82b353158b4fa9a773a6d7c5"],["tags/Spring/index.html","630a4bd950a5127f81dc040be5a053fb"],["tags/Spring事务/index.html","96bc164ca74e5cb18f68a256492a9f9a"],["tags/Web/index.html","359ca3c1525877f60f997211de9975f5"],["tags/hexo/index.html","5b8e55ea70c9122396d5bad976a81a4d"],["tags/index.html","112075b1430c934cccd9dd088bd9b38e"],["tags/lock/index.html","30b3aa402c4c40240cf008da392ced19"],["tags/log/index.html","5db2a7d3ebfe464d8b637eb12e611b49"],["tags/前端/index.html","6e1204e28fe75bccc0ca721b4551f958"],["tags/并发编程/index.html","d51b1f479127c138a584729821785301"],["tags/操作系统/index.html","1bc8ca16737c4be61ea3fed166eb45d3"],["tags/数据库/index.html","47a59c635610f11b39b62a05242ff106"],["tags/算法/index.html","827a1a0e4db0b92459dec0d75f65d15a"],["tags/计算机网络/index.html","644d5d1e16ccdacd30b4b0338337c111"],["tags/设计模式/index.html","46a5ec14ac2e14acfcdd28a4dd617c6e"],["tags/随笔/index.html","e542881f02839371d304a1b0d0729a18"],["view-for-internet/index.html","8e945ed0e233cec5c0235cc4a44ec6e9"],["xss-and-csrf/index.html","bc597e1646e378406acd2e87db7fcbea"]];
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







