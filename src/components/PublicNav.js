
import React, {Component, PropTypes } from "react"


class PublicNav extends Component{

	handleDelegateFromLink(e){
		e.target.hasAttribute('data-type')
			&& this.props.onShowByType(e.target.dataset.type)
	}

	componentWillUpdate(nextPros,nextState){
		nextPros.tabType 
			&& globalEventEmitter.dispatch('resetHeaderForm')
	}

	render(){
		return (<nav className="global-nav">
			<div className="global-container">
				<ul className="nav-list" onClick={this.handleDelegateFromLink.bind(this)}>
					<li className="nav-item">
						<a data-type="TAB_ALL" className={this.props.tabType === "TAB_ALL" ? "nav-link on" : "nav-link"}>全部</a>
					</li>
					<li className="nav-item">
						<a data-type="TAB_EUROPE" className={this.props.tabType === "TAB_EUROPE" ? "nav-link on" : "nav-link"}>欧洲</a>
					</li>
					<li className="nav-item">
						<a  data-type="TAB_ASIA"className={this.props.tabType === "TAB_ASIA" ? "nav-link on" : "nav-link"}>亚洲</a>
					</li>
					<li className="nav-item">
						<a data-type="TAB_AMERICA" className={this.props.tabType === "TAB_AMERICA" ? "nav-link on" : "nav-link"}>美洲</a>
					</li>
					<li className="nav-item">
						<a data-type="TAB_AFRICA" className={this.props.tabType === "TAB_AFRICA" ? "nav-link on" : "nav-link"}>非洲</a>
					</li>
					<li className="nav-item">
						<a data-type="TAB_OCEANIA" className={this.props.tabType === "TAB_OCEANIA" ? "nav-link on" : "nav-link"}>大洋洲</a>
					</li>
				</ul>
			</div>
		</nav>)
	}

}

PublicNav.propTypes = {
	tabType:  PropTypes.string.isRequired,
	onShowByType: PropTypes.func.isRequired
}

export default PublicNav
