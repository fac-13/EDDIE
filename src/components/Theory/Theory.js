import React from 'react';
import Button from '../Button/Button';

const Theory = () => (
  <React.Fragment>
    <article>
      <Button className="theory__button" link="causes">
        Causes
      </Button>
      <Button className="theory__button" link="mechanism">
        Mechanism
      </Button>
      <Button className="theory__button" link="myths">
        Myths
      </Button>
    </article>
  </React.Fragment>
);

export default Theory;
