import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as l,d as e,a as s,b as i}from"./app-B1uMOcWa.js";const t="/assets/image-20240627212641010-BphuBGlt.png",h={},p=e(`<h2 id="题目地址-142-环形链表-ii-力扣-leetcode" tabindex="-1"><a class="header-anchor" href="#题目地址-142-环形链表-ii-力扣-leetcode"><span>题目地址(142. 环形链表 II - 力扣（LeetCode）)</span></a></h2><p><a href="https://leetcode.cn/problems/linked-list-cycle-ii/description/" target="_blank" rel="noopener noreferrer">https://leetcode.cn/problems/linked-list-cycle-ii/description/</a></p><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述"><span>题目描述</span></a></h2><p> 给定一个链表的头节点   <code> head </code> ，返回链表开始入环的第一个节点。  <em> 如果链表无环，则返回  <code> null </code>。</em></p><p> 如果链表中有某个节点，可以通过连续跟踪 <code> next </code> 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 <code> pos </code> 来表示链表尾连接到链表中的位置（<strong> 索引从 0 开始 </strong>）。如果 <code> pos </code> 是 <code>-1 </code>，则在该链表中没有环。<strong> 注意：<code> pos </code> 不作为参数进行传递 </strong>，仅仅是为了标识链表的实际情况。</p><p><strong> 不允许修改 </strong> 链表。</p><ul></ul><p>  </p><p><strong> 示例 1：</strong></p><p><img src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png"></p><pre> <strong> 输入：</strong> head = [3,2,0,-4], pos = 1
<strong> 输出：</strong> 返回索引为 1 的链表节点
<strong> 解释：</strong> 链表中有一个环，其尾部连接到第二个节点。
</pre><p><strong> 示例  2：</strong></p><p><img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png"></p><pre> <strong> 输入：</strong> head = [1,2], pos = 0
<strong> 输出：</strong> 返回索引为 0 的链表节点
<strong> 解释：</strong> 链表中有一个环，其尾部连接到第一个节点。
</pre><p><strong> 示例 3：</strong></p><p><img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png"></p><pre> <strong> 输入：</strong> head = [1], pos = -1
<strong> 输出：</strong> 返回 null
<strong> 解释：</strong> 链表中没有环。
</pre><p>  </p><p><strong> 提示：</strong></p><ul><li> 链表中节点的数目范围在范围 <code> [0, 10 <sup> 4 </sup>] </code> 内 </li><li><code>-10 <sup> 5 </sup> &lt;= Node.val &lt;= 10 <sup> 5 </sup></code></li><li><code> pos </code> 的值为 <code>-1 </code> 或者链表中的一个有效索引 </li></ul><p>  </p><p><strong> 进阶：</strong> 你是否可以使用 <code> O(1)</code> 空间解决此题？</p><h2 id="前置知识" tabindex="-1"><a class="header-anchor" href="#前置知识"><span>前置知识</span></a></h2><ul><li>链表</li><li>环形证明</li></ul><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2><p>使用双指针，分别定义为 fast 和 slow。从头节点出发，fast 每次走两步，slow 每次走 1 步。</p><ul><li>如果存在环，由于 fast 的步速大于 slow，最终 fast 和 slow 一定会在环中相遇</li><li>如果不存在环，fast 会先于 slow 走到 null</li></ul><p>从头节点到环形入口节点的节点数为 x，环形入口节点到 fast 指针与 slow 指针相遇节点节点数为 y。从相遇节点 再到环形入口节点节点数为 z。</p><p><img src="`+t+`" alt="image-20240627212641010" loading="lazy"></p><p>相遇时，slow 走过的节点数为 x+y，fast 走过的节点数为 x+y+n(y+z)，其中 n 为走过的环的圈数。</p><p>fast 每次走两步，slow 每次走一步。</p><ul><li>x+y+n(y+z) = 2*(x+y) =&gt; x = (n-1)(y+z)+z</li></ul><p>从「相遇点到入环点的距离」加上「 n−1 圈的环长度」，恰好等于「从链表头部到入环点的距离」。</p><h2 id="关键点" tabindex="-1"><a class="header-anchor" href="#关键点"><span>关键点</span></a></h2><ul><li>判断链表是否环</li><li>如果有环，如何找到这个环的入口</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码"><span>代码</span></a></h2><ul><li>语言支持：Java</li></ul><p>Java Code:</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> * Definition for singly-linked list.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> * class ListNode {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> *     int val;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> *     ListNode next;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> *     ListNode(int x) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> *         val = x;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> *         next = null;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> *     }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> * }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Solution</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> ListNode</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> detectCycle</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ListNode</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> head</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(head </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> head</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // 采用双指针的方式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">        ListNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> fast</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> head,slow </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> head;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // 第一次相遇, fast 走了 2n 个环， slow 走了 n 个环</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        while</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(fast </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> fast</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">return</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            fast </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> fast</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            slow </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> slow</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(fast </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> slow) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">break</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // 让 fast 和 slow 一起同时 1，在次相遇就是环入口</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        fast </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> head;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        while</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(fast </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> slow){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            fast </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> fast</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            slow </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> slow</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> slow;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复杂度分析</strong></p>`,40),k=s("ul",null,[s("li",null,[i("时间复杂度："),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),i("：第一次相遇时，slow 要走 x+y 步，第二次相遇，slow 要走 z 步，总体是线性复杂度")]),s("li",null,[i("空间复杂度："),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(1)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])]),i("：双指针使用常数大小的额外空间")])],-1),r=[p,k];function d(o,c){return l(),n("div",null,r)}const B=a(h,[["render",d],["__file","142-linked-list-cycle-ii.html.vue"]]),m=JSON.parse('{"path":"/leetcode/142-linked-list-cycle-ii.html","title":"142-环形链表 ii","lang":"zh-CN","frontmatter":{"title":"142-环形链表 ii","date":"2024-06-27T00:00:00.000Z","tag":["链表"],"description":"题目地址(142. 环形链表 II - 力扣（LeetCode）) https://leetcode.cn/problems/linked-list-cycle-ii/description/ 题目描述 给定一个链表的头节点 head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null 。 如果链表中有某个节点，可以通过连续跟踪 next...","head":[["meta",{"property":"og:url","content":"https://doublew2w.cn/leetcode/142-linked-list-cycle-ii.html"}],["meta",{"property":"og:site_name","content":"DoubleW2w"}],["meta",{"property":"og:title","content":"142-环形链表 ii"}],["meta",{"property":"og:description","content":"题目地址(142. 环形链表 II - 力扣（LeetCode）) https://leetcode.cn/problems/linked-list-cycle-ii/description/ 题目描述 给定一个链表的头节点 head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null 。 如果链表中有某个节点，可以通过连续跟踪 next..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-27T17:51:53.000Z"}],["meta",{"property":"article:author","content":"Doublew2w"}],["meta",{"property":"article:tag","content":"链表"}],["meta",{"property":"article:published_time","content":"2024-06-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T17:51:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"142-环形链表 ii\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-06-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-27T17:51:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Doublew2w\\",\\"url\\":\\"https://doublew2w.cn\\"}]}"]]},"headers":[{"level":2,"title":"题目地址(142. 环形链表 II - 力扣（LeetCode）)","slug":"题目地址-142-环形链表-ii-力扣-leetcode","link":"#题目地址-142-环形链表-ii-力扣-leetcode","children":[]},{"level":2,"title":"题目描述","slug":"题目描述","link":"#题目描述","children":[]},{"level":2,"title":"前置知识","slug":"前置知识","link":"#前置知识","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"关键点","slug":"关键点","link":"#关键点","children":[]},{"level":2,"title":"代码","slug":"代码","link":"#代码","children":[]}],"git":{"createdTime":1719510713000,"updatedTime":1719510713000,"contributors":[{"name":"DoubleW2w","email":"1049951363@qq.com","commits":1}]},"readingTime":{"minutes":3.2,"words":961},"filePathRelative":"leetcode/142-linked-list-cycle-ii.md","localizedDate":"2024年6月27日","excerpt":"<h2>题目地址(142. 环形链表 II - 力扣（LeetCode）)</h2>\\n<p><a href=\\"https://leetcode.cn/problems/linked-list-cycle-ii/description/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://leetcode.cn/problems/linked-list-cycle-ii/description/</a></p>\\n<h2>题目描述</h2>\\n<p> 给定一个链表的头节点 &nbsp; <code> head </code>&nbsp;，返回链表开始入环的第一个节点。&nbsp; <em> 如果链表无环，则返回&nbsp; <code> null </code>。</em> </p>","autoDesc":true}');export{B as comp,m as data};
