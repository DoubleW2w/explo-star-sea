---
title: 209-长度最小的子数组
date: 2024-06-24
tags: [数组,滑动窗口]
category: LeetCode
---

## 题目地址(209. 长度最小的子数组 - 力扣（LeetCode）)

https://leetcode.cn/problems/minimum-size-subarray-sum/

## 题目描述

<p>给定一个含有&nbsp;<code>n</code><strong>&nbsp;</strong>个正整数的数组和一个正整数 <code>target</code><strong> 。</strong></p>

<p>找出该数组中满足其总和大于等于<strong> </strong><code>target</code><strong> </strong>的长度最小的 <strong><span data-keyword="subarray-nonempty" class=" cursor-pointer relative text-dark-blue-s text-sm"><div class="popover-wrapper inline-block" data-headlessui-state=""><div><div aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:r17:"><div>子数组</div></div><div style="position: fixed; z-index: 40; inset: 0px auto auto 0px; transform: translate(402px, 220px);"></div></div></div></span></strong>&nbsp;<code>[nums<sub>l</sub>, nums<sub>l+1</sub>, ..., nums<sub>r-1</sub>, nums<sub>r</sub>]</code> ，并返回其长度<strong>。</strong>如果不存在符合条件的子数组，返回 <code>0</code> 。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre><strong>输入：</strong>target = 7, nums = [2,3,1,2,4,3]
<strong>输出：</strong>2
<strong>解释：</strong>子数组&nbsp;<code>[4,3]</code>&nbsp;是该条件下的长度最小的子数组。
</pre>

<p><strong>示例 2：</strong></p>

<pre><strong>输入：</strong>target = 4, nums = [1,4,4]
<strong>输出：</strong>1
</pre>

<p><strong>示例 3：</strong></p>

<pre><strong>输入：</strong>target = 11, nums = [1,1,1,1,1,1,1,1]
<strong>输出：</strong>0
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= target &lt;= 10<sup>9</sup></code></li>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul>

<p>&nbsp;</p>

<p><strong>进阶：</strong></p>

<ul>
	<li>如果你已经实现<em> </em><code>O(n)</code> 时间复杂度的解法, 请尝试设计一个 <code>O(n log(n))</code> 时间复杂度的解法。</li>
</ul>


## 前置知识

- 滑动窗口
- [前缀和+二分查找]

## 思路1：滑动窗口

- 定义两个指针 $start$ 和 $end$ 分别指向滑动窗口的开始位置和结束位置

- 计算滑动窗口的总和 $sum$
- 当 $sum$ 符合题目时，窗口的长度为子数组的最小长度 $end - start + 1$
  - 将 $start$ 继续往右移，找到更小的窗口长度
  - 继续更新子数组的最小长度

## 关键点

-  当窗口符合条件时，要将 $start$ 继续往右移，找到更小的窗口长度

## 代码

- 语言支持：Java

Java Code:

```java

class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        // 第一次符合条件为窗口长度 right - left
        //
        int n = nums.length;
        if(n == 0) return 0;
        int ans = Integer.MAX_VALUE;
        int start = 0, end = 0; // 滑动串口的指针和右指针
        int sum = 0;
        while (end < n) {
            sum += nums[end];  // 把当前元素添加进去,直到符合最小窗口的长度
            while (sum >= target) { // 最小窗口长度右移，直到不满足 此时，ans = end - start + 1， end - start
                ans = Math.min(ans, end - start + 1);
                sum -= nums[start];
                start++;
            }
            end++;
        }
        return ans == Integer.MAX_VALUE ? 0 : ans;

    }
}

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$