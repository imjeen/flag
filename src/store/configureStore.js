
import { createStore } from "redux"

// import {addFlg, editFlag, deleteFlag} from "../actions"
import rootReducer from "../reducers/"


export default function configureStore(initialState){
	const store = createStore(rootReducer, initialState)
	return store
}

/*let unsubcribe = store.subcribe( () =>
	consle.log(store.getState())
)

// dispatch some action
store.dispatch(addFlg('Rusia')) 
store.dispatch(addFlg('Austria')) 
store.dispatch(deleteFlag(0))

unsubcribe();*/
