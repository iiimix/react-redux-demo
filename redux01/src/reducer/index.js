
import { combineReducers } from 'redux'
import todos from './todos'
import visibleFilter from './visibleFilter'


// combineReducers
export default combineReducers({
    todos,
    visibleFilter
})