
import React, {Component, PropTypes } from "react"

class PublicNav extends Component{


	render(){
		return (<nav className="global-nav">
			<div className="global-container">
				<ul className="nav-list">
					<li className="nav-item">
						<a className={this.props.searchType ==="ALL" ? "nav-link on" : "nav-link"} onClick={this.props.onShowByType.bind(this,'ALL')}>全部</a>
					</li>
					<li className="nav-item">
						<a className={this.props.searchType ==="EUROPE" ? "nav-link on" : "nav-link"} onClick={this.props.onShowByType.bind(this,'EUROPE')}>欧洲</a>
					</li>
					<li className="nav-item">
						<a className={this.props.searchType ==="ASIA" ? "nav-link on" : "nav-link"} onClick={this.props.onShowByType.bind(this,'ASIA')}>亚洲</a>
					</li>
					<li className="nav-item">
						<a className={this.props.searchType ==="AMERICA" ? "nav-link on" : "nav-link"} onClick={this.props.onShowByType.bind(this,'AMERICA')}>美洲</a>
					</li>
					<li className="nav-item">
						<a className={this.props.searchType ==="AFRICA" ? "nav-link on" : "nav-link"} onClick={this.props.onShowByType.bind(this,'AFRICA')}>非洲</a>
					</li>
					<li className="nav-item">
						<a className={this.props.searchType ==="OCEANIA" ? "nav-link on" : "nav-link"} onClick={this.props.onShowByType.bind(this,'OCEANIA')}>大洋洲</a>
					</li>
				</ul>
			</div>
		</nav>)
	}

}

PublicNav.propTypes = {
	searchType:  PropTypes.string.isRequired,
	onShowByType: PropTypes.func.isRequired
}

export default PublicNav
