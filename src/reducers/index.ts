import { combineReducers } from 'redux';
import {NameReducer } from "./NameReducer";

export interface StoreState{
  name: string;
}


// we have to put the store state generic here
export default combineReducers({
    NameReducer
});