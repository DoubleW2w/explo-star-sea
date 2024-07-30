---
title: GitHub Action 入门
date: 2024-07-30
tag: GitHub Action
---



## 什么是 GitHub Action

Github Action 是一种自动化服务，它目的是给开发者提供在他们的代码库自动执行特定的工作流。你可以利用它自动化、自定义执行某一些工作流程，比如来构建和测试存储库的拉取请求或者将合并的拉取请求部署到生产环境中。

GitHub Actions 可以看作是一条条的工作流。每一条工作流按照你配置好的作业流程执行。

## GitHub Action 有什么？

### 工作流

工作流程是一个可配置的自动化过程，它包含一个或多个作业。

工作流程在存储库的 `.github/workflows` 目录中定义，存储库是可以存在多个工作流程，每个工作流程可以执行不同的任何集合。工作流程之间是可以相互引用的

### 事件

可以触发工作流程的特定活动。比如往存储库推送 [push] 内容时。

### 作业

工作流中在同一个运行器上执行的一组步骤。每一个步骤要么是「执行脚本」，要么是一个将要「执行的动作」。步骤是按照顺序执行，并且相互依赖。

作业之间是可以存在依赖关系的，当 A 作业依赖 B 作业时，A 作业就会等待 B 作业完成后，A 作业再运行。

### 操作

操作是用于 GitHub Actions 平台的自定义应用程序，它执行复杂但经常重复的任务。 使用操作可帮助减少在工作流程文件中编写的重复代码量。

### 运行器

触发工作流时运行工作流的服务器。每个运行器一次可以运行一个作业。GitHub 提供 `Ubuntu Linux`、`Microsoft Windows` 和 `macOS` 运行器来运行你的工作流程。

### 创建工作流程

1. `.github/workflows/` 目录下创建 `YAML` 工作流文件
2. 往里面添加代码，比如

```yaml
# 来自于官方文档

# 可选 - 工作流的名称，它将显示在 GitHub 存储库的 “Action” 选项卡中。
name: learn-github-actions

# 可选 - 工作流运行的名称，该名称将显示在存储库的“Action”选项卡上的工作流运行列表中。
run-name: ${{ github.actor }} is learning GitHub Actions
# 此工作流程的触发器，当有人push的时候就会触发
on: [push]
# 将 learn-github-actions 工作流中运行的所有作业组合在一起。
jobs:
  # 定义一个名为 check-bats-version 作业。
  check-bats-version:
    # 将作业配置为在最新版本的 Ubuntu Linux 运行器上运行。
    runs-on: ubuntu-latest
    # 将在 check-bats-version 作业中运行的所有步骤组合在一起。
    steps:
    	# uses 关键字指定此步骤将运行 actions/checkout 操作的 v3
      - uses: actions/checkout@v3 # 签出操作
      	# actions/setup-node@v3 操作安装指定的 Node.js 版本
      - uses: actions/setup-node@v3
        with:
          node-version: '14'
      	# run 关键字指示作业在运行器上执行命令。
      - run: npm install -g bats
      	# 最后，你将使用输出软件版本的参数运行 bats 命令。
      - run: bats -v
```

3. 提交这些更改并将其推送到你的 GitHub 仓库。

### 工作流语法

