<h2 align="center">
nan的个人博客
</h2><br>

<pre align="center">
 Build with 🦖<a href="https://docusaurus.io/">Docusaurus</a> 
</pre>

<p align="center">
<br>
<a href="https://kuizuo.cn">🖥 Online Preview</a>
<br><br> 
<a href="https://vercel.com/new/clone?repository-url=https://github.com/kuizuo/blog/tree/main&project-name=blog&repo-name=blog" rel="nofollow"><img src="https://vercel.com/button"></a>
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/kuizuo/blog" rel="nofollow"><img src="https://www.netlify.com/img/deploy/button.svg"></a>
<a href="https://stackblitz.com/github/kuizuo/blog" rel="nofollow"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"></a>
</p>

## 👋 Introduction

在这里我会分享各类技术栈所遇到问题与解决方案，带你了解最新的技术栈以及实际开发中如何应用，并希望我的开发经历对你有所启发。

如果你想要搭建一个类似的站点，可直接 [Fork](https://github.com/kuizuo/blog/fork) 本仓库使用，或者通过 [StackBlitz](https://stackblitz.com/github/kuizuo/blog) 在线运行本项目，通过 [Vercel](https://vercel.com/new/clone?repository-url=https://github.com/kuizuo/blog/tree/main&project-name=blog&repo-name=blog) 一键部署。

## ✨ Features

- ✍️ **Markdown** - 写作方便
- 🎨 **Beautiful** - 整洁，美观
- 🖥️ **PWA** - 支持 PWA，可安装，离线可用
- 🏞️ **i18n** - 支持国际化
- 💯 **SEO** - 搜索引擎优化，易于收录
- 📊 **谷歌分析** - 支持 Google Analytics
- 🔎 **全文搜索** - 支持 [Algolia DocSearch](https://github.com/algolia/docsearch)
- 🗃️ **博文视图** - 不同的博文视图，列表、宫格
- 🌈 **资源导航** - 收集并分享有用、有意思的资源
- 📦 **项目展示** - 展示你的项目，可用作于作品集


## 📊 Catalogue

```bash
├── blog                           # 博客
│   ├── first-blog.md
├── docs                           # 文档/笔记
│   └── doc.md
├── data
│   ├── feature.ts                 # 特点
│   ├── friends.ts                 # 友链
│   ├── projects.ts                # 项目
│   ├── skills.ts                  # 技术栈
│   ├── resources.ts               # 资源
│   └── social.ts                  # 社交链接
├── i18n                           # 国际化
├── src
│   ├── components                 # 组件
│   ├── css                        # 自定义CSS
│   ├── pages                      # 自定义页面
│   ├── plugin                     # 自定义插件
│   └── theme                      # 自定义主题组件
├── static                         # 静态资源文件
│   └── img                        # 静态图片
├── docusaurus.config.ts           # 站点的配置信息
├── sidebars.ts                    # 文档的侧边栏
├── package.json
├── tsconfig.json
└── pnpm-lock.yaml
```

## 📥 Start

```bash
git clone https://github.com/kuizuo/blog.git
cd blog
pnpm install
pnpm start
```

Build

```bash
pnpm build
```

## 📝License

[MIT](./LICENSE)
