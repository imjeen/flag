
import { connect } from "react-redux"
import { PublicHeader } from "../component/PublicHeader"

const mapStateToProps = (state)=>{
	return {
		searchText: state.searchValue
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		doSearch: (text){
			dispatch()
		}
	}
}

const Header = connect(mapStateToProps, mapDispatchToProps)(PublicHeader)

export default Header
