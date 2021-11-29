---
title: 'vue element-ui 导航栏动态加载 组件递归方式'
date: 2021-11-26
tags:
 - route
 - vue
 - element-ui
categories: 
 - 前端技术分享
---

Navigation.vue

```vue
 
<template>
    <!--子级菜单-->
    <el-menu-item v-if="item.children && item.children.length === 0" :index="item.path">
      <i :class="item.icon"></i>
      {{item.title}}
    </el-menu-item>
    <!--父级菜单-->
    <el-submenu v-else :index="item.path">
      <template slot="title">
        <i :class="item.icon"></i>
        <span>{{item.title}}</span>
      </template>
      <template v-for="(child,index) in item.children">
        <Navigation v-if="child.children && child.children.length>0" :key="index" :item="child"></Navigation>
        <el-menu-item v-else :key="index" :index="child.path">
          <i :class="child.icon"></i>
          {{child.title}}
        </el-menu-item>
      </template>
    </el-submenu>
</template>
<script>
  export default {
    name: 'Navigation',
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
</script>
```

使用

```vue
<template>
  <div class="nav_left">
    <el-menu
      :unique-opened="true"
      default-active="/mode"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      background-color="#fff"
      active-text-color="#05c4b4"
      text-color="#333"
      :style="{height:'100%'}"
      :collapse="collapse"
      :router="true"
      @close="handleClose">
        <el-menu-item index="/home">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <Navigation v-for="(menu,index) in menus" :key="index" :item="menu"></Navigation>
    </el-menu>
  </div>
</template>
 
<script>
import { mapState, mapActions } from 'vuex';
import Navigation from './Navigation.vue'
export default {
  name: 'navLeft',
  data(){
    return {
      menus : [
        {
          title : '菜单管理',
          path : '/sysman/menu',
          icon : 'el-icon-menu',
          children : [
            {
              title : '菜单类别',
              path : '/sysman/menu/cate',
              icon : ''
            },
            {
              title : '菜单管理',
              path : '/sysman/menu/menu',
              icon : ''
            },
            {
              title : '消息模板',
              path : '/sysman/menu/messtarget',
              icon : ''
            }
          ]
        },
        {
          title : '系统管理',
          path : '/sysman/sys',
          icon : 'el-icon-s-tools',
          children : [
            {
              title : '用户管理',
              path : '/sysman/menu/cate',
              icon : ''
            },
            {
              title : '菜单角色',
              path : '/sysman/menu/menu',
              icon : ''
            },
            {
              title : '系统升级',
              path : '/sysman/menu/messtarget',
              icon : ''
            },
            {
              title : '打印样式',
              path : '/sysman/menu/messtarget',
              icon : ''
            },
            {
              title : '系统参数',
              path : '/sysman/menu/messtarget',
              icon : ''
            },
            {
              title : '注册信息',
              path : '/sysman/menu/messtarget',
              icon : ''
            },
            {
              title : '帮助文档',
              path : '/sysman/menu/messtarget',
              icon : ''
            }
          ]
        }
      ]
    }
  },
  components : {
    Navigation
  },
  computed: {
    ...mapState('menu',{
      collapse : state => {
        console.log(state)
        return state.collapse
      }
    })
  },
  methods : {
    handleOpen(){},
    handleClose(){
      console.log('关闭了')
    }
  },
}
</script>
 
<style lang="scss" scoped>
.nav_left{
  height: 100vh;
}
// 菜单收缩栏样式(关闭时)
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
```