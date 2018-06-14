import React from 'react';
import styled from 'styled-components';

import Header from '../Header/Header';
import Happy from './Happy';

const Section = styled.section`
  border-top: 0.3em solid ${props => props.theme.blue};
  width: 100%;
  height: 90%;
`;

const Article = styled.article`
  display: block;
  margin: auto;
  max-width: 1000px;
  text-align: center;
`;

const P = styled.p`
  padding: 1em;
  text-align: left;
`;

const Appetitive = () => (
  <React.Fragment>
    <Header title="Appetitive state" />
    <Section>
      <Article>
        <Happy />
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
    </Section>
  </React.Fragment>
);

export default Appetitive;
