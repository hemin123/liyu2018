


import React,{ Component } from 'react';
import Head from 'common/header';
import Side from 'common/sider';
// import Sider from 'common/layout';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class MyLayout extends Component {

	render(){
		return (
			<div>
				  <Layout>
				    <Head />
				
				    <Layout>
				      <Side />
				      <Layout style={{ padding: '0 24px 24px' }}>				
				        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
				          {this.props.children}
				        </Content>
				      </Layout>
				    </Layout>
				  </Layout>
			</div>	
		)

	}
}

export default MyLayout