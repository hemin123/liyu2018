
import React,{ Component } from 'react';
import { Table,Breadcrumb,Button,Divider,Modal,InputNumber } from 'antd';
import Layout from 'common/layout'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import  { actionCreator }  from './store';


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
const columns = [{
  title: 'id',
  dataIndex: 'id',
  key: 'id',
}, {
  title: '分类名称',
  dataIndex: 'name',
  key: 'name',
} ,{
  title: '排序',
  dataIndex: 'order',
  key: 'order',
  render:(order,record)=>{
  	return <InputNumber defaultValue={order} />
  }

}, {
  title: '操作',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;"
		onClick={()=>{
	  		this.props.showUpdateModal(record.id,record.name)
	  	}}
      >
      更新分类
      </a>
      {
      	record.pid ==0
      	?(<span>
      		<Divider type="vertical" />
      		<Link to={"/category/"+ record.id}> 查看子分类</Link>

      	</span>)
       	:null
  		}
    </span>
  ),
}
];


class CategoryList extends Component{
	  constructor(props){
      super(props);
      this.state ={
				pid :this.props.match.params.pid||0
      }
			 console.log(this.props.match.params);
		
		}
		componentDidMount(){
			//第一个参数是父级id，第二个参数的页码
			this.props.handlePage(this.state.pid , 1);
		}
		componentDidUpdate(preProps,preState){
			console.log('componentDidUpdate');
					const oldpath=preProps.location.pathname;
					const newpath=this.props.location.pathname;
					if (oldpath!=newpath) {
						 this.setState({//更改pid的值
							pid :this.props.match.params.pid||0
			      })
					}
		}
	render(){
		const pid =this.state.pid;
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
		return(
			<Layout>
				<div>
					<Breadcrumb>
	  				<Breadcrumb.Item>分类管理</Breadcrumb.Item>
	  				<Breadcrumb.Item>分类列表</Breadcrumb.Item>
	  			</Breadcrumb>
				<div style={{marginTop:10}} className="clearfix">
						<h4 style={{ float:'left'}}>父类ID:{pid}</h4>
						<Link to="/Category/add"  >
							<Button type="primary" style={{float:'right'}} >新增分类</Button>
						</Link>
	  			</div>
	  		
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
						onChange = {(pagination)=>{
							this.props.handlePage(pid,pagination.current)
						}}
						loading={
							{
								spinning:this.props.isPageFetching,
								tip:"加载中"
							}
						}/>
						<Modal
							title="修改分类名称"
							visible={this.props.updateModalVisible}
							onOk={this.props.handleUpdateName}
							onCancel={this.props.handleCancelName}
						>
						<p>Some contents...</p>
						</Modal>	

				</div>			
			</Layout>
			
		)
	}

}


const mapStateToProps =(state)=>{
  return{
  	isPageFetching:state.get('category').get('isPageFetching'),
    total:state.get('category').get('total'),
    current:state.get('category').get('current'),
    pageSize:state.get('category').get('pageSize'),
    list:state.get('category').get('list'),
    updateModalVisible:state.get('category').get('updateModalVisible'),	
  }
}
const mapDispathProps=(dispatch)=>{
  return {
    handlePage:(pid,page)=>{
      const action = actionCreator.getPageAction(pid,page);
      dispatch(action);
    },
	showUpdateModal:(updateId,updateName)=>{
		dispatch(actionCreator.getShowUpdateModalAction(updateId,updateName));
	}
  }
}

export default connect(mapStateToProps,mapDispathProps)(CategoryList);




