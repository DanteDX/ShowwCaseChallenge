import { Dispatch } from "redux";
import { ActionTypes } from "./ActionsTypes";
import { EducationInterface } from "../reducers/EducationReducer";

let dummyState = {
  id:0,
  schoolName: "",
  degree: "",
  fieldOfStudy: "",
  startYear:"",
  endYear: "",
  grade: "",
  description: "",
};

export interface EducationDispatch{
  type: ActionTypes.addEducation | ActionTypes.deleteEducation;
  payload: EducationInterface;
}

export const addEducationAction = (educationInfo:EducationInterface) => (dispatch:Dispatch) => {
  dispatch<EducationDispatch>({
    type: ActionTypes.addEducation,
    payload: educationInfo
  })
}

export const deleteEducationAction = (deleteId: number) => (dispatch: Dispatch) => {
  let newDummyState = {
    ...dummyState,
    id: deleteId
  };
  dispatch<EducationDispatch>({
    type: ActionTypes.deleteEducation,
    payload: newDummyState
  })
}

