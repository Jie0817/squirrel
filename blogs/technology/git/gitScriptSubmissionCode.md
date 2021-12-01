---
title: git脚本，一键提交代码
date: 2021-12-1
tags:
 - git
categories: 
 - 前端技术分享
---

git在开发中是经常都会使用的工具，可是通常的使用仍是直接经过几个简单的命令，例如:

```Bash

git add .
git commit -m "..."
git push origin master

```

对于这种简单的步骤，咱们天天都会重复无数次，今天教你们一种方式，一键提交


创建文件  push.sh


```Bash
# 确保脚本抛出遇到的错误
set -e
 
# 获取当前时间
now=$(date "+%Y-%m-%d%H:%M")
 
echo "正在上传源代码..."
 
git init
git add -A
git commit -m "代码提交$now"
git push -f '仓库路径' main
echo "上传完成"
# 具体git命令根据自身需求更改
 
cd -
```


需要提交代码时点击文件就能自动运行命令啦~