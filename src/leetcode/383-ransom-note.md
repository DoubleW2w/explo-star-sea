---
title: 383-赎金信
date: 2024-06-28
tag: [哈希表]
---



## 题目地址(383. 赎金信 - 力扣（LeetCode）)

https://leetcode.cn/problems/ransom-note/description/

## 题目描述

<p> 给你两个字符串：<code> ransomNote </code> 和 <code> magazine </code> ，判断 <code> ransomNote </code> 能不能由 <code> magazine </code> 里面的字符构成。</p>

<p> 如果可以，返回 <code> true </code> ；否则返回 <code> false </code> 。</p>

<p> <code> magazine </code> 中的每个字符只能在 <code> ransomNote </code> 中使用一次。</p>

<p>&nbsp; </p>

<p> <strong> 示例 1：</strong> </p>

<pre> <strong> 输入：</strong> ransomNote = "a", magazine = "b"
<strong> 输出：</strong> false
</pre>

<p> <strong> 示例 2：</strong> </p>

<pre> <strong> 输入：</strong> ransomNote = "aa", magazine = "ab"
<strong> 输出：</strong> false
</pre>

<p> <strong> 示例 3：</strong> </p>

<pre> <strong> 输入：</strong> ransomNote = "aa", magazine = "aab"
<strong> 输出：</strong> true
</pre>

<p>&nbsp; </p>

<p> <strong> 提示：</strong> </p>

<ul>
	<li> <code> 1 &lt;= ransomNote.length, magazine.length &lt;= 10 <sup> 5 </sup> </code> </li>
	<li> <code> ransomNote </code> 和 <code> magazine </code> 由小写英文字母组成 </li>
</ul>


## 前置知识

- 哈希表

## 思路

- 如果两个字符串的长度不相等，则不是正确答案。
- 如果 `ransomNote` 存在 `magazine` 没有的字母，则不是正确答案。
- 定义一个长度为 26 的数组存放 `magazine` 不同字母的个数。
  - 记录 `ransomNote` 每个字符的情况
  - 如果某个字符数量检查情况中，出现数量 < 0，说明 `ransomNote` 针对该字母的数量比 `magazine` 多，也不是正确答案

## 关键点

-  字母总数为 26 个
-  哈希表计数或者数组计数

同样的题目还有 242-有效的字母异位词

## 代码

- 语言支持：Java

Java Code:

```java

class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        if (ransomNote.length() > magazine.length()) {
            return false;
        }
        int[] cnt = new int[26];
        for (char c : magazine.toCharArray()) {
            cnt[c - 'a']++;
        }
        for (char c : ransomNote.toCharArray()) {
            cnt[c - 'a']--;
            if (cnt[c - 'a'] < 0) {
                return false;
            }
        }
        return true;
    }
}

```


**复杂度分析**

令 n 为字符串长度。

- 时间复杂度：$O(n)$，遍历字符串所需要的时间复杂度
- 空间复杂度：$O(S)$,定义存储的数组，固定长度，|S| <= 26;



