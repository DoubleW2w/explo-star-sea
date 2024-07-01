import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,o as t,d as a,a as s,b as i}from"./app-a0U0ZR-2.js";const e={},h=a(`<h2 id="题目地址-1047-删除字符串中的所有相邻重复项-力扣-leetcode" tabindex="-1"><a class="header-anchor" href="#题目地址-1047-删除字符串中的所有相邻重复项-力扣-leetcode"><span>题目地址(1047. 删除字符串中的所有相邻重复项 - 力扣（LeetCode）)</span></a></h2><p><a href="https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/description/" target="_blank" rel="noopener noreferrer">https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/description/</a></p><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述"><span>题目描述</span></a></h2><p> 给出由小写字母组成的字符串  <code> S </code>，<strong> 重复项删除操作 </strong> 会选择两个相邻且相同的字母，并删除它们。</p><p> 在 S 上反复执行重复项删除操作，直到无法继续删除。</p><p> 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。</p><p>  </p><p><strong> 示例：</strong></p><pre> <strong> 输入：</strong> &quot;abbaca&quot;
<strong> 输出：</strong> &quot;ca&quot;
<strong> 解释：</strong>
例如，在 &quot;abbaca&quot; 中，我们可以删除 &quot;bb&quot; 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 &quot;aaca&quot;，其中又只有 &quot;aa&quot; 可以执行重复项删除操作，所以最后的字符串为 &quot;ca&quot;。
</pre><p>  </p><p><strong> 提示：</strong></p><ol><li><code> 1 &lt;= S.length &lt;= 20000 </code></li><li><code> S </code> 仅由小写英文字母组成。</li></ol><h2 id="前置知识" tabindex="-1"><a class="header-anchor" href="#前置知识"><span>前置知识</span></a></h2><ul><li>字符串</li><li>栈</li><li>数组</li></ul><h2 id="思路-1-双端队列" tabindex="-1"><a class="header-anchor" href="#思路-1-双端队列"><span>思路 1：双端队列</span></a></h2><p>当字符串中同时有多组相邻重复项时，我们无论是先删除哪一个，都不会影响最终的结果。</p><p>遍历字符串，使用一个集合（数字或者队列）存储遍历的情况。</p><ul><li>当前字符与队列尾部相同时，说明此时是重复项已经出现，此时将队列尾部元素删除</li><li>当前字符与队列尾部不同时，说明不是重复项，放进队列中</li></ul><h3 id="关键点" tabindex="-1"><a class="header-anchor" href="#关键点"><span>关键点</span></a></h3><ul><li>利用栈的思想来判断匹配情况</li></ul><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码"><span>代码</span></a></h3><ul><li>语言支持：Java</li></ul><p>Java Code:</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Solution</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> removeDuplicates</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> s</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (s </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> s</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> s;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">        Deque</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Character</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">queue</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> ArrayDeque</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">char</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> c</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> s</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">toCharArray</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">queue</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">isEmpty</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> c </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> queue</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">peekLast</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">                queue</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">offer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(c);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">                queue</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">pollLast</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">        StringBuilder</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> sb</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> StringBuilder</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        while</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">queue</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">isEmpty</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">            sb</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">append</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">queue</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">poll</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> sb</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复杂度分析</strong></p><p>令 n 为字符串长度。</p>`,26),p=s("ul",null,[s("li",null,[i("时间复杂度："),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),i("，我们只需要遍历该字符串一次。")]),s("li",null,[i("空间复杂度："),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),i("，需要创建一个队列来存储情况，最坏的情况是字符串中不存在相邻重复项。")])],-1),k=a(`<h2 id="思路-2-数组" tabindex="-1"><a class="header-anchor" href="#思路-2-数组"><span>思路 2：数组</span></a></h2><p>把数组当成一个队列使用，使用两个指针来判断遍历情况</p><ul><li><code>hh &lt;= tt</code> 时说明，字符串不为空。</li><li>如果数组尾元素 <code>d[tt] == c</code> ，说明 当前是相邻重复项，修改 tt 指向上一个元素</li><li>否则就将元素放进数组</li></ul><h3 id="关键点-1" tabindex="-1"><a class="header-anchor" href="#关键点-1"><span>关键点</span></a></h3><h3 id="代码-1" tabindex="-1"><a class="header-anchor" href="#代码-1"><span>代码</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Solution</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> removeDuplicates</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> s</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (s </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> s</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> s;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        char</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">d</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> char</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">s</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()];</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // 双指针，tt 指向最后的数组末尾指针</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> hh</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, tt </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">char</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> c</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> s</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">toCharArray</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (hh </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> tt </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> d[tt] </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> c) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                tt</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">                // 数组为空时，添加元素</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">                // 当前字符与末尾元素不相同时，添加元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                d[</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">tt] </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> c;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">       return</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(d, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, tt </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复杂度分析</strong></p><p>令 n 为字符串长度。</p>`,8),r=s("ul",null,[s("li",null,[i("时间复杂度："),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),i("，我们只需要遍历该字符串一次。")]),s("li",null,[i("空间复杂度："),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),i("，需要创建一个长度为 n 的数组来存储情况，最坏的情况是字符串中不存在相邻重复项。")])],-1),d=[h,p,k,r];function c(g,B){return t(),l("div",null,d)}const m=n(e,[["render",c],["__file","1047-remove-all-adjacent-duplicates-in-string.html.vue"]]),u=JSON.parse('{"path":"/leetcode/1047-remove-all-adjacent-duplicates-in-string.html","title":"1047-删除字符串中的所有相邻重复项","lang":"zh-CN","frontmatter":{"title":"1047-删除字符串中的所有相邻重复项","date":"2024-07-01T00:00:00.000Z","tag":["字符串"],"description":"题目地址(1047. 删除字符串中的所有相邻重复项 - 力扣（LeetCode）) https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/description/ 题目描述 给出由小写字母组成的字符串 S ， 重复项删除操作 会选择两个相邻且相同的字母，并删除它们。 ...","head":[["meta",{"property":"og:url","content":"https://doublew2w.cn/leetcode/1047-remove-all-adjacent-duplicates-in-string.html"}],["meta",{"property":"og:site_name","content":"DoubleW2w"}],["meta",{"property":"og:title","content":"1047-删除字符串中的所有相邻重复项"}],["meta",{"property":"og:description","content":"题目地址(1047. 删除字符串中的所有相邻重复项 - 力扣（LeetCode）) https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/description/ 题目描述 给出由小写字母组成的字符串 S ， 重复项删除操作 会选择两个相邻且相同的字母，并删除它们。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-01T08:25:12.000Z"}],["meta",{"property":"article:author","content":"Doublew2w"}],["meta",{"property":"article:tag","content":"字符串"}],["meta",{"property":"article:published_time","content":"2024-07-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-01T08:25:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1047-删除字符串中的所有相邻重复项\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-07-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-01T08:25:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Doublew2w\\",\\"url\\":\\"https://doublew2w.cn\\"}]}"]]},"headers":[{"level":2,"title":"题目地址(1047. 删除字符串中的所有相邻重复项 - 力扣（LeetCode）)","slug":"题目地址-1047-删除字符串中的所有相邻重复项-力扣-leetcode","link":"#题目地址-1047-删除字符串中的所有相邻重复项-力扣-leetcode","children":[]},{"level":2,"title":"题目描述","slug":"题目描述","link":"#题目描述","children":[]},{"level":2,"title":"前置知识","slug":"前置知识","link":"#前置知识","children":[]},{"level":2,"title":"思路 1：双端队列","slug":"思路-1-双端队列","link":"#思路-1-双端队列","children":[{"level":3,"title":"关键点","slug":"关键点","link":"#关键点","children":[]},{"level":3,"title":"代码","slug":"代码","link":"#代码","children":[]}]},{"level":2,"title":"思路 2：数组","slug":"思路-2-数组","link":"#思路-2-数组","children":[{"level":3,"title":"关键点","slug":"关键点-1","link":"#关键点-1","children":[]},{"level":3,"title":"代码","slug":"代码-1","link":"#代码-1","children":[]}]}],"git":{"createdTime":1719822312000,"updatedTime":1719822312000,"contributors":[{"name":"DoubleW2w","email":"1049951363@qq.com","commits":1}]},"readingTime":{"minutes":2.73,"words":820},"filePathRelative":"leetcode/1047-remove-all-adjacent-duplicates-in-string.md","localizedDate":"2024年7月1日","excerpt":"<h2>题目地址(1047. 删除字符串中的所有相邻重复项 - 力扣（LeetCode）)</h2>\\n<p><a href=\\"https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/description/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/description/</a></p>\\n<h2>题目描述</h2>\\n<p> 给出由小写字母组成的字符串&nbsp; <code> S </code>，<strong> 重复项删除操作 </strong> 会选择两个相邻且相同的字母，并删除它们。</p>","autoDesc":true}');export{m as comp,u as data};
