---
title: Mavan工程搭建脚手架实战.md
date: 2024-11-27
tags: [Maven]
---


## 引入

Maven 环境的安装和Maven语法问题，我这里就不再赘述，网上有很多资料可以学习。

在学习 Maven 工程搭建脚手架的过程中，我有以下几个问题：
1. 脚手架的基础模板工程
2. Maven 是通过什么插件完成
3. 它是怎么知道我的工程名称叫dw2w，从而让工程目录、包名进行发生改动的。


## 创建模板项目

```shell
❯ tree .
.
|-- demo-app
|   |-- pom.xml
|   `-- src
|       |-- main
|       |   |-- java
|       |   |   `-- com
|       |   |       `-- doublew2w
|       |   |           `-- Application.java
|       |   `-- resources
|       |       `-- application.yml
|       `-- test
|           `-- java
|-- demo-domain
|   |-- pom.xml
|   `-- src
|       |-- main
|       |   |-- java
|       |   |   `-- com
|       |   |       `-- doublew2w
|       |   |           `-- App.java
|       |   `-- resources
|       `-- test
|           `-- java
|-- demo-trigger
|   |-- pom.xml
|   `-- src
|       |-- main
|       |   |-- java
|       |   `-- resources
|       `-- test
|           `-- java
`-- pom.xml
```



