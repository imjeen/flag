
import {connect} from "react-redux"
import PublicNav from "../components/PublicNav"

import {TAB_ALL, TAB_EUROPE, TAB_ASIA, TAB_AFRICA, TAB_AMERICA, TAB_OCEANIA} from "../constants/TabTypes"
import { setTabType } from "../actions/tabCreators"

const mapStateToProps = (state) => {
  return {
    tabType: state.flagData.tabType
  }
}

const mapDispatchToProps = (dispatch)=>{
	return {
		setTabType: (tab)=>{

			let tabType = '';
			switch(tab){
				case 'europe': tabType = TAB_EUROPE; break;
				case 'asia': tabType = TAB_ASIA; break;
				case 'africa': tabType = TAB_AFRICA; break;
				case 'america': tabType = TAB_AMERICA; break;
				case 'oceania': tabType = TAB_OCEANIA; break;
				case 'all': tabType = TAB_ALL; break;
			}

			dispatch(setTabType(tabType));

		}
	}
}

const Nav = connect(
	mapStateToProps,
	mapDispatchToProps
	)(PublicNav)

export default Nav
