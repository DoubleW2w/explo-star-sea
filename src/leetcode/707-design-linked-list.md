---
title: 707-设计链表
date: 2024-06-26
tag: [链表]
---



## 题目地址(707. 设计链表 - 力扣（LeetCode）)

https://leetcode.cn/problems/design-linked-list/description/

## 题目描述

<p> 你可以选择使用单链表或者双链表，设计并实现自己的链表。</p>

<p> 单链表中的节点应该具备两个属性：<code> val </code> 和 <code> next </code> 。<code> val </code> 是当前节点的值，<code> next </code> 是指向下一个节点的指针/引用。</p>

<p> 如果是双向链表，则还需要属性&nbsp; <code> prev </code>&nbsp; 以指示链表中的上一个节点。假设链表中的所有节点下标从 <strong> 0 </strong> 开始。</p>

<p> 实现 <code> MyLinkedList </code> 类：</p>

<ul>
	<li> <code> MyLinkedList()</code> 初始化 <code> MyLinkedList </code> 对象。</li>
	<li> <code> int get(int index)</code> 获取链表中下标为 <code> index </code> 的节点的值。如果下标无效，则返回 <code>-1 </code> 。</li>
	<li> <code> void addAtHead(int val)</code> 将一个值为 <code> val </code> 的节点插入到链表中第一个元素之前。在插入完成后，新节点会成为链表的第一个节点。</li>
	<li> <code> void addAtTail(int val)</code> 将一个值为 <code> val </code> 的节点追加到链表中作为链表的最后一个元素。</li>
	<li> <code> void addAtIndex(int index, int val)</code> 将一个值为 <code> val </code> 的节点插入到链表中下标为 <code> index </code> 的节点之前。如果 <code> index </code> 等于链表的长度，那么该节点会被追加到链表的末尾。如果 <code> index </code> 比长度更大，该节点将 <strong> 不会插入 </strong> 到链表中。</li>
	<li> <code> void deleteAtIndex(int index)</code> 如果下标有效，则删除链表中下标为 <code> index </code> 的节点。</li>
</ul>

<p>&nbsp; </p>

<p> <strong class="example"> 示例：</strong> </p>

<pre> <strong> 输入 </strong>
["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
[[], [1], [3], [1, 2], [1], [1], [1]]
<strong> 输出 </strong>
[null, null, null, null, 2, null, 3]
<strong> 解释 </strong>
MyLinkedList myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);    // 链表变为 1-&gt; 2-&gt; 3
myLinkedList.get(1);              // 返回 2
myLinkedList.deleteAtIndex(1);    // 现在，链表变为 1-&gt; 3
myLinkedList.get(1);              // 返回 3
</pre>

<p>&nbsp; </p>

<p> <strong> 提示：</strong> </p>

<ul>
	<li> <code> 0 &lt;= index, val &lt;= 1000 </code> </li>
	<li> 请不要使用内置的 LinkedList 库。</li>
	<li> 调用 <code> get </code>、<code> addAtHead </code>、<code> addAtTail </code>、<code> addAtIndex </code> 和 <code> deleteAtIndex </code> 的次数不超过 <code> 2000 </code> 。</li>
</ul>


## 前置知识

- 链表结果
- 链表基本操作

## 思路: 单链表实现

- 内部定义一个 Node 对象当成链表中的节点
- 由于需要根据索引来查找节点，因此提供查询节点的方法 `getNode()`
- 

### 关键点

-  插入/删除节点，需要同时更新 size

### 代码

- 语言支持：Java

Java Code:

