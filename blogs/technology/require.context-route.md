---
title: '使用require.context实现前端工程自动化路由vue项目'
date: 2021-11-29
tags:
 - route
 - vue
 - 工程自动化
categories: 
 - 前端技术分享
---
# require.context

一个webpack的api,通过执行require.context函数获取一个特定的上下文,主要用来实现自动化导入模块,在前端工程中,如果遇到从一个文件夹引入很多模块的情况,可以使用这个api,它会遍历文件夹中的指定文件,然后自动导入,使得不需要每次显式的调用import导入模块

在components/pages目录下定义文件，

<img src="https://img-blog.csdnimg.cn/91de1e3cacf04c55b1da425fbf712d39.png"/>

注：以这种方式生成路由的话，路由路径是以你文件名决定的，所以文件名要好好规划 

```js
/**
 *  @parms directory {String} -读取文件的路径
 *  @parms useSubdirectories {Boolean} -是否遍历文件的子目录
 *  @parms regExp {RegExp} -匹配文件的正则
 */
require.context(directory,useSubdirectories,regExp)
 
//示例代码
//获取当前目录下所有以.vue结尾的文件
var r=require.context('@/components/pages',true,/.vue/)
```

遍历生成路由对象

```js
    var arr=[]
    r.keys().forEach(element => {
        let key = element.split('/')[element.split('/').length-1].split('.')
        key.pop()
        arr.push({
        path:'/' + key.join('/'),
        component:r(element).default
        })
    });
    console.log(arr)
```

以上就是自动化路由的全部内容

最后贴上完整代码

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
 
Vue.use(VueRouter)
 
 
 
var r=require.context('@/components/pages',true,/.vue/)
var arr=[]
r.keys().forEach(element => {
    let key = element.split('/')[element.split('/').length-1].split('.')
    key.pop()
    arr.push({
      path:'/' + key.join('/'),
      component:r(element).default
    })
});
console.log(arr)
 
 
const router = new VueRouter({
  base: process.env.BASE_URL,
  routes : arr
})
 
export default router
```
