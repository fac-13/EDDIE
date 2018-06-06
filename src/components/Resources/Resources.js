import React from 'react';
import Button from '../Button';

const Resources = () => (
  <React.Fragment>
    <article>

      <Button className="resounces__self" link="stories" >Male Mindful Self Practice</Button>
      <Button className="resources__kegel" link="stories" >Kegel exercises for men</Button>
      <Button className="resources__sensate" link="stories">Sensate focus</Button>

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
