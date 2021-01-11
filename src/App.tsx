import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Landing } from "./components/Landing";
import {AddEducation} from "./components/AddEducation";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark"
  }
});
function App():JSX.Element {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path="/addEducation" component={AddEducation} />
        </Switch>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
