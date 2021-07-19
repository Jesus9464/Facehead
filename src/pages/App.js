import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./style/App.css";
import Inicio from "../pages/Inicio";
import Video from "../pages/Videos";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/watch" component={Video} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
