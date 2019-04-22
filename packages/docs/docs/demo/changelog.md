# changelog

## monorepo 项目支持 changelog

由于monorepo的特殊性, changelog的实现会比较复杂, 一个changelog可能包含多个repo的内容; 而又存在fix, feat等多个因素的存在; 需求比较多, 我还是拿【lerna-changelog](https://github.com/lerna/lerna-changelog)举例.

## 实现效果 [changelog](https://github.com/xx-helloworld/how-to-build-a-project/blob/master/CHANGELOG.md)

## 1.0.7-alpha.7 (2019-04-22)

#### :rocket: New Feature
* `typescript-jest`, `typescript`
  * [#3](https://github.com/xx-helloworld/how-to-build-a-project/pull/3) it`s a pr test ([@xxholly32](https://github.com/xxholly32))

#### :bug: Bug Fix
* `typescript`
  * [#4](https://github.com/xx-helloworld/how-to-build-a-project/pull/4) fix(typescript): a pr test too ([@xxholly32](https://github.com/xxholly32))
* `typescript-jest`, `typescript`
  * [#3](https://github.com/xx-helloworld/how-to-build-a-project/pull/3) it`s a pr test ([@xxholly32](https://github.com/xxholly32))

#### Committers: 1
- xx ([@xxholly32](https://github.com/xxholly32))

## 技术约束

### 需要都采用pr的形式

`lerna-changelog`的约束条件是所有的提交时按照pr的形式去做的, 我主要看的还是`vue-cli`, 他们也是最近几个版本才切的 `lerna-changelog`; 纯有pr的好处是代码提交与审核分离, 而不是dev一次在性提交到master, 并且比较推荐更多人使用pr; 连master权限的人也是使用pr功能.

### 需要有label标签和github_token

【labels】(https://github.com/xx-helloworld/how-to-build-a-project/labels) 需要用标签来过滤提交和changelog, 也需要用github_token, 其实内部实现是根据所有的issues标签来鉴定changelog, 官方有issues说明是可以支持bitbucket和gitlab等. 

好处是master审核人员可以区分, 到底这个commit是fix还是feat, 只需要选label就可以了.

## 未实现功能

无法实现单个repo的版本升级, 待研究