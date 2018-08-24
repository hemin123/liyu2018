

import React,{ Component } from 'react';

import { Input,Button,Row,Col,List } from 'antd';
import axios from 'axios';

import { connect } from  'react-redux';

// import { chageValueAction,addItemAction,deleteItemAction,getInitDataAction } from '../store/actionCreator.js'
import { actionCreator } from './store'


//引入css
import './Todolist.css';


class Todolist extends Component{
	componentDidMount(){

	}
	render(){
		return(
			<div className="Todolist">
			    <Row>
			      <Col span={18} ><Input
				   value={this.props.value}
			      onChange={this.props.handlechange}
			      /> </Col> 
			      		    
			      <Col span={6} ><Button type="primary"
			      onClick={this.props.handleadd}>增加</Button></Col>
			    </Row>
			    <List
			      style={{ marginTop: 10 }}
			      bordered
			      dataSource={this.props.list}
			      renderItem={(item,index) => (<List.Item  
			      	onClick={
			      		()=>{
			      		this.props.handledel(index)//函数后面带括号直接就执行了，再定义一个函数
                 			      		}
			      	}>
			      	{item}</List.Item>)}
			    />			    			
			</div>
		)	

	}
}


//参数传递
const mapstateprops =(state)=>{
	console.log(state);
	return {
		/*value:state.todolist.value,
		list:state.todolist.list*/

		value:state.get('todolist').get('value'),
		list:state.get('todolist').get('list')

	}
}
//函数映射到组件的props
const mapdispathprops =(dispath)=>{
	return {
		handlechange: (ev)=>{
			const action =actionCreator.chageValueAction(ev.target.value);
			dispath(action);
		},
		handleadd: ()=>{
			const action =actionCreator.addItemAction();
			dispath(action);
		},
		handleInit:()=>{
			const action =actionCreator.getInitDataAction()
			dispath(action);
		},
		
		handledel: (index)=>{
			const action =actionCreator.deleteItemAction(index);
			dispath(action);
		}

	}
}
// export default connect(null,null)(App);
export default connect(mapstateprops,mapdispathprops)(Todolist);
