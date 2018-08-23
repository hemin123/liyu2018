

import React,{ Component } from 'react';

import  Todolist from './pages/todollist/index.js';

import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
}from 'react-router-dom'


//引入css
import './App.css';



class a extends Component{
	render(){
		return(
			<Switch>
				<Route exact path="/" render={()=>(<h1>hh//h</h1>)}  />
				<Route exact path="/a" render={()=>(<h1>/a</h1>)}  />
				<Route exact path="/a/:id" render={()=>(<h1>123</h1>)}  />
				<Route exact path="/login" render={()=>(<h1>请登陆</h1>)}  />
			</Switch>
		)
		
		}
}
class App extends Component{
	construtor(props){
		// super(props),
		this.store={
			islogin :true
		}
	}

	render(){
		const Protectdrouter =({Component:Component,...rest})=>{
			<Route  
			{...rest}
			render={(props)=>(
				this.state.islogin
				?<Component {...props} />
				:<Redirect to="/login" />//冒号否 问号是
				)} 
			/> 
		}

		return(
		<Router>
			<div className = "App">
			<ul>
				<li>
					<Link to='/todollist'>TodolistTodolist</Link>
					<Link to='/A'>AAAA</Link>
					<Link to='/A/123'>12345</Link>
					<Link to='/login'>登陆</Link>
				</li>
			</ul>

			<Route path='/todollist' component={ Todolist } />
			<Route path='/A' component={ a } />
			<Route path='/login' component={ a } />
				
			</div>

		</Router>			

		)
	}
}

export default App;


