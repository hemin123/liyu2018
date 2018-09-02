/*
* @Author: TomChen
* @Date:   2018-08-20 09:18:25
* @Last Modified by:   TomChen
* @Last Modified time: 2018-09-01 10:06:35
*/
import { fromJS } from 'immutable'

import * as types from './actionTypes.js'

//用fromJS包装一个immutable对象
const defaultState = fromJS({
	parentCategoryId:'',
	categoryId:'',
	images:'',
	detail:'',
	categoryIdValidateStatus:'',
	categoryIdHelp:'',
	isPageFetching:false,
	current:0,
	total:0,
	pageSize:0,
	list:[],
	isSaveFetching:false,

	editName:'',
	editDescription:'',
	editPrice:'',
	editStock:'',

	
	
})

export default (state=defaultState,action)=>{

	if(action.type === types.SET_CATEGORY){
		return state.merge({
			parentCategoryId:action.payload.parentCategoryId,
			categoryId:action.payload.categoryId,
			categoryIdValidateStatus:'',
			categoryIdHelp:'',				
		})
	}
	if(action.type === types.SET_IMAGES){
		return state.set('images',action.payload)
	}
	if(action.type === types.SET_DETAIL){
		return state.set('detail',action.payload)
	}

	if(action.type === types.SET_CATEGORY_ERROR){
		return state.merge({
			categoryIdValidateStatus:'error',
			categoryIdHelp:'请选择所属分类',			
		})
	}
	

	if(action.type === types.SAVE_REQUEST){
		return state.set('isSaveFetching',true)
	}

	if(action.type === types.SAVE_DONE){
		return state.set('isSaveFetching',false)
	}
	if(action.type === types.SET_LEVEL_ONE_CATEGORIES){
		return state.set('levelOneCategories',fromJS(action.payload))
	}	
	
	if(action.type === types.SET_PAGE){
		return state.merge({
			current:action.payload.current,
			total:action.payload.total,
			pageSize:action.payload.pageSize,
			list:fromJS(action.payload.list)
		})
	}

	if(action.type === types.PAGE_REQUEST){
		return state.set('isPageFetching',true)
	}

	if(action.type === types.PAGE_DONE){
		return state.set('isPageFetching',false)
	}

	if(action.type === types.SET_DEIT_PRODUCT){
		return state.merge({
			parentCategoryId:action.payload.category.pid,
			categoryId:action.payload.category._id,
			images:action.payload.image,
			detail:action.payload.detail,

			editName:action.payload.name,
			editDescription:action.payload.description,
			editPrice:action.payload.price,
			editStock:action.payload.stock,
		})		
	}
	

	return state;
}