---
title: 704-二分查找
date: 2024-06-22
tag: [数组,二分查找]
category: LeetCode
---

## 题目地址(704. 二分查找 - 力扣（LeetCode）)

https://leetcode.cn/problems/binary-search/

## 题目描述
<p> 给定一个 <code> n </code> 个元素有序的（升序）整型数组&nbsp; <code> nums </code> 和一个目标值&nbsp; <code> target </code> &nbsp;，写一个函数搜索&nbsp; <code> nums </code>&nbsp; 中的 <code> target </code>，如果目标值存在返回下标，否则返回 <code>-1 </code>。</p>

<p> <br>
<strong> 示例 1: </strong> </p>

<pre> <strong> 输入: </strong> <code> nums </code> = [-1,0,3,5,9,12], <code> target </code> = 9
<strong> 输出: </strong> 4
<strong> 解释: </strong> 9 出现在 <code> nums </code> 中并且下标为 4
</pre>

<p> <strong> 示例&nbsp; 2: </strong> </p>

<pre> <strong> 输入: </strong> <code> nums </code> = [-1,0,3,5,9,12], <code> target </code> = 2
<strong> 输出: </strong> -1
<strong> 解释: </strong> 2 不存在 <code> nums </code> 中因此返回 -1
</pre>

<p>&nbsp; </p>

<p> <strong> 提示：</strong> </p>

<ol>
	<li> 你可以假设 <code> nums </code>&nbsp; 中的所有元素是不重复的。</li>
	<li> <code> n </code>&nbsp; 将在&nbsp; <code> [1, 10000] </code> 之间。</li>
	<li> <code> nums </code>&nbsp; 的每个元素都将在&nbsp; <code> [-9999, 9999] </code> 之间。</li>
</ol>


## 前置知识

- 数组

## 思路

**区间定义**

当我们选择「左闭右开」的时候，我们可以 0 来定义左边界(left)，而以数组的长度来定义右边界(right)，因此右边界我们是判断不到的。

**循环终止条件**

在左闭右开的情况，区间不为空，也就意味着 right 至少大于等于 left 。如果超过了这个条件，循环就终止。

**判断条件**

1. $nums[mid] == target$ ，$mid$ 就是我们要得到的结果，直接返回
2. $nums[mid] < target$，我们应往右边的区间继续寻找，注意 $mid$ 的位置我们是可以取到的，因此我们更新左边界的时候，应该为 $left = mid +1$
3. $nums[mid] > target$，我们应往左边的区间找，而 $mid$ 的位置明显不是答案，但是我们选择的是左闭右开区间，而右开所指向的位置本身就不在我们的候选区间里，所以 $right = mid$，而不是 $right = mid -1$.
4. 如果 $mid - 1$ 的位置正好是答案，在左闭右开的情况是找不到这个位置的

## 关键点

- 左右区间的闭合

- 左右区间的比较

## 代码

Java Code:

```java

class Solution {
  public int search(int[] nums, int target) {
      int left = 0;
      int right = nums.length;
      while (left < right){
          int mid = (right + left) / 2;
          if(nums[mid] > target){
              right = mid;
          }else if(nums[mid] < target) {
              left = mid +1 ;
          }else{
              return mid;
          }
      }
      return -1;
}

```

**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(logn)$
- 空间复杂度：$O(1)$


## 思路改进

在 $nums[mid] < target$ 和 $nums[mid] == target$ 是可以合并起来的。当区间长度为 1 时，剩下的就是答案，由于 nums [mid] 可能等于答案，因此我们不能跳过这个 mid 的位置

```java
public int search(int[] nums, int target) {
    int left = 0;
    int right = nums.length;
    while (left < right){
        int mid = (right + left)/2;
        if(nums[mid] > target){
            right = mid;
        }else{
            left = mid;
        }
    }
    if(nums[l] == target){
        return l;
    }
    return -1;
}
```

## 左闭右必区间

```java
public int search(int[] nums, int target) {
    int left = 0;
    int right = nums.length - 1;
    while(left <= right){  // #1
        int mid = (right + left) / 2;
        if(nums[mid] == target){
            return mid;
        }else if(nums[mid] < target){
            left = mid + 1; // #2
        }else{
            right = mid - 1; // #3
        }
    }
    return -1;
}
```
