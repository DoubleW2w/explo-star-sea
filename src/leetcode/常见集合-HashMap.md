---
title: 常见集合-HashMap
date: 2024-07-15
category: Collection
tag: [Java,HashMap]
---

## 了解 HashMap

哈希表的存在是为了解决能通过 O(1)时间复杂度直接索引到指定元素。

一个哈希表（hash table、hash map）是一种实现关联数组的抽象数据结构，该结构将键通过哈希计算映射到值。

- 键 -> 哈希计算 -> 位置
- 位置 -> 值

> HashMap 的实现原理





> HashMap 的 jdk1.7 和 jdk1.8 有什么区别



## HashCode 为什么使用 31 作为乘数？

```java
public int hashCode() {
    int h = hash;
    if (h == 0 && value.length > 0) {
        char val[] = value;

        for (int i = 0; i < value.length; i++) {
            h = 31 * h + val[i];
        }
        hash = h;
    }
    return h;
}
```

循环公式为：$s[0]*31^{(n-1)} + s[1]*31^{(n-2)} + ... + s[n-1]$

1. 31 是一个奇质数(不能被2整除的最小素数），如果选择偶数会导致乘积运算时数据溢出。

2. 在二进制中，$2^5$是32，那么 $31 * i == (i << 5) - i$，乘积运算可以使用位移提升性能。

3. 可以通过实践。

   1. 准备一个单词表，定义一个不同参数的 hashcode 函数

   ```java
   public static Integer hashCode(String str, Integer multiplier) {
       int hash = 0;
       for (int i = 0; i < str.length(); i++) {
           hash = multiplier * hash + str.charAt(i);
       }
       return hash;
   }
   ```

   2. 定义一个函数，计算所有不同参数下的所有hashcode情况

   ```java
   public static List<RateInfo> collisionRateList(Set<String> strList, Integer... multipliers) {
       // 结果存放
       List<RateInfo> rateInfoList = new ArrayList<>();
       for (Integer multiplier : multipliers) {
           // 每个循环存在不同的参数
           List<Integer> hashCodeList = new ArrayList<>();
           for (String str : strList) {
               Integer hashCode = hashCode(str, multiplier);
               hashCodeList.add(hashCode);
           }
           // 计算当前参数下的hash碰撞概率
           rateInfoList.add(hashCollisionRate(multiplier, hashCodeList));
       }
       return rateInfoList;
   }
   ```

   3. 定义一个函数计算hash碰撞概率

   ```java
   /**
   * 计算Hash碰撞概率
   */
   private static RateInfo hashCollisionRate(Integer multiplier, List<Integer> hashCodeList) {
       int maxHash = hashCodeList.stream().max(Integer::compareTo).get();
       int minHash = hashCodeList.stream().min(Integer::compareTo).get();
   
       int collisionCount = (int) (hashCodeList.size() - hashCodeList.stream().distinct().count());
       double collisionRate = (collisionCount * 1.0) / hashCodeList.size();
   
       return new RateInfo(maxHash, minHash, multiplier, collisionCount, collisionRate);
   }
   ```

   4. 计算不同区域的碰撞情况

```java

public static Map<Integer, Integer> hashArea(List<Integer> hashCodeList) {
    Map<Integer, Integer> statistics = new LinkedHashMap<>();
    int start = 0;
    for (long i = 0x80000000; i <= 0x7fffffff; i += 67108864) {
        long min = i;
        long max = min + 67108864;
        // 筛选出每个格子里的哈希值数量
        int num = (int) hashCodeList.parallelStream().filter(x -> x >= min && x < max).count();
        statistics.put(start++, num);
    }
    return statistics;
}

public static Map<Integer, Integer> hashArea(Set<String> strList, Integer multiplier){
    List<Integer> hashCodeList = new ArrayList<>();
    for (String str : strList) {
        Integer hashCode = hashCode(str, multiplier);
        hashCodeList.add(hashCode);
    }
    return hashArea(hashCodeList);
}
```



## HashMap

扰动函数

初始化容量

负载因子

扩容方法

链表和红黑树

###  扰动函数

**使用扰动函数的目的是：让数据分配更加均匀**

```java
static final int hash(Object key) {
    int h;
    return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
}
```

**异或运算:**

- 当两个比较的位相同的时候，结果为 0。
- 当两个比较的位不相同的时候，结果为 1。

```txt
0 XOR 0 = 0
0 XOR 1 = 1
1 XOR 0 = 1
1 XOR 1 = 0
```

所以上面的代码是

- 计算哈希值 `key.hashCode()` 第一个值
- 右移16位，在左边进行填充0 第二个值
- 第一个值和第二个值进行异或运算——**混合了原哈希值中的高位和低位，加大随机性**



### 初始化容量

```java
public HashMap(int initialCapacity, float loadFactor) {
    //.. 省略
    this.loadFactor = loadFactor;
    this.threshold = tableSizeFor(initialCapacity);
}
```

- `threshold` 通过 `tableSizeFor()` 函数进行调整。目的就是找出**比初始值大，最小的2进制数值**。

```java
static final int tableSizeFor(int cap) {
    int n = cap - 1;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    // MAXIMUM_CAPACITY = 1 << 30
    return (n < 0) ? 1 : (n >= MAXIMUM_CAPACITY) ? MAXIMUM_CAPACITY : n + 1;
}
```

### 负载因子

负载因子决定了数据量多少了以后进行扩容。

```java
static final float DEFAULT_LOAD_FACTOR = 0.75f;
```

默认值 0.75 就是说当阀值容量占了3/4 时赶紧扩容，减少 Hash 碰撞。



### 扩容
