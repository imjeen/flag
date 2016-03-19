

import React, {Component, PropTypes} from "react"
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"

import FlagList from "../components/FlagList"
import PublicHeader from "../components/PublicHeader"
import PublicNav from "../components/PublicNav"
import PublicFooter from "../components/PublicFooter"

import * as allActionCreators from "../actions"

class App extends Component{

	render(){
		return (<div>
			<PublicHeader onSearch={this.props.doSearchByName} />
			<PublicNav />
			<FlagList flags={this.props.flags} />
			<PublicFooter></PublicFooter>
		</div>)
	}

}

function mapStateToProps(state){
	return {
		flags: state.flagApp.flags
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
