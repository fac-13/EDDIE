import React from 'react';
import Button from '../Button';
import './home.scss'

const Home = () => (
  <React.Fragment>
    <article className="container__home">
    <header className="header__splash">  
          <h1 className="splash__title">Eddie</h1>
          <h5 className="splash__subtitle">your guide to sexual wellbeing</h5>
          </header>
  <div className="container__blurb">
      <p>
      1 in 3 of sexually active men experience difficulties getting or keeping an erection. 
      </p>
      <p>
      This app has information and tools to help you improve your sex life.      
      </p>
      </div>    
    <div className="container__buttons">    
     <Button className="button__home" link="stories">Stories</Button>
     <Button className="button__home" link="theory">Theory</Button>
     <Button className="button__home" link="resources">Resources</Button>
   </div>
      </article>
  </React.Fragment>
);

export default Home;