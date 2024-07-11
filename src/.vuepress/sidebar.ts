import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/about/": [
    {
      text: "🏠 关于",
      children: "structure",
    },
  ],
  "/leetcode/": "structure",
  "/": [
    ""
  ],
});
