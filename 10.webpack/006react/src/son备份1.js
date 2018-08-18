

import React,{Component} from 'react';

import propTypes from 'prop-types';

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
// 类型校验https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
Son.propTypes={
	index:propTypes.number,
	content:propTypes.string,
	handledel:propTypes.func.isRequired
}

//默认值
Son.defaultProps ={


}

export default Son;


