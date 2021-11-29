#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
now=$(date "+%Y-%m-%d")

# echo "正在打包..."
# npm run build
# echo "按任意键继续"
# read -n 1
# echo "继续运行"

echo "正在上传博客源代码..."
git init
git add -A
git commit -m "squirrel博客源代码$now"
git remote add origin git@github.com:Jie0817/squirrel.git
git branch -M main
git push -f origin main
echo "源代码上传完成"

echo "正在进入public目录..."
cd public

echo "提交代码..."
git init
git add -A
git commit -m "squirrel博客$now"
git remote add origin git@github.com:Jie0817/squirrel.git
git branch -M main
git push -f origin main:gh-pages
cd -