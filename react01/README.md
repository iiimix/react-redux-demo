#React 入门实例

# 标签引入

```
<script src="http://static.runoob.com/assets/react/react-0.14.7/build/react.min.js"></script>
<script src="http://static.runoob.com/assets/react/react-0.14.7/build/react-dom.min.js"></script>
<script src="http://static.runoob.com/assets/react/browser.min.js"></script>
```

# react渲染模板
```html
<script type="text/babel">
    ReactDOM.render(<h1>hello World</h1>, document.getElementById('app'));
</script>
```

## 注意事项
>script标签type属性为text/babel，这是因为React独有的JSX语法，和javascript不兼容

>引入的三个库，react.js、react-dom.js、browser.js，他们必须先加载
- react.js是React核心库
- react-dom是提供与DOM相关的功能
- browser.js的作用是把JSX语法转为javascript语法


# ReactDOM.render()
render函数是React最基础的api，用于把模板转为html语言，并插入指定的DOM节点

