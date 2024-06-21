import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博客",
    icon: "fa-solid fa-blog",
    link: "/blogMe",
  },
  // "/demo/",
  {
    text: "总览",
    icon: "fa-solid fa-list",
    children: [
      {
        text: "v2文档",
        icon: "fa-solid fa-location-pin",
        link: "https://theme-hope.vuejs.press/zh/",
      },
      {
        text: "leetcode",
        icon: "fa-solid fa-location-pin",
        link: "/leetcode/",
      },
    ],
  },
  {
    text: "关于",
    icon: "lightbulb",
    prefix: "/about/",
    children: ["aboutMe", "aboutSite"],
  },
]);
