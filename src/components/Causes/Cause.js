import React from 'react';
import { Link } from 'react-router-dom';
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
    naturalSlideWidth={800}
    naturalSlideHeight={600}
    totalSlides={3}
  >
    <ButtonBack>Back</ButtonBack>
    <Slider>
      {causes.map((cause, index) => (
        <Slide key={index} index={index}>
          <header className="cause__header">
            <h2 className="cause__name">{cause.type}</h2>
          </header>
          <ul className="cause__list">
            {cause.list.map(item => <li className="cause_item">{item}</li>)}
          </ul>
          <div className="cause__content">{cause.text}</div>
          <Link to={cause.link} className="causes__button">STEPS YOU CAN TAKE</Link>
        </Slide>
      ))} 
    <DotGroup /> 
    </Slider>
    <ButtonNext>Next</ButtonNext>
  </CarouselProvider>
);

CausesCarousel.propTypes = {
  causes: propTypes.array
};

export default CausesCarousel;
