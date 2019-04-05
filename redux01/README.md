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

## 1.安装redux， react-redux

Redux 默认并不包含 React 绑定库，需要单独安装。
```
npm i redux react-redux -S
```

## 2.引入`createStore`，创建单一数据源store

`createStore`函数接受一个参数reducer，reducer作为纯函数使用，接受状态和action，返回新状态

index.js
```javascript
import { createStore } from 'redux'
import rootReducer from './reducer/index'

const store = createStore(rootReducer)
```

## 3.创建`reducer`
这里使用`combineReducers`，`combineReducers`可以把多个reducer合并后输出一个reducer，当应用日益增长时，处理状态的reducer文件就会越来越大，所以才会有分离reducer函数，`combineReducers`来自于`redux`

reducer/index.js
```javascript
import { combineReducers } from 'redux'

export default combineReducers({
    todos,
    visibleFilter
})
```




## 常见错误一

属性类型声明propTypes容易写成`PropTypes`，和上文引入的`PropTypes from 'prop-types'`混淆
```javascript
Link.propTypes = {
...
}
```

## 常见错误二
reducers/todos.js中，map函数的参数应该是一个函数，这里用箭头函数简写，当箭头函数使用了大括号作为函数体标记，则函数体需要显示`return`关键字

```javascript
return state.map(todo => {
    return todo.id === action.id? {
        ...todo, completed: !todo.completed
    } : todo
})
```
或者，箭头函数不用大括号标记，则函数体只能有一个语句，并且返回语句值。
```javascript
return state.map(todo => todo.id === action.id? {
        ...todo, completed: !todo.completed
    } : todo)
```
