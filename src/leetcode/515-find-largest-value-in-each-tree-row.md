---
title: 515-在每个树行中找最大值
date: 2024-07-08
tag: [二叉树，BFS,DFS]
---

## 题目地址(515. 在每个树行中找最大值 - 力扣（LeetCode）)

https://leetcode.cn/problems/find-largest-value-in-each-tree-row/description/

## 题目描述

<p> 给定一棵二叉树的根节点&nbsp; <code> root </code> ，请找出该二叉树中每一层的最大值。</p>

<p>&nbsp; </p>

<p> <strong> 示例 1：</strong> </p>

<p> <img alt="" src="https://assets.leetcode.com/uploads/2020/08/21/largest_e1.jpg" style="height: 172px; width: 300px;"> </p>

<pre> <strong> 输入: </strong> root = [1,3,2,5,3, null,9]
<strong> 输出: </strong> [1,3,9]
</pre>

<p> <strong> 示例 2：</strong> </p>

<pre> <strong> 输入: </strong> root = [1,2,3]
<strong> 输出: </strong> [1,3]
</pre>

<p>&nbsp; </p>

<p> <strong> 提示：</strong> </p>

<ul>
	<li> 二叉树的节点个数的范围是 <code> [0,10 <sup> 4 </sup>] </code> </li>
	<li> <meta charset="UTF-8"> <code>-2 <sup> 31 </sup>&nbsp;&lt;= Node.val &lt;= 2 <sup> 31 </sup>&nbsp;- 1 </code> </li>
</ul>

<p>&nbsp; </p>


## 前置知识

- 二叉树
- BFS
- DFS

## 思路 1：DFS

在进行 DFS 的过程中，如果当前节点是新的一层，默认该节点是该层的最大值。

等到再 DFS 到同层节点时，就将同层节点与最大值进行比较。

### 关键点

-  数组可以通过索引的方式进行重新设置值。

### 代码

```java
class Solution {
    List<Integer> res = new ArrayList<>();
    public List<Integer> largestValues(TreeNode root) {
        if(root == null) return res;
         dfs(root, 0);
        return res;
    }

    public void dfs(TreeNode root, int depth){
        if(root == null) return;
        if(res.size() == depth){
            res.add(root.val);
        }else{
            res.set(depth,Math.max(res.get(depth),root.val));
        }
        if (root.left != null) {
            dfs(root.left, depth + 1);
        }
        if (root.right != null) {
            dfs(root.right, depth + 1);
        }
    }
}

```


**复杂度分析**

令 n 为二叉树节点个数。

- 时间复杂度：$O(n)$, 其中 $n$ 为二叉树节点个数。二叉树的遍历中每个节点会被访问一次且只会被访问一次。
- 空间复杂度：$O(h)$, 其中 h 表示树的高度。递归函数需要栈空间，递归深度等价于二叉树的高度。最坏情况下，树退化成一个链表，此时 $h = n$。

## 思路 2：BFS

使用 BFS 进行层序遍历，每次的 BFS 都会将该层所有节点入队，在出队的时候，维护该层的最大值，并将其加入答案中。

### 代码

```java
class Solution {
    public List<Integer> largestValues(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        if(root == null) return res;
        Deque<TreeNode> queue = new ArrayDeque<>();
        queue.addLast(root);
        while(!queue.isEmpty()){
            int levelSize = queue.size();
            int max = Integer.MIN_VALUE;
            for(int i = 0;i<levelSize;i++){
                TreeNode node = queue.pollFirst();
                if(node.left != null){
                    queue.addLast(node.left);
                }
                if(node.right != null){
                    queue.addLast(node.right);
                }
                max = Math.max(max,node.val);
            }
            res.add(max);
        }
        return res;
    }
}
```

**复杂度分析**

令 n 为二叉树节点个数。

- 时间复杂度：$O(n)$, 其中 $n$ 为二叉树节点个数。二叉树的遍历中每个节点会被访问一次且只会被访问一次。
- 空间复杂度：$O(n)$, 队列所需要的空间最多不超过 $n$ 个节点的存放。
