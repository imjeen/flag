
import {connect} from "react-redux"
import { setSearchType } from "../actions"
import PublicNav from "../components/PublicNav"

const mapStateToProps = (state) => {
  return {
    searchType: state.flagData.searchType
  }
}

const mapDispatchToProps  =  (dispatch) => {
	return {
		onShowByType: (filter) => {
			dispatch(setSearchType(filter))
		}
	}
}

const Nav = connect(
	mapStateToProps,
	mapDispatchToProps
	)(PublicNav)

export default Nav
