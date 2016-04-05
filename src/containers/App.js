
import React, {Component, PropTypes} from "react"
// import { bindActionCreators } from 'redux'
import { connect } from "react-redux"

import Header from "../containers/Header"
import Nav from "../containers/Nav"
import PublicFooter from "../components/PublicFooter"

// TODO
window.globalEventEmitter = {
	_events: {},
	dispatch: function(event,data) {
		if(!this._events[event]){ return;}
		this._events[event].forEach( (fn) => { fn(data) })
	},
	subscribe: function(event,callback) {
		if(!this._events[event]){ this._events[event] = []; }
		this._events[event].push(callback)
	},
	unsubscribe: function(event) {
		if(this._events && this._events[event]){
			delete this._events[event]
		}
	}
}

class App extends Component{

	render(){
		return (<div className="jumbotron">
			<Header />
			<Nav />
			{this.props.children}
			<PublicFooter />
		</div>)
	}

}

export default connect()(App)
