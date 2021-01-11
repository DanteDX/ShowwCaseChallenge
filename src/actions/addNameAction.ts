import { Dispatch } from "redux";
import { ActionTypes } from "./ActionsTypes";

export interface addNameDispatch{
  type: ActionTypes.addName;
  payload: string;
}

export const addName = (name:string) => (dispatch:Dispatch) => {
  dispatch<addNameDispatch>({
    type: ActionTypes.addName,
    payload: name
  })
}