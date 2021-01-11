import React from "react";
import { EducationInterface } from "../reducers/EducationReducer";
import { Card, CardContent} from "@material-ui/core";
interface DetailedState{
  educations: EducationInterface[];
}

export const DetailedEducation: React.FunctionComponent<DetailedState> = ({ educations }) => {
  const CardList = educations.map(eachEducation => (
    <Card raised={true}>
      <CardContent>
        <p>{eachEducation.schoolName}</p>
      </CardContent>
    </Card>
  ));
  return (
    <div>
    {CardList.slice(1,CardList.length)}
    </div>
  )
}