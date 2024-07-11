---
title: 1047-删除字符串中的所有相邻重复项
date: 2024-07-01
tag: 字符串
category: LeetCode
---



## 题目地址(1047. 删除字符串中的所有相邻重复项 - 力扣（LeetCode）)

https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/description/

## 题目描述

<p> 给出由小写字母组成的字符串&nbsp; <code> S </code>，<strong> 重复项删除操作 </strong> 会选择两个相邻且相同的字母，并删除它们。</p>

<p> 在 S 上反复执行重复项删除操作，直到无法继续删除。</p>

<p> 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。</p>

<p>&nbsp; </p>

<p> <strong> 示例：</strong> </p>

<pre> <strong> 输入：</strong> "abbaca"
<strong> 输出：</strong> "ca"
<strong> 解释：</strong>
例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
</pre>

<p>&nbsp; </p>

<p> <strong> 提示：</strong> </p>

<ol>
	<li> <code> 1 &lt;= S.length &lt;= 20000 </code> </li>
	<li> <code> S </code> 仅由小写英文字母组成。</li>
</ol>


## 前置知识

- 字符串
- 栈
- 数组

## 思路 1：双端队列

当字符串中同时有多组相邻重复项时，我们无论是先删除哪一个，都不会影响最终的结果。

遍历字符串，使用一个集合（数字或者队列）存储遍历的情况。

- 当前字符与队列尾部相同时，说明此时是重复项已经出现，此时将队列尾部元素删除
- 当前字符与队列尾部不同时，说明不是重复项，放进队列中

### 关键点

-  利用栈的思想来判断匹配情况

### 代码

- 语言支持：Java

Java Code:

```java
class Solution {
    public String removeDuplicates(String s) {
        if (s == null || s.length() == 0) {
            return s;
        }
        Deque<Character> queue = new ArrayDeque<>();
        for (char c : s.toCharArray()) {
            if (queue.isEmpty() || c != queue.peekLast()) {
                queue.offer(c);
            } else {
                queue.pollLast();
            }
        }

        StringBuilder sb = new StringBuilder();
        while (!queue.isEmpty()) {
            sb.append(queue.poll());
        }
        return sb.toString();
    }
}
```

**复杂度分析**

令 n 为字符串长度。

- 时间复杂度：$O(n)$，我们只需要遍历该字符串一次。
- 空间复杂度：$O(n)$，需要创建一个队列来存储情况，最坏的情况是字符串中不存在相邻重复项。

## 思路 2：数组

把数组当成一个队列使用，使用两个指针来判断遍历情况

- `hh <= tt` 时说明，字符串不为空。
- 如果数组尾元素 `d[tt] == c` ，说明 当前是相邻重复项，修改 tt 指向上一个元素
- 否则就将元素放进数组

### 关键点



### 代码

```java
class Solution {
    public String removeDuplicates(String s) {
        if (s == null || s.length() == 0) {
            return s;
        }
        char[] d = new char[s.length()];
        // 双指针，tt 指向最后的数组末尾指针
        int hh = 0, tt = -1;
        for (char c : s.toCharArray()) {
            if (hh <= tt && d[tt] == c) {
                tt--;
            } else {
                // 数组为空时，添加元素
                // 当前字符与末尾元素不相同时，添加元素
                d[++tt] = c;
            }
        }
       return new String(d, 0, tt + 1);
    }
}
```

**复杂度分析**

令 n 为字符串长度。

- 时间复杂度：$O(n)$，我们只需要遍历该字符串一次。
- 空间复杂度：$O(n)$，需要创建一个长度为 n 的数组来存储情况，最坏的情况是字符串中不存在相邻重复项。
