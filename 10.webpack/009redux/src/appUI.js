	import React,{ Component } from 'react';
import { Input,Button,Row,Col,List } from 'antd';

	//写组件
class AppUI extends Component{
		render(){
		return(
			<div className="App">
			    <Row>
			      <Col span={18} >
			      		<Input
			      			 value={this.props.value} 
			      			onChange ={this.props.handlechange} /> 
			      	</Col>
			      <Col span={6} >
			      <Button type="primary" onClick={this.props.handleadd}>增加</Button></Col>
			    </Row>
			    <List
			      style={{ marginTop: 10 }}
			      bordered
			      dataSource={this.props.list}
			      renderItem={(item,index) => (<List.Item onClick={this.handledel.bind(this.props,index)} >{item}</List.Item>)}
			    />			    			
			</div>

		)}
}	
/*const appUI =(props)=>{
		return(
			<div className="App">
			    <Row>
			      <Col span={18} ><Input
			      			 value={props.value} 
			      			onChange ={props.handlechange} /> 
			      	</Col>
			      <Col span={6} >
			      <Button type="primary" onClick={props.handleadd}>增加</Button></Col>
			    </Row>
			    <List
			      style={{ marginTop: 10 }}
			      bordered
			      dataSource={props.list}
			      renderItem={(item,index) => (<List.Item onClick={props.handledel(this,index)} >{item}</List.Item>)}
			    />			    			
			</div>

		)
}	*/

export default AppUI;