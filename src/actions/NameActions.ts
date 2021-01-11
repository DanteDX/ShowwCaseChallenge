import { Dispatch } from "redux";
import { ActionTypes } from "./ActionsTypes";

export interface addNameDispatch{
  type: ActionTypes.addName | ActionTypes.clearName;
  payload: string;
}

export const addNameAction = (name:string) => (dispatch:Dispatch) => {
  dispatch<addNameDispatch>({
    type: ActionTypes.addName,
    payload: name
  })
}

export const clearNameAction = () => (dispatch:Dispatch) => {
  dispatch<addNameDispatch>({
    type: ActionTypes.clearName,
    payload: ""
  })
}

