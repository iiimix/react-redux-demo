
const todoReducers = (state=[], action) => {
    if(action.type == 'ADD_TODO') {
        return [
            ...state,
            {
                id: action.id,
                text: action.text,
                completed: false
            }
        ]
    } else if(action.type == 'TOGGLE_TODO') {
        return state.map(todo => {
            return todo.id === action.id? {
                ...todo, completed: !todo.completed
            } : todo
        })
    }
    return state;
}
 


export default todoReducers;