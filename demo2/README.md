# yarn workspace demo2

一般通用是放到packages文件夹下面统一管理

```
// package.json

"workspaces": [
    "packages/*"
]
```

相关dependencies修改
```
// server/package.json

"dependencies": {
    "@learning/common": "1.0.0"
}
```