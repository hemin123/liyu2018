
import React,{Component} from 'react';

import Son from './son.js';

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
			console.log(e.target);
			console.log(e.target.value);
			this.setState ({
				value:e.target.value
			})
			// console.log(this.state);
	}
	render(){
		// <Fragment></Fragment>不会生成新的标签
		return (
			// <div style="background:red">
			// <div style={{background:'red'}}>
			// <div class="box">
			<div className="box">
				<h1>app.js</h1>
				<input value={this.state.value} onChange ={this.handlechange} />
				<button onClick ={this.handleadd}>添加</button>
				<ul>
					<li>111</li>
					
					{	
						this.state.list.map((item,index)=>{
							return ( <Son key={index}  
							content={item}
							index={index}
							handledel={this.handledel}
							 />
							)
							/*(
							 <li 
							 key={index}
							 onClick={this.handledel.bind(this,index)}> 
							 	{item} 
							 </li>
							 )*/
							
						})
						
					
					}

				</ul>
			</div>
			
		)
	}
}


export default app;



