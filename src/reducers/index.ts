import { combineReducers } from 'redux';
import { addNameReducer } from "./addNameReducer";

export interface StoreState{
  name: string;
}


// we have to put the store state generic here
export default combineReducers({
    addNameReducer
});