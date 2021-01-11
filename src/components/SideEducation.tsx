import React from "react";
import { EducationInterface } from "../reducers/EducationReducer";
import { Card,CardContent } from "@material-ui/core";

export interface SideEducationState{
  educations: EducationInterface[];
}

export const SideEducation: React.FunctionComponent<SideEducationState> = ({ educations }) => {
  const EducationList = educations.map(eachEducation => {
    return (
      <CardContent>
        <p>{eachEducation.schoolName}</p>
      </CardContent>
    )
  });
  return (
    <p>
      <Card variant="outlined" raised={true}>
        {EducationList}
      </Card>
    </p>
  )
}