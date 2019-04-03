

let idSequence = 0;

export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: idSequence++,
        text
    }
}

export const setVisibleFilter = filter => {
    return {
        type: "SET_VISIBLE_FILTER",
        filter
    }
}

export const toggleTodo = id => {
    return {
        type: "TOGGLE_TODO",
        id
    }
}

export const visibleFilter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}