![image-20241127211752474](https://doublew2w-note-resource.oss-cn-hangzhou.aliyuncs.com/img/image-20241127211752474.png)



在根目录的 pom.xml 文件中引入 `maven-archetype-plugin` 插件

```xml
<plugins>
  <plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-archetype-plugin</artifactId>
    <version>3.2.1</version>
    <executions>
      <execution>
        <goals>
          <goal>create-from-project</goal>
        </goals>
      </execution>
    </executions>
    <configuration>
      <encoding>${project.build.sourceEncoding}</encoding>
    </configuration>
  </plugin>
</plugins>
```

当我们执行命令 `mvn archetype:create-from-project` ,就会在 `target` 目录看到跟我们一模一样的项目目录。

 ![image-20241127212149416](https://doublew2w-note-resource.oss-cn-hangzhou.aliyuncs.com/img/image-20241127212149416.png)

安装到本地仓库

```shell
cd target/generated-sources/archetype
mvn intall
```



在本地仓库的根目录生成 archetype-catalog.xml 文件（骨架配置文件）

```shell
mvn archetype:crawl
```



## 添加 idea

根据pom文件的 GAV 来添加,这个信息，在你创建模板工程时就可以知道，你也可以到本地仓库查看。

```xml
  <groupId>org.example</groupId>
  <artifactId>multi-part-archetype-demo-archetype</artifactId>
  <version>1.0-SNAPSHOT</version>
  <packaging>maven-archetype</packaging>
```

![image-20241127213213107](https://doublew2w-note-resource.oss-cn-hangzhou.aliyuncs.com/img/image-20241127213213107.png)



你可以根据 `GroupId`、`ArtifactId`、`Version` 或者 本地目录 `Catalog` 来添加

![image-20241127213258470](https://doublew2w-note-resource.oss-cn-hangzhou.aliyuncs.com/img/image-20241127213258470.png)



添加以后，就能看到我们添加的模板工程

![image-20241127213413653](https://doublew2w-note-resource.oss-cn-hangzhou.aliyuncs.com/img/image-20241127213413653.png)



## 自定义模板变量

参考官网的配置 [archetype.properties文件](https://maven.apache.org/archetype/maven-archetype-plugin/create-from-project-mojo.html#propertyFile)

```properties
package=com.doublew2w
groupId=com.doublew2w
artifactId=basic
version=0.1-SNAPSHOT
excludePatterns=**/.idea/**,**/*.iml
archetype.languages=java
archetype.filteredExtensions=java,yml,xml,properties
# Custom Properties
appName=XiaoMing
applicationName=XiaoHong
```



当我们在执行 `mvn archetype:create-from-project` 就会发现生成的目录有发生变化

![image-20241127215719048](https://doublew2w-note-resource.oss-cn-hangzhou.aliyuncs.com/img/image-20241127215719048.png)



为了让自定义的变量起作用，我们得添加变量名，同时这个功能也可以用在改目录名字上

![image-20241127220659386](https://doublew2w-note-resource.oss-cn-hangzhou.aliyuncs.com/img/image-20241127220659386.png)



然后修改对应的 `archetype-metadata.xml` 文件

```xml
<?xml version="1.0" encoding="UTF-8"?>
<archetype-descriptor xsi:schemaLocation="https://maven.apache.org/plugins/maven-archetype-plugin/archetype-descriptor/1.1.0 http://maven.apache.org/xsd/archetype-descriptor-1.1.0.xsd" name="multi-part-archetype-demo"
                      xmlns="https://maven.apache.org/plugins/maven-archetype-plugin/archetype-descriptor/1.1.0"
                      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <requiredProperties>
    <requiredProperty key="appName">
      <defaultValue>XiaoMing</defaultValue>
    </requiredProperty>
    <requiredProperty key="applicationName">
      <defaultValue>XiaoHong</defaultValue>
    </requiredProperty>
  </requiredProperties>
  <modules>
    <module id="${rootArtifactId}-demo-app" dir="__rootArtifactId__-demo-app" name="${rootArtifactId}-demo-app">
      <fileSets>
        <fileSet filtered="true" packaged="true" encoding="UTF-8">
          <directory>src/main/java</directory>
          <includes>
            <include>**/*.java</include>
          </includes>
        </fileSet>
        <fileSet encoding="UTF-8">
          <directory>src/main/resources</directory>
          <includes>
            <include>**/*.yml</include>
          </includes>
        </fileSet>
      </fileSets>
    </module>
    <module id="${rootArtifactId}-demo-domain" dir="__rootArtifactId__-demo-domain" name="${rootArtifactId}-demo-domain">
      <fileSets>
        <fileSet filtered="true" packaged="true" encoding="UTF-8">
          <directory>src/main/java</directory>
          <includes>
            <include>**/*.java</include>
          </includes>
        </fileSet>
      </fileSets>
    </module>
    <module id="${rootArtifactId}-demo-trigger" dir="__rootArtifactId__-demo-trigger" name="${rootArtifactId}-demo-trigger" />
  </modules>
</archetype-descriptor>

```



当我们在重新添加到idea时，就会发现有可选用的属性

![image-20241127221142758](https://doublew2w-note-resource.oss-cn-hangzhou.aliyuncs.com/img/image-20241127221142758.png)



建立成功以后，就发现脚手架已经成功

![image-20241127221313528](https://doublew2w-note-resource.oss-cn-hangzhou.aliyuncs.com/img/image-20241127221313528.png)



## 补充内容

| Variable                 | Meaning                                                                                                                               |   |
|--------------------------|---------------------------------------------------------------------------------------------------------------------------------------|---|
| `_rootArtifactId__`      | 做文件夹名替换用，例如`__rootArtifactId__-dao`, 占位符来动态获取父工程的 ArtifactId                                                   |   |
| `${rootArtifactId}`      | 建立项目时需要设置的 rootArtifactId                                                                                                   |   |
| `${artifactId}`          | 如果您的项目由一个模块组成，则此变量的值将与 ${rootArtifactId} 相同，但如果项目包含多个模块，则此变量将由每个模块文件夹中的模块名替换 |   |
| `${package}`             | 用户为项目提供的包                                                                                                                    |   |
| `${packageInPathFormat}` | 与${package}变量的值相同，但将“.”替换为字符“/”，例如：，对于包com.foo.bar，此变量为com/foo/bar，可以解决比如配置文件中需要 `/` 的问题 |   |
| `${groupId}`             | 为项目提供的groupid                                                                                                                   |   |
| `${version}`             | 版本号                                                                                                                                |   |

我们可以在想要替换的地方设置模板变量，但真正的模板变量的值是来自用户输入的，比如建立项目时需要提供的信息。路径中的参数是双下划线`__参数名__`，文件内部的参数是`${参数名}`



```xml
  <requiredProperties>
    <requiredProperty key="appName">
      <defaultValue>XiaoMing</defaultValue>
    </requiredProperty>
    <requiredProperty key="applicationName">
      <defaultValue>XiaoHong</defaultValue>
    </requiredProperty>
  </requiredProperties>
```

这部分在 `archetype-metadata.xml` 内容就是来定义自定义参数的。



## 参考资料

https://blog.csdn.net/u011731544/article/details/132322425

https://bugstack.cn/md/road-map/ddd-archetype.html

https://bugstack.cn/md/road-map/ddd-archetype-maven.html

https://maven.apache.org/archetype/maven-archetype-plugin/
