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
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
  {
    text: "关于",
    icon: "lightbulb",
    prefix: "/about/",
    children: ["aboutMe", "aboutSite"],
  },
]);
