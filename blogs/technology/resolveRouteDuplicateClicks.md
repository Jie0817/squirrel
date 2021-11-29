---
title: 'NavigationDuplicated: Avoided redundant navigation to current location: “/“. 解决路由重复点击'
date: 2021-11-26
tags:
 - route
 - vue
categories: 
 - 前端技术分享
---

```js

// 解决重复点击路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
```