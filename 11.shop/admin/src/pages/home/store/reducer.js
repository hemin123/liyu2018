
// import {CHANGE_VALUE,ADD_ITEM,DELETE_ITEM,LOAD_INIT_DATA  } from './actionTypes.js'


import {fromJS }  from 'immutable'
import * as types from './actionType.js'

const defaultState = fromJS({
	usernum:222,
	ordernum:333,
	productnum:444
})

export default (state=defaultState,action)=>{
	if (action.type==types.SET_COUNT) {
		return state.merge({
			usernum:action.payload.usernum,
			ordernum:action.payload.ordernum,
			productnum:action.payload.productnum
		})
	}
	return state;
}