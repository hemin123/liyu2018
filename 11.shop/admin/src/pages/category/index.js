
import React,{ Component } from 'react';
import { Table } from 'antd';
import Layout from 'common/layout'
import { connect } from 'react-redux'
import {Route,Switch}from 'react-router-dom'

import List from './list.js' 
import Add from './add.js' 

class Category extends Component{

	render(){
		return(
			<div>
				<Switch>
					<Route path='/category/add' Component={ Add } />
					<Route path='/category' Component={ List } />				
				</Switch>
				
			</div>
		)
	}

}
export default Category;


