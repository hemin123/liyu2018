
import React,{Component} from 'react';

import Son from './son.js';
import axios from  'axios';
import './app.css'
// jss语法
class app extends React.Component{
	constructor(props){
		super(props);

		this.state ={
			value:'1',
			list:['aaa',' bbb']
		}
	this.handlechange=this.handlechange.bind(this);
	this.handleadd = this.handleadd.bind(this);
	this.handledel = this.handledel.bind(this);
	console.log('constructor');
	}
static getDerivedStateFromProps(nextProps, prevStat){
	console.log("getDerivedStateFromProps",nextProps, prevStat);
	return true;
}
shouldComponentUpdate(nextProps, nextState){
	if (true) {

	}else{

	}
	return true

}
// npm i axios
componentDidMount(){

//发送ajax请求
	axios
	.get('http://127.0.0.1:3000/api/data')
	.then((data)=>{
		console.log(data);
		// this.setState ({	
		// 	list:data.data
		// })
	})
	.catch((e)=>{
		console.log("err:::"+e);

})
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
			console.log(0);
			this.setState((preState)=>(
			{
				list:[...preState.list,preState.value],

value:''	
			}

			))
				}
	handlechange(e){
			// console.log(e.target);
			// console.log(e.target.value);
			console.log(this.input);
			this.setState ({
				value:e.target.value
			})
			// console.log(this.state);
	}

	getItems(){
		return this.state.list.map((item,index)=>{
					return ( <Son key={index}  
					content={item}
					index={index}
					handledel={this.handledel}
					 />)		
				})
	}

	render(){
				console.log("app render");
		return (
			<div className="box">
				<h1>app.js</h1>
				<input 
				value={this.state.value} 
				onChange ={this.handlechange}
				ref={(input)=>{
					this.input=input;
				}}
				 />
				
				<button onClick ={this.handleadd}>添加</button>
				<ul>					
					{		
						this.getItems()	
					}
				</ul>
			</div>
			
		)
	}
}


export default app;



