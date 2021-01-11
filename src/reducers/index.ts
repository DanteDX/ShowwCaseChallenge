import { combineReducers } from 'redux';
import { NameReducer } from "./NameReducer";
import { NameInterface } from "./NameReducer";



export interface StoreState{
  NameReducer: NameInterface;
}


// we have to put the store state generic here
export default combineReducers<StoreState>({
    NameReducer
});