
import * as types from "../constants/ActionTypes"
import { SET_SEARCH_TYPE, searchTypes } from "../constants/SearchTypes"

// action creator
export function addFlag(name, alias, belongto){
	return { type: types.ADD_FLAG, name, alias, belongto }
}

export function editFlag(id, name, alias, belongto){
	return { type: types.EDIT_FLAG, id, name, alias, belongto}
}

export function deleteFlag(id){
	return { type: types.DELETE_FLAG, id }
}

