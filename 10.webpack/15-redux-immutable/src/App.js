

import React,{ Component } from 'react';

import  Todolist from './pages/todollist/index.js';


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


