---
title: 117-填充每个节点的下一个右侧节点指针 II
date: 2024-07-08
tag: [二叉树，BFS]
---

## 题目地址(117. 填充每个节点的下一个右侧节点指针 II - 力扣（LeetCode）)

https://leetcode.cn/problems/populating-next-right-pointers-in-each-node-ii/

## 题目描述

<p> 给定一个二叉树：</p>

<pre> struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}</pre>

<p> 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 <code> NULL </code> 。</p>

<p> 初始状态下，所有&nbsp; next 指针都被设置为 <code> NULL </code> 。</p>

<p>&nbsp; </p>

<p> <strong> 示例 1：</strong> </p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/02/15/117_sample.png" style="width: 500px; height: 171px;">
<pre> <strong> 输入 </strong>：root = [1,2,3,4,5, null,7]
<strong> 输出：</strong> [1,#,2,3,#,4,5,7,#]
<strong> 解释：</strong> 给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化输出按层序遍历顺序（由 next 指针连接），'#' 表示每层的末尾。</pre>

<p> <strong class="example"> 示例 2：</strong> </p>

<pre> <strong> 输入：</strong> root = []
<strong> 输出：</strong> []
</pre>

<p>&nbsp; </p>

<p> <strong> 提示：</strong> </p>

<ul>
	<li> 树中的节点数在范围 <code> [0, 6000] </code> 内 </li>
	<li> <code>-100 &lt;= Node.val &lt;= 100 </code> </li>
</ul>

<p> <strong> 进阶：</strong> </p>

<ul>
	<li> 你只能使用常量级额外空间。</li>
	<li> 使用递归解题也符合要求，本题中递归程序的隐式栈空间不计入额外空间复杂度。</li>
</ul>

<ul>
</ul>
## 前置知识

- 二叉树
- 层序遍历

## 思路 1：出队串联

按照层序遍历的方式，创建一个队列存放每一层的节点，将每一层想象成一条链表。当遍历到一层时，从左到右出队将其串联起来。

### 关键点

```java
//出队
Node node = queue.poll();
//如果 pre 为空就表示 node 节点是这一行的第一个，
//没有前一个节点指向他，否则就让前一个节点指向他
if (pre != null) {
    pre.next = node;
}


```

### 代码

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
        if (root == null)
            return root;

        Deque<Node> queue = new ArrayDeque<>();
        queue.addLast(root);
        while (!queue.isEmpty()) {
            int levelSize = queue.size();

            Node pre = null;
            for (int i = 0; i < levelSize; i++) {
                // 出队
                Node node = queue.pollFirst();
                // //如果 pre 为空就表示 node 节点是这一行的第一个，
                if (pre != null) {
                    pre.next = node;
                }
                // 然后再让当前节点成为前一个节点
                pre = node;

                // 左右子节点如果不为空就入队
                if (node.left != null) {
                    queue.add(node.left);
                }
                if (node.right != null) {
                    queue.add(node.right);
                }
            }
        }
        return root;
    }
}

```

**复杂度分析**

令 n 为二叉树节点个数。

- 时间复杂度：$O(n)$，每个节点最多出队和入队一次。
- 空间复杂度：$O(n)$，队列存放节点所需要的空间不超过 n 个节点



## 思路 2：模拟链表串联

将队列去掉，引入一个「虚拟头节点」

### 代码

cur 是某一行的节点，dummy 和 pre 是下一行的头

当对 cur 进行遍历时，使用 pre 去串联

当 cur 遍历完，cur 更新为 dummy.next，也就是下一行的头，这样就完成向下一行的变化。

```java
class Solution {
    public Node connect(Node root) {
        // 将每一行看成一个链表进行处理
        if(root == null) return root;
        //cur 我们可以把它看做是每一层的链表
        Node cur = root;
        while(cur != null){
            // 虚拟头节点
            Node dummy = new Node(-1);
            //pre 表示访下一层节点的前一个节点
            Node pre = dummy;
             while (cur != null) {
                if (cur.left != null) {
                    // 如果当前层的左子节点不为空，就下一层的虚拟头节点指向它
                    pre.next = cur.left;
                    // 然后再更新下一层的指针
                    pre = pre.next;
                }
                //同理参照左子树
                if (cur.right != null) {
                    pre.next = cur.right;
                    pre = pre.next;
                }
                //继续访问这一行的下一个节点
                cur = cur.next;
             }
            //把下一层串联成一个链表之后，让他赋值给 cur，
            //后续继续循环，直到 cur 为空为止
            cur = dummy.next;
        }
         return root;
    }
}
```

**复杂度分析**

令 n 为二叉树节点个数。

- 时间复杂度：$O(n)$，每个节点最多出队和入队一次。
- 空间复杂度：$O(1)$，没有额外的空间
