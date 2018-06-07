import React from 'react';
import Button from '../Button/Button';
import './home.scss';

const Home = () => (
  <React.Fragment>
    <article className="home">
      <div className="home__blurb">
        <p className="home__intro">
          1 in 3 of sexually active men experience difficulties getting or
          keeping an erection.
          <br />
          This app has information and tools to help you improve your sex life.
        </p>
      </div>
      <div className="home__btns">
        <Button className="home__btn" link="stories">
          Stories
        </Button>
        <Button className="home__btn" link="theory">
          Theory
        </Button>
        <Button className="home__btn" link="resources">
          Resources
        </Button>
      </div>
    </article>
  </React.Fragment>
);

export default Home;
