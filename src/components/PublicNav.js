
import React, {Component, PropTypes } from "react"

class PublicNav extends Component{


	render(){
		return (<nav className="global-nav">
			<div className="global-container">
				<ul className="nav-list">
					<li className="nav-item">
						<a className={this.props.tabType === "TAB_ALL" ? "nav-link on" : "nav-link"} onClick={this.props.onShowByType.bind(this,'TAB_ALL')}>全部</a>
					</li>
					<li className="nav-item">
						<a className={this.props.tabType === "TAB_EUROPE" ? "nav-link on" : "nav-link"} onClick={this.props.onShowByType.bind(this,'TAB_EUROPE')}>欧洲</a>
					</li>
					<li className="nav-item">
						<a className={this.props.tabType === "TAB_ASIA" ? "nav-link on" : "nav-link"} onClick={this.props.onShowByType.bind(this,'TAB_ASIA')}>亚洲</a>
					</li>
					<li className="nav-item">
						<a className={this.props.tabType === "TAB_AMERICA" ? "nav-link on" : "nav-link"} onClick={this.props.onShowByType.bind(this,'TAB_AMERICA')}>美洲</a>
					</li>
					<li className="nav-item">
						<a className={this.props.tabType === "TAB_AFRICA" ? "nav-link on" : "nav-link"} onClick={this.props.onShowByType.bind(this,'TAB_AFRICA')}>非洲</a>
					</li>
					<li className="nav-item">
						<a className={this.props.tabType === "TAB_OCEANIA" ? "nav-link on" : "nav-link"} onClick={this.props.onShowByType.bind(this,'TAB_OCEANIA')}>大洋洲</a>
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
