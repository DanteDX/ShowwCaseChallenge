import React from 'react';
import { withRouter, RouteComponentProps } from "react-router-dom";
import {
  Paper, Typography, Button, TextField
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LandingPageElement } from "../elements/LandingPageElement";
import { addNameAction } from "../actions/NameActions";
import { connect } from "react-redux";

export interface LandingProps extends RouteComponentProps{
  addNameAction: Function;
}

const useStyles = makeStyles({
  eachRow: {
    margin: "10px"
  },
  LandingPaper: {
    padding: "10px",
    margin: "auto",
    textAlign: "center",
    height:"40vh"
  }
});


const _Landing: React.FunctionComponent<LandingProps> = ({ history, addNameAction }) => {
  const classes = useStyles();
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
      <Paper elevation={10} className={classes.LandingPaper}>
        <Typography className={ classes.eachRow} variant="h4" color="initial">Welcome to ShowwCase!</Typography>
        <Typography className={ classes.eachRow} variant="h6" color="initial">Enter your name to get started</Typography>
        <TextField  className={ classes.eachRow} onChange={e => setUserName(e.target.value)} required variant="outlined" type="text" label="Enter Your Name" />
        <br/>
        <Button className={ classes.eachRow} onClick={e => handleClick(e)} variant="contained" color="secondary">Enter</Button>
      </Paper>
    </LandingPageElement>
  )
}

export const Landing = connect(null,{addNameAction})(withRouter(_Landing));
