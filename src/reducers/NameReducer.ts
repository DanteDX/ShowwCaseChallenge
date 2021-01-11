import { ActionTypes } from "../actions/ActionsTypes";
import { addNameDispatch } from "../actions/NameActions";

export interface NameInterface{
  name: string;
}

let initialState = { name: "" };

export const NameReducer = (state:NameInterface = initialState, action:addNameDispatch):NameInterface => {
  switch (action.type) {
    case ActionTypes.addName:
      return {
        ...state,
        name: action.payload
      }
    case ActionTypes.clearName:
      return {
        ...state,
        name:""
      }
    default:
      return state;
  }
}