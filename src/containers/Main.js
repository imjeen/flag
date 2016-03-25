
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

const getSearchResult = (flags, searchValue) =>{

	searchValue = searchValue.trim()

	let _value = [], reg = new RegExp('\^' + searchValue,'i')
	
	let equalValue = flags.filter((flag) => {

		// if chinese character
		var originValue = /^[\u4e00-\u9fa5]{0,}$/g.test(searchValue) ? flag.chineseName : flag.name

		if(originValue !== searchValue && reg.test(originValue)){ 
			_value.push(flag) 
		}

		return originValue === searchValue

	})

	return equalValue.concat(_value)

}

const getResult = (data) => {
	return !!data.searchNameValue === false ?
		getTabCollect(data.flags, data.tabType) :
		getSearchResult(data.flags, data.searchNameValue)
}

const mapStatetoProps = (state) => {
	return {
		flags: getResult(state.flagData),
		searchValue: state.flagData.searchNameValue
	}
}

const Main = connect(mapStatetoProps)(FlagList)

export default Main
