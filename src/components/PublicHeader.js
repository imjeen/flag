
import React, {Component,PropTypes} from "react"

class PublicHeader extends Component{

	constructor(){
		super()
		this.state = {
			inputValue: ""
		}
	}

	handerSearch(){
		var text = this.state.inputValue
		this.props.onSearch(text)
	}

	handleChange(e){
		this.setState({ inputValue: e.target.value })
	}

	render(){
		return (<header className="global-header">
				<div className="global-container">
					<h1 className="header-title">小彩旗</h1>
					<form className="header-search form-group">
						<input autoFocus="true" className="form-field" type="text" name="q" placeholder="Search"
							onChange={this.handleChange.bind(this)} />
						<button className="button-link"  onClick={this.handerSearch.bind(this)}>
							<div data-svg-icon>
								<svg viewBox="0 0 24 24"><path d="M15.5,14h-0.8l-0.3-0.3c1-1.1,1.6-2.6,1.6-4.2C16,5.9,13.1,3,9.5,3S3,5.9,3,9.5C3,13.1,5.9,16,9.5,16c1.6,0,3.1-0.6,4.2-1.6 l0.3,0.3v0.8l5,5l1.5-1.5L15.5,14z M9.5,14C7,14,5,12,5,9.5C5,7,7,5,9.5,5S14,7,14,9.5C14,12,12,14,9.5,14z"></path></svg>
							</div>
						</button>
					</form>
				</div>
		</header>)
	}

}

PublicHeader.propTypes = {
	onSearch: PropTypes.func,
	searchText: PropTypes.string 
}

export default PublicHeader