官方语法文档：[语法文档](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#about-yaml-syntax-for-workflows)

具体可选参数：[官方文档：on 的配置参数](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on)

### 查看工作流程活动

1. 进入 github 存储库主页，单击 "Action" 选项
2. 在左侧边栏能看到所有的工作流程

<img src="https://doublew2w-note-resource.oss-cn-hangzhou.aliyuncs.com/img/202407302124572.png"/>



## 查找和自定义操作

GitHub Marketplace 是你用来查找 GitHub 社区创建的操作的中心位置。 利用 [GitHub Action 市场](https://github.com/marketplace/actions/) 页面可按类别筛选操作。

### 添加操作到工作流程中

#### 从市场添加

如果是从 Github Action 市场中添加操作，通过点击绿色按钮 “Use latest version”来进行添加

<img src="https://doublew2w-note-resource.oss-cn-hangzhou.aliyuncs.com/img/202407302125045.png"/>

将其语法粘贴到自己的工作流程 `.yaml` 文件中

#### 从相同仓库添加

```java
|-- hello-world (repository)
|   |__ .github
|       └── workflows
|           └── my-first-workflow.yml
|       └── actions
|           |__ hello-world-action
|               └── action.yml
```

<p> </p>

可以通过 你可以在工作流文件中通过 `{owner}/{repo}@{ref}` 或 `./path/to/dir` 语法引用操作。

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      # This step checks out a copy of your repository.
      - uses: actions/checkout@v3
      # This step references the directory that contains the action.
      - uses: ./.github/actions/hello-world-action
```



#### 从不同仓库添加

在工作流文件中通过 `{owner}/{repo}@{ref}` 语法引用该操作。

该操作必须存储在公共存储库。

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/setup-node@v3
```

#### 引用 docker Hub 上的容器

如果操作在 Docker Hub 上发布的 Docker 容器中定义，必须在工作流文件中通过 `docker://{image}:{tag}` 语法引用该操作。

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://alpine:3.8
```



### 对操作使用输入和输出

操作通常接受或需要「输入」并生成可以使用的「输出」。 例如，操作可能要求你指定文件的路径、标签的名称或它将用作操作处理一部分的其他数据。

<img src="https://doublew2w-note-resource.oss-cn-hangzhou.aliyuncs.com/img/202407302128895.png"/>

<p style="text-align:center"> 图片来自：<a href="https://github.com/actions/setup-node/blob/main/action.yml"> setup-node </a> </p> 

<p> </p>

```yaml
name: "Example"
description: "Receives file and generates output"
inputs:
  file-path: # id of input
    description: "Path to test script"
    required: true
    default: "test-file.js"
outputs:
  results-file: # id of output
    description: "Path to results file"
```

- `inputs` 关键字定义名为 `file-path` 的必需输入，并且包括在未指定任何输入时使用的默认值。 
- `outputs` 关键字定义名为 `results-file` 的输出，指示在何处查找结果。

## 基本功能

### 使用变量

**可以设置自己的自定义变量，也可以使用 GitHub 自动设置的默认环境变量。** 

#### 为单个工作流设置环境变量

若要为单个工作流设置自定义环境变量，可以在工作流文件中使用 `env` 键对其进行定义。

- 整个工作流，方法是在工作流文件的顶层使用 [`env`](https://docs.github.com/zh/actions/using-workflows/workflow-syntax-for-github-actions#env)。
- 工作流中的作业内容，方法是使用 [`jobs.<job_id>.env`](https://docs.github.com/zh/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idenv)。
- 作业中的特定步骤，方法是使用 [`jobs.<job_id>.steps[*].env`](https://docs.github.com/zh/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsenv)。

```yaml
name: Greeting on variable day

on:
  workflow_dispatch

env:
  DAY_OF_WEEK: Monday

jobs:
  greeting_job:
    runs-on: ubuntu-latest
    env:
      Greeting: Hello
    steps:
      - name: "Say Hello Mona it's Monday"
        run: echo "$Greeting $First_Name. Today is $DAY_OF_WEEK!"
        env:
          First_Name: Mona
```

#### 为多个工作流定义配置变量

可以创建用于多个工作流的配置变量，并且可以在 [组织](https://docs.github.com/zh/actions/learn-github-actions/variables#creating-configuration-variables-for-an-organization)、[存储库](https://docs.github.com/zh/actions/learn-github-actions/variables#creating-configuration-variables-for-a-repository) 或 [环境](https://docs.github.com/zh/actions/learn-github-actions/variables#creating-configuration-variables-for-an-environment) 级别定义它们。

#### 使用上下文访问变量值

除了运行器环境变量之外，GitHub Actions 还允许使用上下文设置和读取 `env` 键值。 环境变量和上下文旨在用于工作流程中的不同点。

```yaml
env:
  DAY_OF_WEEK: Monday # 配置变量

jobs:
  greeting_job:
    runs-on: ubuntu-latest
    env:
      Greeting: Hello # 配置变量
    steps:
      - name: "Say Hello Mona it's Monday"
        if: ${{ env.DAY_OF_WEEK == 'Monday' }}
        run: echo "$Greeting $First_Name. Today is $DAY_OF_WEEK!"
        env:
          First_Name: Mona # 配置变量
```

可以使用 `vars` 上下文在整个工作流中访问配置变量。 如果尚未设置配置变量，则引用该变量的上下文的返回值将为空字符串。

```yaml
on:
  workflow_dispatch:
env:
  # Setting an environment variable with the value of a configuration variable
  env_var: ${{ vars.ENV_CONTEXT_VAR }}

jobs:
  display-variables:
    name: ${{ vars.JOB_NAME }}
    # You can use configuration variables with the `vars` context for dynamic jobs
    if: ${{ vars.USE_VARIABLES == 'true' }}
    runs-on: ${{ vars.RUNNER }}
    environment: ${{ vars.ENVIRONMENT_STAGE }}
    steps:
    - name: Use variables
      run: |
        echo "repository variable : $REPOSITORY_VAR"
        echo "organization variable : $ORGANIZATION_VAR"
        echo "overridden variable : $OVERRIDE_VAR"
        echo "variable from shell environment : $env_var"
      env:
        REPOSITORY_VAR: ${{ vars.REPOSITORY_VAR }}
        ORGANIZATION_VAR: ${{ vars.ORGANIZATION_VAR }}
        OVERRIDE_VAR: ${{ vars.OVERRIDE_VAR }}
        
    - name: ${{ vars.HELLO_WORLD_STEP }}
      if: ${{ vars.HELLO_WORLD_ENABLED == 'true' }}
      uses: actions/hello-world-javascript-action@main
      with:
        who-to-greet: ${{ vars.GREET_NAME }}
```

#### 操作系统

通过使用 `RUNNER_OS` 默认环境变量和相应的上下文属性 `${{ runner.os }}`，可以编写可用于不同操作系统的单个工作流文件。

#### 在工作流中步骤和作业之间传递值

如果在作业的某个步骤中生成值，则可以在同一作业的后续步骤中使用该值，方法是 **将该值分配给现有或新的环境变量，然后将其写入 `GITHUB_ENV` 环境文件**。

环境文件可由操作直接使用，也可以通过使用 `run` 关键字在工作流文件中通过 shell 命令使用。 

```yaml
steps:
  - name: Set the value
    id: step_one
    run: |
      echo "action_state=yellow" >> "$GITHUB_ENV"
  - name: Use the value
    id: step_two
    run: |

      echo "${{ env.action_state }}" # This will output 'yellow'

```

文档参考：[环境文件](https://docs.github.com/zh/actions/using-workflows/workflow-commands-for-github-actions#environment-files)

#### 示例

如果你需要使用自定义环境变量，可以在 YAML 工作流程文件中设置这些变量。

```yaml
jobs:
  example-job:
      steps:
        - name: Connect to PostgreSQL
          run: node client.js
          env:
            POSTGRES_HOST: postgres
            POSTGRES_PORT: 5432
```

- [官方变量文档](https://docs.github.com/zh/actions/learn-github-actions/variables#default-environment-variables)

### 添加脚本到工作流

官方文档：[jobs.<job_id>.steps[*].run](https://docs.github.com/zh/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)

你可以使用操作来运行脚本和 shell 命令，然后在指定的运行器上执行。

```yaml
jobs:
  example-job:
    steps:
      - run: npm install -g bats
```

添加本地脚本到工作流

```yaml
jobs:
  example-job:
    steps:
      - name: Run build script
        run: ./.github/scripts/build.sh  # 本地shell脚本
        shell: bash
```

多行命令

```yaml
- name: Clean install dependencies and build
  run: |
    npm ci
    npm run build
```

指定运行命令的工作目录

```yaml
- name: Clean temp directory
  run: rm -rf *
  working-directory: ./temp
```

### 在作业之间共享数据

如果作业生成(你要与同一工作流中的)另一个作业共享的文件，或者你要保存这些文件供以后参考，则可以将它们作为工件存储在 GitHub 中。 

构件是创建并测试代码时所创建的文件。 

例如，你可以创建一个文件，然后将其作为构件上传。

```yaml
jobs:
  example-job:
    name: Save output # 本次作业名称
    steps:
      - shell: bash # shell
        run: | # shell 命令生成一个 output.log文件
          expr 1 + 1 > output.log 
      - name: Upload output file
        uses: actions/upload-artifact@v3 # 使用操作
        with:
          name: output-log-file # 上传文件名称
          path: output.log # 文件所在路径
```

```yaml
jobs:
  example-job:
    steps:
      - name: Download a single artifact
        uses: actions/download-artifact@v3 # 下载文件操作
        with:
          name: output-log-file # 下载文件名称
```



## 参考资料

- https://docs.github.com/en/actions
