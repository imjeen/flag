
import React, {Component, PropTypes } from "react"

class PublicNav extends Component{

	render(){
		return (<nav className="global-nav">
			<div className="global-container">
				<ul className="nav-list">
					<li className="nav-item"><a className="nav-link" href="#">全部</a></li>
					<li className="nav-item"><a className="nav-link" href="#">欧洲</a></li>
					<li className="nav-item"><a className="nav-link" href="#">亚洲</a></li>
					<li className="nav-item"><a className="nav-link" href="#">非洲</a></li>
					<li className="nav-item"><a className="nav-link" href="#">澳洲</a></li>
					<li className="nav-item"><a className="nav-link" href="#">北美洲</a></li>
					<li className="nav-item"><a className="nav-link" href="#">南美洲</a></li>
				</ul>
			</div>
		</nav>)
	}

}

export default PublicNav
