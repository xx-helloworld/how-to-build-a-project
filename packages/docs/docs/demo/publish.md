# publish

<!-- TODO: changelog使用优化 -->

## lerna publish

给一个项目的更新创建新的release，采用询问的方式创建一个new version并更新所有packages到git和npm仓库；

主要可选项

+ --npm-tag [tagname] — publish到某个tag上，默认是latest
> 如果是内侧版本可以使用tagname=next，安装内测版本就是npm i xx@next
+ --canary/-c – 创建一个随机变量的release.
```
lerna publish --canary
# 1.0.0 => 1.0.1-alpha.0+${SHA} of packages changed since the previous commit
# a subsequent canary publish will yield 1.0.1-alpha.1+${SHA}, etc
```
+ --skip-git – 不运行任何git命令.
+ --force-publish [packages] — 强制publish到一个特殊的tag或者版本号,如果使用*则提交所有的packages到某个版本号.
```
lerna publish 0.0.2-alpha.1 --force-publish=*
# Changes:
# - @xx-learning/house: 0.0.3-alpha.0 => 0.0.2-alpha.1
# - @xx-learning/window: 0.0.1 => 0.0.2-alpha.1
```

> 如果npm仓库里面没有@xx-learning的组织是无法发布@xx-learning/demo，必须要要去新建一个

其他可选项在官网也有写，不过官网的文档不是特别的清楚

## lerna publish 的一些指令说明

```
  Patch (0.0.3) #不说了
  Minor (0.1.0) #不说了
  Major (1.0.0) #不说了
  Prepatch (0.0.4-alpha.0) #不说了
  Preminor (0.1.0-alpha.0) #不说了
  Premajor (1.0.0-alpha.0) #不说了
  Custom Prerelease #如果用预发布就是发布了后面的小数点+1比如现在是0.0.3-alpha.1，预发布就是0.0.3-alpha.2
  Custom Version #没试过，应该和上面一样但不发npm和git，和lerna version功能类似
```