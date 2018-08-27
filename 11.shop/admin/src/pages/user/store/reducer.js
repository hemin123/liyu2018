
// import {CHANGE_VALUE,ADD_ITEM,DELETE_ITEM,LOAD_INIT_DATA  } from './actionTypes.js'


import {fromJS }  from 'immutable'
import * as types from './actionType.js'

const defaultState = fromJS({
	isFetching:false,
    total:200,
    current:1,
    pageSize:10,
    list:[]
})

export default (state=defaultState,action)=>{
// return state.set(isFetching:true)
if (action.type == types.SET_PAGE ) {
	return state.merge({
		current:action.payload.current,
		total:action.payload.total,
		pageSize:action.payload.pageSize,
		list:fromJS(action.payload.list),
	})
}
if (action.type===types.PAGE_REQUEST) {
	return state.set('isFetching',true)
}
if (action.type===types.PAGE_DONE) {
	return state.set('isFetching',false)
}
	return state;
}