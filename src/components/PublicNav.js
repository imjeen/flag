
import React, {Component, PropTypes } from "react"
import { Link } from 'react-router'

class PublicNav extends Component{

	handleDelegateFromLink(e){
		e.target.nodeName === "A"
			&& this.props.setTabType(e.target.dataset.type)
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
						<Link to="/land/all" data-type="all" activeClassName="on"  className="nav-link">全部</Link>
					</li>
					<li className="nav-item">
						<Link to="/land/europe" data-type="europe" activeClassName="on"  className="nav-link">欧洲</Link>
					</li>
					<li className="nav-item">
						<Link to="/land/asia" data-type="asia" activeClassName="on"  className="nav-link">亚洲</Link>
					</li>
					<li className="nav-item">
						<Link to="/land/america" data-type="america" activeClassName="on"  className="nav-link">美洲</Link>
					</li>
					<li className="nav-item">
						<Link to="/land/africa" data-type="africa" activeClassName="on"  className="nav-link">非洲</Link>
					</li>
					<li className="nav-item">
						<Link to="/land/oceania" data-type="oceania" activeClassName="on"  className="nav-link">大洋洲</Link>
					</li>
				</ul>
			</div>
		</nav>)
	}

}

PublicNav.propTypes = {
	tabType:  PropTypes.string.isRequired,
	setTabType: PropTypes.func.isRequired
}

export default PublicNav
