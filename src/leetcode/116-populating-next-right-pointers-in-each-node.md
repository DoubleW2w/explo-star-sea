---
title: 116-填充每个节点的下一个右侧节点指针
date: 2024-07-08
tag: 二叉树
category: LeetCode
---

## 题目地址(116. 填充每个节点的下一个右侧节点指针 - 力扣（LeetCode）)

https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/description/

## 题目描述

<p> 给定一个&nbsp; <strong> 完美二叉树&nbsp; </strong>，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：</p>

<pre> struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}</pre>

<p> 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 <code> NULL </code>。</p>

<p> 初始状态下，所有&nbsp; next 指针都被设置为 <code> NULL </code>。</p>

<p>&nbsp; </p>

<p> <strong> 示例 1：</strong> </p>

<p> <img alt="" src="https://assets.leetcode.com/uploads/2019/02/14/116_sample.png" style="height: 171px; width: 500px;"> </p>

<pre> <b> 输入：</b> root = [1,2,3,4,5,6,7]
<b> 输出：</b> [1,#,2,3,#,4,5,6,7,#]
<b> 解释：</b> 给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化的输出按层序遍历排列，同一层节点由 next 指针连接，'#' 标志着每一层的结束。
</pre>

<p> <meta charset="UTF-8"> </p>

<p> <strong> 示例 2: </strong> </p>

<pre> <b> 输入：</b> root = []
<b> 输出：</b> []
</pre>

<p>&nbsp; </p>

<p> <strong> 提示：</strong> </p>

<ul>
	<li> 树中节点的数量在 <meta charset="UTF-8">&nbsp; <code> [0, 2 <sup> 12 </sup>&nbsp;- 1] </code>&nbsp; 范围内 </li>
	<li> <code>-1000 &lt;= node.val &lt;= 1000 </code> </li>
</ul>

<p>&nbsp; </p>

<p> <strong> 进阶：</strong> </p>

<ul>
	<li> 你只能使用常量级额外空间。</li>
	<li> 使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。</li>
</ul>


## 前置知识

- 二叉树
- BFS

## 思路

next 指针只有两种类型：

1. 同一个父节点的两个子节点

```java
node.left.next = node.right
```

2. 不同父节点的子节点。将这一层的上一层串联好，就可以通过父节点的 next 找到邻居，完成处理。即第 N 层节点之间建立 next 指针后，再建立第 N+1 层节点的 next 指针。

```java
root.right.next => root.next.left
```

## 关键点

- 把每一层当成一个链表进行遍历。

- `root.right.next => root.next.left`

## 代码

```java
/*
// Definition for a Node.
class Node {
    public int val;
    public Node left;
    public Node right;
    public Node next;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, Node _left, Node _right, Node _next) {
        val = _val;
        left = _left;
        right = _right;
        next = _next;
    }
};
*/

class Solution {
    public Node connect(Node root) {
        if(root == null) return root;
        // 从根节点开始
        Node pre = root;
        while(pre.left!=null) {
            // 遍历这一层节点组织成的链表，为下一层的节点更新 next 指针
            Node temp = pre;
            while(temp != null){
                // 同一个父节点下的串联
                temp.left.next = temp.right;
                // 如果上一层已经完成串联
                if(temp.next!=null) {
                    temp.right.next = temp.next.left;
                }
                //继续右边遍历
                temp = temp.next;
            }
            //从下一层的最左边开始遍历
            pre = pre.left;
        }
        return root;
    }
}

```


**复杂度分析**

令 n 为二叉树节点个数。

- 时间复杂度：$O(n)$，每个节点只访问一次
- 空间复杂度：$O(1)$，不需要存储额外的节点

