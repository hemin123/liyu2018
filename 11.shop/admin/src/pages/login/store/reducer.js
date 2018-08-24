/*
* @Author: TomChen
* @Date:   2018-08-20 09:18:25
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-20 16:29:23
*/
// import {CHANGE_VALUE,ADD_ITEM,DELETE_ITEM,LOAD_INIT_DATA  } from './actionTypes.js'


import {fromJS }  from 'immutable'
import * as types from './actionType.js'

const defaultState = fromJS({
	isFetching:false
})

export default (state=defaultState,action)=>{
	if (action.type==types.LOGIN_REQUEST) {
		state.set('isFetching',true)
	}
	if (action.type==types.LOGIN_DONE) {
		state.set('isFetching',false)
	}
	return state;
}