


import React,{ Component } from 'react';

import { Layout, Menu,Dropdown, Breadcrumb, Icon } from 'antd';
import './index.css';
import { getUserName,request,removeUsername} from 'util';

import { USER_LOGOUT } from 'api'
const { Header } = Layout;


class Head extends Component {
	constructor(props){
		super();
		this.handleLogout =this.handleLogout.bind(this);
	}
	handleLogout(){
		request:({
			url:USER_LOGOUT
		})
		.then((result)=>{
			removeUserName();
			window.location.href='/login'
		})
	}


	

	render(){
		const menu = (
		  <Menu onClick={this.handleLogout}>	    
		  
		    <Menu.Item key="3"><Icon type="logout" />退出</Menu.Item>
		  </Menu>
		);
		return (
			<div className="Header">
				<Header className="header">
					 <div className="logo">MALL</div>			
				     <Dropdown  className="down" overlay={menu} trigger={['click']}>
					    <a className="ant-dropdown-link" href="#">
					      用户{getUserName()} <Icon type="down" />
					    </a>
					  </Dropdown>,


				</Header>			  

			</div>	


		)


	}
}

export default Head