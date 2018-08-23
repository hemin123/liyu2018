

import React,{ Component } from 'react';

import  Todolist from './pages/todollist/index.js';

import {
	BrowserRouter as Router,
	// HashRouter as Router,
	Route,
	Link,
	Switch,
Redirect

}from 'react-router-dom'


//引入css
import './App.css';



class a extends Component{
	render(){
		return(
			<Switch>
				<Route exact path="/" render={()=>(<h1>hh//h</h1>)}  />
				<Route exact path="/a" render={()=>(<h1>/a</h1>)}  />
				<Route  path="/a/sub" render={(route)=>(<h1>123subsub</h1>)}  />				
				<Route  path="/a/:id" render={(route)=>(<h1>123参数{route.match.params.id}</h1>)}  />
				<Route exact path="/login" render={()=>(<h1>请登陆</h1>)}  />
			</Switch>
		)
		
		}
}

class Login extends Component{
	render(){
		return (
			<div>
				login请先登陆。。。
			</div>
		)
	}

}
class App extends Component{
	constructor(props){
		 super(props);
		this.state={
			islogin :false
		}
	}

	render(){
		const Protectedrouter =({Component:Component,...rest})=>(
			<Route  
			{...rest}
			render={props=>(
				this.state.islogin
				?<Component {...props} />
				:<Redirect to="/login" />//冒号否 问号是
				)} 
			/> 
		)

		return(
		<Router>
			<div className = "App">
			<ul>
				<li>
					<Link to='/todollist'>TodolistTodolist</Link>
					<Link to='/A'>AAAA</Link>
					<Link to='/A/123'>12345</Link>
					<Link to='/A/sub'>subsub</Link>
					<Link to='/b'>bbbbbb</Link>
					<Link to='/login'>登陆</Link>
				</li>
			</ul>

			<Route path='/todollist' component={ Todolist } />
			<Protectedrouter path='/A'component={ a} />
			<Protectedrouter path='/b' render={()=>(<h1>bbb</h1>)} />
			<Route path='/login' component={ Login } />
				
			</div>

		</Router>			

		)
	}
}

export default App;


