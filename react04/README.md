# webpack4、babel、react构建开发环境


## 安装webpack开发依赖
```
npm i webpack -D
```

## package.json添加webpack脚本
```
"build": "webpack --mode production"
```

## 安装babel，及babel关联依赖

    babel-preset-es2015已弃用
    推荐使用@babel/preset-env @babel/preset-react

```
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react -D
```

## 添加`.babelrc` 配置文件
```javascript
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```

React组件大多数用ES6编写的
由于浏览器无法理解React组件，因此需要进行特殊转换
Webpack是无法处理这种转换的，但是webpack可以使用很多loader(加载器)，
`babel-loader`就是这样一个加载器，负责接收ES6 js文件代码，并转换成浏览器所能理解的js代码

这里，`babel-loader`使用的是babel，并且babel需要使用一组预设
- babel-preset-env 用于将ES6代码编译为ES5（babel-preset-es2015已弃用）
- babel-preset-react 用于把JSX和其他东西编译为js代码


## 新建webpack最小配置文件，webpack.config.js
```javascript
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}
```

配置非常简单。对于每个扩展名为 .js 的文件，Webpack 都会通过 babel-loader 来管理代码，将 ES6 转换为 ES5 。
有了这个，我们就可以编写我们的 React 组件了。

## 安装react，react-dom
```
npm i react react-dom -D
```

## 创建目录
```
mkdir -p src/js/components
```


## 添加html webpack插件
```
npm i html-webpack-plugin html-loader -D
```

## 增加webpack配置
```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
...
module: {
    ...
},
plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html'
    })
]
```

## devServer
添加webpack-dev-server，方便调试程序
```javascript
npm i webpack-dev-server -D
```
## 添加启动脚本
```
"dev": "webpack-dev-server"
```

## 模块热替换 HotModuleReplacement

```
npm i hot-module-replacement
```
