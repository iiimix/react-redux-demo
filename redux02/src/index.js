

import 'antd/dist/antd.css'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './layout/app'

import {createStore} from 'redux'

import { Provider, connect } from 'react-redux'


// 
const salary = 10000;

// 定义action
const increase = {
    type: 'up',
}
const decrease = {
    type: 'down',
}

// 定义reducer
const reducer = (state = salary, action) => {
    return action.type === 'up' ? state += 1500: action.type ==="down" ? state -= 1000: state
}

// 创建store
const store = createStore(reducer);

// 定义基础数据对象，供后代组件使用，this.props.xxx
function mapStateToProps(state) {
    return {
        salary: state
    }
}

// 定义共享函数，供后代组件使用， this.props.xxxFn
function mapDispatchToProps(dispatch) {
    return {
        DoIncrease: () => dispatch({type: 'up'}),
        DoDecrease: () => dispatch({type: 'down'})
    }
}

// 连接根组件
// 接受参数，props, dispatch, 然后传入根组件App
var Root = connect(mapStateToProps, mapDispatchToProps)(App);


// 挂载，渲染，传入store数据仓库
ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.querySelector("#app")
);