import React from 'react';
import Header from '../Header/Header';
import CausesCarousel from './Cause';

const causes = [
  {
    type: 'PHYSICAL',
    text: 'If you believe or know that your ED is caused by any of the reasons above, speak to your GP and ask for referral to a specialist sexual health service'
  },
  {
    type: 'PSYCHOLOGICAL',
    text: 'If you do not experience any difficulties with your erection when masturbating but you experience such difficulties when having sex with a partner, then the causes are 100% psychological-relational.'
  },
  {
    type: 'RELATIONAL',
    text: null
  },
] 

const Causes = () => (
  <React.Fragment>
    <Header title="What causes ED?" />
    <CausesCarousel  causes={causes} /> 
  </React.Fragment>
);

export default Causes;
