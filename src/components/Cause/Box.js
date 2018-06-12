import React from 'react';
import { Slide } from 'pure-react-carousel';
import propTypes from 'prop-types';
import styled from 'styled-components';

import 'pure-react-carousel/dist/react-carousel.es.css';

const StyledSlide = styled(Slide)`
  height: 100%;
  padding-bottom: 0px;

  .carousel__inner-slide {
    ${props => props.theme.flexContainer('column', 'flex-start', 'center')};
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    padding-bottom: 0px;
  }
`;

const Div = styled.div`
  ${props => props.theme.flexContainer('column', 'space-around', 'center')};
  height: 20em;
  width: 20em;
  ${props =>
    props.type === 'PHYSICAL'
      ? `background-color: ${props.theme.green}`
      : null};
  ${props =>
    props.type === 'RELATIONAL'
      ? `background-color: ${props.theme.coral}`
      : null};
  ${props =>
    props.type === 'PSYCHOLOGICAL'
      ? `background-color: ${props.theme.slate}`
      : null};
`;

const Box = ({ cause }) => {
  return (
    <StyledSlide>
      <Div type={cause.type}>
        <h2>{cause.type}</h2>
      </Div>
    </StyledSlide>
  );
};

Box.propTypes = {
  cause: propTypes.object,
  index: propTypes.number
};

export default Box;
