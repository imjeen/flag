

import React, {Component, PropTypes} from "react"
import { connect } from "react-redux"

import FlagList from "../components/FlagList"

class App extends Component{

	render(){
		return (<main>
			<FlagList flags={this.props.flags} />
		</main>)
	}

}

function mapStateToProps(state){
	return {
		flags: state.flags
	}
}

export default connect(
	mapStateToProps
)(App)
