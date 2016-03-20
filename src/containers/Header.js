
import { connect } from "react-redux"
import PublicHeader from "../components/PublicHeader"

import { setSearchNameValue } from "../actions/searchCreators"

const mapStateToProps = (state)=>{
	return {
		searchText: state.flagData.searchNameValue || ''
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		doSearch: (text)=>{
			dispatch(setSearchNameValue(text))
		}
	}
}

const Header = connect(mapStateToProps, mapDispatchToProps)(PublicHeader)

export default Header
