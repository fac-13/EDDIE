import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'pure-react-carousel';
import propTypes from 'prop-types';
import styled from 'styled-components';

import 'pure-react-carousel/dist/react-carousel.es.css';

const StyledSlide = styled(Slide)`
  height: 100%;
  padding-bottom: 0px;
  font-size:1.1em;

  .carousel__inner-slide {
    width: 95%;
    margin: auto;
    padding: 2%;
  }
`;

const Div = styled.div`
  ${props => props.theme.flexContainer('column', 'center', 'center')};
  height: 10em;
  width: 10em;
  margin: auto;
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

const List = styled.ul`
  ${props => props.theme.flexContainer('column', 'space-around', 'center')};
  list-style: initial;
  line-height: 1.2em;
  margin: 1em auto 1em auto;
  max-width: 900px;
`;

const ListItem = styled.li`
  width: 80%;
  list-style: initial;
  margin: 0.5em auto 0.5em auto;
`;

const StyledLink = styled(Link)`
  ${props => props.theme.flexContainer('row', 'center', 'center')};
  background-color: ${props => props.theme.darkBlue};
  border-radius: 5px;
  color: ${props => props.theme.white};
  text-align: center;
  height: 3em;
  max-width: 250px;
  margin: 2em auto;
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

const Warning = styled.div `
    padding: 1em;
    line-height: 1.5em;
    border: .5em red dotted;
    font-weight: 700;
    position: relative;
    max-width: 900px;
    margin: auto;
`



const Cause = ({ cause }) => {
  return (
    <StyledSlide>
      <Div type={cause.type}>
        <h2>{cause.type}</h2>
        <p>{cause.svg}</p>
      </Div>
      <List>
        {cause.list.map((item, index) => (
          <ListItem key={`key-${index}`}>{item}</ListItem>
        ))}
      </List>
      {(!cause.text) ? null : <Warning>{cause.text}</Warning> }
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
