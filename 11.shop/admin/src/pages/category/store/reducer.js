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
	isAddFetching:false,
	levelOnecategories:[],
  	isPageFetching:false,
    total:1,
    current:1,
    pageSize:1,
    list:[],
    updateModalVisible:false,
    updateId:'',
    updateName:''

})

export default (state=defaultState,action)=>{

	
	if (action.type==types.ADD_REQUEST) {
		state.set('isAddFetching',true)
	}
	if (action.type==types.ADD_DONE) {
		state.set('isAddFetching',false)
	}


	
	if (action.type == types.SET_PAGE ) {
		return state.merge({
			current:action.payload.current,
			total:action.payload.total,
			pageSize:action.payload.pageSize,
			list:fromJS(action.payload.list),
		})
	}
	if (action.type===types.PAGE_REQUEST) {
		return state.set('isPageFetching',true)
	}
	if (action.type===types.PAGE_DONE) {
		return state.set('isPageFetching',false)
	}
	if(action.type === types.SHOW_UPDATE_MODAL){
		return state.merge({
			updateModalVisible:true,
			updateId:action.payload.updateId,
			updateName:action.payload.updateName,
		})		
	}
	if (action.type==types.SET_LEVEL_ONE_CATEGORIES) {
		return state.set('levelOnecategories',fromJS(action.payload))
	}
	if (action.type==types.CHANGE_NAME) {
		return state.set('updateName',action.payload)
	}
	if (action.type==types.CLOSE_UPDATE_MODAL) {
		return state.set('updateModalVisible',false)
	}


	

	return state;
}