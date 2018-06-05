import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Splash from './Splash/Splash';
import Home from './Home/Home';
import Stories from './Stories/Stories';
import ErrorPage from './ErrorPage/ErrorPage';

const App = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route exact path="/home" component={Home} />
      <Route path="/stories" component={Stories} />
      <Route component={ErrorPage} />
    </Switch>
  </React.Fragment>
);

export default App;
