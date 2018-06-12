import React from 'react';
import { Link } from 'react-router-dom';
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

const List = styled.ul`
  ${props => props.theme.flexContainer('column', 'space-around', 'center')};
`;

const ListItem = styled.li`
  width: 80%;
  line-height: 2em;
`;

const StyledLink = styled(Link)`
  ${props => props.theme.flexContainer('row', 'center', 'center')};
  background-color: ${props => props.theme.darkBlue};
  border-radius: 5px;
  color: ${props => props.theme.white};
  text-align: center;
  height: 3em;
  width: 30%;
  box-shadow: 1px 4px 10px ${props => props.theme.darkBlue};
  text-decoration: none;
  text-transform: uppercase;
  &:focus {
    cursor: pointer;
    box-shadow: 0 0 10px ${props => props.theme.darkBlue};
  }
  &:active {
    outline: none;
    box-shadow: 0 0 10px ${props => props.theme.darkBlue};
  }
`;

const Cause = ({ cause }) => {
  return (
    <StyledSlide>
      <List>
        {cause.list.map((item, index) => (
          <ListItem key={`key-${index}`}>{item}</ListItem>
        ))}
      </List>
      <div>{cause.text}</div>
      <StyledLink to={cause.link}>
        STEPS YOU<br />CAN TAKE
      </StyledLink>
    </StyledSlide>
  );
};

Cause.propTypes = {
  cause: propTypes.object,
  index: propTypes.number
};

export default Cause;
