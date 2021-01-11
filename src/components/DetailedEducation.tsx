import React from "react";
import { EducationInterface } from "../reducers/EducationReducer";
import { Card, CardContent} from "@material-ui/core";
interface DetailedState{
  educations: EducationInterface[];
}

export const DetailedEducation: React.FunctionComponent<DetailedState> = ({ educations }) => {
  return (
    <Card variant="outlined" raised={true}>
      <CardContent>
        <p>This is Detailed Education</p>
      </CardContent>
    </Card>
  )
}