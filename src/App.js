import React from "react";
import Display from "./components/Display";
import AddNew from "./components/AddNew";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/addnew">
            <AddNew />
          </Route>
          <Route path="/">
            <Display />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
