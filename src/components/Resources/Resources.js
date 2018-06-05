import React from 'react';
import Button from '../Button';

const Resources = () => (
  <React.Fragment>
    <article>

      <Button class="button__self" link="stories" value="Male Mindful Self Practice"/>
      <Button class="button__kegel" link="stories" value="Kegel exercises for men"/>
      <Button class="button__sensate" link="stories" value="Sensate focus"/>

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
