import React from 'react';
import { render } from 'react-testing-library';

import Carousel from './Carousel';

const SlidesData = [
  {
    name: 'Daniel',
    about: 'Married 25 years, has 1 child',
    symptoms: [
      'Smoker',
      'Diabetic',
      'ED for more than 10 years',
      'Impacting on relationship'
    ]
  },
  {
    name: 'Jorge',
    about: '22 years old',
    symptoms: [
      'Moved to London last year to study',
      'Has a girlfriend of 6 months',
      'He can get an erection but soon after he loses it',
      'Has no difficulties when he masturbates'
    ]
  },
  {
    name: 'Martin',
    about: '32 years old',
    symptoms: [
      'His 3-year relationship to another man ended recently',
      'Has used a medication for ED but didn’t work ',
      'Takes anti-depressants',
      'Has casual sex but for the first time he can’t get an erection'
    ]
  },
  {
    name: 'Peter',
    about: '19 years old',
    symptoms: [
      'Worried about his penis becoming smaller',
      'ED the first time he tried to have sex with a partner 2 years ago',
      'Masturbates compulsively 7-8 times a day',
      'Does not feel as much pleasure as before when he masturbates'
    ]
  }
];

describe('test Carousel', () => {
  test('displays correct title', () => {
    const { container } = render(
      <Carousel type="stories" slides={SlidesData} />
    );
    const actual = container.querySelector('h2').textContent;
    expect(actual).toEqual('Daniel');
  });

  test('displays correct about', () => {
    const { container } = render(
      <Carousel type="stories" slides={SlidesData} />
    );
    const actual = container.querySelector('h3').textContent;
    expect(actual).toEqual('Married 25 years, has 1 child');
  });
});
