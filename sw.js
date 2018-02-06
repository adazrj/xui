

// 通常项目中的 sw.js 源文件都是通过这样预留一个空数组的方式来预缓存内容列表的
workbox.precaching.preacheAndRoute([
    '/public/img/logo.png',
    {
        url: '/index.html',
        revision: '383676'
    },
]);