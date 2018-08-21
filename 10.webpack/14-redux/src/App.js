

import React,{ Component } from 'react';

import axios from 'axios';
import  Todolist from './pages/todolist'
import store from './store';

import { connect } from  'react-redux';

import { chageValueAction,addItemAction,deleteItemAction,getInitDataAction } from './store/actionCreator.js'


//引入css
import './App.css';

//处理业务逻辑 - 容器组件
class App extends Component{
		render(){
		//return 只能返回一个
		return(
			<div className = "App">
				<Todolist />
			</div>			
		)
	}
}

export default App;


