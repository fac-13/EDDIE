import React from 'react';
import Button from '../Button';

const Home = () => (
  <React.Fragment>
    <article>
      <p>
      1 in 3 of sexually active men experience difficulties getting or keeping an erection. 
      </p>
      <p>
      This app has information and tools to help you improve your sex life.      
      </p>
     <Button className="home__button" link="stories">Stories</Button>
     <Button className="home__button" link="theory">Theory</Button>
     <Button className="home__button" link="resources">Resources</Button>
     </article>
  </React.Fragment>
);

export default Home;