---
title: 获取url地址栏参数
date: 2021-11-26
tags:
 - JavaScript
 - vue
categories: 
 - 前端技术分享
---

```js
getParameter(){
    var url = location.search; //获取url中"?"符后的字串
    var objParameter = new Object();  
    if ( url.indexOf( "?" ) != -1 ) {  
      var str = decodeURI(url).substr( 1 );
      var strs = str.split( "&" );  
      for ( var i = 0; i < strs.length; i++ ) {  
        objParameter[ strs[ i ].split( "=" )[ 0 ] ] = ( strs[ i ].split( "=" )[ 1 ] );  
      }  
      console.log( objParameter ); //此时的objParameter 就是我们需要的参数；        
    }
}
```