


import { combineReducers } from 'redux';

// import { reducer } from '../pages/todollist/store'
import { reducer as todolistReducer } from '../pages/todollist/store'

export default  combineReducers({
	todolist :todolistReducer
})












