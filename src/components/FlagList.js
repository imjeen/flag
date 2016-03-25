
import React, {Component, PropTypes} from "react"

import FlagItem from "../components/FlagItem"

class FlagList extends Component {

	render(){
		return (<main className="main-body">
			{(function(value){
				if(value !== ''){
					return <p style={{'textAlign':'center'}}> you're searching: <strong>{value}</strong></p>
				}
			}(this.props.searchValue))}
			<ul className={"flag-list grid grid--center"}>
				{
					this.props.flags.map( (item,key) => 
						<FlagItem {...item} key={key} className={'cell--4-col cell--4-col-phone cell--4-col-tablet'} /> 
					)
				}
			</ul>
		</main>);
	}

}

FlagList.propTypes = {
	flags: PropTypes.array.isRequired,
	searchValue: PropTypes.string
}

export default FlagList
