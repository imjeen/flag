
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

const getSearchResult = (flags, name) =>{
	return flags.filter( (flag) => flag.name === name )
}

const getResult = (data) => {
	return !!data.searchNameValue === false ?
		getTabCollect(data.flags, data.tabType) :
		getSearchResult(data.flags, data.searchNameValue)
}

const mapStatetoProps = (state) => {
	return {
		flags: getResult(state.flagData)
	}
}

const Main = connect(mapStatetoProps)(FlagList)

export default Main
