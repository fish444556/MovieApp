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
import NowPlaying from "./components/NowPlaying/NowPlaying";
import Coming from "./components/Coming/Coming";
import Film from "./components/Film/Film";

const router = (
  <Router>
    <Main>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/film" render={() =>
          <Film>
            <Switch>
              <Route path="/film/now-playing" component={NowPlaying} />
              <Route path="/film/coming-soon" component={Coming} />
              <Redirect from="/film" to="/film/now-playing" />
            </Switch>
          </Film>
        } />
      </Switch>
      <Redirect from="/" to="/home" />
    </Main>
  </Router>
)


export default router;