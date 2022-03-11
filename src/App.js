import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Page/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appointment from "./component/Page/Appointment";
import AppintmentForm from "./component/AppintmentForm/AppintmentForm";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/appointment" component={Appointment} />
          <Route exact path="/appointmentform" component={AppintmentForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
