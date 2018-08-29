
import React,{ Component } from 'react';
import Layout from 'common/layout'
import { connect } from 'react-redux'
import {actionCreator } from './store'

import { Breadcrumb,Form,Select , Input,Button} from 'antd'
const Option = Select.Option;
const FormItem = Form.Item;


class NormalCategoryAdd extends Component{
	constructor(props){
	      super(props);
	      this.handleSubmit=this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
	    e.preventDefault();
	    this.props.form.validateFields((err, values) => {
	      if (!err) {
	        // this.props.
	     	this.props.handleAdd(values); 
	      }
	    });
	}

	render(){
		
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
	  return(
	  	<Layout>
	  		<div>
	  			<Breadcrumb>
	  				<Breadcrumb.Item>分类管理</Breadcrumb.Item>
	  				<Breadcrumb.Item>添加分类</Breadcrumb.Item>
	  			</Breadcrumb>

	  			<Form >
			        <FormItem
			          {...formItemLayout}
			          label="分类名称"
			        >
			          {getFieldDecorator('name', {
			            rules: [ {
			              required: true, message: ' 请输入分类名称',
			            }],
			          })(
			            <Input />
			          )}
			        </FormItem>
			        <FormItem
			          {...formItemLayout}
			          label="分类管理"
			        >
			          {getFieldDecorator('pid', {
			            rules: [ {
			              required: true, message: ' 请输入父类名称',
			            }],
			          })(
			         
						    <Select initialValue="0" style={{ width: 120 }} >
						      <Option value="0">根分类</Option>
						      {
						      	/*this.props.levelOneCategories.map((category)=>{
						      		return <Option key={category.get('_id')} value={category.get('_id')}>根分类/{category.get('name')}</Option>
						      	})*/
						      }
						      
						    </Select>
			          )}
			        </FormItem>
			         <FormItem {...tailFormItemLayout}>
				          <Button 
				          	type="primary"
				          	onClick={this.handleSubmit}
				            loading ={this.props.isFetching}
				          >提交
				          </Button>
				      </FormItem>
			    </Form>
	  		</div>
	  	</Layout>
	  
	  )
	}
}

const mapStateToProps =(state)=>{
  return{
    isAddFetching:state.get('category').get('isAddFetching'),
	levelOneCategories:state.get('category').get('levelOneCategories')
  }
}
const mapDispathProps=(dispatch)=>{
  return {
    handleAdd:(values)=>{
      const action = actionCreator.getAddAction(values);
      dispatch(action);
    }, 
    getLevelOneCategory:()=>{
      const action = actionCreator.getLevelOneCategoriesAction();
      dispatch(action);
    },
  }
}

const CategoryAdd= Form.create()(NormalCategoryAdd);
export default  connect(mapStateToProps,mapDispathProps)(CategoryAdd);