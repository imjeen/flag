
import React, {Component, PropTypes} from "react"

import FlagItem from "../components/FlagItem"

class FlagList extends Component {

	render(){
		return (<ul className={"flag-list grid grid--center"}>
			{
				this.props.flags.map( (item,key) => 
					<FlagItem {...item} key={key} className={'cell--5-col'} /> 
				)
			}
		</ul>);
	}

}

FlagList.propTypes = {
	flags: PropTypes.array.isRequired
}

export default FlagList
