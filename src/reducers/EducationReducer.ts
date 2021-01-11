import { ActionTypes } from "../actions/ActionsTypes";
import { EducationDispatch } from "../actions/EducationActions";

export interface EducationInterface{
  id: number;
  schoolName: string;
  degree: string;
  fieldOfStudy: string;
  startYear: string;
  endYear:string;
  grade: string;
  description: string;
}

let initialState = [{
  id:0,
  schoolName: "",
  degree: "",
  fieldOfStudy: "",
  startYear: "",
  endYear: "",
  grade: "",
  description: "",
}];

export const EducationReducer = (state:EducationInterface[] = initialState, action:EducationDispatch):EducationInterface[] => {
  switch (action.type) {
    case ActionTypes.addEducation:
      return [
        ...state,
        action.payload
      ]
    case ActionTypes.deleteEducation:
      //action.payload will contain id:number
      let deleteId = action.payload.id;
      let filteredState:EducationInterface[] = state.filter(eachEducation => eachEducation.id !== deleteId);
      return filteredState;
    default:
      return state;
  }
}