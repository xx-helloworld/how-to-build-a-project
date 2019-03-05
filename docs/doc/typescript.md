# ts + yarn workspace + lerna

## ts 配置

tsconfig 可以根据每个子项目不同配置，也可以只在外层配置

```
"extends": "../../tsconfig.json",

```

## lerna 配置

配置lerna可以在最外层输入build命令同时build packages内的子项目

```
"scripts": {
    "build": "lerna run build"
  },

```

