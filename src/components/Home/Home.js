import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import forest from '../../../assets/forest.svg'

const Main = styled.main`
  ${props => props.theme.flexContainer('column', 'space-around', 'center')};
  height: 100vh;
  width: 100vw;
  background-image: url(${forest});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 270% 270%;
  color: ${props => props.theme.white};
  font-family: ${props => props.theme.headerFont};
  animation: appear 0.8s ease-in-out;
  @keyframes appear {
    0% {
      background-color: ${props => props.theme.blue};
      opacity: 0.1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Header = styled.header`
${props => props.theme.flexContainer('column', 'center', 'center')};
`
const Subtitle = styled.h2`
font-family: ${props => props.theme.headerFont};
font-weight: 300;
color: ${props => props.theme.darkBlue};
`
const Title = Subtitle.extend`
font-size: 1.5rem;
margin-bottom: 1rem;
text-transform: uppercase;
`

const Blurb = styled.div`
${props => props.theme.flexContainer('column', 'space-around', 'center')};
height: 10rem;
width: 80%;
max-width: 600px;
background-color: ${props => props.theme.darkBlue};
border-radius: 10px;
opacity: 0.8;
box-sizing: border-box;
text-align: center;
`

const Buttons = styled.div`
${props => props.theme.flexContainer('row', 'space-between', 'center')};
width: 80%;
max-width: 600px;
`

const Button = styled(Link) `
${props => props.theme.flexContainer('row', 'center', 'center')};
background-color: ${props => props.theme.darkBlue};
border-radius: 5px;
color: ${props => props.theme.white};
height: 30px;
min-width: 30%;
box-shadow: 1px 4px 10px ${props => props.theme.darkBlue};
text-decoration: none;
font-size: 0.8rem;
padding: 2px;
text-transform: uppercase;
  &: focus {
  cursor: pointer;
  box - shadow: 0 0 10px ${props => props.theme.white};
}
  &: active {
  outline: none;
  box - shadow: 0 0 10px ${props => props.theme.white};
}
`

const Home = () => (
  <React.Fragment>
    <Main>
      <Header>
        <Title>Eddie</Title>
        <Subtitle>your guide to sexual wellbeing</Subtitle>
      </Header>
      <Blurb>
        <p>
          1 in 3 of sexually active men experience difficulties getting or
          keeping an erection.
        </p>
        <p>
          This app has information and tools to help you improve your sex life.
        </p>
      </Blurb>
      <Buttons>
        <Button to="stories">
          Stories
        </Button>
        <Button to="theory">
          Theory
        </Button>
        <Button to="resources">
          Resources
        </Button>
      </Buttons>
    </Main>
  </React.Fragment>
);

export default Home;
