---
title: 151-反转字符串中的单词
date: 2024-06-30
tag: [字符串]
---

## 题目地址(151. 反转字符串中的单词 - 力扣（LeetCode）)

https://leetcode.cn/problems/reverse-words-in-a-string/submissions/

## 题目描述

<p> 给你一个字符串 <code> s </code> ，请你反转字符串中 <strong> 单词 </strong> 的顺序。</p>

<p> <strong> 单词 </strong> 是由非空格字符组成的字符串。<code> s </code> 中使用至少一个空格将字符串中的 <strong> 单词 </strong> 分隔开。</p>

<p> 返回 <strong> 单词 </strong> 顺序颠倒且 <strong> 单词 </strong> 之间用单个空格连接的结果字符串。</p>

<p> <strong> 注意：</strong> 输入字符串 <code> s </code> 中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。</p>

<p>&nbsp; </p>

<p> <strong> 示例 1：</strong> </p>

<pre> <strong> 输入：</strong> s = "<code> the sky is blue </code>"
<strong> 输出：</strong> "<code> blue is sky the </code>"
</pre>

<p> <strong> 示例 2：</strong> </p>

<pre> <strong> 输入：</strong> s = " &nbsp; hello world &nbsp;"
<strong> 输出：</strong> "world hello"
<strong> 解释：</strong> 反转后的字符串中不能存在前导空格和尾随空格。
</pre>

<p> <strong> 示例 3：</strong> </p>

<pre> <strong> 输入：</strong> s = "a good &nbsp; example"
<strong> 输出：</strong> "example good a"
<strong> 解释：</strong> 如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个。
</pre>

<p>&nbsp; </p>

<p> <strong> 提示：</strong> </p>

<ul>
	<li> <code> 1 &lt;= s.length &lt;= 10 <sup> 4 </sup> </code> </li>
	<li> <code> s </code> 包含英文大小写字母、数字和空格 <code>' '</code> </li>
	<li> <code> s </code> 中 <strong> 至少存在一个 </strong> 单词 </li>
</ul>

<ul>
</ul>

<p>&nbsp; </p>

<p> <strong> 进阶：</strong> 如果字符串在你使用的编程语言中是一种可变数据类型，请尝试使用&nbsp; <code> O(1)</code> 额外空间复杂度的 <strong> 原地 </strong> 解法。</p>


## 前置知识

- 字符串
- 双指针

## 思路 1：字符串 API

使用 `split()` ，以空格进行分割

使用 `reverse()` 倒排字符串列表

### 代码

Java Code

```java
class Solution {
    public String reverseWords(String s) {
        // 除去开头和末尾的空白字符
        s = s.trim();
        // 正则匹配连续的空白字符作为分隔符分割
        List<String> wordList = Arrays.asList(s.split("\\s+"));
        Collections.reverse(wordList);
        return String.join(" ", wordList);
    }
}
```

**复杂度分析**

令 n 为字符串长度。

- 时间复杂度：$O(n)$，线性遍历字符串。
- 空间复杂度：$O(n)$，List 中的元素总长度，占用 $O(N)$ 大小的额外空间。



## 思路 2：倒序遍历+双指针

- 倒序遍历字符串 s，使用双指针 i，j 指向单词的范围。
- 将单词添加到结果中
- 并将双指针指向新的单词，最后将所有单词拼接起来。



### 代码

Java Code:

```java

class Solution {
    public String reverseWords(String s) {
        s = s.trim();                                    // 删除首尾空格
        int j = s.length() - 1, i = j;
        StringBuilder res = new StringBuilder();
        while (i >= 0) {
            while (i >= 0 && s.charAt(i) != ' ') i--;     // 搜索首个空格
            res.append(s.substring(i + 1, j + 1) + " "); // 添加单词
            while (i >= 0 && s.charAt(i) == ' ') i--;     // 跳过单词间空格
            j = i;                                       // j 指向下个单词的尾字符
        }
        return res.toString().trim();                    // 转化为字符串并返回
    }
}


```

**复杂度分析**

令 n 为字符串长度。

- 时间复杂度：$O(n)$，线性遍历字符串。
- 空间复杂度：$O(n)$，StringBuilder(Java) 中的字符串总长度，占用 $O(N)$ 大小的额外空间。



## 思路3：手写字符串API

去除空格 `trimSpaces`

先翻转整个字符串 `reverse`

再翻转每个单词 `reverseEachWord`

### 代码

```java
class Solution {
    public String reverseWords(String s) {
        StringBuilder sb = trimSpaces(s);

        // 翻转字符串
        reverse(sb, 0, sb.length() - 1);

        // 翻转每个单词
        reverseEachWord(sb);

        return sb.toString();

    }

    // 去掉多余空格
    public StringBuilder trimSpaces(String s) {
        int left = 0, right = s.length() - 1;
        // 去掉字符串开头的空白字符
        while (left <= right && s.charAt(left) == ' ') {
            ++left;
        }

        // 去掉字符串末尾的空白字符
        while (left <= right && s.charAt(right) == ' ') {
            --right;
        }

        // 将字符串间多余的空白字符去除
        StringBuilder sb = new StringBuilder();
        while (left <= right) {
            char c = s.charAt(left);

            if (c != ' ') {
                sb.append(c);
            } else if (sb.charAt(sb.length() - 1) != ' ') {
                sb.append(c);
            }

            ++left;
        }
        return sb;
    }

    // 反转字符串
    public void reverse(StringBuilder sb, int left, int right) {
        while (left < right) {
            char tmp = sb.charAt(left);
            sb.setCharAt(left++, sb.charAt(right));
            sb.setCharAt(right--, tmp);
        }
    }

    // 翻转每一个单词
    public void reverseEachWord(StringBuilder sb) {
        int n = sb.length();
        int start = 0, end = 0;

        while (start < n) {
            // 循环至单词的末尾
            while (end < n && sb.charAt(end) != ' ') {
                ++end;
            }
            // 翻转单词
            reverse(sb, start, end - 1);
            // 更新start，去找下一个单词
            start = end + 1;
            ++end;
        }
    }

}
```

**复杂度分析**

- 时间复杂度：$O(n)$，其中 n 为输入字符串的长度。

- 空间复杂度：Java 和 Python 的方法需要 $O(n)$ 的空间来存储字符串

