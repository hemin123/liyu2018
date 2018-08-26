


import React,{ Component } from 'react';

// import Sider from 'common/layout';

import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import {NavLink}from 'react-router-dom'

import './index.css'
const { Side } =Layout;
class mySide extends Component {

	render(){
		return (
			<div className= "side">
	      <Sider width={200} style={{ background: '#fff' }}>
	        <Menu
	          mode="inline"
	          style={{ minHeight: 680, borderRight: 0 }}
	        >
	            <Menu.Item key="1">
	            	<NavLink to="/">首页</NavLink>
	            </Menu.Item>
	            <Menu.Item key="2">
	            	<NavLink to="/user">用户</NavLink>
	            </Menu.Item>
	            <Menu.Item key="3">
	            	<NavLink to="/category">分类</NavLink>
	            </Menu.Item>
	            <Menu.Item key="4">
	            	<NavLink to="/">商品管理</NavLink>
	            </Menu.Item>
				    
	        </Menu>
	      </Sider>
	    </div>				     

		)
	}
}

export default mySide