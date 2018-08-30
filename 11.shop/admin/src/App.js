
import React,{ Component } from 'react';
import { getUserName } from 'util'
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
}from 'react-router-dom'
import Login from 'pages/login/index.js'
import Home from 'pages/home/index.js'
import User from 'pages/user/index.js'
import Category from 'pages/category/index.js'
import Product from 'pages/product/index.js'
import ErrorPage from 'common/errorpage'
import Layout from './common/layout'
//引入css
import './App.css';

class App extends Component{
	render(){
		const ProtectedRoute = ({component:Component,...rest})=>(
			<Route 
				{...rest}
				render = {props=>(
					getUserName()
					? <Component {...props} />
					: <Redirect to="/login" />
				)}
			/>
		)

		const LoginRoute =({component:Component,...rest})=>{
			if(getUserName()){
				return <Redirect to="/" />
			}else{
				return <Route {...rest} component={Component} />
			}
		}

		return(
		<Router>
			<div className = "App">
				
				{/*<Layout  />
				<Route path='/login' component={ Login } />	*/}

				<Switch>
					<ProtectedRoute exact path='/' component={ Home } />				
					<ProtectedRoute  path='/user' component={ User } />
					<ProtectedRoute  path='/category' component={ Category } />
					<ProtectedRoute  path='/product' component={ Product } />

					<LoginRoute path='/login' component={ Login } />	
					<Route  component={ ErrorPage } />	
				
				</Switch>	
			</div>
		</Router>
		)
	}
}

export default App;


