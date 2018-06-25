import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { flexContainer } from '../../utils/mixins';
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
  margin: auto;
  max-width: 1000px;
  text-align: center;
`;

const H3 = styled.h3`
  font-weight: 700;
  padding-left: 0.5em;
  text-transform: uppercase;
  color: ${props => props.theme.darkBlue};
  padding: 1em;
`;

const H4 = styled.h4`
  font-weight: 700;
  padding-left: 0.5em;
  color: ${props => props.theme.black};
`;

const P = styled.p`
  padding-bottom: 1em;
  text-align: center;
`;

const Button = styled(Link)`
  ${flexContainer('column', 'space-around', 'center')};
  border-radius: 5px;
  color: ${props => props.theme.white};
  height: 30px;
  max-width: 80%;
  font-size: 1.1rem;
  box-shadow: 1px 4px 10px lightgrey;
  text-decoration: none;
  padding: 0.3rem;
  margin: 1em auto;
  &: focus {
    cursor: pointer;
    box-shadow: 0 0 10px ${props => props.theme.white};
  }
  &: active {
    outline: none;
    box-shadow: 0 0 10px ${props => props.theme.white};
  }
`;

const Resources = () => (
  <React.Fragment>
    <Header title="Resources" border="grey solid 5px" />
    <Section>
      <Article>
        <Button to="mindfulness" style={{ backgroundColor: '#7CA5A9' }}>
          Male Mindful Self Practice
        </Button>
        <Button to="kegels" style={{ backgroundColor: '#71BE63' }}>
          Kegel exercises for men
        </Button>
        <Button to="sensate" style={{ backgroundColor: '#FD8489' }}>
          Sensate focus
        </Button>

        <H3>Recommended reading</H3>

        <H4>Coping with Erectile Dysfunction</H4>
        <P>by Barry McCarthy and Michael Metz</P>

        <H4>The New Male Sexuality</H4>
        <P>by Bernie Zilbergeld</P>

        <H4>The Relate Guide to Sex in Loving Relationships</H4>
        <P>by Sarah Litvinoff</P>

        <H4>The Massage Secrets for Lovers</H4>
        <P>by Andrew Stanway</P>
      </Article>
    </Section>
  </React.Fragment>
);

export default Resources;
