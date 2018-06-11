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
import { ThemeProvider } from 'styled-components';

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

const flexContainer = (direction, justify, align) => `
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
  `;

const App = () => (
  <ThemeProvider
    theme={{
      white: '#f8fefd',
      black: '#3d4f51',
      blue: '#b8f7f1',
      darkBlue: '#1a5f67',
      green: '#94d75b',
      coral: '#fd8489',
      slate: '#7ca5a9',
      bodyFont: fontStack,
      headerFont: ['Lato', ...fontStack],
      flexContainer
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
      <Route component={ErrorPage} />
    </Switch>
  </ThemeProvider>
);

export default App;
