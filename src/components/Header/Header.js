import React from 'react';
import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './header.scss';

const Header = ({ title, history }) => {
  return (
    <React.Fragment>
      <header className="header">
        <div className="header__back" onClick={history.goBack}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.8 7L9.4 1.4L8 0L0 8L8 16L9.4 14.6L3.8 9H16V7H3.8Z"
              fill="#3D4F51"
            />
          </svg>
        </div>
        <h1 className="header__title">{title}</h1>
      </header>
    </React.Fragment>
  );
};

Header.propTypes = {
  title: propTypes.string,
  history: propTypes.object
};

export default withRouter(Header);
