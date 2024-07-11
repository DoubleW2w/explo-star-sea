---
title: 541-反转字符串 ii
date: 2024-06-30
tag: [字符串, 双指针]
category: LeetCode
---

## 题目地址(541. 反转字符串 II - 力扣（LeetCode）)

https://leetcode.cn/problems/reverse-string-ii/description/

## 题目描述

<p> 给定一个字符串 <code> s </code> 和一个整数 <code> k </code>，从字符串开头算起，每计数至 <code> 2k </code> 个字符，就反转这 <code> 2k </code> 字符中的前 <code> k </code> 个字符。</p>

<ul>
	<li> 如果剩余字符少于 <code> k </code> 个，则将剩余字符全部反转。</li>
	<li> 如果剩余字符小于 <code> 2k </code> 但大于或等于 <code> k </code> 个，则反转前 <code> k </code> 个字符，其余字符保持原样。</li>
</ul>

<p>&nbsp; </p>

<p> <strong> 示例 1：</strong> </p>

<pre> <strong> 输入：</strong> s = "abcdefg", k = 2
<strong> 输出：</strong> "bacdfeg"
</pre>

<p> <strong> 示例 2：</strong> </p>

<pre> <strong> 输入：</strong> s = "abcd", k = 2
<strong> 输出：</strong> "bacd"
</pre>

<p>&nbsp; </p>

<p> <strong> 提示：</strong> </p>

<ul>
	<li> <code> 1 &lt;= s.length &lt;= 10 <sup> 4 </sup> </code> </li>
	<li> <code> s </code> 仅由小写英文组成 </li>
	<li> <code> 1 &lt;= k &lt;= 10 <sup> 4 </sup> </code> </li>
</ul>


## 前置知识

- 字符串
- 双指针

## 思路

使用 `left` 和 `right` 两个指针分别指向待反转的范围。

每次翻转完，要更新 `left` 和 `right` 的范围。

- `l = l + 2 * k`
- `r = l + k - 1`

指向下一个 2k 范围，然后再进行反转。

## 关键点

- 双指针移动的更新
- 最后一次翻转，r 有可能越界，因为要取 `Math.min(r,n-1)`

## 代码

- 语言支持：Java

Java Code:

```java

class Solution {
    public String reverseStr(String s, int k) {
        char[] cs = s.toCharArray();
        int n = s.length();
        // l 和 r 分别指向待反转的范围
        // 更新 l 和 r 要注意 不足 k 的情况。
        // r 可能会 > n-1，此时应该是最后一次，而 l 还是会在索引范围内，
        // 极端的情况是 l = n-1，此时不需要翻转。
        for (int l = 0; l < n; l = l + 2 * k) {
            int r = l + k - 1;
            reverse(cs, l, Math.min(r, n - 1));
        }
        return String.valueOf(cs);
    }
    void reverse(char[] cs, int l, int r) {
        while (l < r) {
            char c = cs[l];
            cs[l] = cs[r];
            cs[r] = c;
            l++; r--;
        }
    }
}



```


**复杂度分析**

令 n 为字符串长度。

- 时间复杂度：$O(n)$。遍历的长度为字符串长度n。
- 空间复杂度：$O(n)$,因为Java语言不需要申请长度为n的数组来存储字符。

