import React from 'react';
import { withRouter, RouteComponentProps } from "react-router-dom";
import {
  Paper, Typography, Button, TextField
} from "@material-ui/core";
import { LandingPageElement } from "../elements/LandingPageElement";
import { addNameAction } from "../actions/NameActions";
import { connect } from "react-redux";

export interface LandingProps extends RouteComponentProps{
  addNameAction: Function;
}


const _Landing: React.FunctionComponent<LandingProps> = ({ history,addNameAction }) => {
  const [userName, setUserName] = React.useState("");
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (userName.length === 0) {
      alert('Provide a userName');
    }
    addNameAction(userName);
    setUserName("");
    history.push("/addEducation");
  }
  return (
    <LandingPageElement>
      <Paper elevation={10} style={{padding:"10px",height:"400px"}}>
        <Typography variant="h4" color="initial">Welcome to ShowwCase!</Typography>
        <Typography variant="h6" color="initial">Enter your name to get started</Typography>
        <TextField onChange={e => setUserName(e.target.value)} required variant="outlined" type="text" label="Enter Your Name" />
        <br/>
        <Button onClick={e => handleClick(e)} variant="contained" color="secondary">Enter</Button>
      </Paper>
    </LandingPageElement>
  )
}

export const Landing = connect(null,{addNameAction})(withRouter(_Landing));
