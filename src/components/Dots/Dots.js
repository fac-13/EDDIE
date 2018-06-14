import React from 'react';
import { Dot, WithStore } from 'pure-react-carousel';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { flexContainer } from '../../utils/mixins';

import 'pure-react-carousel/dist/react-carousel.es.css';

const Div = styled.div`
  ${flexContainer('row', 'space-around', 'center')};

  width: 18%;
  height: 15%;
`;

const StyledDot = styled(Dot)`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: ${props => props.theme.black};
  cursor: pointer;
  border: none;
  outline: none;
  opacity: ${props => (props.selected ? '0.75' : '0.15')};
  transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);
  &:hover {
    opacity: ${props => (props.selected ? '0.75' : '0.5')};
  }
`;

class Dots extends React.Component {
  render() {
    return (
      <Div>
        {this.props.slides.map((slide, index) => (
          <StyledDot
            selected={this.props.currentSlide === index}
            key={`key-${index}`}
            slide={index}
          />
        ))}
      </Div>
    );
  }
}

Dots.propTypes = {
  slides: propTypes.array,
  currentSlide: propTypes.number
};

export default WithStore(Dots, state => ({ currentSlide: state.currentSlide }));
