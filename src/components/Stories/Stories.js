import React from 'react';

import Header from '../Header/Header';
import Carousel from '../Carousel/Carousel';
import './stories.scss'

// Data for carousel
const SlidesData = [
  {
    name: 'Daniel',
    about: 'Married 25 years, has 1 child',
    symptoms: [
      {
        type: 'physical',
        text: 'Smoker'
      },
      {
        type: 'physical',
        text: 'Diabetic'
      },
      {
        type: 'psychological',
        text: 'ED for more than 10 years'
      },
      {
        type: 'relational',
        text: 'Impacting on relationship'
      }
    ]
  },
  {
    name: 'Jorge',
    about: '22 years old',
    symptoms: [
      {
        type: 'psychological',
        text: 'Moved to London last year to study'
      },
      {
        type: 'relational',
        text: 'Has a girlfriend of 6 months'
      },
      {
        type: 'psychological',
        text: 'He can get an erection but soon after he loses it'
      },

      {
        type: 'physical',
        text: 'Has no difficulties when he masturbates'
      }
    ]
  },
  {
    name: 'Martin',
    about: '32 years old',
    symptoms: [
      {
        type: 'relational',
        text: 'His-year relationship to another man ended recently'
      },
      {
        type: 'physical',
        text: 'Has used a mediction for ED but didn’t work'
      },
      {
        type: 'physical',
        text: 'Takes anti-depressants'
      },
      {
        type: 'psychological',
        text: 'Has casual sex but for the first time he can’t get an erection'
      }
    ]
  },
  {
    name: 'Peter',
    about: '19 years old',
    symptoms: [
      {
        type: 'psychological',
        text: 'Worried about his penis becoming smaller'
      },
      {
        type: 'relational',
        text:
          'ED the first time he tried to have sex with a partner 2 years ago'
      },
      {
        type: 'physical',
        text: 'Masturbates compulsively 7-8 times a day'
      },
      {
        type: 'psychological',
        text: 'Does not feel as much pleasure as before when he masturbates'
      }
    ]
  }
];

const Stories = () => (
  <React.Fragment>
    <Header title="Stories" />
    <main className="stories">
      <Carousel slides={SlidesData} />
      <p className="stories__instructions">Click each item to learn why and how Peter coped with ED</p>
    </main>
  </React.Fragment>
);

export default Stories;
