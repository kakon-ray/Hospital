import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Page/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appointment from "./component/Page/Appointment";
import AboutOurClinic from "./component/Page/AboutOurClinic";
import ContactMe from "./component/Page/ContactMe";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/appointment" component={Appointment} />
          <Route exact path="/clinic" component={AboutOurClinic} />
          <Route exact path="/contact" component={ContactMe} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
