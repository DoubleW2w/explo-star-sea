---
title: 203-移除链表元素
date: 2024-06-26
tag: 链表
category: LeetCode
---



## 题目地址(203. 移除链表元素 - 力扣（LeetCode）)

https://leetcode.cn/problems/remove-linked-list-elements/description/

## 题目描述

给你一个链表的头节点 <code> head </code> 和一个整数 <code> val </code> ，请你删除链表中所有满足 <code> Node.val == val </code> 的节点，并返回 <strong> 新的头节点 </strong> 。
<p>&nbsp; </p>

<p> <strong> 示例 1：</strong> </p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/06/removelinked-list.jpg" style="width: 500px; height: 142px;">

<pre> <strong> 输入：</strong> head = [1,2,6,3,4,5,6], val = 6
<strong> 输出：</strong> [1,2,3,4,5]
</pre>

<p> <strong> 示例 2：</strong> </p>

<pre> <strong> 输入：</strong> head = [], val = 1
<strong> 输出：</strong> []
</pre>

<p> <strong> 示例 3：</strong> </p>

<pre> <strong> 输入：</strong> head = [7,7,7,7], val = 7
<strong> 输出：</strong> []
</pre>

<p>&nbsp; </p>

<p> <strong> 提示：</strong> </p>

<ul>
	<li> 列表中的节点数目在范围 <code> [0, 10 <sup> 4 </sup>] </code> 内 </li>
	<li> <code> 1 &lt;= Node.val &lt;= 50 </code> </li>
	<li> <code> 0 &lt;= val &lt;= 50 </code> </li>
</ul>
## 前置知识

- 链表
- 删除节点
- 虚拟节点

## 思路1:直接删除

- 先判断头结点的情况 $head != null \space \&\& \space head.val != val$
- 从当前节点的后驱节点进行遍历

### 关键点

-  头结点要特殊处理
-  $cur.next = cur.next.next$

### 代码

- 语言支持：Java

Java Code:

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode() {}
 * ListNode(int val) { this.val = val; }
 * ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeElements(ListNode head, int val) {
        // 删除值相同的头结点后，可能新的头结点也值相等，用循环解决
        while (head != null && head.val == val) {
            head = head.next;
        }
        if (head == null)
            return head;
        ListNode prev = head;
        // 确保当前结点后还有结点
        while (prev.next != null) {
            if (prev.next.val == val) {
                prev.next = prev.next.next;
            } else {
                prev = prev.next;
            }
        }
        return head;
    }
}
```

**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$



## 思路2：虚拟头节点

### 关键点

在虚拟头节点下，要删除一个节点，删除方式一样。最后返回的时候是 $dummyNode.next$

### 代码

```java

/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode() {}
 * ListNode(int val) { this.val = val; }
 * ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeElements(ListNode head, int val) {
        //创建一个虚拟头结点
        ListNode dummyNode=new ListNode(val-1);
        dummyNode.next=head;
        ListNode prev=dummyNode;
        //确保当前结点后还有结点
        while(prev.next!=null){
            if(prev.next.val==val){
                prev.next=prev.next.next;
            }else{
                prev=prev.next;
            }
        }
        return dummyNode.next;
    }
}
```

**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$
