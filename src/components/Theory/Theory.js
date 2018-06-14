import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';

import styled from 'styled-components';
import wave from '../../../assets/wave.svg'
const Main = styled.main`
${params => params.theme.flexContainer('column', 'space-between', 'center')}
width: 100%;
height: 100%;
`

const Buttons = styled.div`
${params => params.theme.flexContainer('column', 'space-around', 'center')}
  height: 50%;
  width: 100%;
  max-width: 800px;
  @media only screen and (min-width: 1000px) {
    ${params => params.theme.flexContainer('row', 'space-between', 'center')}
  }
`

const StyledLink = styled(Link) `
${params => params.theme.flexContainer('row', 'center', 'center')}
  width: 250px;
  height: 70px;
  background: ${params => params.theme.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  color: ${params => params.theme.darkBlue};
`

const Ocean = styled.div`
  height: 5%;
  width:100%;
  position:absolute;
  bottom:0;
  left:0;
  background: #15BDB2;
`
const Wave = styled.div`
  background: url(${wave}) repeat-x; 
  position: absolute;
  bottom: 0;
  top: -150px;
  width: 6000px;
  height: 350px;
  animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1573px;
    }
  }
`
const Theory = () => (
  <React.Fragment>
    <Header title="Theory" />
    <Main>
      <Buttons>
        <StyledLink to="causes">
          Causes
        </StyledLink>
        <StyledLink to="mechanism">
          Mechanism
        </StyledLink>
        <StyledLink to="myths">
          Myths
        </StyledLink>
      </Buttons>
      <Ocean>
        <Wave className='wave'></Wave>
      </Ocean>
    </Main>
  </React.Fragment>
);

export default Theory;
