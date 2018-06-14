import React from 'react';
import styled from 'styled-components';

import Header from '../Shared/Header/Header';

const Section = styled.section`
  border-top: 0.3em solid ${props => props.theme.slate};
  width: 100%;
  height: 87%;
`;

const Article = styled.article`
  display: block;
  margin: auto;
  text-align: center;
  max-width: 1000px;
`;

const Q = styled.blockquote`
  font-style: italic;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 1em;
  margin: 0.5em;
  border-left: 10px solid ${props => props.theme.coral};
  color: ${props => props.theme.black};
`;

const P = styled.p`
  padding: 1em;
  text-align: left;
  color: ${props => props.theme.black};
  line-height: 1.1em;
  font-weight: 700;
`;

const Myths = () => (
  <React.Fragment>
    <Header title="Myths of male sexuality" />
    <Section>
      <Article>
        <Q>Sex is something you perform</Q>
        <Q>Sex is all about a hard penis and what is done with it</Q>
        <Q>Sexual problems are a sign of weakness</Q>
        <Q>
          Men can have total control of their erection, anywhere and with anyone
          regardless of their feelings or situation
        </Q>
        <Q>Erections are related to physical strength and effort</Q>
        <Q>
          Your main responsibility in sex is to give pleasure to your partner
        </Q>
      </Article>

      <Article>
        <P>
          Such beliefs are likely to increase feelings of anxiety and physical
          tension as they are unrealistic and misleading. Some beliefs lack a
          basic understanding of the physiology of erections or the conditions
          that cultivate an appetitive state. Other beliefs can be held so
          rigidly, that they offer no space for learning and growth.{' '}
        </P>
        <P>
          For example, if you believe that sex is all about penetration with
          your penis, it is likely to limit your options and potential for
          sexual pleasure. Imagine going to a restaurant with only one meal as
          an option on the menu – boring!
        </P>
      </Article>
    </Section>
  </React.Fragment>
);

export default Myths;
