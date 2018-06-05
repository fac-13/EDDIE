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
     <Button class="button__home" link="stories" value="Stories"/>
     <Button class="button__home" link="theory" value="Theory"/>
     <Button class="button__home" link="resources" value="Resources"/>
     </article>
  </React.Fragment>
);

export default Home;
