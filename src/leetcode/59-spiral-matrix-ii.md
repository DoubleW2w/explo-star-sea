---
title: 59-螺旋矩阵 II
date: 2024-06-24
tags:
    - 数组
    - 模拟行为
---

## 题目地址(59. 螺旋矩阵 II - 力扣（LeetCode）)

https://leetcode.cn/problems/spiral-matrix-ii/

## 题目描述

<p> 给你一个正整数&nbsp; <code> n </code> ，生成一个包含 <code> 1 </code> 到&nbsp; <code> n <sup> 2 </sup> </code>&nbsp; 所有元素，且元素按顺时针顺序螺旋排列的&nbsp; <code> n x n </code> 正方形矩阵 <code> matrix </code> 。</p>

<p>&nbsp; </p>

<p> <strong> 示例 1：</strong> </p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/13/spiraln.jpg" style="width: 242px; height: 242px;">

<pre> <strong> 输入：</strong> n = 3
<strong> 输出：</strong> [[1,2,3], [8,9,4], [7,6,5]]
</pre>

<p> <strong> 示例 2：</strong> </p>

<pre> <strong> 输入：</strong> n = 1
<strong> 输出：</strong> [[1]]
</pre>

<p>&nbsp; </p>

<p> <strong> 提示：</strong> </p>

<ul>
	<li> <code> 1 &lt;= n &lt;= 20 </code> </li>
</ul>


## 前置知识

- 数组
- 模拟

## 思路

1. 定义好上下左右四个边界 $top$, $bottom$, $left$, $right$
2. 按照题目进行模拟，**从左到右**（上边界缩减），**从上到下**（右边界缩减），**从右到左**（下边界缩减），**从下到上**（下边界缩减）
3. 使用 $num <= tar$ 而不是 $l < r || t < b$ 作为迭代条件，是为了解决当 n 为奇数时，矩阵中心数字无法在迭代过程中被填充的问题。
   1. 当 n = 3 时，填充到8时，此时 $top == bottom$ ，就会导致退出循环，中心数字无法在迭代过程中被填充。


## 关键点

-  边界变化条件
-  循环终止条件

## 代码

- 语言支持：Java

Java Code:

```java

class Solution {
    public int[][] generateMatrix(int n) {
        int left = 0, right = n-1, top = 0, bottom = n-1;
        int count = 1, target = n * n;
        int[][] res = new int[n][n];
        //for循环中变量定义成i或j的细节：按照通常的思维，i代表行，j代表列
        //这样，就可以很容易区分出来变化的量应该放在[][]的第一个还是第二个
        //对于变量的边界怎么定义：
        //从左向右填充：填充的列肯定在[left,right]区间
        //从上向下填充：填充的行肯定在[top,bottom]区间
        //从右向左填充：填充的列肯定在[right,left]区间
        //从下向上填充：填充的行肯定在[bootom,top]区间
        //通过上面的总结会发现边界的起始和结束与方向是对应的
        while(count <= target){
            //从左到右填充，相当于缩小上边界
            for(int j = left; j <= right; j++) res[top][j] = count++;
            //缩小上边界
            top++;
            //从上向下填充，相当于缩小右边界
            for(int i = top; i <=bottom; i++) res[i][right] = count++;
            //缩小右边界
            right--;
            //从右向左填充，相当于缩小下边界
            for(int j = right; j >= left; j--) res[bottom][j] = count++;
            //缩小下边界
            bottom--;
            //从下向上填充，相当于缩小左边界
            for(int i = bottom; i >= top; i--) res[i][left] = count++;
            //缩小左边界
            left++;
        }
        return res;
    }
}

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n^2)$
- 空间复杂度：$O(1)$