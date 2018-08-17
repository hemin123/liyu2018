

import React,{Component} from 'react';

class Son extends Component{
	handledelete(index,props){

		console.log(this.props.index);
		this.props.handledel(this.props.index);
	}
	render(){
		return (
			<li onClick={this.handledelete.bind(this) }> 
			{this.props.content}
			</li>)
	}

}


export default Son;


