---
title: 199-二叉树的右视图
date: 2024-07-08
tag: [二叉树,BFS,DFS]
category: LeetCode
---

## 题目地址(199. 二叉树的右视图 - 力扣（LeetCode）)

https://leetcode.cn/problems/binary-tree-right-side-view/description/

## 题目描述

<p> 给定一个二叉树的 <strong> 根节点 </strong> <code> root </code>，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。</p>

<p>&nbsp; </p>

<p> <strong> 示例 1: </strong> </p>

<p> <img src="https://assets.leetcode.com/uploads/2021/02/14/tree.jpg" style="width: 270px;"> </p>

<pre> <strong> 输入: </strong>&nbsp; [1,2,3, null,5, null,4]
<strong> 输出: </strong>&nbsp; [1,3,4]
</pre>

<p> <strong> 示例 2: </strong> </p>

<pre> <strong> 输入: </strong>&nbsp; [1, null,3]
<strong> 输出: </strong>&nbsp; [1,3]
</pre>

<p> <strong> 示例 3: </strong> </p>

<pre> <strong> 输入: </strong>&nbsp; []
<strong> 输出: </strong>&nbsp; []
</pre>

<p>&nbsp; </p>

<p> <strong> 提示: </strong> </p>

<ul>
	<li> 二叉树的节点个数的范围是 <code> [0,100] </code> </li>
	<li> <meta charset="UTF-8"> <code>-100&nbsp;&lt;= Node.val &lt;= 100 </code>&nbsp; </li>
</ul>


## 前置知识

- 二叉树
- 层序遍历
- 深度遍历

## 思路1：层序遍历

使用一个队列存储每一层的节点，在遍历每一层节点时，直到最后一个节点才进行处理。

### 关键点

-  每一层从左到右遍历时，直到最后一个节点才进行处理

### 代码

```java
class Solution {
    public List<Integer> rightSideView(TreeNode root) {
        // 层序遍历，从右到左
        List<Integer> res = new ArrayList<>();
        if (root == null)
            return res;
        Deque<TreeNode> queue = new ArrayDeque<>();
        queue.offer(root);
        while (!queue.isEmpty()) {
            int levelSize = queue.size();
            for (int i = 0; i < levelSize; i++) {
                TreeNode node = queue.poll();
                if (node.left != null) {
                    queue.offer(node.left);
                }
                if (node.right != null) {
                    queue.offer(node.right);
                }
                // 单层的最后一个元素就是最右元素
                if (i == levelSize - 1) {
                    res.add(node.val);
                }
            }
        }
        return res;
    }
}
```

**复杂度分析**

令 n 为二叉树节点个数。

- 时间复杂度：$O(n)$，每个节点最多进队列一次，出队列一次。
- 空间复杂度：$O(n)$，每个节点最多进队列一次，所以队列长度最大不不超过 $n$，所以这里的空间代价为 $O(n)$。



## 思路2：层序遍历——递归方式

先递归右子树，保证首次遇到的一定是最右边的节点。

在递归左子树。

### 代码

```java
class Solution {
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> ans = new ArrayList<>();
        dfs(root, 0, ans);
        return ans;
    }

    private void dfs(TreeNode root, int depth, List<Integer> ans) {
        if (root == null) {
            return;
        }
        if (depth == ans.size()) { // 这个深度首次遇到
            ans.add(root.val);
        }
        dfs(root.right, depth + 1, ans); // 先递归右子树，保证首次遇到的一定是最右边的节点
        dfs(root.left, depth + 1, ans);
    }
}


```

**复杂度分析**

令 n 为二叉树节点个数。

- 时间复杂度：$O(n)$，每个节点最多进队列一次，出队列一次。
- 空间复杂度：$O(h)$，其中 h 是二叉树的高度。递归需要 $O(h)$ 的栈空间。最坏情况下，二叉树退化成一条链，递归需要 $O(n)$ 的栈空间。
