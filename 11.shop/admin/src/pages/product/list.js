
import React,{ Component } from 'react';
import { Table,Breadcrumb,Button,Divider,Modal,InputNumber } from 'antd';
import Layout from 'common/layout'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const data = [{
  key: '1',
  id: '1',
  name: 'admin',
  isAdmin:true
}, {
  key: '2',
  id: '2',
  name: 'test',
  isAdmin:false
}];



class ProductList extends Component{
	constructor(props){
    super(props);
		
	}
		
		
	render(){
	
		return(
			<Layout>
				<div>
				<Breadcrumb>
	  				<Breadcrumb.Item>分类管理</Breadcrumb.Item>
	  				<Breadcrumb.Item>分类列表</Breadcrumb.Item>
	  			</Breadcrumb>
	  			<Link to= "/product/save" >add</Link>

				</div>			
			</Layout>
			
		)
	}

}


export default ProductList;