```java

class MyLinkedList {
    // 单向链表
    class Node {
        int val;
        Node next;

        public Node(int val) {
            this.val = val;
        }
    }

    Node _head = new Node(-1);
    int size = 0;

    public MyLinkedList() {
        _head.next = null;
    }

    public int get(int index) {
        Node ret = getNode(index);
        return ret == null ? -1 : ret.val;
    }

    public void addAtHead(int val) {
        Node newNode = new Node(val);
        newNode.next = _head.next;
        _head.next = newNode;
        size++;
    }

    public void addAtTail(int val) {
        Node newNode = new Node(val);
        newNode.next = null;
        if (size == 0) {
            _head.next = newNode;
        } else {
            // 头节点
            Node head = _head.next;
            // 遍历找到最后一个节点
            while (head.next != null) {
                head = head.next;
            }
            // 最后一个节点的后驱节点是新节点
            head.next = newNode;
        }
        size++;
    }

    public void addAtIndex(int index, int val) {
        if (index > size) {
            return;
        }
        if (index == size) {
            addAtTail(val);
            return;
        }
        Node newNode = new Node(val);
        Node indexNode = getNode(index - 1);
        newNode.next = indexNode.next;
        indexNode.next = newNode;
        size++;
    }

    public void deleteAtIndex(int index) {
        if (index >= size) {
            return;
        }
        if (index == 0) {
            _head.next = _head.next.next;
        } else {
            Node indexPreNode = getNode(index - 1);
            indexPreNode.next = indexPreNode.next.next;
        }
        size--;
    }

    Node getNode(int index) {
        if (index >= size) {
            return null;
        }
        Node head = _head;
        for (int i = 0; i <= index; i++) {
            head = head.next;
        }
        return head;
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList();
 * int param_1 = obj.get(index);
 * obj.addAtHead(val);
 * obj.addAtTail(val);
 * obj.addAtIndex(index, val);
 * obj.deleteAtIndex(index);
 */

```


**复杂度分析**

令 n 为链表长度。

- 时间复杂度：初始化消耗 $O(1)$，get 消耗 $O(index)$，addAtHead 消耗 $O(1)$，addAtTail 消耗 $O(n)$
- 空间复杂度：所有函数的单次调用空间复杂度均为 $O(1)$，总体空间复杂度为 $O(n)$，其中 n 为 addAtHead，addAtTail 和 addAtIndex 调用次数之和。

## 思路：双链表实现

实现双向链表，即每个节点要存储本身的值，「后继节点」和「前驱节点」。除此之外，需要一个「哨兵节点」作为头节点 head 和一个「哨兵节点」作为尾节点 tail。

### 关键点

- 在遍历过程过程，从前往后遍历（当索引小于链表长度的一半时）还是从后往前遍历来优化查找效率。
- 遍历时，每移动一次就减小 index 的值，当 index 为 0 时，说明找到了目标节点并返回。如果遍历结束没有找到，则返回 null。

### 代码

```java
class MyLinkedList {
    class Node {
        Node prev, next;
        int val;
        Node (int _val) {
            val = _val;
        }
    }
    Node head = new Node(-1), tail = new Node(-1);
    int size = 0;
    public MyLinkedList() {
        head.next = tail; tail.prev = head;
    }

    public int get(int index) {
        Node node = getNode(index);
        return node == null ? -1 : node.val;
    }

    public void addAtHead(int val) {
        Node node = new Node(val);        
        node.next = head.next; node.prev = head;
        head.next.prev = node; head.next = node;
        size++;
    }

    public void addAtTail(int val) {
        Node node = new Node(val);
        node.prev = tail.prev; node.next = tail;
        tail.prev.next = node; tail.prev = node;
        size++;
    }
    public void addAtIndex(int index, int val) {
        if (index > sz) return ;
        if (index <= 0) {
            addAtHead(val); 
        } else if (index == sz) {
            addAtTail(val);
        } else {
            Node node = new Node(val), cur = getNode(index);
            node.next = cur; node.prev = cur.prev;
            cur.prev.next = node; cur.prev = node;
            size++;
        }
    }
    public void deleteAtIndex(int index) {
        Node cur = getNode(index);
        if (cur == null) return ;
        cur.next.prev = cur.prev;
        cur.prev.next = cur.next;
        size--;
    }

    Node getNode(int index) {
        boolean isLeft = index < size / 2;
        if (!isLeft) index = size - index - 1;
        Node cur = isLeft ? head.next : tail.prev;
        for (; cur != tail && cur != head; cur = isLeft ? cur.next : cur.prev) {
            if (index-- == 0) return cur;
        }
        return null;
    }
}

```

**复杂度分析**

令 n 为链表长度。

- 时间复杂度：初始化消耗 $O(1)$，get 消耗 $O(index)$，addAtHead 消耗 $O(1)$，addAtTail 消耗 $O(1)$，addAtIndex 消耗 $O(index)$。

- 空间复杂度：所有函数单次调用的空间复杂度均为 $O(1)$，总体空间复杂度为 $O(n)$，其中 n 为 addAtHead，addAtTail 和 addAtIndex 调用次数之和。

