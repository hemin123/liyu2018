


// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';

// import { reducer } from '../pages/todollist/store'
// import { reducer as todolistReducer } from '../pages/todollist/store'
import { reducer as loginReducer } from '../pages/login/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as userReducer } from '../pages/user/store'
import { reducer as categoryReducer } from '../pages/category/store'

export default  combineReducers({
	// todolist :todolistReducer,
	login :loginReducer,
	home :homeReducer,
	user :userReducer,
	category :categoryReducer,
})












