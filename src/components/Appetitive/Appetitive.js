import React from 'react';
import Header from '../Header/Header';
import styled from 'styled-components';
import { Happy } from '../Assets/Assets';

const Article = styled.article`
  display:block;
  margin: auto;
  height: 90%;
  text-align: center;
  border-top: .3em solid ${props => props.theme.blue};;
`;

const Logo = styled.svg`
    height:5rem;
    width:5rem;
    padding:1rem;
    margin: 1em auto 0 auto;
`

const P = styled.p`
  padding: 1em;
  text-align:left
`;

const Appetitive = () => (
  <React.Fragment>
    <Header title="Appetitive state" />
    <Article>
    <Logo><Happy /></Logo>
      <P>
        At the appetitive state, your muscles relax enabling blood flow to the
        core of your body (e.g., chest, genitals). Sensations in these areas
        intensify as there is more blood flowing to these regions. In the
        genital area, it is the lack of tension that allows the blood flow to
        create a full erection.
      </P>

      <P>
        The appetitive state is achieved when a part of your nervous system
        called parasympathetic (PNS) is activated. This is an involuntary and
        automatic response to sexual desire. Paradoxically, pushing oneself to
        get an erection is more likely to lead to difficulties in gaining or
        sustaining one erection. This is because ‘pushing oneself’ is anxiety
        provoking, which dampens and inhibits this PNS response that is needed
        to create an erection.
      </P>
      
    </Article>
  </React.Fragment>
);

export default Appetitive;
