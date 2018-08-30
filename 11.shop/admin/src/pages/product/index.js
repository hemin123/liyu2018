
import React,{ Component } from 'react';
import Layout from 'common/layout'
import {Route,Switch}from 'react-router-dom'

import ProductList from './list.js' 
import ProductSave from './save.js' 

class Category extends Component{

	render(){
		return(
			<div>
				<Switch>
					<Route path='/product/save' component={ ProductSave } />
					<Route path='/product/:pid?' component= {ProductList } />	
					{/*component是Route上面的属性，需要小写component，不是react里面的

					*/}			
				</Switch>
				
			</div>
		)
	}

}
export default Category;


