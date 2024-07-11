---
title: 104-二叉树的最大深度
date: 2024-07-08
tag: [二叉树]
category: LeetCode
---

## 题目地址(104. 二叉树的最大深度 - 力扣（LeetCode）)

https://leetcode.cn/problems/maximum-depth-of-binary-tree/submissions/

## 题目描述

<p> 给定一个二叉树 <code> root </code> ，返回其最大深度。</p>

<p> 二叉树的 <strong> 最大深度 </strong> 是指从根节点到最远叶子节点的最长路径上的节点数。</p>

<p>&nbsp; </p>

<p> <strong> 示例 1：</strong> </p>

<p> <img alt="" src="https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg" style="width: 400px; height: 277px;"> </p>

<p>&nbsp; </p>

<pre> <b> 输入：</b> root = [3,9,20, null, null,15,7]
<b> 输出：</b> 3
</pre>

<p> <strong> 示例 2：</strong> </p>

<pre> <b> 输入：</b> root = [1, null,2]
<b> 输出：</b> 2
</pre>

<p>&nbsp; </p>

<p> <strong> 提示：</strong> </p>

<ul>
	<li> 树中节点的数量在&nbsp; <code> [0, 10 <sup> 4 </sup>] </code>&nbsp; 区间内。</li>
	<li> <code>-100 &lt;= Node.val &lt;= 100 </code> </li>
</ul>


## 前置知识

- 深度概念
- 二叉树
- DFS、BFS

## 思路 1: DFS

二叉树的最大深度 = Math.max(左子树的最大深度，右子树的最大深度) + 1

递归三要素:

1. **终止条件：** 当 root 为空时，说明不是叶节点，因此深度是 0
2. **单层递归逻辑**：计算节点 root 的 左子树的深度 ，计算节点 root 的 右子树的深度
3. **返回值：**：返回树的深度

## 关键点

二叉树的最大深度 = Math.max(左子树的最大深度，右子树的最大深度) + 1

## 代码

```java
class Solution {
    public int maxDepth(TreeNode root) {
        if (root == null) return 0;
        // 单层递归逻辑：求树的大深度
        // 树的最大深度 = max(左子树的最大深度 ，右子树的最大深度) + 1
        return Math.max(maxDepth(root.left),maxDepth(root.right))+1;
    }
}

```

**复杂度分析**

令 n 为二叉树节点个数。

- 时间复杂度：$O(n)$，计算树的深度需要遍历所有节点。
- 空间复杂度：$O(n)$，最差情况下（当树退化为链表时），递归深度可达到 N 。

## 思路 2：BFS

树的层序遍历 / 广度优先搜索往往利用 队列 实现。

**关键点：** 每遍历一层，则计数器 +1 ，直到遍历完成，则可得到树的深度。

### 代码

```java
class Solution {
    public int maxDepth(TreeNode root) {
        if (root == null) return 0;
        List<TreeNode> queue = new LinkedList<>() {{ add(root); }}, tmp;
        int res = 0;
        while (!queue.isEmpty()) {
            tmp = new LinkedList<>();
            for(TreeNode node : queue) {
                if (node.left != null) tmp.add(node.left);
                if (node.right != null) tmp.add(node.right);
            }
            queue = tmp;
            res++;
        }
        return res;
    }
}

```

**复杂度分析**

令 n 为二叉树节点个数。

- 时间复杂度：$O(n)$，计算树的深度需要遍历所有节点。
- 空间复杂度：$O(n)$，最差情况下, 队列 queue 同时存储 N/2 个节点
