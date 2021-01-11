import React from 'react';
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { clearNameAction } from "../actions/NameActions";
import { Button,Grid } from "@material-ui/core";
import { StoreState } from "../reducers/index";
import { NameInterface } from "../reducers/NameReducer";
import { EducationModal } from "./EducationModal";
import { EducationInterface } from "../reducers/EducationReducer";
import { SideEducation } from "./SideEducation";
import { DetailedEducation } from "./DetailedEducation";


export interface AddEducationProps extends RouteComponentProps{
  clearNameAction: Function;
  nameState: NameInterface;
  educations: EducationInterface[];

}
const _AddEducation: React.FunctionComponent<AddEducationProps> = ({ history, clearNameAction,nameState,educations }) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    clearNameAction();
    history.push("/");
  }
  return (
    <div>
      Add Education page
      <h4>Welcome {nameState.name} to Add Education page</h4>
      <Button variant="contained" onClick={e => handleClick(e)}>Clear Name</Button>
      <EducationModal />
      <Grid container spacing={3} direction={column}>
        <Grid item xs={4}>
          <SideEducation educations={educations}/>
        </Grid>
        <Grid item container xs={6} direction={row}>
          <DetailedEducation educations={education}/>
        </Grid>
      </Grid>
    </div>
  )
};

const mapStateToProps = (state: StoreState) => {
  return {
    nameState: state.NameReducer,
    educations: state.EducationReducer
  }
}

export const AddEducation = connect(mapStateToProps, { clearNameAction })(withRouter(_AddEducation));
