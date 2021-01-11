import { ActionTypes } from "../actions/ActionsTypes";
import { addNameDispatch } from "../actions/addNameAction";

export interface addNameInterface{
  name: string;
}

let initialState = { name: "" };

export const addNameReducer = (state:addNameInterface = initialState, action:addNameDispatch):addNameInterface => {
  switch (action.type) {
    case ActionTypes.addName:
      return {
        ...state,
        name: action.payload
      }
    default:
      return state;
  }
}