module.exports = {
  "title": "怂叔",
  "description": "个人博客技术分享",
  "dest": "public",
  "base" : "/squirrel/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/headportrait.jpg"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "plugins": [
      "vuepress-plugin-boxx",
      'meting',
      {
         "meting" : {
          // "server" : 'tencent',
          // "type" : "playlist",
          // "mid": "6838211960"
          "auto": 'https://music.163.com/#/playlist?id=6838211960'
         },
         "aplayer" : {
           "lrcType": 3,
           "fixed" : true,
           "autoplay" : true,
           "mini" : true
         },
      },
  ],
  "theme": "reco",
  "locales": {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      "lang": 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      "title": '怂叔',
      "description": '个人博客技术分享'
    }
  },
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
    ],
    "sidebar": {
      "/blogs/technicalDocumentation/": [
        "",
        "TypeScript",
        "JavaScript",
        "ES6",
        "HTML",
        "HTML5",
        "CSS",
        "CSS3",
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": '2',
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "松鼠",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "2088404445@qq.com",
        // "link": "https://www.recoluan.com"
      },
    ],
    "logo": "/headportrait.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "怂叔",
    "article" : '文章',
    "tag" : "标签",
    "authorAvatar": "/headportrait.jpg",
    "record": "xxxx",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  }
}