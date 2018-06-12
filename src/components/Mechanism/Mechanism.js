import React from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const Mechanism = () => (
  <React.Fragment>
    <Header title="The mechanism of erection" />
    <article>
      <h2>Aversive state:</h2>
      <p>
        When you are experiencing fear or anxiety, you enter a state we call
        aversive when your body gets ready to ‘flight or fight’. The aversive
        state is achieved when the sympathetic nervous system (SNS) is
        activated.
      </p>
      <Link to="aversive" className="home__btn">
        Read more
      </Link>
    </article>

    <article>
      <h2>Appetitive state:</h2>
      <p>
        In reality, you do not need to do anything to gain an erection. It is
        partly an automatic reflex when you get into a sexually aroused state.
        When sexually aroused, your body enters a state we call appetitive.
      </p>
      <Link to="appeitive" className="home__btn">
        Read more
      </Link>
    </article>
  </React.Fragment>
);

export default Mechanism;
