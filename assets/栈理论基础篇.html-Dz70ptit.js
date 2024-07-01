import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as a,d as o}from"./app-a0U0ZR-2.js";const l="/assets/image-20240701104245922-CXatboMm.png",p="/assets/image-20240701104351011-Bz-dKOWy.png",r={},i=o('<h2 id="理论" tabindex="-1"><a class="header-anchor" href="#理论"><span>理论</span></a></h2><p>堆栈是一种抽象数据类型，用作元素的集合，具有两个主要的操作；</p><ul><li>PUSH：将元素添加到集合</li><li>POP：删除最近添加但尚未删除的元素</li></ul><p><img src="'+l+'" alt="image-20240701104245922" loading="lazy"></p><p><img src="'+p+'" alt="image-20240701104351011" loading="lazy"></p><ul><li><p>栈是一种 LIFO（后进先出）的线性的数据结构，push 和 pop 操作只发生在结构的一端，称为栈顶。</p></li><li><p>在 Java 中，Stack 类是很粗糙的，源码中推荐使用 <code>ArrayDeque</code> 去替代。</p></li></ul><h2 id="arraydeque" tabindex="-1"><a class="header-anchor" href="#arraydeque"><span>ArrayDeque</span></a></h2><p>基于数组实现的双端队列</p><p>ArrayDeque 允许在其头部和尾部进行高效地添加和移除元素，它可以用作栈（LIFO，后进先出）</p><p>当空间不足时，它会自动进行扩容操作，通常扩容后的容量是原容量的两倍</p><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h2><blockquote><p>堆栈的使用场景？</p></blockquote><blockquote><p>为什么不是用 Stack 类？</p></blockquote><blockquote><p>ArrayDeque 是基于什么实现的？</p></blockquote><blockquote><p>ArrayDeque 数据结构使用过程叙述。</p></blockquote><blockquote><p>ArrayDeque 为什么要初始化2的n次幂个长度？</p></blockquote>',16),n=[i];function c(s,d){return a(),t("div",null,n)}const h=e(r,[["render",c],["__file","栈理论基础篇.html.vue"]]),g=JSON.parse('{"path":"/leetcode/%E6%A0%88%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80%E7%AF%87.html","title":"栈理论基础篇","lang":"zh-CN","frontmatter":{"title":"栈理论基础篇","date":"2024-07-01T00:00:00.000Z","tag":["栈"],"description":"理论 堆栈是一种抽象数据类型，用作元素的集合，具有两个主要的操作； PUSH：将元素添加到集合 POP：删除最近添加但尚未删除的元素 image-20240701104245922 image-20240701104351011 栈是一种 LIFO（后进先出）的线性的数据结构，push 和 pop 操作只发生在结构的一端，称为栈顶。 在 Java 中，...","head":[["meta",{"property":"og:url","content":"https://doublew2w.cn/leetcode/%E6%A0%88%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80%E7%AF%87.html"}],["meta",{"property":"og:site_name","content":"DoubleW2w"}],["meta",{"property":"og:title","content":"栈理论基础篇"}],["meta",{"property":"og:description","content":"理论 堆栈是一种抽象数据类型，用作元素的集合，具有两个主要的操作； PUSH：将元素添加到集合 POP：删除最近添加但尚未删除的元素 image-20240701104245922 image-20240701104351011 栈是一种 LIFO（后进先出）的线性的数据结构，push 和 pop 操作只发生在结构的一端，称为栈顶。 在 Java 中，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-01T08:25:12.000Z"}],["meta",{"property":"article:author","content":"Doublew2w"}],["meta",{"property":"article:tag","content":"栈"}],["meta",{"property":"article:published_time","content":"2024-07-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-01T08:25:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"栈理论基础篇\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-07-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-01T08:25:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Doublew2w\\",\\"url\\":\\"https://doublew2w.cn\\"}]}"]]},"headers":[{"level":2,"title":"理论","slug":"理论","link":"#理论","children":[]},{"level":2,"title":"ArrayDeque","slug":"arraydeque","link":"#arraydeque","children":[]},{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]}],"git":{"createdTime":1719822312000,"updatedTime":1719822312000,"contributors":[{"name":"DoubleW2w","email":"1049951363@qq.com","commits":1}]},"readingTime":{"minutes":0.98,"words":295},"filePathRelative":"leetcode/栈理论基础篇.md","localizedDate":"2024年7月1日","excerpt":"<h2>理论</h2>\\n<p>堆栈是一种抽象数据类型，用作元素的集合，具有两个主要的操作；</p>\\n<ul>\\n<li>PUSH：将元素添加到集合</li>\\n<li>POP：删除最近添加但尚未删除的元素</li>\\n</ul>\\n<p></p>\\n<p></p>\\n<ul>\\n<li>\\n<p>栈是一种 LIFO（后进先出）的线性的数据结构，push 和 pop 操作只发生在结构的一端，称为栈顶。</p>\\n</li>\\n<li>\\n<p>在 Java 中，Stack 类是很粗糙的，源码中推荐使用 <code>ArrayDeque</code> 去替代。</p>\\n</li>\\n</ul>\\n<h2>ArrayDeque</h2>","autoDesc":true}');export{h as comp,g as data};
