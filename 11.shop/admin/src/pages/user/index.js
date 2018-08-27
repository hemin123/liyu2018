
import React,{ Component } from 'react';
import { Table } from 'antd';
import Layout from 'common/layout'
import { connect } from 'react-redux'
import  { actionCreator }  from './store';

const dataSource = [{
  key: '1',
  username: 'admin',
  isAdmin:true
}, {
  key: '2',
  username: 'test',
  isAdmin:false
}];

const columns = [{
  title: '用户名',
  dataIndex: 'username',
  key: 'username',
}, {
  title: '是否是管理员',
  dataIndex: 'isAdmin',
  key: 'isAdmin',
  render:(isAdmin)=>(isAdmin ? '是':'否')
  //小括号
} ,{
  title: '手机号',
  dataIndex: 'phone',
  key: 'phone',

}, {
  title: '邮箱',
  dataIndex: 'email',
  key: 'email',
},
{
  title: '日期',
  dataIndex: 'creatAt',
  key: 'creatAt',
}
//法一

];

		

class User extends Component{
	componentDidMount(){
		this.props.handlePage(1);
	}
	render(){
	const data =this.props.list.map((user)=>{
		return{
			key:user.get('_id'),
			username:user.get('username'),
			isAdmin:user.get('isAdmin'),
			phone:user.get('phone'),
			email:user.get('email'),
			creatAt:user.get('creatAt')
		}
	}).toJS();
	// const data =this.props.list;
	/*const data =[];
		for (var i = 0; i < 500; i++) {
			data.push({
				key:i,
				username:'test'+i,
				isAdmin:false,
			})
		}*/
		return(
			<div>
				<Layout>
			{/*bread  */}
					<Table 
						dataSource={data} 
						columns={columns} 
						pagination={
							{
								current:this.props.current,
								defaultCurrent:this.props.current,
								total:this.props.total,
								pageSize:this.props.pageSize,

							}
						}
						onchange={
							(pagination)=>{
								console.log(pagination)
							}
						}
						loading={
							{
								spinning:this.props.isFetching,
								tip:"加载中"
							}
						}/>
				</Layout>
			</div>
		)
	}

}



const mapStateToProps =(state)=>{
  return{
  	isFetching:state.get('user').get('spinning'),
    total:state.get('user').get('total'),
    current:state.get('user').get('current'),
    pageSize:state.get('user').get('pageSize'),
    list:state.get('user').get('list'),
  }
}
const mapDispathProps=(dispatch)=>{
  return {
    handlePage:(page)=>{
      const action = actionCreator.getPageAction(page);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispathProps)(User);


