# babel的使用


## 安装babel, 开发依赖
```
npm i babel-cli babel-core babel-preset-es2015 babel-preset-react -D
```
## 全局安装babel-cli
```
npm i -g babel-cli
```

## 添加babel配置文件 .babelrc

```javascript
{
    "presets": [
        "es2015",
        "react"
    ],
    "plugins": []
}
```

## 使用babel转义JSX
把src目录里面的jsx文件，转码到build目录下

```
babel src -d build
```

## 在package.json添加脚本
```
"build": "babel src -d public",
```

