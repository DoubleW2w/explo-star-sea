---
title: 225-用队列实现栈
date: 2024-07-01
tag: [列队、栈]
---

## 题目地址(225. 用队列实现栈 - 力扣（LeetCode）)

https://leetcode.cn/problems/implement-stack-using-queues/description/

## 题目描述

<p> 请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（<code> push </code>、<code> top </code>、<code> pop </code> 和 <code> empty </code>）。</p>

<p> 实现 <code> MyStack </code> 类：</p>

<ul>
	<li> <code> void push(int x)</code> 将元素 x 压入栈顶。</li>
	<li> <code> int pop()</code> 移除并返回栈顶元素。</li>
	<li> <code> int top()</code> 返回栈顶元素。</li>
	<li> <code> boolean empty()</code> 如果栈是空的，返回 <code> true </code> ；否则，返回 <code> false </code> 。</li>
</ul>

<p>&nbsp; </p>

<p> <strong> 注意：</strong> </p>

<ul>
	<li> 你只能使用队列的标准操作 —— 也就是&nbsp; <code> push to back </code>、<code> peek/pop from front </code>、<code> size </code> 和&nbsp; <code> is empty </code>&nbsp; 这些操作。</li>
	<li> 你所使用的语言也许不支持队列。&nbsp; 你可以使用 list （列表）或者 deque（双端队列）来模拟一个队列&nbsp;, 只要是标准的队列操作即可。</li>
</ul>

<p>&nbsp; </p>

<p> <strong> 示例：</strong> </p>

<pre> <strong> 输入：</strong>
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
<strong> 输出：</strong>
[null, null, null, 2, 2, false]

<strong> 解释：</strong>
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // 返回 2
myStack.pop(); // 返回 2
myStack.empty(); // 返回 False
</pre>

<p>&nbsp; </p>

<p> <strong> 提示：</strong> </p>

<ul>
	<li> <code> 1 &lt;= x &lt;= 9 </code> </li>
	<li> 最多调用 <code> 100 </code> 次 <code> push </code>、<code> pop </code>、<code> top </code> 和 <code> empty </code> </li>
	<li> 每次调用 <code> pop </code> 和 <code> top </code> 都保证栈不为空 </li>
</ul>

<p>&nbsp; </p>

<p> <strong> 进阶：</strong> 你能否仅用一个队列来实现栈。</p>


## 前置知识

- 栈
- 队列

## 思路

队列是先进先出

栈是后进先出。

使用两个队列，一个当成主要的，一个辅助备份。



@slidestart solarized

![](https://doublew2w-note-resource.oss-cn-hangzhou.aliyuncs.com/img/202407011608673.png)

---



![](https://doublew2w-note-resource.oss-cn-hangzhou.aliyuncs.com/img/202407011608299.png)

---

![](https://doublew2w-note-resource.oss-cn-hangzhou.aliyuncs.com/img/202407011618551.png)

---

![](https://doublew2w-note-resource.oss-cn-hangzhou.aliyuncs.com/img/202407011617728.png)

---

![](https://doublew2w-note-resource.oss-cn-hangzhou.aliyuncs.com/img/202407011617328.png)

@slideend

## 代码

- 语言支持：Java

Java Code:

```java

class MyStack {
    //q1 作为主要的队列，其元素排列顺序和出栈顺序相同
    Queue<Integer> q1 = new ArrayDeque<>();
    //q2 仅作为临时放置
    Queue<Integer> q2 = new ArrayDeque<>();

    public MyStack() {

    }
    //在加入元素时先将 q1 中的元素依次出栈压入 q2，然后将新加入的元素压入 q1，再将 q2 中的元素依次出栈压入 q1
    public void push(int x) {
        while (q1.size() > 0) {
            q2.offer(q1.poll());
        }
        q1.offer(x);
        while (q2.size() > 0) {
            q1.offer(q2.poll());
        }
    }

    public int pop() {
        return q1.poll();
    }

    public int top() {
        return q1.peek();
    }

    public boolean empty() {
        return q1.isEmpty();
    }
}

```


**复杂度分析**

令 n 为栈内元素个数。

- 时间复杂度：$O(n)$, push 操作为 2n+1 个，pop 操作为 $O(1)$, top 操作为 $O(1)$，empty 操作为 $O(1)$
- 空间复杂度：$O(n)$, 其中 n 是栈内的元素个数。需要使用两个队列存储栈内的元素。

