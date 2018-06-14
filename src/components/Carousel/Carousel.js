import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { flexContainer } from '../../utils/mixins';

import CarouselProvider from './CarouselProvider';
import ButtonBack from './ButtonBack';
import ButtonNext from './ButtonNext';
import Slider from './Slider';
import Dots from '../Dots/Dots';

import Story from '../Story/Story';
import Cause from '../Cause/Cause';

import 'pure-react-carousel/dist/react-carousel.es.css';

const Row = styled.div`
  ${flexContainer('row', 'space-between', 'center')};
  height: 100%;
  width: 100%;
`;

const Carousel = ({ type, slides }) => (
  <CarouselProvider
    naturalSlideWidth={300}
    naturalSlideHeight={430}
    totalSlides={slides.length}
  >
    <Row>
      <ButtonBack type={type}>&lt;</ButtonBack>
      <Slider>
        {slides.map((slide, index) => {
          return type === 'stories' ? (
            <Story story={slide} key={`key-${index}`} index={index} />
          ) : (
            <Cause cause={slide} key={`key-${index}`} index={index} />
          );
        })}
      </Slider>
      <ButtonNext type={type}>&gt;</ButtonNext>
    </Row>
    <Dots slides={slides} />
  </CarouselProvider>
);

Carousel.propTypes = {
  type: propTypes.string,
  slides: propTypes.array
};

export default Carousel;
