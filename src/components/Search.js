
import React, {Component, PropTypes} from "react"

import FlagItem from "../components/FlagItem"

class Search extends Component {

	constructor(props){
		super(props);
		this.state = {
			keyword: '',
			flags: []
		}
	}

	handleState(){
	 let { query } = this.props.location
	 let keyword = query ? query.q : ''
		// this.props.doSearch(keyword)
		this.setState({
			q: keyword,
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
		if(prevState.q !== this.props.location.query.q){
			this.handleState();
		}
	}

	render(){
		return (<main className="main-body">
			{(function(value){
				if(value !== ''){
					return <p style={{'textAlign':'center'}}> you're searching: <strong>{value}</strong></p>
				}
			}(this.props.searchValue))}
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

Search.propTypes = {
	flags: PropTypes.array.isRequired,
	doSearch: PropTypes.func,
	searchValue: PropTypes.string.isRequired
}

export default Search
