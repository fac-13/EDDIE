import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'pure-react-carousel';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { flexContainer } from '../../utils/mixins';

import 'pure-react-carousel/dist/react-carousel.es.css';

const StyledSlide = styled(Slide)`
  height: 100%;
  padding-bottom: 0px;
  font-size: 1.1em;

  .carousel__inner-slide {
    width: 95%;
    margin: auto;
    padding: 2%;
  }
`;

const Div = styled.div`
  ${flexContainer('row-reverse', 'flex-end', 'center')};
  height: 5rem;
  width: 100%;
  color: ${props => props.theme.white}
  font-weight: 300;
  opacity: 0.9;
  ${props =>
    props.type === 'PHYSICAL CAUSES'
      ? `background-color: ${props.theme.lightGreen}`
      : null};
  ${props =>
    props.type === 'RELATIONAL CAUSES'
      ? `background-color: ${props.theme.lightCoral}`
      : null};
  ${props =>
    props.type === 'PSYCHOLOGICAL CAUSES'
      ? `background-color: ${props.theme.lightSlate}`
      : null};
`;

const Logo = styled.svg`
  height: 3rem;
  width: 3rem;
  margin: 0.7rem;
`;

const List = styled.ul`
  ${flexContainer('column', 'space-around', 'center')};
  list-style: initial;
  margin: 0.5em auto 0.5em auto;
  max-width: 900px;
`;

const ListItem = styled.li`
  width: 80%;
  list-style: initial;
  margin: 0.5em auto 0.5em auto;
`;

const StyledLink = styled(Link)`
  ${flexContainer('row', 'center', 'center')};
  background-color: ${props => props.theme.darkBlue};
  border-radius: 5px;
  color: ${props => props.theme.white};
  text-align: center;
  height: 3em;
  max-width: 250px;
  margin: 1.5em auto;
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

const Warning = styled.div`
  padding: 0.5em;
  border: 0.2em red dotted;
  font-weight: 500;
  max-width: 900px;
  width: 80%;
  margin: 1em auto;
`;

const Cause = ({ cause }) => {
  return (
    <StyledSlide>
      <Div type={cause.type}>
        <h2>{cause.type}</h2>
        <Logo>{cause.svg}</Logo>
      </Div>
      <List>
        {cause.list.map((item, index) => (
          <ListItem key={`key-${index}`}>{item}</ListItem>
        ))}
      </List>
      {cause.text ? <Warning>{cause.text}</Warning> : null}
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
