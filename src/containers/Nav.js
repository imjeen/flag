
import {connect} from "react-redux"
import { setTabType } from "../actions/tabCreators"
import PublicNav from "../components/PublicNav"

const mapStateToProps = (state) => {
  return {
    tabType: state.flagData.tabType
  }
}

const mapDispatchToProps  =  (dispatch) => {
	return {
		onShowByType: (filter) => {
			dispatch(setTabType(filter))
		}
	}
}

const Nav = connect(
	mapStateToProps,
	mapDispatchToProps
	)(PublicNav)

export default Nav
