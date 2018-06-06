import React from 'react';

import Header from '../Header/Header';
import Carousel from '../Carousel/Carousel';

// Data for carousel
const SlidesData = [
  {
    name: 'Peter',
    age: '19',
    symptoms: [
      'Worried about his penis becoming smaller',
      'ED the first time he tried to have sex with a partner 2 years ago',
      'Masturbates compulsively 7-8 times a day',
      'Does not feel as much pleasure as before when he masturbates'
    ]
  }
];

const Stories = () => (
  <React.Fragment>
    <Header title="Stories" />
    <Carousel slides={SlidesData} />
  </React.Fragment>
);

export default Stories;
