module.exports = {
  "title": "怂叔个人博客 树洞",
  "description": "用迷离的舞步，跟随着最后一丝月光的脚步",
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
    //   [
    //     'ribbon',
    //     {
    //        size: 120, // width of the ribbon, default: 90
    //        opacity: 0.3, // opacity of the ribbon, default: 0.3
    //        zIndex: -1, // z-index property of the background, default: -1
    //     },
    //  ],
    ["ribbon-animation", {
      size: 90,   // 默认数据
      opacity: 0.3,  //  透明度
      zIndex: -1,   //  层级
      opt: {
        // 色带HSL饱和度
        colorSaturation: "80%",
        // 色带HSL亮度量
        colorBrightness: "60%",
        // 带状颜色不透明度
        colorAlpha: 0.65,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        colorCycleSpeed: 6,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        verticalPosition: "center",
        // 到达屏幕另一侧的速度有多快
        horizontalSpeed: 200,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 2,
        // 添加笔划以及色带填充颜色
        strokeSize: 0,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true
      },
      ribbonShow: false, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true  // 滑动彩带
    }],
     [
        'cursor-effects',
        {
          "size": 10, // size of the particle, default: 2
          //  "shape": 'star', // shape of the particle, default: 'star'
          "zIndex": 999999999, // z-index property of the canvas, default: 999999999
        },
     ],
     [//看板娘插件
        "@vuepress-reco/vuepress-plugin-kan-ban-niang",
        {
            theme: ['wanko', 'blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'miku', 'z16'],
            clean: false,
        }
     ],
     [
        "sakura", 
        {//页面樱花插件
          num: 30, // 默认数量
          show: true,
          zIndex: 2,
          img: {
              replace: false, // false 默认图 true 换图 需要填写httpUrl地址
              httpUrl: 'http://www.zpzpup.com/assets/image/sakura.png' // 绝对路径
          }
        }
     ],
     [
       "@vuepress-reco/vuepress-plugin-bgm-player", 
       {//背景音乐插件
          autoplay : true,
          autoShrink : true,
          shrinkMode : 'mini',
          audios: [
              // 网络文件示例
              {
                name: '강남역 4번 출구',
                artist: 'Plastic / Fallin` Dild',
                url: 'https://assets.smallsunnyfox.com/music/2.mp3',
                cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
              },
              {
                name: '用胳膊当枕头',
                artist: '최낙타',
                url: 'https://assets.smallsunnyfox.com/music/3.mp3',
                cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
              }
          ]
       }
    ],
    // [
    //     'vuepress-plugin-comment', 
    //     {
    //       solution: 'vssue',
    //       options: {
    //         platform: 'github',
    //         owner: 'Jie0817',
    //         repo: 'https://github.com/Jie0817/squirrel.git',
    //         clientId: '61ea19f0448c6b9e7e62',
    //         clientSecret: 'f21a768b0b89759466917b7eb0698a7c4eee1b4e',
    //       }
    //     }
    // ]
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
    "vssueConfig": {
      platform: 'github',
      owner: 'Jie0817',
      repo: 'squirrel',
      clientId: '61ea19f0448c6b9e7e62',
      clientSecret: 'f21a768b0b89759466917b7eb0698a7c4eee1b4e',
    },
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