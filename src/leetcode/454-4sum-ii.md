---
title: 454-四数相加 ii
date: 2024-06-28
tag: [哈希表,数组]
---



## 题目地址(454. 四数相加 II - 力扣（LeetCode）)

https://leetcode.cn/problems/4sum-ii/description/

## 题目描述

<p> 给你四个整数数组 <code> nums1 </code>、<code> nums2 </code>、<code> nums3 </code> 和 <code> nums4 </code> ，数组长度都是 <code> n </code> ，请你计算有多少个元组 <code>(i, j, k, l)</code> 能满足：</p>

<ul>
	<li> <code> 0 &lt;= i, j, k, l &lt; n </code> </li>
	<li> <code> nums1 [i] + nums2 [j] + nums3 [k] + nums4 [l] == 0 </code> </li>
</ul>

<p>&nbsp; </p>

<p> <strong> 示例 1：</strong> </p>

<pre> <strong> 输入：</strong> nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
<strong> 输出：</strong> 2
<strong> 解释：</strong>
两个元组如下：
1. (0, 0, 0, 1) -&gt; nums1 [0] + nums2 [0] + nums3 [0] + nums4 [1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -&gt; nums1 [1] + nums2 [1] + nums3 [0] + nums4 [0] = 2 + (-1) + (-1) + 0 = 0
</pre>

<p> <strong> 示例 2：</strong> </p>

<pre> <strong> 输入：</strong> nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
<strong> 输出：</strong> 1
</pre>

<p>&nbsp; </p>

<p>&nbsp; <strong> 提示：</strong> </p>

<ul>
	<li> <code> n == nums1.length </code> </li>
	<li> <code> n == nums2.length </code> </li>
	<li> <code> n == nums3.length </code> </li>
	<li> <code> n == nums4.length </code> </li>
	<li> <code> 1 &lt;= n &lt;= 200 </code> </li>
	<li> <code>-2 <sup> 28 </sup> &lt;= nums1 [i], nums2 [i], nums3 [i], nums4 [i] &lt;= 2 <sup> 28 </sup> </code> </li>
</ul>


## 前置知识

- 两数之和思路

## 思路

使用一个哈希表map存储 A 和 B 所有和sumAB的情况，其中 key 是和，value是和出现的次数

使用同样的遍历方式，遍历 C + D，找到map是否存在  −(sumCD)。

将 −(sumCD) 对应的值累加起来，就是答案。

## 代码

- 语言支持：Java

Java Code:

```java

class Solution {
    public int fourSumCount(int[] A, int[] B, int[] C, int[] D) {
        Map<Integer, Integer> countAB = new HashMap<Integer, Integer>();
        for (int u : A) {
            for (int v : B) {
                countAB.put(u + v, countAB.getOrDefault(u + v, 0) + 1);
            }
        }
        int ans = 0;
        for (int u : C) {
            for (int v : D) {
                if (countAB.containsKey(-u - v)) {
                    ans += countAB.get(-u - v);
                }
            }
        }
        return ans;
    }
}


```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n^2)$：使用双重循环进行遍历求和，其中哈希表操作都是 $O(1)$
- 空间复杂度：$O(n^2)$：哈希表所用的空间，最坏情况下，A 和 B 数组中每个元素之和都不相同。
