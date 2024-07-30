import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "总览",
    icon: "fa-solid fa-list",
    children: [
      {
        text: "v2文档",
        link: "https://theme-hope.vuejs.press/zh/",
      },
      {
        text: "leetcode",
        link: "/leetcode/",
      },
      {
        text: "设计模式",
        link: "/design-pattern/",
      },
      {
        text:"其他",
        link:"/other/"
      }
    ],
  },
  {
    text: "关于",
    icon: "lightbulb",
    prefix: "/about/",
    children: ["aboutSite"],
  }
]);
