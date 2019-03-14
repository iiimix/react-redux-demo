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



|区别|require|import|
|----|:------:|:---:|
|规范|AMD规范|ES6语法|
|调用时间|运行时调用|编译时调用|
|支持|复制过程，require引入结果为对象，<br/>函数，字符串等，最后赋值给变量|解构过程，部分浏览器引擎尚未实现import，因此需要使用<br/>babel转码ES6为ES5再执行，最终import语法被转为require|


## 1. CommonJS

Nodejs诞生，使得javascript语言可以运行在服务器端，Nodejs参照`CommonJS`规范实现，同时标志着Javascript模块化编程的诞生，`CommonJS`中，有个全局方法`require`,用于加载模块

### CommonJS三大块，模块引用`require`, 模块定义`exports` 模块标识`module`

浏览器不兼容CommonJS原因是，缺少四个Nodejs环境变量
- module
- exports
- require
- global

也就是说，只要提供这四个变量，浏览器也能加载CommonJS模块

```javascript
var module = {
  exports: {}
};

(function(module, exports) {
    exports.multiply = function (n) { return n * 1000 };
}(module, module.exports))

var f = module.exports.multiply;
f(5) // 5000
```

## 2. AMD
基于CommonJS规范的NodeJS开创了服务端的模块化里程碑，很自然地，客户端模块化支持要如何支持，最好能够兼容，模块不需要修改，就能在服务器和浏览器都正常运行

CommonJS用于浏览器端局限原因
- require调用是同步`synchronous`的，在浏览器端会阻塞程序运行，造成页面假死
```javascript
var math = require('math');
math.add(2, 3);
```

于是，用于浏览器端，采用异步方式加载模块的规范AMD就诞生了，`Asynchronous Module Definition`
AMD也采用require()语句加载模块，但是不同于CommonJS，它要求两个参数：
```javascript
require([...moduleList], callback);
```
如果将前面的代码改写成AMD形式，就是下面这样：
```javascript
    require(['math'], function (math) {
　　　　math.add(2, 3);
　　});
```

require.js是AMD规范的实现
