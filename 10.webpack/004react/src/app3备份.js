
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
			this.setState({
				list:[...this.state.list,this.state.value]
			})
			this.state.value='';
			console.log(this.state);
	}
	handlechange(e){
			console.log(e.target);
			console.log(e.target.value);

			// this.state.value=e.target.value;
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
				<input value={this.state.value} onChange ={this.handlechange.bind(this)} />
				<button onClick ={this.handleadd.bind(this)}>添加</button>
				<ul>
					<li>111</li>
					
					{	
						this.state.list.map((item,index)=>{
							return ( <Son key={index}  
							content={item}
							index={index}
							handledel={this.handledel.bind(this)}
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



