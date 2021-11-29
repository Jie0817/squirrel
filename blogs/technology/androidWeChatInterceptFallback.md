---
title: 安卓 微信公众号 默认不操作拦截回退失败
date: 2021-11-26
tags:
 - JavaScript
 - route
 - vue
categories: 
 - 前端技术分享
---

```js
let ua = navigator.userAgent;
var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1
if (window.history && window.history.pushState) { 
  if (ua.toLowerCase().indexOf('micromessenger') != -1 && isAndroid) {
    //安卓回退弹窗兼容
    try {
      window.tbs_bridge.nativeExec('network', 'type', 0, null);
    } catch (e) {
      console.error('weixin network', e);
    }
  }
  history.pushState(null, null, document.URL); 
  window.addEventListener('popstate', function(){
        // 拦截操作
  }, false);  
}
```