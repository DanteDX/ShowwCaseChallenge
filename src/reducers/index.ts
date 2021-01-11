import { combineReducers } from 'redux';
import { NameReducer } from "./NameReducer";
import { NameInterface } from "./NameReducer";
import { EducationReducer } from "./EducationReducer";
import { EducationInterface } from "./EducationReducer";



export interface StoreState{
  NameReducer: NameInterface;
  EducationReducer: EducationInterface[];
}


// we have to put the store state generic here
export default combineReducers<StoreState>({
  NameReducer,
  EducationReducer
});