import { ActionTypes } from "../actions/ActionsTypes";
import { EducationDispatch } from "../actions/EducationActions";

export interface EducationInterface{
  country: string;
  id: number;
  schoolName: string;
  degree: string;
  fieldOfStudy: string;
  startYear: Date;
  endYear: Date;
  grade: string;
  description: string;
}

let initialState = [{
  id: 0,
  country:"",
  schoolName: "",
  degree: "",
  fieldOfStudy: "",
  startYear: new Date(),
  endYear: new Date(),
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