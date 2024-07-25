import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://doublew2w.cn",

  author: {
    name: "Doublew2w",
    url: "https://doublew2w.cn",
  },

  iconAssets: "fontawesome-with-brands",

  repo: "DoubleW2w/explo-star-sea",
  docsDir: "src",
  docsBranch: "master",
  // 导航栏
  navbar,

  // 侧边栏
  sidebar,
  // 全屏按钮
  fullscreen: true,
  // 页脚
  footer: "",
  displayFooter: true,
  // 版权描述
  copyright: "<a href=\"https://theme-hope.vuejs.press/zh/\">VuePress Theme Hope</a>  | © 2024 -至今 <a href=\"https://doublew2w.cn\">DoubleW2w</a>  | <a href=\"https://beian.miit.gov.cn/#/Integrated/index\">琼ICP备2024037661号</a> ",
  // 加密配置
  encrypt: {
    config: {
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  prevLink: true, // 是否在页面底部显示上一篇链接
  nextLink: true, // 是否在页面底部显示下一篇链接

  lastUpdated: true, // 是否显示页面最后更新时间
  contributors: true, // 是否显示页面贡献者

  // 博客配置
  blog: {
    name: "DoubleW2w", // 博主姓名
    avatar: "/assets/image/blog-avatar.jpg",
    description: "游龙当归海，海不迎我自来也",
    intro: "/about/aboutMe",
    medias: {
      Steam: "https://steamcommunity.com/id/snymdgd/",
      GitHub: "https://github.com/DoubleW2w",
      "163Music": "https://y.music.163.com/m/user?id=348082118",
    },
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    // 博客插件
    blog: {
      excerpt: true,
      excerptLength: 150,
      hotReload: true
    },
    // 评论插件
    comment: {
      provider: "Giscus",
      repo: "DoubleW2w/blog-giscus",
      repoId: "R_kgDOMNjC-Q",
      category: "Announcements",
      categoryId: "DIC_kwDOMNjC-c4CgWGU",
      mapping:"pathname",
      strict: true,
      lazyLoading:true,
      reactionsEnabled:true,
      inputPosition:"top"
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    // markdown增强插件
    mdEnhance: {
      //
      revealJs: {
        themes: ["solarized"],
        plugins:["highlight","zoom","notes"]
      },
      /* ------------------ 样式化 -------------------------------------- */
      alert: true, // 启用 GFM 警告
      spoiler: true, // 启用 GFM 剧透文字
      hint: true, // 提示容器
      mark: true, // 高亮标记
      align: true, // 对齐
      attrs: true, // 属性支持
      /* ------------------ 样式化 -------------------------------------- */
      codetabs: true,
      component: true,
      demo: true,
      imgLazyload: true, // 图片懒加载
      imgSize: true, // 图片大小
      include: true, // 导入文件
      plantuml: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true, // 启用上角标功能
      sup: true, // 启用下角标功能
      tabs: true, // 支持选项卡功能
      tasklist: true, // 启用任务列表功能
      gfm: true,
      echarts: true,
      katex: true,

    },
    // 代码高亮插件
    shiki:{
      langs:[
        'java','javascript','typescript','markdown','html','lua','c',
        'ansi','js','ts','vue','vue-html','bash','nginx','css','py','python'
      ],
      themes: {
        light: "github-light",
        dark: "one-dark-pro",
      },
      notationDiff:true,
      notationHighlight:true,
    },
    // 搜索插件
    searchPro:{
      indexContent:false,
    },
    feed: {
      atom: true,
      json: true,
      rss: true,
      count: 10,
      sorter: (a, b) => Number(b.frontmatter.date) - Number(a.frontmatter.date),
    },
  },
});
