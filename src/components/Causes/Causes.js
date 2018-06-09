import React from 'react';
import Header from '../Header/Header';
import Button from '../Button/Button';
import Cause from './Cause';

const CausesData  = () => [
  {
    type: 'PHYSICAL',
    items: [
      {
        text: 'Surgery',
        eg: '(e.g. prostate removal)'
      },
      {
        text: 'Medications',
        eg: '(e.g. anti-depressants, high-blood pressure medications)'
      },
      {
        text: 'Recreational drugs',
        eg: '(e.g. alchohol, cannabis)'
      },
      {
        text: 'Tiredness/exhaustion'
      },
      {
        text: 'Physical tension/stress'
      },
      {
        text: 'Pain'
      },
    ],
  text: 'If you believe or know that your ED is caused by any of the reasons above, speak to your GP and ask for referral to a specialist sexual health service'
},
{
  type: 'PSYCHOLOGICAL',
    items: [
      {
        text: 'Anxiety, worry or fear'
      },
      {
        text: 'Tension or stress'
      },
      {
        text: 'Fear of being rejected'
      },
      {
        text: 'Shame or embarrassment'
      },
      {
        text: 'Unrealistic expectations'
      },
      {
        text: 'Depression'
      },
      {
        text: 'Boredom'
      },
      {
        text: 'Numbness',
          eg: '(a feeling of disconnection from emotions)'
      }
    ],
  text: 'If you do not experience any difficulties with your erection when masturbating but you experience such difficulties when having sex with a partner, then the causes are 100% psychological-relational.'
},
{
  type: 'RELATIONAL',
    items: [
      {
        text: 'Worrying about the impact of your sexual difficulties on your relationship'
      },
      {
        text: 'Having difficulties in talking openly with your partner about your sexual difficulties'
      },
      {
        text: 'Having difficulties in talking about your sexual ‘likes & dislikes’ with your partner '
      },
      {
        text: 'Fears of pregnancy or sexually transmitted infections'
      },
      {
        text: 'Unidentified and/or unresolved problems in your relationship'
      }
    ]
}
];


const Causes = () => (
  <React.Fragment>
    <Header title="What causes ED?" />
    <Cause />
    <Button link="">STEPS YOU CAN TAKE</Button>
  </React.Fragment>
);

export default Causes;