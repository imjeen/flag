
import {connect} from "react-redux"
import FlagList from "../components/FlagList"

const mapStatetoProps = (state) => {
	return {
		flags: state.flagData.showFlags
	}
}


const Main = connect(mapStatetoProps)(FlagList)

export default Main
