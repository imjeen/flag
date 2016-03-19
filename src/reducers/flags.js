
import {	ADD_FLAG, EDIT_FLAG, DELETE_FLAG } from "../actions"
import { SET_SEARCH_TYPE, SearchTypes } from "../constants/SearchTypes"

// the state shap and initialSate
const initialSate = {
	searchType: SearchTypes.ALL,
	flags: [
		{ id: 0,  name: "Japan", 	chineseName: "日本",	continent: "asia" },
		{ id: 1,  name: "Yemen", 	chineseName: "也门",	continent: "asia"  },
		{ id: 2,  name: "China", 	chineseName: "中国",	 continent: "asia" },
		{ id: 3,  name: "America", chineseName: "美国",	 continent: "north america" },
		{ id: 4,  name: "Britain", chineseName: "英国",	 continent: "europe" },
		{ id: 5,  name: "Ukraine", chineseName: "乌克兰",	continent: "europe" },
		{ id: 6,  name: "Laos", 	chineseName: "老挝",	 continent: "asia" },
		{ id: 7,  name: "Sultan", chineseName: "苏丹",	 continent: "africa" },
		{ id: 8,  name: "Qatar", 	chineseName: "卡塔尔",	 continent: "asia" },
		{ id: 9,  name: "Georgia", chineseName: "格鲁吉亚（前苏联加盟共和国）",	 continent: "asia" },
		{ id: 10, name: "SierraLeone", chineseName: "塞拉利昂",	 continent: "africa" },
		{ id: 11, name: "Russia", chineseName: "俄罗斯",	 continent: "europe" },
		{ id: 12, name: "Italy", 	chineseName: "意大利",	 continent: "asia" },
		{ id: 13, name: "Greenland",chineseName: "格陵兰",	 continent: "north america" },
		{ id: 14, name: "Palau", 	chineseName: "帕劳",	 continent: "europe" },
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
