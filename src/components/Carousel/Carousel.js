import React from 'react';
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';
import propTypes from 'prop-types';
import styled from 'styled-components';

import Dots from './Dots';
import Story from './Story';

import 'pure-react-carousel/dist/react-carousel.es.css';

const StyledCarouselProvider = styled(CarouselProvider)`
  ${props => props.theme.flexContainer('column', 'space-between', 'center')};
  width: 100%;
  height: 90%;
`;

const Row = styled.div`
  ${props => props.theme.flexContainer('row', 'space-between', 'center')};
  width: 100%;
  height: 90%;
`;

const StyledButtonBack = styled(ButtonBack)`
  background-color: transparent;
  color: ${props => props.theme.black};
  width: 10%;
  height: 70%;
  border: none;
  outline: none;
  position: absolute;
  left: 0;
  z-index: 1;

  &:hover {
    font-weight: bold;
  }
`;

const StyledButtonNext = styled(ButtonNext)`
  background-color: transparent;
  color: ${props => props.theme.black};
  width: 10%;
  height: 70%;
  border: none;
  outline: none;
  position: absolute;
  right: 0;
  z-index: 1;

  &:hover {
    font-weight: bold;
  }
`;

const StyledSlider = styled(Slider)`
  ${props => props.theme.flexContainer('column', 'space-between', 'center')};
  height: 100%;
  width: 100vw;

  .carousel__slider-tray-wrapper {
    width: 100%;
    height: 100%;
  }
  .carousel__slider-tray {
    width: 100%;
    height: 100%;
  }
`;

const Carousel = ({ slides }) => (
  <StyledCarouselProvider
    naturalSlideWidth={360}
    naturalSlideHeight={430}
    totalSlides={4}
  >
    <Row>
      <StyledButtonBack>&lt;</StyledButtonBack>
      <StyledSlider>
        {slides.map((slide, index) => (
          <Story slide={slide} key={index} index={index} />
        ))}
      </StyledSlider>
      <StyledButtonNext>&gt;</StyledButtonNext>
    </Row>
    <Dots slides={slides} />
  </StyledCarouselProvider>
);

Carousel.propTypes = {
  slides: propTypes.array
};

export default Carousel;
