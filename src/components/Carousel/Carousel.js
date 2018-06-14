import React from 'react';
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';
import propTypes from 'prop-types';

import { flexContainer } from '../../utils/mixins';

import styled from 'styled-components';
import Dots from '../Dots/Dots';
import Story from '../Story/Story';
import Cause from '../Cause/Cause';

import 'pure-react-carousel/dist/react-carousel.es.css';

const StyledCarouselProvider = styled(CarouselProvider)`
  ${flexContainer('column', 'space-between', 'center')};
  width: 100%;
  height: 90%};
`;

const Row = styled.div`
  ${flexContainer('row', 'space-between', 'center')};
  height: 100%;
  width: 100%;
`;

const StyledButtonBack = styled(ButtonBack)`
  background-color: transparent;
  color: ${props => props.theme.black};
  width: 5%;
  height: ${props => (props.type === 'causes' ? '80%' : '70%')};
  border: none;
  outline: none;
  position: absolute;
  left: 0;
  z-index: 1;
  font-size: 1.5em;

  &:hover {
    font-weight: bold;
  }
`;

const StyledButtonNext = styled(ButtonNext)`
  background-color: transparent;
  color: ${props => props.theme.black};
  width: 5%;
  height: ${props => (props.type === 'causes' ? '80%' : '70%')};
  border: none;
  outline: none;
  position: absolute;
  right: 0;
  z-index: 1;
  font-size: 1.5em;
  &:hover {
    font-weight: bold;
  }
`;

const StyledSlider = styled(Slider)`
  ${flexContainer('column', 'space-between', 'center')};
  height: 100%;
  width: 100vw;

  .carousel__slider-tray-wrapper {
    width: 100%;
    height: 100%;
  }
  .carousel__slider-tray {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
`;

const Carousel = ({ type, slides }) => (
  <StyledCarouselProvider
    naturalSlideWidth={300}
    naturalSlideHeight={430}
    totalSlides={slides.length}
  >
    <Row>
      <StyledButtonBack type={type}>&lt;</StyledButtonBack>
      <StyledSlider>
        {slides.map((slide, index) => {
          return type === 'stories' ? (
            <Story story={slide} key={`key-${index}`} index={index} />
          ) : (
            <Cause cause={slide} key={`key-${index}`} index={index} />
          );
        })}
      </StyledSlider>
      <StyledButtonNext type={type}>&gt;</StyledButtonNext>
    </Row>
    <Dots slides={slides} />
  </StyledCarouselProvider>
);

Carousel.propTypes = {
  type: propTypes.string,
  slides: propTypes.array
};

export default Carousel;
