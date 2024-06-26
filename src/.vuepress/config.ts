import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  // 网站路径默认为主域名。如果网站部署在子路径下，比如 xxx.com/yyy，那么 base 应该被设置为 "/yyy/"
  base: "/",
  // 网站语言，默认为中文
  lang: "zh-CN",
  // 网站标题
  title: "DoubleW2w",
  description:
    "开源工具、效率方法、心理学探索的自我提升笔记，记录并输出一切能让自己提升的知识。",

  theme,

  // 是否开启页面预拉取，如果服务器宽带足够，可改为 true，会提升其他页面加载速度
  shouldPrefetch: false,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
