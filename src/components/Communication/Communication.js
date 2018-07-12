import React from 'react';
import styled from 'styled-components';

import { Relational } from '../Assets/Assets';

import Header from '../Shared/Header/Header';

const Section = styled.section`
  width: 100%;
  height: 90%;
  bottom: 0;
  position: absolute;
  overflow: auto;
`;

const Article = styled.article`
  display: block;
  margin: 1rem auto;
  text-align: center;
  max-width: 1000px;
`;

const Category = styled(Relational)`
  height: 150px;
  width: 5rem;
`;

const P = styled.p`
  padding: 1em;
  text-align: left;
`;

const Communication = () => (
  <React.Fragment>
    <Header title="Cultivate communication" border="#FD8489 solid 5px" />
    <Section>
      <Article>
        <Category />
        <P>
          Whether you have sex with a regular or casual partner, there is always
          some space to negotiate sexual relations that are both comfortable and
          enjoyable for both.
        </P>

        <P>
          For example, if you are concerned about getting or staying hard with a
          new partner, you can always offer a number of alternative options and
          agree on it before you have sex.
        </P>

        <P>
          Equally, having sex with a regular partner can be familiar but it can
          also lack excitement. Being open about your sexual fantasies or sexual
          desires with your partner can cultivate your communication.
        </P>

        <P>
          You can both explore new ways to express yourselves and connect with
          each other.
        </P>

        <P>
          Feel free to explore the resources section for suggestions for further
          reading.
        </P>
      </Article>
    </Section>
  </React.Fragment>
);

export default Communication;
