---
title: axios多个请求vant组件loading显示问题
date: 2021-11-25
tags:
 - vue
 - axios
 - vant
categories: 
 - 前端技术分享
---

```js
let count = 0
const service = axios.create({
  // 公共接口
  baseURL: 'http://xxx',
})
let loading = null
// 2.请求拦截器
service.interceptors.request.use(config => {
    //加载提示，可更改
    if(count == 0){
      loading = vant.Toast.loading({
          message: '加载中...',
          forbidClick: true,
          duration : 0
      });
    }
    count++
  return config
}, error => {
  Promise.reject(error)
})
 
// 3.响应拦截器
service.interceptors.response.use(response => {//请求成功
  //取消加载状态
  count--
  if(count == 0){
    loading.clear();
  }
  return response
}, error => {//请求失败
    //取消加载状态
    count--
    if(count == 0){
      loading.clear();
    }
  //错误提示，可更改
  vant.Notify(error.message)
  /***** 处理结束 *****/
  //如果不需要错误处理，以上的处理过程都可省略
  return Promise.reject(error.response)
})
```