
import React,{Component} from 'react';
import { Input,Button,Row,Col,List } from 'antd';
 import Son from './son.js';

import appUI from './appUI.js';
import store from './store.js';


import './app.css'


// jss语法
class app extends React.Component{
	constructor(props){
		super(props);

	console.log(store);
	this.state =store.getState();
	console.log(this.state,this.state.value,this.state.list);
		/*this.state ={
			value:'1',
			list:['aaa',' bbb']
		}*/
		//检测数据发生变化，然后更新数据，要不然input里面的值不会发生变化
	store.subscribe(()=>{
		// this.setState(this.state);
		this.setState(store.getState());
		console.log('store.getState()');
	})
	
		
	this.handlechange=this.handlechange.bind(this);
	this.handleadd = this.handleadd.bind(this);
	this.handledel = this.handledel.bind(this);
	console.log('constructor');
	}

	handledel(index){

		const list =[...this.state.list];
		list.splice(index,1);
		this.setState ({	
			list:list
		})
		// console.log(index);
	}


	handleadd(){
			/*console.log(0);
			this.setState((preState)=>(
			{
				list:[...preState.list,preState.value],
				value:''	
			}
			))*/
			const action={
				type:'add_value',
			}
			store.dispatch(action)

	}
	handlechange(e){
			// console.log(e.target);
			// console.log(e.target.value);
			
		/*	console.log(this.input);
			this.setState ({
				value:e.target.value
			})*/
			// console.log(this.state);
			const action={
				type:'change_value',
				payload:e.target.value
			}
			console.log(action);
			store.dispatch(action)//把input里改变后的值传给store，再给reducer
	}
	render(){
			console.log("app render");
		return (
			<div className="box">
				<h1>app.js</h1>
				<input 
				value={this.state.value} 
				// value={this.state.value} 
				onChange ={this.handlechange}

				ref={(input)=>{
					this.input=input;
				}}
				 />
				
				<button onClick ={this.handleadd}>添加</button>
				{/*<ul>
					<li>111</li>
					{	
						this.state.list.map((item,index)=>{
							return ( <Son key={index}  
								content={item}
								index={index}
								handledel={this.handledel}
								 />
							)					
						})					
					}
				</ul>*/}
				 {/*<ul>
					
				 	dataSource ={this.state.list}
				 	renderItem ={(item,index)=>{
						<List.Item onClick={this.handledel}>
						{item}
						</List.Item>
					}}
				</ul>*/}
				{/*<List
					bordered
					dataSource ={this.state.list}
					renderItem ={(item,index)=>{
						<List.Item onClick={this.handledel}>
						{item}
						</List.Item>
					}}
					/>*/}

					<appUI />

			</div>
			
		)
	}
}


export default app;



