

import React,{ Component } from 'react';

import { Input,Button,Row,Col,List } from 'antd';
import axios from 'axios';
import store from './store';

import { connect } from  'react-redux';

import { chageValueAction,addItemAction,deleteItemAction,getInitDataAction } from './store/actionCreator.js'


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
	return {
		value:state.value,
		list:state.list

	}
}
//函数映射到组件的props
const mapdispathprops =(dispath)=>{
	return {
		handlechange: (ev)=>{
			const action =chageValueAction(ev.target.value);
			dispath(action);
		},
		handleadd: ()=>{
			const action =addItemAction();
			dispath(action);
		},
		handledel: (ev)=>{
			const action =deleteItemAction(getInitDataAction);
			dispath(action);
		}

	}
}
// export default connect(null,null)(App);
export default connect(mapstateprops,mapdispathprops)(Todolist);
