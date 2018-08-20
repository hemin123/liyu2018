
import React,{Component} from 'react';


class app extends React.Component{
	return (<div className="box">
		<input 
		value={this.state.value} 
		// value={this.state.value} 
		onChange ={this.handlechange}

		ref={(input)=>{
			this.input=input;
		}}
		 />
		
		<button onClick ={this.handleadd}>添加</button>
		<List
			bordered
			dataSource ={this.state.list}
			renderItem ={(item,index)=>{
				<List.Item onClick={this.handledel}>
				{item}
				</List.Item>
			}}
			/>
	)

}