
import React,{Component} from "react"
import {Route, IndexRoute, Redirect} from "react-router"


import Home from "./components/Home"

import App from "./containers/App"
import SearchResult from "./containers/SearchResult"
import Main from "./containers/Main"

class TemplateRoute extends Component{

	render(){
		return (<div>{this.props.children}</div>)
	}

}

export default ()=> {

		return (<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="search" component={SearchResult} />
			<Route path="land" component={TemplateRoute}>
				<Route path=":id" component={Main} />
				<Redirect from=":id" to="/land/all" />
			</Route>
		</Route>)

}
