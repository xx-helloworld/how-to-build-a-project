# 为什么要使用monorepo?

> 用于管理Babel中monorepo的工具已提取为[Lerna](https://github.com/lerna/lerna)

让一个multimodule project(复杂项目)里面包含很多multiple repos(多个简单项目)，非常让人感到兴奋

Babel采用Monorepo方法，所有正式维护的模块都在同一repo中。

这是非常禁忌的，但让我们看看优缺点：

**优点:**

 * 单一lint, build, test 和 release进程.
 * 易于跨模块协调修改
 * 提交issues更方便
 * 易于搭建开发环境
 * 跨模块测试一起运行，发现缺陷可以更容易一些

**缺点:**

 * 代码库会变得庞大
 * 规模更大.
 * [Can't `npm install` modules directly from GitHub](https://github.com/npm/npm/issues/2974)

 :::tip
以上内容摘抄自
 :::

