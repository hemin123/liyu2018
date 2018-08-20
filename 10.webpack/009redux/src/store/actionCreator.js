
import {CHANGE_VALUE,ADD_ITEM,DELETE_ITEM} from './actionTypes.js'
export const  chageValueAction= (payload)=>{
		type:'change_value',
		// payload:e.target.value
		payload
}
export const addItemAction={
	type:'add_value',
}
export const  deleteItemAction= (payload)=>{
		type:'del_value',
		// payload:index
		payload
}




