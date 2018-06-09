import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';

const Resources = () => (
  <React.Fragment>
    <Header title="Resources" />

    <article>
      <Link to="stories" className="resources__btn resources__btn--self">
        Male Mindful Self Practice
      </Link>
      <Link to="stories" className="resources__btn resources__btn--kegel">
        Kegel exercises for men
      </Link>
      <Link to="stories" className="resources__btn resources__btn--sensate">
        Sensate focus
      </Link>

      <h3>Recommended reading</h3>

      <h4>Coping with Eectile Dysfunction</h4>
      <h5>by Barry McCarthy and Michael Metz</h5>

      <h4>The New Male Sexuality</h4>
      <h5>by Bernie Zilbergeld</h5>

      <h4>The Relate Guide to Sex in Loving Relationships</h4>
      <h5>by Sarah Litvinoff</h5>

      <h4>The Massage Secrets for Lovers</h4>
      <h5>by Andrew Stanway</h5>
    </article>
  </React.Fragment>
);

export default Resources;
