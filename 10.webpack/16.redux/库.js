
redux


路由


百度restful

class a  extends Component{
	render(){
		return (
			<Switch>
				<Route exact path="/a" render={()=>{
					<h1>hhh</h1>
				}}  />
			</Switch>

			)
	}
}




return(
			<Router>
			<div className = "App">
			<ul>
				<li>
					<Link to='/Todolist'>Todolist</Link>
				</li>
			</ul>
			
			<Route path='/Todolist' component={ Todolist } />
			
			
			</div>
			</Router>			
		)




<Provider>
	<Todolist />
</Provider>

