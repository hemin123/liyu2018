/*
* @Author: TomChen
* @Date:   2018-08-27 15:19:33
* @Last Modified by:   TomChen
* @Last Modified time: 2018-09-01 10:07:03
*/
import React,{ Component } from 'react';
import { Breadcrumb,Form, Input,Select,Button,InputNumber } from 'antd';
import { connect } from 'react-redux'
import { actionCreator } from './store'

import Layout from 'common/layout'
import CategorySelector  from './category-selector.js'
import UploadImage from 'common/upload-image'
import RichEditor from 'common/rich-editor'

import  { UPLOAD_PRODUCT_IMAGE,UPLOAD_PRODUCT_DETAIL_IMAGE } from 'api'

import './detail.css'

const FormItem = Form.Item;
const Option = Select.Option;

class NormalProductDetail extends Component{
	constructor(props){
		super(props);
		this.state ={
			productId : this.props.match.params.productId
		}
	}
	componentDidMount(){
		if (this.state.productId) {//根据当前的id取相应的product
			this.props.handleProductDetail(this.state.productId);
		}
	}
	
	render(){
			const {
				parentCategoryId,
				categoryId,
				images,
				detail,
				name,
				description,
				price,
				stock,			
			} =this.props;
		 //console.log(this.props);
		 let imgBox ='';
		 if (images) {
		 	imgBox= images.split(',').map((img,index)=>(
		 		<li key={index}>
		 			<img src ={img} />
		 		</li>
		 	))
		 }
		const fileList =[];
		if (images) {
			const fileList =images.split(',').map((img,index)=>({
				uid:index,
				status:'done',
				url:img,
				response:img
			}))

		}
		console.log("fileList"+fileList);
		const { getFieldDecorator } = this.props.form;
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
						<Breadcrumb.Item>商品详情
						</Breadcrumb.Item>
					</Breadcrumb>
					<Form style={{marginTop:30}}>
				        <FormItem
				          {...formItemLayout}
				          label="商品名称"
				        >
				            <Input 
				            	disabled = {true}
				            	defaultValue ={name}
				            />
				          
				        </FormItem>
				        <FormItem
				          {...formItemLayout}
				          label="商品描述"
				        >			          
				            <Input 
				              defaultValue ={description}
				              disabled ={true}
				            />
				         
				        </FormItem>				        
				        <FormItem
				          {...formItemLayout}
				          label="所属分类"         
				        >
				        	<CategorySelector
				        		parentCategoryId={parentCategoryId}
				        		categoryId={categoryId}
				        		disabled ={true}
				        	 />

				        </FormItem>	
				        <FormItem
				          {...formItemLayout}
				          label="商品价格"
				        >
				            <InputNumber 
				            	value ={price}
				            	style={{width:300}}
				            	min={0}
								formatter={value => `${value}元`}
      							parser={value => value.replace('元', '')}
      							disabled ={true}				            	
				            />
				    
				        </FormItem>
				        <FormItem
				          {...formItemLayout}
				          label="商品库存"
				        >			          
				            <InputNumber 
				            	style={{width:300}}
				            	value={stock}
								formatter={value => `${value}件`}
      							parser={value => value.replace('件', '')}
      							disabled ={true}					            	
				            />
				         
				        </FormItem>	
				        <FormItem
				          {...formItemLayout}
				          label="商品图片"
				        >
							<ul className ='imgBox'>
								{imgBox}
							</ul>
				        </FormItem>	
				        <FormItem
				          {...formItemLayout}
				          label="商品详情"
				        >
							<div dangerouslySetInnerHTML={{__html:detail}} /> 
				        </FormItem>					        				        				        					        			        
				       		        					
					</Form>
				</div>
			</Layout>
		)
	}

}

const ProductDetail = Form.create()(NormalProductDetail);

const mapStateToProps = (state)=>{
	return {
	
		parentCategoryId:state.get('product').get('parentCategoryId'),
		categoryId:state.get('product').get('categoryId'),
		images:state.get('product').get('images'),
		detail:state.get('product').get('detail'),
		name:state.get('product').get('name'),
		description:state.get('product').get('description'),
		price:state.get('product').get('price'),
		stock:state.get('product').get('stock'),
	}
}

const mapDispatchToProps = (dispatch)=>{
	return{
		
		handleProductDetail:(productId)=>{
			dispatch(actionCreator.getProductDetailAction(productId));

		}
	}
}



export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail);