---
title: 111-二叉树的最小深度
date: 2024-07-08
tag: [二叉树,DFS]
category: LeetCode
---

## 题目地址(111. 二叉树的最小深度 - 力扣（LeetCode）)

https://leetcode.cn/problems/minimum-depth-of-binary-tree/description/

## 题目描述

<p>给定一个二叉树，找出其最小深度。</p>

<p>最小深度是从根节点到最近叶子节点的最短路径上的节点数量。</p>

<p><strong>说明：</strong>叶子节点是指没有子节点的节点。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/12/ex_depth.jpg" style="width: 432px; height: 302px;">
<pre><strong>输入：</strong>root = [3,9,20,null,null,15,7]
<strong>输出：</strong>2
</pre>

<p><strong>示例 2：</strong></p>

<pre><strong>输入：</strong>root = [2,null,3,null,4,null,5,null,6]
<strong>输出：</strong>5
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li>树中节点数的范围在 <code>[0, 10<sup>5</sup>]</code> 内</li>
	<li><code>-1000 &lt;= Node.val &lt;= 1000</code></li>
</ul>


## 前置知识

- 二叉树
- DFS
- 叶子节点

## 思路

叶子节点的定义是左孩子和右孩子都为 null 时叫做叶子节点

- 只有根节点时，深度为1

- 当根节点左右孩子有一个为空时，返回**不为空**的孩子节点的深度

- 当根节点左右孩子都不为空时，返回左右孩子**较小深度**的节点值

## 关键点

-

## 代码

```java
class Solution {
    public int minDepth(TreeNode root) {
        // 如果树是空，那么最小深度就是0
        if(root == null) return 0;
        // 如果只有根节点,那么最小深度就是1
        if(root.left == null && root.right == null) return 1;
        // 如果左子树为空，那么求右子树的最小深度
        int ans = Integer.MAX_VALUE;
        if(root.left != null) {
            ans = Math.min(minDepth(root.left), ans);
        }
        if(root.right != null) {
            ans = Math.min(minDepth(root.right), ans);
        }
        return ans + 1;
    }
}

```


**复杂度分析**

令 n 为二叉树节点个数。

- 时间复杂度：$O(n)$,每个节点都会遍历一次
- 空间复杂度：$O(h)$，其中 H 是树的高度。空间复杂度主要取决于递归时栈空间的开销，最坏情况下，树呈现链状，空间复杂度为 O(N)。

