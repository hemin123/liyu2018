
import React,{ Component } from 'react';
import { Table } from 'antd';
import Layout from 'common/layout'

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
}];

<Table dataSource={dataSource} columns={columns} />

class User extends Component{

	render(){
		const data =[];
		for (var i = 0; i < 500; i++) {
			data.push({
				key:i,
				username:'test'+i,
				isAdmin:false,
			})
		}
		return(
			<div>
				<Layout>
					<Table 
						dataSource={data} 
						columns={columns} 
						pagination={
							{

							}
						}/>
				</Layout>
			</div>
		)
	}

}


export default User;
