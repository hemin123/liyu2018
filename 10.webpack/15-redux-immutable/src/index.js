
//用React的语法解析文件
import React from 'react'; // const React = require('react')

//ReactDOM就是用来把组件挂载到DOM节点上
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';


import store from './store';

//注意:自己定义的组件必须首字母大写
import App from './App'

ReactDOM.render(
	<Provider store ={store}>
	<App />
	</Provider>,document.getElementById('root'))




