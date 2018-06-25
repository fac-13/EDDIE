import React from 'react';
import styled from 'styled-components';

import Header from '../Shared/Header/Header';
import Sad from './Sad';

const Section = styled.section`
  width: 100%;
  height: 90%;
  bottom: 0;
  position: absolute;
`;

const Article = styled.article`
  display: block;
  margin: auto;
  text-align: center;
  max-width: 1000px;
`;

const P = styled.p`
  padding: 1em;
  text-align: left;
`;

const Aversive = () => (
  <React.Fragment>
    <Header title="Aversive state" border="0.3em solid #b8f7f1" />
    <Section>
      <Article>
        <Sad />
        <P>
          Your heart speeds up and blood flows to your arms and legs to prepare
          you to fight or move away from an unpleasant situation. However, in a
          sexual context, fighting your thoughts or physical sensations or
          running away (e.g., avoid having sex with a partner, avoid talking
          about your difficulties), will only fuel your anxiety in the future.{' '}
        </P>
        <P>
          Learning to identify triggers for your anxiety, such as unrealistic
          beliefs about sex (see below), and unhelpful behaviours helps to
          improve sexual performance and pleasure. This also happens if you can
          create physical comfort and emotional calmness when you are with a
          sexual partner. These are the key processes for a healthy and
          enjoyable sexual life.
        </P>
      </Article>
    </Section>
  </React.Fragment>
);

export default Aversive;
