import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './app.scss';

import Splash from './Splash/Splash';
import Home from './Home/Home';
import Stories from './Stories/Stories';
import Theory from './Theory/Theory';
import Causes from './Causes/Causes';
import Mechanism from './Mechanism/Mechanism';
import Myths from './Myths/Myths';
import Resources from './Resources/Resources';
import ErrorPage from './ErrorPage/ErrorPage';

const App = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route exact path="/home" component={Home} />
      <Route path="/stories" component={Stories} />
      <Route path="/theory" component={Theory} />
      <Route path="/causes" component={Causes} />
      <Route path="/myths" component={Myths} />
      <Route path="/mechanism" component={Mechanism} />
      <Route path="/resources" component={Resources} />
      <Route component={ErrorPage} />
    </Switch>
  </React.Fragment>
);

export default App;
