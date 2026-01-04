// 监听安装事件
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

// 核心：必须监听 fetch 事件，App 才能被安装
self.addEventListener('fetch', (e) => {
  // 这里可以留空，或者简单返回网络请求
  return fetch(e.request);
});