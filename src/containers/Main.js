
import {connect} from "react-redux"
import FlagList from "../components/FlagList"


const getTabCollect = (flags, tabType)=>{
	switch(tabType){
		case 'TAB_ALL':
			return flags
		case tabType:
			return flags.filter( (flag) => flag.continent === tabType )
	}
}

const mapStatetoProps = (state) => {
	return {
		flags: getTabCollect(state.flagData.flags, state.flagData.tabType)
	}
}

const Main = connect(mapStatetoProps)(FlagList)

export default Main
