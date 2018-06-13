import React from 'react';
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Dots from '../Dots/Dots';
import Story from '../Story/Story';
import Cause from '../Cause/Cause';

import 'pure-react-carousel/dist/react-carousel.es.css';

const StyledCarouselProvider = styled(CarouselProvider) `
  ${props => props.theme.flexContainer('column', 'space-between', 'center')};
  width: 100%;
  height: 90%};
`;

const Row = styled.div`
  ${props => props.theme.flexContainer('row', 'space-between', 'center')};
  height: 100%;
  width: 100%;
`;

const StyledButtonBack = styled(ButtonBack) `
  color: ${props => props.theme.black};
  width: 5%;
  height: ${props => (props.type === 'causes' ? '80%' : '70%')};
  border: none;
  outline: none;
  position: absolute;
  left: 0;
  z-index: 1;
  opacity:0;
  @media (min-width: 600px){
    &:hover{
     background-color: ${props => props.theme.darkBlue};
     opacity:0.1;
     font-weight: bold;
     font-size: 5em;
     color: black;
     height: 100vh;
    }   
 }
`;

const StyledButtonNext = styled(ButtonNext) `
  color: ${props => props.theme.black};
  width: 5%;
  height: ${props => (props.type === 'causes' ? '80%' : '70%')};
  border: none;
  outline: none;
  position: absolute;
  right: 0;
  opacity:0;
  z-index: 1;
  @media (min-width: 600px){
     &:hover{
      background-color: ${props => props.theme.darkBlue};
      opacity:0.1;
      font-weight: bold;
      font-size: 5em;
      color: black;
      height: 100vh;
     }   
  }
`;

const StyledSlider = styled(Slider) `
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
    overflow-y: ${props => props.type === 'stories' ? 'hidden' : 'scroll'};
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
