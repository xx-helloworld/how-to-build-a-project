# yarn workspace demo1

在项目中，经常会出现项目嵌套的情况出现，yarn workspace解决了这个问题

首先设置一下外层的package.json

```
"private": true,
"workspaces": [
    "common",
    "server"
]
```

配置完以后

+ 所有依赖都会安装在全局
+ 子项目可以嵌套依赖，common和server

```
// common/index.js

module.exports = () => {
    console.log("hello xxtest")
}

// server/package.json

"dependencies": {
    "common": "1.0.0"
}

// server/index.js

const commonfn = require("common")

commonfn()

```

```
yarn install

node server/index.js

// hello xxtest

```