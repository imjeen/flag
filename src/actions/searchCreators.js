
import { SET_SEARCH_NAME_VALUE } from "../constants/SearchTypes"

export function setSearchNameValue(nameValue){
	return { type: SET_SEARCH_NAME_VALUE, nameValue }
}
