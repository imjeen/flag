
import {	ADD_FLAG, EDIT_FLAG, DELETE_FLAG } from "../actions"
import { SET_SEARCH_NAME_VALUE } from "../constants/SearchTypes"
import { TAB_ALL, SET_TAB_TYPE} from "../constants/TabTypes"

// the state shap and initialSate
const initialState = {
	tabType: TAB_ALL,
	searchNameValue: "",
	showFlags: [],
	flags: [
		{ id: 0,  name: "Japan", 	chineseName: "日本",	continent: "TAB_ASIA" },
		{ id: 1,  name: "Yemen", 	chineseName: "也门",	continent: "TAB_ASIA"  },
		// { id: 2,  name: "China", 	chineseName: "中国",	 continent: "TAB_ASIA" },
		// { id: 3,  name: "America", chineseName: "美国",	 continent: "TAB_AMERICA" },
		// { id: 4,  name: "Britain", chineseName: "英国",	 continent: "TAB_EUROPE" },
		{ id: 5,  name: "Ukraine", chineseName: "乌克兰",	continent: "TAB_EUROPE" },
		{ id: 6,  name: "Laos", 	chineseName: "老挝",	 continent: "TAB_ASIA" },
		{ id: 7,  name: "Sultan", chineseName: "苏丹",	 continent: "TAB_AFRICA" },
		{ id: 8,  name: "Qatar", 	chineseName: "卡塔尔",	 continent: "TAB_ASIA" },
		// { id: 9,  name: "Georgia", chineseName: "格鲁吉亚（前苏联加盟共和国）",	 continent: "TAB_ASIA" },
		{ id: 10, name: "SierraLeone", chineseName: "塞拉利昂",	 continent: "TAB_AFRICA" },
		{ id: 11, name: "Russia", chineseName: "俄罗斯",	 continent: "TAB_EUROPE" },
		{ id: 12, name: "Italy", 	chineseName: "意大利",	 continent: "TAB_EUROPE" },
		// { id: 13, name: "Greenland",chineseName: "格陵兰",	 continent: "TAB_AMERICA" },
		{ id: 14, name: "Palau", 	chineseName: "帕劳",	 continent: "TAB_OCEANIA" },
		{ id: 15,  name: "Thailand", 	chineseName: "泰国",	 continent: "TAB_ASIA" },
		{ id: 16,  name: "Mauritius", 	chineseName: "毛里求斯",	 continent: "TAB_AFRICA" },
		{ id: 17,  name: "Mali", 	chineseName: "马里",	 continent: "TAB_AFRICA" },
		{ id: 18,  name: "NewCaledonia", 	chineseName: "新喀里多尼亚",	 continent: "TAB_OCEANIA" },
		{ id: 19,  name: "Columbia", 	chineseName: "哥伦比亚",	 continent: "TAB_AMERICA" },
		{ id: 20,  name: "Indonesia", 	chineseName: "印度尼西亚",	 continent: "TAB_ASIA" },
	]
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

export default function flagData(state = initialState, action){
	switch(action.type){
		case SET_TAB_TYPE:
			return Object.assign({}, state, { 
				tabType: action.tab, 
				searchNameValue: '',
				showFlags: action.tab === TAB_ALL ? state.flags : state.flags.filter( (flag) => flag.continent === action.tab )
			})
		case SET_SEARCH_NAME_VALUE:
			return Object.assign({}, state, { 
				tabType: '',
				searchNameValue: action.nameValue,
				showFlags: getSearchResult(state.flags, action.nameValue)
			})
		case ADD_FLAG:
			return Object.assign({}, state, { 
				flags: [
					...state.flags,
					{
						id: 1 + state.flags.reduce( (preFlag,curFlag) => Math.max(preFlag.id, curFlag.id),-1 ),
						name: action.name,
						chineseName: action.alias,
						continent: action.belongto
					}
				]
			})
		case EDIT_FLAG:
			return Object.assign({}, state, {
				flags: state.flags.map( (t) => {
					t.id !== action.id? t :
						Object.assign({},t,{
							name: action.name,
							chineseName: action.alias,
							continent: action.belongto
						})
				})
			})
		case DELETE_FLAG:
			return state.flags.filter( (flag) => flag.id !== action.id )
		default:
			return state
	}
}
