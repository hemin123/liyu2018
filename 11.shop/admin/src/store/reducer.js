


// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';

// import { reducer } from '../pages/todollist/store'
// import { reducer as todolistReducer } from '../pages/todollist/store'
import { reducer as loginReducer } from '../pages/login/store'

export default  combineReducers({
	// todolist :todolistReducer,
	login :loginReducer
})












