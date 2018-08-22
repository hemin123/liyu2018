/*
* @Author: TomChen
* @Date:   2018-08-20 09:18:25
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-20 16:29:23
*/
// import {CHANGE_VALUE,ADD_ITEM,DELETE_ITEM,LOAD_INIT_DATA  } from './actionTypes.js'


import * as types   from './actionTypes.js'
const defaultState = {
	value:'hhh',
	list:['aa','bb']
}

export default (state=defaultState,action)=>{
	if(action.type == types.CHANGE_VALUE){

		const newState = JSON.parse(JSON.stringify(state));

		newState.value = action.payload; 

		return newState
	}
	if(action.type == types.LOAD_INIT_DATA){

		const newState = JSON.parse(JSON.stringify(state));

		newState.list = action.payload; 

		return newState
	}	
	if(action.type == types.ADD_ITEM){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(state.value);
		newState.value = '';
		return newState;
	}

	if(action.type == types.DELETE_ITEM){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.payload,1);
		return newState;
	}
	return state;
}