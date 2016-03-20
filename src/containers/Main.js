
import {connect} from "react-redux"
import FlagList from "../components/FlagList"


const getFilterCollect = (flags, filter)=>{
	switch(filter){
		case 'ALL':
			return flags
		case filter:
			return flags.filter( (flag) => flag.continent === filter )
	}
}

const mapStatetoProps = (state) => {
	return {
		flags: getFilterCollect(state.flagData.flags, state.flagData.searchType)
	}
}

const Main = connect(mapStatetoProps)(FlagList)

export default Main
