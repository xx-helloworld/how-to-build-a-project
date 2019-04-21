# .. + ts + lerna

## ts 配置

tsconfig 可以根据每个子项目不同配置，也可以只在外层配置

```
"extends": "../../tsconfig.json",

```

## lerna 配置

配置 `lerna` 可以在最外层输入build命令同时 `build packages` 内的子项目, `lerna` 是专门为配置 `monorepo` 项目所服务的，单独使用lerna也可以不需要配置`package.json`中的`packages`, `lerna` 内部会有配置. 而且采用 `lerna` 也可以搭配 `npm` 一起使用. 可以说部分功能和 `yarn workspace` 有些重合.

```
"scripts": {
    "build": "lerna run build"
  },

```

