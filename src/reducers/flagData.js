
import {	ADD_FLAG, EDIT_FLAG, DELETE_FLAG } from "../actions"
import { SET_SEARCH_TYPE, SearchTypes } from "../constants/SearchTypes"

// the state shap and initialSate
const initialSate = {
	searchType: SearchTypes.ALL,
	flags: [
		{ id: 0,  name: "Japan", 	chineseName: "日本",	continent: "ASIA" },
		{ id: 1,  name: "Yemen", 	chineseName: "也门",	continent: "ASIA"  },
		{ id: 2,  name: "China", 	chineseName: "中国",	 continent: "ASIA" },
		{ id: 3,  name: "America", chineseName: "美国",	 continent: "AMERICA" },
		{ id: 4,  name: "Britain", chineseName: "英国",	 continent: "EUROPE" },
		{ id: 5,  name: "Ukraine", chineseName: "乌克兰",	continent: "EUROPE" },
		{ id: 6,  name: "Laos", 	chineseName: "老挝",	 continent: "ASIA" },
		{ id: 7,  name: "Sultan", chineseName: "苏丹",	 continent: "AFRICA" },
		{ id: 8,  name: "Qatar", 	chineseName: "卡塔尔",	 continent: "ASIA" },
		{ id: 9,  name: "Georgia", chineseName: "格鲁吉亚（前苏联加盟共和国）",	 continent: "ASIA" },
		{ id: 10, name: "SierraLeone", chineseName: "塞拉利昂",	 continent: "AFRICA" },
		{ id: 11, name: "Russia", chineseName: "俄罗斯",	 continent: "EUROPE" },
		{ id: 12, name: "Italy", 	chineseName: "意大利",	 continent: "EUROPE" },
		{ id: 13, name: "Greenland",chineseName: "格陵兰",	 continent: "AMERICA" },
		{ id: 14, name: "Palau", 	chineseName: "帕劳",	 continent: "EUROPE" },
	]
}

export default function flagApp(state = initialSate, action){
	switch(action.type){
		case SET_SEARCH_TYPE:
			return Object.assign({}, state, { searchType: action.filter })
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
