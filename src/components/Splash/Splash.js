import React from 'react';
import { Redirect } from 'react-router-dom';

import SplashScreen from './SplashScreen';
import Logo from './Logo';

class Splash extends React.Component {
  state = {
    redirect: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ redirect: true });
    }, 2000);
  }

  render() {
    const { redirect } = this.state;
    return !redirect ? (
      <SplashScreen>
        <Logo />
      </SplashScreen>
    ) : (
      <Redirect to="/home" />
    );
  }
}

export default Splash;
