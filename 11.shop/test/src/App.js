
import React,{ Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
}from 'react-router-dom'
import Login from './pages/login/index.js'
//引入css
import './App.css';

class App extends Component{
	render(){
		return(
		<Router>
			<div className = "App">
			<ul>
				<li>
					<Link to='/login'>登陆</Link>
				</li>
			</ul>
			ppppppp
				<Route path='/login' component={ Login } />				
			</div>
		</Router>
		)
	}
}

export default App;


