import React from 'react';
import Button from '../Button/Button';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup
} from 'pure-react-carousel';
import propTypes from 'prop-types';
import 'pure-react-carousel/dist/react-carousel.es.css';

const CausesCarousel = ({ causes }) => (
  <CarouselProvider
    naturalSlideWidth={1000}
    naturalSlideHeight={700}
    totalSlides={3}
  >
    <ButtonBack>Back</ButtonBack>
    <Slider>
      {causes.map((cause, index) => (
        <Slide key={index} index={index}>
          <header className="cause__header">
            <h2 className="cause__name">{cause.type}</h2>
          </header>
          <div className="cause__content">{cause.text}</div>
        </Slide>
      ))}
    </Slider>

    <DotGroup />
    <Button link="">STEPS YOU CAN TAKE</Button>
    <ButtonNext>Next</ButtonNext>


  </CarouselProvider>
);

CausesCarousel.propTypes = {
  causes: propTypes.array
};

export default CausesCarousel;
