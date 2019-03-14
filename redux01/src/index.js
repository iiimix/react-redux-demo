


import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import 'antd/dist/antd.css'

import { createStore } from 'redux'


// redux原始state
const salary = 10000;

// 定义action
const increase = {
    type: '涨工资'
}
const decrease = {
    type: '降工资'
}

// 定义reducer纯函数，接受状态和action，返回新状态
const reducer = (state=salary, action) => {
    switch(action.type) {
        case '涨工资':
            return state += 1500;
        case '降工资':
            return state -= 1500;
        default:
            return state;
    }
}

// 创建store，接收reducer纯函数
const store = createStore(reducer);

//打印默认值10000
console.log(store.getState())


// 调用派发dispatch, 传入action参数
store.dispatch(increase);

//打印默认值11000, 派发后状态变为11500
console.log(store.getState())

ReactDOM.render(<App />, document.querySelector('#app'));