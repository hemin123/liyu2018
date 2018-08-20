import React,{ Component } from 'react';

import { Input,Button,Row,Col,List } from 'antd';

import { chageValueAction,addItemAction,deleteItemAction } from './store/actionCreator.js'

import AppUI from './appUI.js'
import store from './store';
//引入css
import './App.css';




class App extends Component{
	constructor(props){
		super(props);

	 this.handlechange=this.handlechange.bind(this);
	 this.handleadd = this.handleadd.bind(this);
	// this.handledel = this.handledel.bind(this);
		console.log(store)
		store.getState();
		this.state = store.getState();
			//检测数据发生变化，然后更新数据，要不然input里面的值不会发生变化
		store.subscribe(()=>{
			// this.setState(this.state);
			this.setState(store.getState());
			console.log('store.getState()');
		})
	
	}
	handlechange(e){
			const action=chageValueAction(e.target.value)
			console.log(action);
			store.dispatch(action)//把input里改变后的值传给store，再给reducer
	}
	handleadd(){
		const action =addItemAction();
		store.dispatch(action);
	}
	handledel(index){
		console.log(this,index);
		const action =deleteItemAction(index);
		store.dispatch(action);
	}
	render(){
		//return 只能返回一个
		/*return(
			<div className="App">
			    <Row>
			      <Col span={18} ><Input
			      			 value={this.state.value} 
			      			onChange ={this.handlechange} /> 
			      	</Col>
			      <Col span={6} >
			      <Button type="primary" onClick={this.handleadd}>增加</Button></Col>
			    </Row>
			    <List
			      style={{ marginTop: 10 }}
			      bordered
			      dataSource={this.state.list}
			      renderItem={(item,index) => (<List.Item onClick={this.handledel.bind(this,index)} >{item}</List.Item>)}
			    />			    			
			</div>				
		)*/
		return(
			<AppUI />
		)
		/*return(
			<appUI 
				value ={this.state.value}
				list ={this.state.list}
				handlechange={this.handlechange}
				handledel={this.handledel}
				handleadd={this.handleadd}

			/>
		)*/
	}
}
export default App;