import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './app.scss';

import Splash from './Splash/Splash';
import Home from './Home/Home';
import Stories from './Stories/Stories';
import Theory from './Theory/Theory';
import Causes from './Causes/Causes';
import Mechanism from './Mechanism/Mechanism';
import Myths from './Myths/Myths';
import Resources from './Resources/Resources';
import Appetitive from './Appetitive/Appetitive';
import Aversive from './Aversive/Aversive';
import Curiosity from './Curiosity/Curiosity';
import Communication from './Communication/Communication';
import Openness from './Openness/Openness';
import Exercise from './Exercise/Kengels';
import Focus from './Focus/Sensate';
import Practise from './Practise/Mindfulness';
import ErrorPage from './ErrorPage/ErrorPage';

const fontStack = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"'
];

const App = () => (
  <ThemeProvider
    theme={{
      white: '#f8fefd',
      black: '#3d4f51',
      blue: '#b8f7f1',
      darkBlue: '#1a5f67',
      green: '#24815B',
      lightGreen: '#71BE63',
      coral: '#D73C36',
      lightCoral: '#FD8489',
      slate: '#517B7B',
      lightSlate: '#7CA5A9',
      bodyFont: fontStack,
      headerFont: ['Lato', ...fontStack]
    }}
  >
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route exact path="/home" component={Home} />
      <Route path="/stories" component={Stories} />
      <Route path="/theory" component={Theory} />
      <Route path="/causes" component={Causes} />
      <Route path="/myths" component={Myths} />
      <Route path="/mechanism" component={Mechanism} />
      <Route path="/resources" component={Resources} />
      <Route path="/appetitive" component={Appetitive} />
      <Route path="/aversive" component={Aversive} />
      <Route path="/communication" component={Communication} />
      <Route path="/curiosity" component={Curiosity} />
      <Route path="/openness" component={Openness} />
      <Route path="/kengels" component={Exercise} />
      <Route path="/sensate" component={Focus} />
      <Route path="/mindfulness" component={Practise} />      
      <Route component={ErrorPage} />
    </Switch>
  </ThemeProvider>
);

export default App;
