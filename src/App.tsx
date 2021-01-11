import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Landing } from "./components/Landing";
import {AddEducation} from "./components/AddEducation";

function App():JSX.Element {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path="/addEducation" component={AddEducation} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
