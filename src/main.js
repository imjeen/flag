
import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, Link, browserHistory } from 'react-router'
// import createBrowserHistory from 'history/lib/createBrowserHistory'

import Routes from "./Routes"
import { Provider } from "react-redux"
import configureStore from "./store/configureStore"

import '../static/sass/main.scss'

const store = configureStore();

ReactDOM.render(
	<Provider store={store} >
		<Router history={browserHistory}>
			{Routes()}
		</Router>
	</Provider>,
	document.getElementById('mainApp')
)
