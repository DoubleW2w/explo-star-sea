---
title: 关于本站
article: false  # 不显示在博客文章列表里
isOriginal: true
order: 1
---



- ***2024-06-17***

完善 `deploy,yml`，部署到SSH
域名解析 doublew2w.cn

- ***2024-06-16***

完善 `deploy.yml` 文件，部署到 github-page

> [!warning]
> 记得建立 gh-pages 分支

```yml
name: 部署文档

on:
  push:
    branches:
      - master

permissions:
  contents: write

jobs:
  deploy-gh-pages:
    runs-on: ubuntu-latest
    environment: master
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 1
          # 如果你文档需要 Git 子模块，取消注释下一行
          # submodules: true

      - name: 设置 pnpm
        uses: pnpm/action-setup@v4

      - name: 设置 Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: "pnpm"

      - name: 安装依赖
        run: |
          corepack enable
          pnpm install --frozen-lockfile

      - name: 构建文档
        env:
          NODE_OPTIONS: --max_old_space_size=8192
        run: |-
          pnpm run docs:build
          > src/.vuepress/dist/.nojekyll

      - name: 部署文档
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          # 部署文档
          branch: gh-pages
          folder: src/.vuepress/dist
```

- ***2024-06-15***

初始化项目并上传到github