


import React from 'react'
import {render} from 'react-dom'
import App from './component/App'
import {Provider} from 'react-redux'

import 'antd/dist/antd.css'
import { createStore } from 'redux'
import rootReducer from './reducer/index'

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>, document.querySelector('#app'));