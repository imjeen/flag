
/* action type */

export const ADD_FLAG = "ADD_FLAG"
export const EDIT_FLAG = "EDIT_FLAG"
export const DELETE_FLAG = "DELETE_FLAG"


export function addFlag(text){
	return { type: ADD_FLAG, text }
}

export function editFlag(id,text){
	return { type: EDIT_FLAG, id, text }
}

export function deleteFlag(id){
	return { type: DELETE_FLAG, id }
}
