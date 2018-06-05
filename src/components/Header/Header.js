import React from 'react';
import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Header = ({ title, history }) => {
  return (
    <React.Fragment>
      <header>
        <button onClick={history.goBack}>Back</button>
        <h1>{title}</h1>
      </header>
    </React.Fragment>
  );
};

Header.propTypes = {
  title: propTypes.string,
  history: propTypes.object
};

export default withRouter(Header);
