---
title: 344-反转字符串
date: 2024-06-30
tag: 字符串
category: LeetCode
---

## 题目地址(344. 反转字符串 - 力扣（LeetCode）)

https://leetcode.cn/problems/reverse-string/

## 题目描述

<p> 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 <code> s </code> 的形式给出。</p>

<p> 不要给另外的数组分配额外的空间，你必须 <strong> <a href="https://baike.baidu.com/item/原地算法" target="_blank"> 原地 </a> 修改输入数组 </strong>、使用 O(1) 的额外空间解决这一问题。</p>

<p>&nbsp; </p>

<p> <strong> 示例 1：</strong> </p>

<pre> <strong> 输入：</strong> s = ["h", "e", "l", "l", "o"]
<strong> 输出：</strong> ["o", "l", "l", "e", "h"]
</pre>

<p> <strong> 示例 2：</strong> </p>

<pre> <strong> 输入：</strong> s = ["H", "a", "n", "n", "a", "h"]
<strong> 输出：</strong> ["h", "a", "n", "n", "a", "H"] </pre>

<p>&nbsp; </p>

<p> <strong> 提示：</strong> </p>

<ul>
	<li> <code> 1 &lt;= s.length &lt;= 10 <sup> 5 </sup> </code> </li>
	<li> <code> s [i] </code> 都是 <a href="https://baike.baidu.com/item/ASCII" target="_blank"> ASCII </a> 码表中的可打印字符 </li>
</ul>


## 前置知识

- 字符串
- 双指针

## 思路

使用两个指针 `l`, `r` 分别指向字符数组首元素，字符数组尾元素。

当 `l < r` 时，交换 l 和 r 指向的元素。

当 `l == r` 时，就表示反转结束。

## 关键点

- `s[i]` 与 `s[n-1-i]` 交换

## 代码

- 语言支持：Java

Java Code:

```java

class Solution {
    public void reverseString(char[] s) {
        //O(1)
        int left = 0;
        int right = s.length - 1;
        while(left < right){
            char temp = s[left];
            s[left] = s[right];
            s[right] = temp;
            left++;
            right--;
        }
    }
}

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$, 一共执行了 `n/2` 次交换。
- 空间复杂度：$O(1)$，两个指针，常数的空间。

