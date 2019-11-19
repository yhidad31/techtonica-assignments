import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import ExternalApi from "./components/ExternalApi";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
// import Profile from "./components/Profile";
import Users from "./components/Users";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/" component={Home}/>
  {/*<PrivateRoute exact path="/users" component={Users} /> */}
          <Route exact path="/users" component={Users} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
