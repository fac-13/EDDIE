import React from 'react';

import Header from '../Shared/Header/Header';
import Carousel from '../Carousel/Carousel';

const slidesData = [
  {
    type: 'PHYSICAL',
    list: [
      'Cardiovascular disorders (e.g heart disease, diabetes, high blood pressure)',
      'Medications (e.g. anti-depressants, high-blood pressure medications)',
      'Neurological disorders (e.g. stroke)',
      'Surgery (e.g. prostate removal)',
      'Recreational drugs (e.g. alchohol, cannabis)',
      'Tiredness/exhaustion',
      'Physical tension/stress'
    ],
    text:
      'If you believe or know that your ED is caused by any of the reasons above, speak to your GP and ask for referral to a specialist sexual health service',
    link: 'curiosity'
  },
  {
    type: 'PSYCHOLOGICAL',
    list: [
      'Anxiety, tension or stress',
      'Worry or fear of being rejected',
      'Shame or embarrassment',
      'Unrealistic expectations',
      'Depression',
      'Boredom',
      'Numbness (a feeling of disconnection from emotions)'
    ],
    text:
      'If you do not experience any difficulties with your erection when masturbating but you experience such difficulties when having sex with a partner, then the causes are 100% psychological-relational.',
    link: 'openness'
  },
  {
    type: 'RELATIONAL',
    list: [
      'Worrying about the impact of your sexual difficulties on your relationship',
      'Having difficulties in talking openly with your partner about your sexual difficulties',
      'Having difficulties in talking about your sexual ‘likes & dislikes’ with your partner ',
      'Fears of pregnancy or sexually transmitted infections',
      'Unidentified and/or unresolved problems in your relationship'
    ],
    text: null,
    link: 'communication'
  }
];

const Causes = () => (
  <React.Fragment>
    <Header title="What causes ED?" />
    <Carousel type="causes" slides={slidesData} />
  </React.Fragment>
);

export default Causes;
