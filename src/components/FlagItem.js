
import React, { Component, PropTypes } from "react";

class FlagItem extends Component {

	render(){

		return (<li className={"flag-item "  + this.props.className }>
			<figure className={this.props.name + "-flag figure-flag"}>{this.props.name + " flag"}</figure>
			<h2>{this.props.name}</h2>
		</li>)
		
	}

}

FlagItem.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string.isRequired
}

export default FlagItem
