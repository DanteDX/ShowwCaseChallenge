import React from "react";
import { EducationInterface } from "../reducers/EducationReducer";
import { Card, CardContent, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { deleteEducationAction } from "../actions/EducationActions";

export interface SideEducationState{
  educations: EducationInterface[];
  deleteEducationAction: Function;
}

export const _SideEducation: React.FunctionComponent<SideEducationState> = ({ educations,deleteEducationAction }) => {
  const EducationList = educations.map(eachEducation => {
    return (
      <div style={{margin:"7px"}}>
        <span>{eachEducation.schoolName}</span>
        <Button onClick={e => deleteEducationAction(eachEducation.id)} variant="contained" color="secondary" size="small">Delete</Button>
      </div>
    )
  });
  return (
    <>
      <p>All Schools</p>
      <Card raised={true}>
        <CardContent>
        {EducationList.slice(1,EducationList.length)}
        </CardContent>
      </Card>
    </>
  )
}

export const SideEducation = connect(null,{deleteEducationAction})(_SideEducation);