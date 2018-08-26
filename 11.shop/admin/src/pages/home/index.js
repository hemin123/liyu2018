import React,{ Component } from 'react';

import Layout from 'common/layout'
import { Card, Col, Row } from 'antd';

import { connect } from 'react-redux'

import  { actionCreator }  from './store';
// connect
class Home extends Component{
	componentDidMount(){
		this.props.handleCount();
	}
	render(){
		return(
			<div> 
				<Layout>				
{/*{this.props.usernum}*/}
				    <Row gutter={16}>
				      <Col span={8}>
				        <Card title="人数" bordered={false} hoverable={true}>{this.props.usernum}</Card>
				      </Col>
				      <Col span={8}>
				        <Card title="订单数" bordered={false} hoverable={true}>{this.props.ordernum}</Card>
				      </Col>
				      <Col span={8}>
				        <Card title="商品数" bordered={false} hoverable={true}>{this.props.productnum}</Card>
				      </Col>
				    </Row>
				  
				</Layout>
			</div>
		)
	}

}

const mapStateToProps =(state)=>{
  return{
    usernum:state.get('home').get('usernum'),
    ordernum:state.get('home').get('ordernum'),
    productnum:state.get('home').get('productnum'),
  }
}
const mapDispathProps=(dispatch)=>{
  return {
    handleCount:()=>{
      const action = actionCreator.getCountAction();
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispathProps)(Home);













