
import React,{ Component } from 'react';
import Layout from 'common/layout'
import {Route,Switch}from 'react-router-dom'

import CategoryList from './list.js' 
import CategoryAdd from './add.js' 

class Category extends Component{

	render(){
		return(
			<div>
				<Switch>
					<Route path='/category/add' component={ CategoryAdd } />
					<Route path='/category/:pid?' component= {CategoryList } />	
					{/*component是Route上面的属性，需要小写component，不是react里面的

					*/}			
				</Switch>
				
			</div>
		)
	}

}
export default Category;


