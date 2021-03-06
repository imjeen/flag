
import React, {Component, PropTypes} from "react"

import FlagItem from "../components/FlagItem"

class FlagList extends Component {

	constructor(props){
		super(props);
		this.state = {
			id: 'all',
			flags: []
		}
	}

	handleState(){
		this.setState({
			id: this.props.params.id,
			flags: this.props.flags
		})
	}

	componentDidMount(){ this.handleState(); }

	componentWillReceiveProps(nextProps){
		this.setState({
			flags: this.props.flags
		});
	}

	componentDidUpdate(prevProps, prevState){
		if(prevState.id !== this.props.params.id ){
			this.handleState();
		}
	}

	render(){
		return (<main className="main-body">
			<ul className={"flag-list grid grid--center"}>
				{
					this.state.flags.map( (item,key) => 
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
