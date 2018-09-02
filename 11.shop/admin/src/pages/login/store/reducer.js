/*
* @Author: TomChen
* @Date:   2018-08-20 09:18:25
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-24 14:58:26
*/
import { fromJS } from 'immutable'

import * as types from './actionTypes.js'

//用fromJS包装一个immutable对象
const defaultState = fromJS({
	isFetching:false
})

export default (state=defaultState,action)=>{
	
	if(action.type === types.LOGIN_REQUEST){
		return state.set('isFetching',true)
	}

	if(action.type === types.LOGIN_DONE){
		return state.set('isFetching',false)
	}

	return state;
}