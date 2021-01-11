import React from 'react';
import { withRouter, RouteComponentProps } from "react-router-dom";
import {
  Paper, Typography, Button, TextField
} from "@material-ui/core";
import { LandingPageElement } from "../elements/LandingPageElement";


const _Landing: React.FunctionComponent<RouteComponentProps> = ({ history }): JSX.Element => {
  const [userName, setUserName] = React.useState("");
  const handleClick = (e:  React.MouseEvent<HTMLElement>) => {
    alert(userName);
  }
  return (
    <LandingPageElement>
      <Paper elevation={10}>
        <Typography variant="h4" color="initial">Welcome to ShowwCase!</Typography>
        <Typography variant="h6" color="initial">Enter your name to get started</Typography>
        <TextField onChange={e => setUserName(e.target.value)} required variant="filled" type="text" label="Enter Your Name" />
        <br/>
        <Button onClick={e => handleClick(e)} variant="contained" color="secondary">Enter</Button>
      </Paper>
    </LandingPageElement>
  )
}

export const Landing = withRouter(_Landing);
