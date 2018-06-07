import React from 'react';
import propTypes from 'prop-types';

import './carousel.scss';

const LeftArrow = ({ onClick }) => (
  <div className="carousel__arrow carousel__arrow--left" onClick={onClick} />
);

LeftArrow.propTypes = {
  onClick: propTypes.func
};

const RightArrow = ({ onClick }) => (
  <div className="carousel__arrow carousel__arrow--right" onClick={onClick} />
);

RightArrow.propTypes = {
  onClick: propTypes.func
};

const Indicator = ({ index, activeIndex, onClick }) => (
  <li>
    <a
      className={
        index == activeIndex ? 'indicator indicator--active' : 'indicator'
      }
      onClick={onClick}
    />
  </li>
);

Indicator.propTypes = {
  index: propTypes.number,
  activeIndex: propTypes.number,
  onClick: propTypes.func
};

const Slide = ({ index, activeIndex, slide }) => (
  <li className={index == activeIndex ? 'slide slide--active' : 'slide'}>
    <h2 className="slide__name">{slide.name}</h2>
    <h3 className="slide__about">{slide.about}</h3>
    {slide.symptoms.map((symptom, index) => {
      let color = '';
      if (slide.name === 'Daniel') {
        if (index === 3) {
          color = 'coral';
        } else if (index === 2) {
          color = 'slate';
        } else {
          color = 'green';
        }
      }
      if (slide.name === 'Jorge') {
        if (index === 1) {
          color = 'coral';
        } else if (index === 3) {
          color = 'green';
        } else {
          color = 'slate';
        }
      }
      if (slide.name === 'Martin') {
        if (index === 0) {
          color = 'coral';
        } else if (index === 3) {
          color = 'slate';
        } else {
          color = 'green';
        }
      }
      if (slide.name === 'Peter') {
        if (index === 1) {
          color = 'coral';
        } else if (index === 2) {
          color = 'green';
        } else {
          color = 'slate';
        }
      }
      return (
        <div className={`slide__symptom slide__symptom--${color}`} key={index}>
          <p className="slide__symptom-text">{symptom}</p>
        </div>
      );
    })}
  </li>
);

Slide.propTypes = {
  index: propTypes.number,
  activeIndex: propTypes.number,
  slide: propTypes.object
};

// Carousel wrapper component
class Carousel extends React.Component {
  state = {
    activeIndex: 0
  };

  goToSlide = (e, index) => {
    e.preventDefault();

    this.setState({
      activeIndex: index
    });
  };

  goToPrevSlide = e => {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  };

  goToNextSlide = e => {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="carousel">
          <LeftArrow onClick={e => this.goToPrevSlide(e)} />

          <ul className="carousel__slides">
            {this.props.slides.map((slide, index) => (
              <Slide
                key={index}
                index={index}
                activeIndex={this.state.activeIndex}
                slide={slide}
              />
            ))}
          </ul>

          <RightArrow onClick={e => this.goToNextSlide(e)} />
        </div>
        <ul className="indicators">
          {this.props.slides.map((slide, index) => (
            <Indicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              isActive={this.state.activeIndex == index}
              onClick={e => this.goToSlide(e, index)}
            />
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

Carousel.propTypes = {
  slides: propTypes.array
};

export default Carousel;
