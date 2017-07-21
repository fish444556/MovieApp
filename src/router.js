import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'


import Main from "./components/Main/Main";
import Home from "./components/Home/Home";

const router = (
  <Router>
    <Main>
      <Switch>
        <Route path="/home" component={Home} />
      </Switch>
      <Redirect from="/" to="/home" />
    </Main>
  </Router>
)


export default router;