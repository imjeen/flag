

import React, {Component, PropTypes} from "react"
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"

import PublicHeader from "../components/PublicHeader"
import Nav from "../containers/Nav"
import Main from "../containers/Main"
import PublicFooter from "../components/PublicFooter"

import * as allActionCreators from "../actions"

class App extends Component{

	render(){
		return (<div className="jumbotron-main">
			<PublicHeader doSearch={this.props.doSearchByName} />
			<Nav />
			<Main />
			<PublicFooter />
		</div>)
	}

}

function mapStateToProps(state){
	return {
		flags: state.flagData.flags
	}
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(allActionCreators, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
