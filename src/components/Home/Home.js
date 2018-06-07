import React from 'react';
import Button from '../Button';
import './home.scss'

const Home = () => (
  <React.Fragment>
    <article className="home">
    <header className="home__header">  
          <h1 className="home__title">Eddie</h1>
          <h5 className="home__subtitle">your guide to sexual wellbeing</h5>
          </header>
  <div className="home__blurb">
      <p>
      1 in 3 of sexually active men experience difficulties getting or keeping an erection. 
      </p>
      <p>
      This app has information and tools to help you improve your sex life.      
      </p>
  </div>    
  <div className="home__btns">    
     <Button className="home__btn" link="stories">Stories</Button>
     <Button className="home__btn" link="theory">Theory</Button>
     <Button className="home__btn" link="resources">Resources</Button>
   </div>
      </article>
  </React.Fragment>
);

export default Home;