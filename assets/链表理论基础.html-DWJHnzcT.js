import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as l,d as h,a as s,b as i}from"./app-B1uMOcWa.js";const t={},e=h(`<h2 id="链表是什么" tabindex="-1"><a class="header-anchor" href="#链表是什么"><span>链表是什么？</span></a></h2><p>链表是一种通过指针串联在一起的线性结构</p><p>每一个节点由两部分组成，一部分是「数据域」，一部分是「指针域」，最后一个节点的指针域指向 null</p><h2 id="链表类型" tabindex="-1"><a class="header-anchor" href="#链表类型"><span>链表类型</span></a></h2><h3 id="单链表" tabindex="-1"><a class="header-anchor" href="#单链表"><span>单链表</span></a></h3><p>​ <img src="https://doublew2w-note-resource.oss-cn-hangzhou.aliyuncs.com/img/202406261134446.png"></p><h3 id="双链表" tabindex="-1"><a class="header-anchor" href="#双链表"><span>双链表</span></a></h3><p>每一个节点有两个指针域，一个指向下一个节点，一个指向上一个节点。</p><img src="https://doublew2w-note-resource.oss-cn-hangzhou.aliyuncs.com/img/202406261136716.png"><h3 id="循环链表" tabindex="-1"><a class="header-anchor" href="#循环链表"><span>循环链表</span></a></h3><p>循环链表，顾名思义，就是链表首尾相连。</p><img src="https://doublew2w-note-resource.oss-cn-hangzhou.aliyuncs.com/img/202406261137157.png"><h2 id="链表存储方式" tabindex="-1"><a class="header-anchor" href="#链表存储方式"><span>链表存储方式</span></a></h2><p>链表在内存中可不是连续分布的。</p><p>链表是通过「指针域的指针」链接在内存中各个节点，每个节点存放着下一个节点的内存地址。</p><p>链表的组成单位是 Node 对象</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">/* 链表节点类 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> ListNode</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> val</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // 节点值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    ListNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> next</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 指向下一节点的引用</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    ListNode</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> x</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { val </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> x; }</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 构造函数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="链表操作" tabindex="-1"><a class="header-anchor" href="#链表操作"><span>链表操作</span></a></h2><h3 id="头插节点" tabindex="-1"><a class="header-anchor" href="#头插节点"><span>头插节点</span></a></h3><ol><li>记录头节点</li><li>创建新节点，新节点的头节点为null</li><li>新节点的 next 为 「步骤1」的头节点</li><li>「步骤1」的前驱节点为 新节点</li></ol><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> linkFirst</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">E</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> e) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    final</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Node</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">E</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> f </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> first</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> // 头节点</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    final</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Node</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">E</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> newNode </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Node</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> e</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> f)</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> // 新节点，后驱节点是f</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    first </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> newNode</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> // 现在头节点是新节点</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> (f </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 如果之前的头节点为null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        last </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> newNode</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> // 那么现在头节点和尾节点都是 新节点</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    else</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">        f</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">prev</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> newNode</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> // 之间的头节点的前驱节点是新节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    size</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://bugstack.cn/images/article/algorithm/algorithms-220723-05.png?raw=true" alt="img" loading="lazy"></p><p style="text-align:center;">图片来自：bugstack.cn</p><h3 id="尾插节点" tabindex="-1"><a class="header-anchor" href="#尾插节点"><span>尾插节点</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> linkLast</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">E</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> e) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    final</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Node</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">E</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> l </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> last</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    final</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Node</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">E</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> newNode </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Node</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(l</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> e</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    last </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> newNode</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> (l </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        first </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> newNode</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">        l</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> newNode</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    size</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://bugstack.cn/images/article/algorithm/algorithms-220723-06.png?raw=true" alt="img" loading="lazy"></p><p style="text-align:center;">图片来自：bugstack.cn</p><h3 id="拆链操作" tabindex="-1"><a class="header-anchor" href="#拆链操作"><span>拆链操作</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">E</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> unlink</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Node</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">E</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> x) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    final</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> E</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> element </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> x</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">item</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    final</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Node</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">E</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> next </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> x</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    final</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Node</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">E</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> prev </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> x</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">prev</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> (prev </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        first </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> next</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">        prev</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> next</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">        x</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">prev</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> (next </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        last </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> prev</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">        next</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">prev</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> prev</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">        x</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    x</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">item</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    size</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> element</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://bugstack.cn/images/article/algorithm/algorithms-220723-07.png?raw=true" alt="img" loading="lazy"></p><p style="text-align:center;">图片来自：bugstack.cn</p><h3 id="删除节点" tabindex="-1"><a class="header-anchor" href="#删除节点"><span>删除节点</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> boolean</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> remove</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> o) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> (o </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Node</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">E</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> first</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> x</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">item</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">                unlink</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(x)</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">                return</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Node</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">E</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> first</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> x</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">o</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">equals</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">item</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">                unlink</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(x)</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">                return</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p style="text-align:center;">图片来自：bugstack.cn</p><h2 id="链表性能分析" tabindex="-1"><a class="header-anchor" href="#链表性能分析"><span>链表性能分析</span></a></h2>`,35),k=s("p",null,[i("插入/删除为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(1)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])])],-1),p=s("p",null,[i("查询为"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])])],-1),r=s("h2",{id:"问题",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#问题"},[s("span",null,"问题")])],-1),d=s("ul",null,[s("li",null,"描述一下链表的数据结构？"),s("li",null,"Java 中 LinkedList 使用的是单向链表、双向链表还是循环链表？"),s("li",null,"链表中数据的插入、删除、获取元素，时间复杂度是多少？"),s("li",null,"什么场景下使用链表更合适？")],-1),g=[e,k,p,r,d];function E(y,c){return l(),n("div",null,g)}const C=a(t,[["render",E],["__file","链表理论基础.html.vue"]]),m=JSON.parse('{"path":"/leetcode/%E9%93%BE%E8%A1%A8%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html","title":"链表理论基础","lang":"zh-CN","frontmatter":{"title":"链表理论基础","date":"2024-06-25T00:00:00.000Z","tag":"链表","description":"链表是什么？ 链表是一种通过指针串联在一起的线性结构 每一个节点由两部分组成，一部分是「数据域」，一部分是「指针域」，最后一个节点的指针域指向 null 链表类型 单链表 ​ 双链表 每一个节点有两个指针域，一个指向下一个节点，一个指向上一个节点。 循环链表 循环链表，顾名思义，就是链表首尾相连。 链表存储方式 链表在内存中可不是连续分布的。 链表是通...","head":[["meta",{"property":"og:url","content":"https://doublew2w.cn/leetcode/%E9%93%BE%E8%A1%A8%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html"}],["meta",{"property":"og:site_name","content":"DoubleW2w"}],["meta",{"property":"og:title","content":"链表理论基础"}],["meta",{"property":"og:description","content":"链表是什么？ 链表是一种通过指针串联在一起的线性结构 每一个节点由两部分组成，一部分是「数据域」，一部分是「指针域」，最后一个节点的指针域指向 null 链表类型 单链表 ​ 双链表 每一个节点有两个指针域，一个指向下一个节点，一个指向上一个节点。 循环链表 循环链表，顾名思义，就是链表首尾相连。 链表存储方式 链表在内存中可不是连续分布的。 链表是通..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bugstack.cn/images/article/algorithm/algorithms-220723-05.png?raw=true"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-27T17:51:53.000Z"}],["meta",{"property":"article:author","content":"Doublew2w"}],["meta",{"property":"article:tag","content":"链表"}],["meta",{"property":"article:published_time","content":"2024-06-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T17:51:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"链表理论基础\\",\\"image\\":[\\"https://bugstack.cn/images/article/algorithm/algorithms-220723-05.png?raw=true\\",\\"https://bugstack.cn/images/article/algorithm/algorithms-220723-06.png?raw=true\\",\\"https://bugstack.cn/images/article/algorithm/algorithms-220723-07.png?raw=true\\"],\\"datePublished\\":\\"2024-06-25T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-27T17:51:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Doublew2w\\",\\"url\\":\\"https://doublew2w.cn\\"}]}"]]},"headers":[{"level":2,"title":"链表是什么？","slug":"链表是什么","link":"#链表是什么","children":[]},{"level":2,"title":"链表类型","slug":"链表类型","link":"#链表类型","children":[{"level":3,"title":"单链表","slug":"单链表","link":"#单链表","children":[]},{"level":3,"title":"双链表","slug":"双链表","link":"#双链表","children":[]},{"level":3,"title":"循环链表","slug":"循环链表","link":"#循环链表","children":[]}]},{"level":2,"title":"链表存储方式","slug":"链表存储方式","link":"#链表存储方式","children":[]},{"level":2,"title":"链表操作","slug":"链表操作","link":"#链表操作","children":[{"level":3,"title":"头插节点","slug":"头插节点","link":"#头插节点","children":[]},{"level":3,"title":"尾插节点","slug":"尾插节点","link":"#尾插节点","children":[]},{"level":3,"title":"拆链操作","slug":"拆链操作","link":"#拆链操作","children":[]},{"level":3,"title":"删除节点","slug":"删除节点","link":"#删除节点","children":[]}]},{"level":2,"title":"链表性能分析","slug":"链表性能分析","link":"#链表性能分析","children":[]},{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]}],"git":{"createdTime":1719510713000,"updatedTime":1719510713000,"contributors":[{"name":"DoubleW2w","email":"1049951363@qq.com","commits":1}]},"readingTime":{"minutes":2.35,"words":706},"filePathRelative":"leetcode/链表理论基础.md","localizedDate":"2024年6月25日","excerpt":"<h2>链表是什么？</h2>\\n<p>链表是一种通过指针串联在一起的线性结构</p>\\n<p>每一个节点由两部分组成，一部分是「数据域」，一部分是「指针域」，最后一个节点的指针域指向 null</p>\\n<h2>链表类型</h2>\\n<h3>单链表</h3>\\n<p>​\\t<img src=\\"https://doublew2w-note-resource.oss-cn-hangzhou.aliyuncs.com/img/202406261134446.png\\"></p>\\n<h3>双链表</h3>\\n<p>每一个节点有两个指针域，一个指向下一个节点，一个指向上一个节点。</p>\\n<img src=\\"https://doublew2w-note-resource.oss-cn-hangzhou.aliyuncs.com/img/202406261136716.png\\">","autoDesc":true}');export{C as comp,m as data};
