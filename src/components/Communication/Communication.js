import React from 'react';
import Header from '../Header/Header';
import { Relational } from '../Assets/Assets';
import styled from 'styled-components';

const Section = styled.section`
  border-top: .3em solid ${props => props.theme.coral};
  width: 100%;
  height: 87%;
`

const Article = styled.article`
  display:block;
  margin: auto;
  max-width: 1000px;
  text-align: center;
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


const Communication = () => (
  <React.Fragment>
    <Header title="Cultivate communication" />
  <Section>
  <Article>
    <Logo><Relational /></Logo>
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
