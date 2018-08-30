
import React,{ Component } from 'react';
import Layout from 'common/layout'
import { connect } from 'react-redux'
import CategorySelector from './category_selector.js'
import PicturesWall from './uploadpic.js'

import { Breadcrumb,Form,Select,InputNumber , Input,Button} from 'antd'

const Option = Select.Option;
const FormItem = Form.Item;


class NormalProductSave extends Component{
	constructor(props){
	      super(props);
	}

	render(){
    const {getFieldDecorator } = this.props.form;
	const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 2 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 22 },
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
          offset: 2,
        },
      },
    };
	  return(
	  	<Layout>
	  		<div>
	  			<Breadcrumb>
	  				<Breadcrumb.Item>商品管理</Breadcrumb.Item>
	  				<Breadcrumb.Item>添加商品</Breadcrumb.Item>
	  			</Breadcrumb>

	  			<Form style={{marginTop:30}}>
			        <FormItem
			          {...formItemLayout}
			          label="商品名称"
			        >
			          {getFieldDecorator('name', {
			            rules: [ {
			              required: true, message: ' 请输入商品名称',
			            }],
			          })(
			            <Input />
			          )}
			        </FormItem>
			        <FormItem
			          {...formItemLayout}
			          label="商品描述"
			        >
			          {getFieldDecorator('name', {
			            rules: [ {
			              required: true, message: ' 请输入商品描述',
			            }],
			          })(
			            <Input />
			          )}
			        </FormItem>
			        <FormItem
			          {...formItemLayout}
			          label="所属分类"
			        >
			        	<CategorySelector
			        		getCategoryId={(pid,id)=>{
			        			console.log(pid,id)
			        		}}
			        />
			         
			        </FormItem>
			        <FormItem
			          {...formItemLayout}
			          label="商品价格"
			        >
			          {getFieldDecorator('price', {
			            rules: [ {
			              required: true, message: ' 请输入商品价格',
			            }],
			          })(
			            <InputNumber
			            style={{width:300}}
			            min={0}
			            formatter={value=>`${value}元`}
			            parser={value=> value.replace('元','')} 
			            />
			          )}
			        </FormItem>
			        <FormItem
			          {...formItemLayout}
			          label="商品库存"
			        >
			          {getFieldDecorator('stock', {
			            rules: [ 
			            {
			              required: true, message: ' 请选择商品库存',
			            }],
			          })(
			             <InputNumber
			            style={{width:300}}
			            min={0}
			            formatter={value=>`${value}件`}
			            parser={value=> value.replace('件','')} 
			            />
			          )}
			        </FormItem>
					<FormItem
			          {...formItemLayout}
			          label="图片预览"
			        >
			         {/*<PicturesWall />*/}
			        </FormItem>
			        <FormItem
			          {...formItemLayout}
			          label="商品详情"
			        >
			          {getFieldDecorator('name', {
			            rules: [ {
			              required: true, message: ' 请选择分类名称',
			            }],
			          })(
			            <Input />
			          )}
			        </FormItem>

			      
			        <FormItem {...tailFormItemLayout}>
				          <Button 
				          	type="primary"
				          	onClick={this.handleSubmit}
				          	loading ={this.props.isAddFetching}
		
				          >提交
				          </Button>
				    </FormItem>
			    </Form>
	  			
	  		</div>
	  	</Layout>
	  
	  )
	}
}
const ProductSave = Form.create()(NormalProductSave);

const mapStateToProps = (state)=>{
	return {
		isAddFetching:state.get('category').get('isAddFetching'),
		levelOneCategories:state.get('category').get('levelOneCategories')
	}
}

const mapDispatchToProps = (dispatch)=>{
	return{
		handleAdd:(values)=>{
			dispatch(actionCreator.getAddAction(values));
		},
		getLevelOneCategories:()=>{
			dispatch(actionCreator.getLevelOneCategoriesAction());
		}
	}
}



export default connect(mapStateToProps,mapDispatchToProps)(ProductSave);