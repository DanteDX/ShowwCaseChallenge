import React from 'react';
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { clearNameAction } from "../actions/NameActions";
import { Button } from "@material-ui/core";

export interface AddEducationProps extends RouteComponentProps{
  clearNameAction: Function;
}
const _AddEducation: React.FunctionComponent<AddEducationProps> = ({ history, clearNameAction }) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    clearNameAction();
    history.push("/");
  }
  return (
    <div>
      Add Education page
      <Button variant="contained" onClick={e => handleClick(e)}>Clear Name</Button>
    </div>
  )
};

export const AddEducation = connect(null, { clearNameAction })(withRouter(_AddEducation));
