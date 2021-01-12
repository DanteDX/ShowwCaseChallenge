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
import {AddEducationElement} from "../elements/AddEducationElement";


export interface AddEducationProps extends RouteComponentProps{
  clearNameAction: Function;
  nameState: NameInterface;
  educations: EducationInterface[];

}
const _AddEducation: React.FunctionComponent<AddEducationProps> = ({ history, clearNameAction,nameState,educations }) => {
  React.useEffect(() => {
    if (nameState.name.length === 0) {
      history.push("/");
    }
  }, []);
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    clearNameAction();
    history.push("/");
  }
  return (
    <div>
      <AddEducationElement>
        <h4>Add Education Page</h4>
        <h4>Welcome {nameState.name} to Add Education page</h4>
        <Button variant="contained" onClick={e => handleClick(e)}>Reset Name</Button>
        <EducationModal />
      </AddEducationElement>
      
      <Grid container spacing={3} direction="row">
        <Grid item xs={4}>
          <SideEducation educations={educations}/>
        </Grid>
        <Grid container item xs={8} direction="column">
          <DetailedEducation educations={educations}/>
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
