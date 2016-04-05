
import {connect} from "react-redux"
import Search from "../components/Search"

import { setSearchNameValue } from "../actions/searchCreators"

const mapStatetoProps = (state) => {
	return {
		flags: state.flagData.showFlags,
		searchValue: state.flagData.searchNameValue
	}
}

const SearchResult = connect(mapStatetoProps)(Search)

export default SearchResult
