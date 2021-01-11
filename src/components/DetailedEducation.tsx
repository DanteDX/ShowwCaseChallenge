import React from "react";
import { EducationInterface } from "../reducers/EducationReducer";
import { Card, CardContent} from "@material-ui/core";
interface DetailedState{
  educations: EducationInterface[];
}

export const DetailedEducation: React.FunctionComponent<DetailedState> = ({ educations }) => {
  const CardList = educations.map(eachEducation => {
    let startingDate = eachEducation.startYear.getFullYear().toString() + "/" + (eachEducation.startYear.getMonth() + 1).toString() + "/" + eachEducation.startYear.getDate().toString();
    let endingDate = eachEducation.endYear.getFullYear().toString() + "/" + (eachEducation.endYear.getMonth() + 1).toString() + "/" + eachEducation.endYear.getDate().toString();
    return (<Card raised={true}>
      <CardContent>
        <p>School Name:<b>{eachEducation.schoolName}</b></p>
        <p>Degree: <b>{eachEducation.degree}</b></p>
        <p>Country:<b>{eachEducation.country}</b></p>
        <p>Field of Study:<b>{eachEducation.fieldOfStudy}</b></p>
        <p>Start Date:<b>{startingDate}</b></p>
        <p>Ending Data:<b>{endingDate}</b></p>
      </CardContent>
    </Card>)
  });
  return (
    <div>
    {CardList.slice(1,CardList.length)}
    </div>
  )
}