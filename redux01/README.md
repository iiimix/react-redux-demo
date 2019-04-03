# redux的使用实例

## Redux三大原则

>

1. 单一数据源store
    整个应用的state都被储存在store的状态树种
1. state对于组件是只读的
    唯一改变state的方式是触发Action对象，Action是一个普通Javascript对象，由reducer识别Action类型即做相应的state状态处理
1. 使用纯函数（reducer）来更新state
    reducer是纯函数，接受oldState和Action，并返回新state
    reducer可以随着应用规模的变大，拆分成多个小的reducer，它们可以独立操作state的不同部分



## 安装redux， react-redux

Redux 默认并不包含 React 绑定库，需要单独安装。
```
npm i redux react-redux -S
```
