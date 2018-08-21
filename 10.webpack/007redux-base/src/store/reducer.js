
// import { } from './actiontypes.js'

const defaultState={
		value:'1',
		list:['aaa1',' bbb']
}
export default (state= defaultState, action)=>{
	if (action.type=='change_value') {
		console.log(0);
		//深拷贝，stringify转化为字符串，parse转化为JSON
		//扩展运算符也可以用于深拷贝
		const newstate=JSON.parse(JSON.stringify(state));
		newstate.value=action.payload;
		console.log(newstate);
		return newstate
	}
	if (action.type=='add_value') {
		const newstate=JSON.parse(JSON.stringify(state));
		newstate.list.push(state.value);
		newstate.value='';
		return newstate
	}
	if (action.type=='del_value') {
		const newstate=JSON.parse(JSON.stringify(state));
		newstate.list.splice(action.payload,1);

		return newstate
	}
	return state
}

