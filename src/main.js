
import React from "react"
import ReactDOM from "react-dom"
// import { Router, Route, Link } from 'react-router'
import App from "./containers/App"
import { Provider } from "react-redux"
import configureStore from "./store/configureStore"

import '../static/sass/main.scss'

const store = configureStore();

ReactDOM.render(
	<Provider store={store} >
		<App />
	</Provider>,
	document.getElementById('mainApp')
)
