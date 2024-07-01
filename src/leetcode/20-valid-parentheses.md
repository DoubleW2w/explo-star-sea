---
title: 20-有效的括号
date: 2024-07-01
tag: [字符串,栈]
---

## 题目地址(20. 有效的括号 - 力扣（LeetCode）)

https://leetcode.cn/problems/valid-parentheses/description/

## 题目描述

<p>给定一个只包括 <code>'('</code>，<code>')'</code>，<code>'{'</code>，<code>'}'</code>，<code>'['</code>，<code>']'</code>&nbsp;的字符串 <code>s</code> ，判断字符串是否有效。</p>

<p>有效字符串需满足：</p>

<ol>
	<li>左括号必须用相同类型的右括号闭合。</li>
	<li>左括号必须以正确的顺序闭合。</li>
	<li>每个右括号都有一个对应的相同类型的左括号。</li>
</ol>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre><strong>输入：</strong>s = "()"
<strong>输出：</strong>true
</pre>

<p><strong>示例&nbsp;2：</strong></p>

<pre><strong>输入：</strong>s = "()[]{}"
<strong>输出：</strong>true
</pre>

<p><strong>示例&nbsp;3：</strong></p>

<pre><strong>输入：</strong>s = "(]"
<strong>输出：</strong>false
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li>
	<li><code>s</code> 仅由括号 <code>'()[]{}'</code> 组成</li>
</ul>


## 前置知识

- 栈
- 字符串

## 思路

当我们遇到一个左括号时，就放入一个对应的右括号。

当我们遇到一个右括号时，

- 如果栈为空或者栈顶元素与「当前的右括号」不一样时，那么字符串就是无效的。

- 如果与栈顶元素一样，就说明括号右效。将栈顶元素出栈

最后再判断栈是不是为空，解决 `[({})` 这种情况

## 关键点

-  入栈是右括号，并将当前元素与栈顶元素判断是否相同

## 代码

- 语言支持：Java

Java Code:

```java
class Solution {
    public boolean isValid(String s) {
        if (s.isEmpty()) {
            return true;
        }
        // 长度为奇数时
        if(s.length() % 2 == 1){
            return false;
        }
        Deque<Character> queue = new ArrayDeque<>();
        for (char c : s.toCharArray()) {
            if(c == '('){
                queue.offer(')');
            }else if(c == '['){
                queue.offer(']');
            }else if(c == '{'){
                queue.offer('}');
            }else if(queue.isEmpty() || c != queue.pollLast()){
                return false;
            }
        }
        return queue.isEmpty();
    }
}
```


**复杂度分析**

令 n 为字符串长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$,创建一个双端队列存放右括号，最多是1/2 n个。

