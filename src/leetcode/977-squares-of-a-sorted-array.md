---

title: 977-有序数组的平方
date: 2024-06-23
tag:
    - 数组
    - 二分查找
---

## 题目地址(977. 有序数组的平方 - 力扣（LeetCode）)

https://leetcode.cn/problems/squares-of-a-sorted-array/description/

## 题目描述

<p> 给你一个按 <strong> 非递减顺序 </strong> 排序的整数数组 <code> nums </code>，返回 <strong> 每个数字的平方 </strong> 组成的新数组，要求也按 <strong> 非递减顺序 </strong> 排序。</p>

<ul>
</ul>

<p>&nbsp; </p>

<p> <strong> 示例 1：</strong> </p>

<pre> <strong>输入：</strong> nums = [-4,-1,0,3,10]
<strong> 输出：</strong> [0,1,9,16,100]
<strong> 解释：</strong> 平方后，数组变为 [16,1,0,9,100]
排序后，数组变为 [0,1,9,16,100] </pre>


<p> <strong> 示例 2：</strong> </p>

<pre> <strong>输入：</strong> nums = [-7,-3,2,3,11]
<strong> 输出：</strong> [4,9,9,49,121]
</pre>


<p>&nbsp; </p>

<p> <strong> 提示：</strong> </p>

<ul>
	<li> <code> <span> 1 &lt;= nums.length &lt;= </span> 10 <sup> 4 </sup> </code> </li>
	<li> <code>-10 <sup> 4 </sup> &lt;= nums [i] &lt;= 10 <sup> 4 </sup> </code> </li>
	<li> <code> nums </code> 已按 <strong> 非递减顺序 </strong> 排序 </li>
</ul>

<p>&nbsp; </p>

<p> <strong> 进阶：</strong> </p>

<ul>
	<li> 请你 <span style="color: rgb(36, 41, 46); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial; float: none;"> 设计时间复杂度为 <code> O(n)</code> 的算法解决本问题 </span> </li>
</ul>


## 前置知识

- 双指针

## 思路

使用两个指针分别指向位置 $0$ 和 $n−1$，每次比较两个指针对应的数，选择较大的那个逆序放入答案并移动指针。

## 关键点

-  平方大小的比较 = 绝对值大小的比较
-  双指针指向相等时，任意放一个进入结果数组即可。

## 代码

- 语言支持：Java

Java Code:

```java

class Solution {
    public int[] sortedSquares(int[] nums) {
// 非递减
      // 在正数，越大，平方也就越大
      // 在负数，越小，平方越大
      // 采用双指针，头尾比较
      int left = 0;
      int right = nums.length - 1;
      int[] ret = new int[nums.length];
      int index = right;
      while (left < right) { // 当left == right时，退出循环
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
          ret[index--] = nums[right] * nums[right];
          right--;
        } else if (Math.abs(nums[left]) > Math.abs(nums[right])) {
          ret[index--] = nums[left]*nums[left];
          left++;
        }else if(Math.abs(nums[left]) == Math.abs(nums[right])){
          ret[index--] = nums[right]*nums[right];
          right--;
        }
      }
      ret[index] = nums[left]*nums[left];
      return ret;
    }
}

```

**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$，除了存储答案的数组以外，我们只需要维护常量空间。
