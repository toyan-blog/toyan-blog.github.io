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

var precacheConfig = [["404.html","ef1a031d11a75ad8387078399d82be2f"],["CORS-JSONP/index.html","d447711295f5f82683c3365fb99aa482"],["JVM-summary/index.html","f8d4b04c506b9f7b1a5cd048dd001497"],["RBTree/index.html","7e6b29e27eb223b5d3637f3d288db814"],["algorithm-sort/index.html","7bf812857c60aeabd3091773655e3834"],["algorithm/index.html","c6981cbad514eba5c09d876112eff978"],["archives/2017/09/index.html","0a83826120a541b735042f1e1f49c84c"],["archives/2017/12/index.html","69c00079320ae1139beb0a5fb131b51d"],["archives/2017/index.html","ad5eea552fac756e4d55bfedb679e712"],["archives/2018/03/index.html","45f95194a13f74ea9e6377362f08e987"],["archives/2018/08/index.html","ca37366112641c652c737eb1649f71f8"],["archives/2018/09/index.html","d7ca3f830be5e82784aa70c7964eb9d3"],["archives/2018/10/index.html","01789af31e6cb1cb6f539903825f83d9"],["archives/2018/index.html","4dc3dccf53c8b74d1943cb0a68cfc287"],["archives/2018/page/2/index.html","f946f77423643bacc42eaa2d55e148b0"],["archives/2019/08/index.html","54dfa539e39cb25343af90d69170208f"],["archives/2019/09/index.html","f95581dd9ccc82e40af2e932a4e4fd86"],["archives/2019/10/index.html","c1e5d6fba2ac2aca5746784a24cdfd29"],["archives/2019/11/index.html","0a445caf67cec9f2d9149b9468818c7e"],["archives/2019/12/index.html","0f59d2d05071fdfe191014f7afeb673f"],["archives/2019/index.html","ed9ba98d96956bdaf416b7f046bde7de"],["archives/2020/01/index.html","103e0b32b711ec7c9b311400af925ce2"],["archives/2020/02/index.html","8033353e7e87e248406198a54941d34c"],["archives/2020/04/index.html","634ec51caabc6e9aa3c8d101f516c20f"],["archives/2020/index.html","a9d0efc053d4f7dfef3b4d55d7734e01"],["archives/index.html","facda24c006f70789ac1bec35d177eb9"],["archives/page/2/index.html","e4ff2c397a24681064aaa1b41a54d6c5"],["archives/page/3/index.html","6aecb5f5f6dd4a8538a24cc5382a0cf4"],["categories/Java/JVM/index.html","c0b6e644ed63b9d54804759bf9ae55db"],["categories/Java/index.html","d672363729289110552230a7c1671fd5"],["categories/Java/锁/index.html","d4cafc4375148b5fe7debf614926bea2"],["categories/Java/集合/index.html","074a4492ac2f9f64bc90ab9edb74311c"],["categories/Mysql/index.html","576115bf3271851a28b06a2ed88b60c1"],["categories/Web/Mybatis/index.html","20e5521edc2012b44a7c19d581bed163"],["categories/Web/Spring/index.html","01c26cab556eca4e7b9b7163b3b8285a"],["categories/Web/index.html","6a37ecee861ee41c461cd41cb99c89ba"],["categories/Web/前端/index.html","e2a9fa41342c9aa98fcce8201ba32b05"],["categories/Web/服务/index.html","9d3324b608aac9e8bdcf6d88dcb9007d"],["categories/algorithm/RBTree/index.html","2a4c18dbb20e51d115858b76fc585930"],["categories/algorithm/index.html","499cd11b392f03dec148d1e0e6d841fb"],["categories/algorithm/leetcode/index.html","6db6a0fb87780e71e283af441bf9cd22"],["categories/algorithm/sort/index.html","a0abd32237355459bde3d88d6be1320f"],["categories/hexo/index.html","b3e6b7cdc1537b6694848fa99d19f05e"],["categories/index.html","a6e8e4a37e8a1e2381be7548d952e019"],["categories/基础知识总结/JVM/index.html","00396db02a3d98f16e3b3123dc90ec7d"],["categories/基础知识总结/Java-Web/index.html","d0f32afced6e87e3a3e4533053ed8098"],["categories/基础知识总结/Java/index.html","ad8353d9c6f1447ed8616ffdfd0e08f8"],["categories/基础知识总结/SQL/index.html","0109cbd079349d31c4934964f5772a02"],["categories/基础知识总结/index.html","122ac92e08d656dde0492cec93fe3aab"],["categories/基础知识总结/并发编程/index.html","8e772479a1d6381fa839f95c674baf80"],["categories/基础知识总结/操作系统/index.html","76007eeeb838ffa0795eb55ca3aaa85d"],["categories/基础知识总结/数据库/index.html","6af67f034d38ed4417b46175aaa67f48"],["categories/基础知识总结/计算机网络/index.html","4253b44069fc6a0a57ed82fb1d5decf9"],["categories/设计模式/index.html","609da8c6210ccad7cf849e7e482b6834"],["categories/随笔/index.html","76c234020c332d2014dc59fd8cc03316"],["css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["css/index.css","7cfc369f97c2871fd96c7afe2cb088ec"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["database-summary/index.html","7315ae5f8e982d035eace3bb7e0a6126"],["disaster-recovery/index.html","50a384d09bacdace9590456379a2ffc1"],["distributed-lock/index.html","c689fb5f9e2539079f10f9bfd5122e53"],["gallery/index.html","71cacdb20d202e2fc30e2f8a352c1425"],["hashMap/index.html","8c9559f41377523d39ab4230f3da8db6"],["hello-world/index.html","09c3099a70528e9d8a90b69ec190a051"],["images/icons/icon-144.png","77ff48fc0e9d1928e7de882687a2206b"],["images/icons/icon-192.png","84dc14588b23f97779da8f8b0969d4ad"],["images/icons/icon-36.png","5c953ea6f63a79f355784c3f9f895b70"],["images/icons/icon-48.png","8b51531a5c3dd42e5c67451b890c4472"],["images/icons/icon-72.png","bf9669545978443a03c14e07664dc885"],["images/icons/icon-96.png","7669c9f2e04be5935dd5b43832d3bd97"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","14e1226fb6e6f5ac99cf22b1c7e6ff0b"],["ioc-and-aop/index.html","b102f8389534afb41ddbce935693cb8f"],["java-concurrent-summary/index.html","c95705c195f3395ea3b84f5fd8ec88c1"],["java-summary/index.html","0e34e620155652a62b7da801f6caf982"],["java-web-summary/index.html","0c9adaf9100227908382621f681bce62"],["js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","911db4268f0f6621073afcced9e1bfef"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["jvm-metaspaceSize/index.html","8c606f8bae35e1cbed27e3154b879dc7"],["live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["mybatis-cache/index.html","54bfc05387f4211bb54b238d87a6bf39"],["mysql-lock/index.html","85dcdeb5c4401f6e92c8604558988a39"],["network-summary/index.html","8d161e51c07c0e1386d85c309b8f8885"],["page/2/index.html","e08844e4b7248087acca67f9849539a5"],["page/3/index.html","54a0193227c59b2acad3368202bc8d09"],["service-avalanche/index.html","b88d839c923337505ad52ebaadb704c8"],["singleton-mode/index.html","10ce5dc6e6324943de0185c1255fee80"],["slides/index.html","75d6dd2895684d61d0961f8aee75ec25"],["spring-logger/index.html","c77933f759a1f98d69d939c03ab35c4e"],["spring-transactional/index.html","12de1177f157a5d82d105a8934825d94"],["sql-summary/index.html","82707d0a7d8df0e9eb5f9b1a6556e412"],["system-summary/index.html","38b98a335b8720431c33209e527b04b5"],["tags/JVM/index.html","a41adca030c8eebb35197edcc291e02a"],["tags/Java-Web/index.html","8cfff5e0979368a39050155a6850b952"],["tags/Java/index.html","95ba1c65aca2ef5eec96f51330e364e8"],["tags/Mybatis/index.html","8a4f37ffc3a268aac0b9a5db71401f0b"],["tags/SQL/index.html","0cf0efce5f27d3349844713792958663"],["tags/Spring/index.html","f02372c487cdd0e64edb54ab2168edd8"],["tags/Spring事务/index.html","ed14d08be168f7472eb5394b59bc9987"],["tags/Web/index.html","9312a2ac72bc8c60cfca1ca5db374a3f"],["tags/hexo/index.html","d2070dfe39beaaad2899bac0254f305e"],["tags/index.html","ed85d8f23159500f29834ba32245bd24"],["tags/lock/index.html","afa3222f3902bd6632cc4ee77e00f618"],["tags/log/index.html","834e867a90e6f9e4d7d07c2f84bab7f3"],["tags/前端/index.html","3663cde1e680c5f7848f4795dcfcd59b"],["tags/并发编程/index.html","916ba7fc72a1d8c63fd3f50e1e9236cd"],["tags/操作系统/index.html","a430e066f08809557f82e0d5df485c1d"],["tags/数据库/index.html","20af89c225746629d55ca9a5ec992fb6"],["tags/算法/index.html","26c4ac4052d064533bdf6270603c6ae8"],["tags/计算机网络/index.html","057c13f6b91f85fcab80756979a885b3"],["tags/设计模式/index.html","c42311cfb67bdea5f3aea37966e7125c"],["tags/随笔/index.html","1e62a7d170b03fc024e35a274f2b2a25"],["view-for-internet/index.html","15381d4e023d284fcbfff12d985a882c"],["xss-and-csrf/index.html","4b0506ce0cd210dbe33d4bc37b3c5ac7"]];
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







