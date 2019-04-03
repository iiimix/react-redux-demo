

import React from 'react'

import AddTodo from '../container/AddTodo'
import Footer from './Footer'
import VisibleTodoList from '../container/VisibleTodoList'

export default class App extends React.Component {

    render() {
        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        )
    }
}