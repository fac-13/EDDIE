import React from 'react';
import { Link } from 'react-router-dom';

import './home.scss';

const Home = () => (
  <React.Fragment>
    <article className="home">
      <header className="home__header">
        <h1 className="home__title">Eddie</h1>
        <h5 className="home__subtitle">your guide to sexual wellbeing</h5>
      </header>
      <div className="home__blurb">
        <p>
          1 in 3 of sexually active men experience difficulties getting or
          keeping an erection.
          <br />
          This app has information and tools to help you improve your sex life.
        </p>
      </div>
      <div className="home__btns">
        <Link to="stories" className="home__btn">
          Stories
        </Link>
        <Link to="theory" className="home__btn">
          Theory
        </Link>
        <Link to="resources" className="home__btn">
          Resources
        </Link>
      </div>
    </article>
  </React.Fragment>
);

export default Home;
