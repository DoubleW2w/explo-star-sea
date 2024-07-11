---
title: 429-N 叉树的层序遍历
date: 2024-07-08
tag: [树,BFS,DFS]
category: LeetCode
---

## 题目地址(429. N 叉树的层序遍历 - 力扣（LeetCode）)

https://leetcode.cn/problems/n-ary-tree-level-order-traversal/description/

## 题目描述

<p> 给定一个 N 叉树，返回其节点值的 <em> 层序遍历 </em>。（即从左到右，逐层遍历）。</p>

<p> 树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。</p>

<p>&nbsp; </p>

<p> <strong class="example"> 示例 1：</strong> </p>

<p> <img src="https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png" style="width: 100%; max-width: 300px;"> </p>

<pre> <strong> 输入：</strong> root = [1, null,3,2,4, null,5,6]
<strong> 输出：</strong> [[1], [3,2,4], [5,6]]
</pre>

<p> <strong class="example"> 示例 2：</strong> </p>

<p> <img alt="" src="https://assets.leetcode.com/uploads/2019/11/08/sample_4_964.png" style="width: 296px; height: 241px;"> </p>

<pre> <strong> 输入：</strong> root = [1, null,2,3,4,5, null, null,6,7, null,8, null,9,10, null, null,11, null,12, null,13, null, null,14]
<strong> 输出：</strong> [[1], [2,3,4,5], [6,7,8,9,10], [11,12,13], [14]]
</pre>

<p>&nbsp; </p>

<p> <strong> 提示：</strong> </p>

<ul>
	<li> 树的高度不会超过&nbsp; <code> 1000 </code> </li>
	<li> 树的节点总数在 <code> [0,&nbsp; 10 <sup> 4 </sup>] </code> 之间 </li>
</ul>


## 前置知识

- 树
- BFS: 广度优先搜索
- DFS: 深度优先搜索

## 思路 1：BFS

将二叉树的层序遍历扩展到 N 叉树，本质上是不变的。

在二叉树的时候，我们是单独处理 `root.left` 和 `root.right`。而对于 N 叉树，我们应该使用一个循环进行处理。

### 关键点

以「层」为单位构建答案，因此在单次 BFS 过程中也按「层」进行。

### 代码 1：

```java
class Solution {
    public List<List<Integer>> levelOrder(Node root) {
        List<List<Integer>> ans = new ArrayList<>();
        Deque<Node> d = new ArrayDeque<>();
        if (root != null) d.addLast(root);
        while (!d.isEmpty()) {
            int size = d.size();
            List<Integer> list = new ArrayList<>();
            while (size-- > 0) {
                Node t = d.pollFirst();
                for (Node node : t.children) d.addLast(node);
                list.add(t.val);
            }
            ans.add(list);
        }
        return ans;
    }
}
```

**复杂度分析**

令 n 为树的节点个数。

- 时间复杂度：$O(n)$，每个节点最多出队一次，入队一次。
- 空间复杂度：$O(n)$，队列所需要用到的空间是 $O(n)$，最坏情况下，树只有两层，根节点和 n-1 个节点组成的第二层。

## 思路 2：DFS

在深度优先搜索过程中，同层的节点不会连续被处理，但在处理的时候依然遵循「从左到右」。

因此对于某个节点来说，会获取对应该层的答案，然后处理该节点。

### 代码

```java

class Solution {
    List<List<Integer>> ans = new ArrayList<>();
    public List<List<Integer>> levelOrder(Node root) {
        if (root == null) return ans;
        dfs(root, 0);
        return ans;
    }
    void dfs(Node u, int depth) {
        if (ans.size() == depth) ans.add(new ArrayList<>());
        List<Integer> list = ans.get(depth);
        list.add(u.val);
        for (Node node : u.children) dfs(node, depth + 1);
    }
}


```

**复杂度分析**

令 n 为树的节点个数。

- 时间复杂度：$O(n)$，每个节点最多出队一次，入队一次。
- 空间复杂度：$O(h)$，h为树的高度，最坏情况，树退化成链表，此时树的高度与节点个数一样。
