

import React,{Component} from 'react';

class Son extends Component{

	constructor(){
		super(props);

		this.handledelete=this.handledelete.bind(this)
	}

	handledelete(index,props){
		 /*console.log(this.props.index);
		 this.props.handledel(this.props.index);*/
		 const { handledelete ,index } = this.props;
		 handledelete(index);


	}
	render(){
		/*return (
			<li onClick={this.handledelete }> 
			{this.props.content}
			</li>)*/
		const { content } = this.props;
		return (
				<li onClick={this.handledelete }> 
				{content}
				</li>)
		}

}


export default Son;


