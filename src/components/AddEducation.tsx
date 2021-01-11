import React from 'react';
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { clearNameAction } from "../actions/NameActions";
import { Button } from "@material-ui/core";
import { StoreState } from "../reducers/index";
import { NameInterface } from "../reducers/NameReducer";
import { EducationModal } from "./EducationModal";


export interface AddEducationProps extends RouteComponentProps{
  clearNameAction: Function;
  nameState: NameInterface;
}
const _AddEducation: React.FunctionComponent<AddEducationProps> = ({ history, clearNameAction,nameState }) => {
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
    </div>
  )
};

const mapStateToProps = (state: StoreState) => {
  return {
    nameState: state.NameReducer
  }
}

export const AddEducation = connect(mapStateToProps, { clearNameAction })(withRouter(_AddEducation));
