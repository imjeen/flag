
import {	ADD_FLAG, 
					// EDIT_FLAG,
					DELETE_FLAG } from "../actions/flag"

const initialSate = [
	{ id: 0, name: "Japan" },
	{ id: 0, name: "Yemen" },
]

export default function flags(state = initialSate, action){
	switch(action.type){
		case ADD_FLAG:
		 	return [
			 	{
			 		id: 1 + state.reduce( (prev,cur) => Math.max(prev,cur.id), -1 ),
			 		name: action.text
			 	},
			 	...state
		 	]

		/*case EDIT_FLAG:
			return state.map( (item) => 
			 	item.id === action.id ?
			 		Object.assign({},item, { name: action.name }) :
			 		item
			)*/

		case DELETE_FLAG:
			return state.filter( (item) => item.id !== action.id )

		default:
			return state

	}

}
