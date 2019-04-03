
import { connect } from 'react-redux'
import { toggleTodo } from '../action/index'
import TodoList from '../component/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        case 'SHOW_ALL':
        default:
            return todos
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibleFilter)
})
const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

const VisibleList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
VisibleList.propTypes = {
}

export default VisibleList