importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "css/fonts/fontawesome-webfont.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "css/fonts/Simple-Line-Icons.woff2",
    "revision": "0cb0b9c589c0624c9c78dd3d83e946f6"
  },
  {
    "url": "css/modules-old/themes/snack-themes.css",
    "revision": "7db8343de8b722988e99d1efc6d4d7e6"
  },
  {
    "url": "css/modules-old/themes/snack-themes.css.map",
    "revision": "05e548f67e717f8a0bb443a5c465f271"
  },
  {
    "url": "css/modules-old/xui-modules.css",
    "revision": "72abf8445b51deb07bb42db6cce2914a"
  },
  {
    "url": "css/modules-old/xui-modules.css.map",
    "revision": "a0e7d7d6dbb13768e7551055eb75c50b"
  },
  {
    "url": "css/themes/snack-themes.css",
    "revision": "7db8343de8b722988e99d1efc6d4d7e6"
  },
  {
    "url": "css/themes/snack-themes.css.map",
    "revision": "5fa83626d4e158262afc4864a3bfee0d"
  },
  {
    "url": "css/vendor/animate.min.css",
    "revision": "203b6e50d88b76c0a0e42cce6c8b34dd"
  },
  {
    "url": "css/vendor/font-awesome.min.css",
    "revision": "d64f00b4cef5fe7b0013add5da5b600f"
  },
  {
    "url": "css/vendor/prettify.css",
    "revision": "86b85a9c639d882b0a6c01d09379ee23"
  },
  {
    "url": "css/vendor/simple-line-icons.css",
    "revision": "1d2516f080bbccdbe0ab7f8edf2dea47"
  },
  {
    "url": "css/xui-global.css",
    "revision": "9068c26af400d5b863edc228c7f2ca17"
  },
  {
    "url": "css/xui-global.css.map",
    "revision": "6a9fcf7ec539eb1587721f2892eae297"
  },
  {
    "url": "img/favicon.ico",
    "revision": "040c6d3580e7fb10a936e9573d5544f2"
  },
  {
    "url": "img/logo.png",
    "revision": "b1e99a40f40b8bf5aa9a5b949d8aec75"
  },
  {
    "url": "js/jsubb.js",
    "revision": "a7df83d95954b79677b956a35cfaa9cd"
  },
  {
    "url": "js/prettify.js",
    "revision": "709bfcc456c694bfe8ee86d184a1c360"
  },
  {
    "url": "js/xui.js",
    "revision": "51ab6a92a6833312f943e6144970eeb9"
  },
  {
    "url": "scss/_xui-web.scss",
    "revision": "034ac92deb7d9f2c148979225b161778"
  },
  {
    "url": "scss/modules-old/_base.scss",
    "revision": "32c27113948087448f77bfbe9bce65e9"
  },
  {
    "url": "scss/modules-old/_boxes.scss",
    "revision": "400f4e9b9b6ed2d9f6c6e463efafffe7"
  },
  {
    "url": "scss/modules-old/_buttons.scss",
    "revision": "c627547a39b23f8c16315979aa06ffa7"
  },
  {
    "url": "scss/modules-old/_colors.scss",
    "revision": "77d15ae6f4849f7a807fda8a8881d108"
  },
  {
    "url": "scss/modules-old/_forms.scss",
    "revision": "9d2a58f6774f69a4eb7f4fb923caea96"
  },
  {
    "url": "scss/modules-old/_grid.scss",
    "revision": "118e167cebfde91db52bdda53484fc3d"
  },
  {
    "url": "scss/modules-old/_helpers.scss",
    "revision": "1d28b33a9a35f12000bf87d5f07563d5"
  },
  {
    "url": "scss/modules-old/_media.scss",
    "revision": "e2be1b2e443ebb18e512b83e2ec903d9"
  },
  {
    "url": "scss/modules-old/_mixins.scss",
    "revision": "de2cfc5b3600f4871e5a9d61386f1bfa"
  },
  {
    "url": "scss/modules-old/_normalize.scss",
    "revision": "15cc4ba9f9617c46d8a18ccff30be3b5"
  },
  {
    "url": "scss/modules-old/_tables.scss",
    "revision": "94d690f87e36702d0efc46b2a5bbe27e"
  },
  {
    "url": "scss/modules-old/_typography.scss",
    "revision": "e35b2abab9ee00dec29faf908b00228c"
  },
  {
    "url": "scss/modules-old/_variables.scss",
    "revision": "cecc0eab7852b46ca66b5f28cb7a7176"
  },
  {
    "url": "scss/modules-old/themes/_theme-dark.scss",
    "revision": "5bb3c32cb82bd50bbd1114c3da0d0994"
  },
  {
    "url": "scss/modules-old/themes/snack-themes.scss",
    "revision": "b1fb09bdbcbb5dd9e919955ec1803c65"
  },
  {
    "url": "scss/modules-old/xui-modules.scss",
    "revision": "b56b094ff0e2fca83a0957612f709fd2"
  },
  {
    "url": "scss/modules/_base.scss",
    "revision": "32c27113948087448f77bfbe9bce65e9"
  },
  {
    "url": "scss/modules/_bem-mixins.scss",
    "revision": "7f98796e35aa68d387b3d33b3eb9057d"
  },
  {
    "url": "scss/modules/_buttons.scss",
    "revision": "a93f1a9dc6c27b18cd588b83c2054b3a"
  },
  {
    "url": "scss/modules/_xui-modules.scss",
    "revision": "146437d701f55ca87a09b1be602538d3"
  },
  {
    "url": "scss/xui-global.scss",
    "revision": "1d2a4ea01161834e86c4ee16e1e270b2"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
