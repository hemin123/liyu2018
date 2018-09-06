/*
* @Author: TomChen
* @Date:   2018-08-30 15:13:21
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-30 16:46:32
*/
import React,{ Component } from 'react';
import { Select } from 'antd';

import { request } from 'util';
import { GET_CATEGORIES } from 'api';

const Option = Select.Option;

class CategorySelector extends Component{
	constructor(props){
		super(props);
		this.state = {
			levelOneCategories:[],
			levelOneCategoryId:'',
			levelTwoCategories:[],
			levelTwoCategoryId:'',	
			needLoadLevelTwo:false,	
			isChanged:false		
		}
		this.handleLevelOneChange = this.handleLevelOneChange.bind(this)
		this.handleLevelTwoChange = this.handleLevelTwoChange.bind(this)
	}

	componentDidMount(){
		this.loadLevelOneCategory();
	}

	static getDerivedStateFromProps(props,state){
		console.log("props",props);
		console.log("state",state);

		const levelOneCategoryIdChanged = props.parentCategoryId != state.levelOneCategoryId;
		const levelTwoCategoryIdChanged = props.categoryId != state.levelTwoCategoryId;
		console.log(levelOneCategoryIdChanged,levelTwoCategoryIdChanged)
		if (!levelOneCategoryIdChanged && !levelTwoCategoryIdChanged) {
			return null;
		}
		console.log('aaa')
		if (state.isChanged) {
			return null;
		}
		if (props.parentCategoryId==0) {
			return{
				levelOneCategoryId:props.categoryId,
				levelTwoCategoryId:'',
				 isChanged:true
			}
		}else{
			return{
				levelOneCategoryId:props.parentCategoryId,
				levelTwoCategoryId:props.categoryId	,
				needLoadLevelTwo:true,
				 isChanged:true		
			}
		}

		return null;
	}
	componentDidUpdate(){
		
		if (this.state.needLoadLevelTwo) {
			this.loadLevelTwoCategory();
			this.setState({
				needLoadLevelTwo:false
			})
			
		}
		
	}
	loadLevelOneCategory(){
		request({
			method:'get',
			url:GET_CATEGORIES,
			data:{
				pid:0
			}
		})
		.then(result=>{
			if(result.code == 0){
				this.setState({
					levelOneCategories:result.data
				})
			}
		})
	}
	//选择一级分类处理事件
	handleLevelOneChange(value){
		this.setState({
			levelOneCategoryId:value,
			levelTwoCategories:[],
			levelTwoCategoryId:''			
		},()=>{
			this.loadLevelTwoCategory();
			this.onValueChange()
		})
	}
	handleLevelTwoChange(value){
		this.setState({
			levelTwoCategoryId:value
		},()=>{
			this.onValueChange()
		})
	}
	loadLevelTwoCategory(){
		request({
			method:'get',
			url:GET_CATEGORIES,
			data:{
				pid:this.state.levelOneCategoryId
			}
		})
		.then(result=>{
			if(result.code == 0){
				this.setState({
					levelTwoCategories:result.data
				})
			}
		})		
	}
	onValueChange(){
		const {levelOneCategoryId,levelTwoCategoryId} = this.state;
		
		//如果选择了二级分类
		if(levelTwoCategoryId){
			this.props.getCategoryId(levelOneCategoryId,levelTwoCategoryId)
		}else{
			this.props.getCategoryId(0,levelOneCategoryId)
		}
		
	}
	render(){
		const {levelOneCategories,levelOneCategoryId,levelTwoCategories,levelTwoCategoryId} = this.state;
    	const levelOneOptions = levelOneCategories.map(category => <Option key={category._id} value={category._id}>{category.name}</Option>);
    	const levelTwoOptions = levelTwoCategories.map(category => <Option key={category._id} value={category._id}>{category.name}</Option>);
		return(
			<div>
				<Select 
				style={{ width: 300,marginRight:10 }} 
				onChange={this.handleLevelOneChange}
				value={levelOneCategoryId}
				defaultValue={levelOneCategoryId}
				disabled ={this.props.disabled}

				>
					{levelOneOptions}
				</Select>
				{
					levelTwoOptions.length
					? <Select
						defaultValue={levelTwoCategoryId}
						value={levelTwoCategoryId}
						style={{ width: 300 }} 
						onChange={this.handleLevelTwoChange}
						disabled ={this.props.disabled}>
							{levelTwoOptions}
					</Select>
					: null
				}

			</div>			
		)
	}
}

export default CategorySelector