---
title: 232-用栈实现队列
date: 2024-07-01
tag: 栈
category: LeetCode
---

## 题目地址(232. 用栈实现队列 - 力扣（LeetCode）)

https://leetcode.cn/problems/implement-queue-using-stacks/description/

## 题目描述

<p> 请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（<code> push </code>、<code> pop </code>、<code> peek </code>、<code> empty </code>）：</p>

<p> 实现 <code> MyQueue </code> 类：</p>

<ul>
	<li> <code> void push(int x)</code> 将元素 x 推到队列的末尾 </li>
	<li> <code> int pop()</code> 从队列的开头移除并返回元素 </li>
	<li> <code> int peek()</code> 返回队列开头的元素 </li>
	<li> <code> boolean empty()</code> 如果队列为空，返回 <code> true </code> ；否则，返回 <code> false </code> </li>
</ul>

<p> <strong> 说明：</strong> </p>

<ul>
	<li> 你 <strong> 只能 </strong> 使用标准的栈操作 —— 也就是只有&nbsp; <code> push to top </code>,&nbsp; <code> peek/pop from top </code>,&nbsp; <code> size </code>, 和&nbsp; <code> is empty </code>&nbsp; 操作是合法的。</li>
	<li> 你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。</li>
</ul>

<p>&nbsp; </p>

<p> <strong> 示例 1：</strong> </p>

<pre> <strong> 输入：</strong>
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
<strong> 输出：</strong>
[null, null, null, 1, 1, false]

<strong> 解释：</strong>
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
</pre>

<ul>
</ul>

<p>&nbsp; </p>

<p> <strong> 提示：</strong> </p>

<ul>
	<li> <code> 1 &lt;= x &lt;= 9 </code> </li>
	<li> 最多调用 <code> 100 </code> 次 <code> push </code>、<code> pop </code>、<code> peek </code> 和 <code> empty </code> </li>
	<li> 假设所有操作都是有效的 （例如，一个空的队列不会调用 <code> pop </code> 或者 <code> peek </code> 操作）</li>
</ul>

<p>&nbsp; </p>

<p> <strong> 进阶：</strong> </p>

<ul>
	<li> 你能否实现每个操作均摊时间复杂度为 <code> O(1)</code> 的队列？换句话说，执行 <code> n </code> 个操作的总时间复杂度为 <code> O(n)</code> ，即使其中一个操作可能花费较长时间。</li>
</ul>


## 前置知识

- 队列

## 思路

用一个队列存放 push 元素，用一个队列存放 pop 元素。在 `pop` 或 `peek` 时，需要将元素从 in 放进 out 中进行。

## 代码

- 语言支持：Java

Java Code:

```java

class MyQueue {
    Deque<Integer> out, in;

    public MyQueue() {
        in = new ArrayDeque<Integer>();
        out = new ArrayDeque<Integer>();
    }

    public void push(int x) {
        in.push(x);
    }

    public int pop() {
        if (out.isEmpty()) {
            in2out();
        }
        return out.pop();
    }

    public int peek() {
        if (out.isEmpty()) {
            in2out();
        }
        return out.peek();
    }

    public boolean empty() {
        return in.isEmpty() && out.isEmpty();
    }

    private void in2out() {
        while (!in.isEmpty()) {
            out.push(in.pop());
        }
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */

```


**复杂度分析**

令 n 为操作数。

- 时间复杂度：$O(1)$, `push` 和 `empty` 操作都是 $O(1)$, `pop` 和 `peek` 为均摊 $O(1)$。
- 空间复杂度：$O(n)$，对于有 n 次 `push` 操作的情况，队列中会有 n 个元素，故空间复杂度为 $O(n)$。

