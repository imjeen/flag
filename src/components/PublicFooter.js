
import React, {Component, PropTypes} from "react"

class PublicFooter extends Component{

	render(){
		return (<footer className="global-footer footer-to-bottom">
			<div className="global-container">
				<p>Copyright &copy; {new Date().getFullYear()} @imjeen 版权所有</p>
			</div>
		</footer>)
	}

}

export default PublicFooter
