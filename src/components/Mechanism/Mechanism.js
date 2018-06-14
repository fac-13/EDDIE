import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import Header from '../Shared/Header/Header';

const Section = styled.section`
  padding: 0.5em;
  border-top: 0.3em solid ${props => props.theme.blue};
  height: 80%;
  width: 100%;
`;

const Article = styled.article`
  display: block;
  margin: 1em auto;
  padding: 1em;
  max-width: 1000px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const H2 = styled.h2`
  font-weight: 700;
  padding-left: 0.5em;
  color: ${props => props.theme.darkBlue};
`;

const P = styled.p`
  padding: 0.5em;
  text-align: left;
`;

const Button = styled(Link)`
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
  width: 50%;
  margin: 0.5em auto;
  &: focus {
    cursor: pointer;
    box-shadow: 0 0 10px ${props => props.theme.white};
  }
  &: active {
    outline: none;
    box-shadow: 0 0 10px ${props => props.theme.white};
  }
`;

const Mechanism = () => (
  <React.Fragment>
    <Header title="The mechanism of erection" />
    <Section>
      <Article>
        <H2>Aversive state:</H2>
        <P>
          When you are experiencing fear or anxiety, you enter a state we call
          aversive when your body gets ready to ‘flight or fight’. The aversive
          state is achieved when the sympathetic nervous system (SNS) is
          activated.
        </P>
        <Button to="aversive" className="home__btn">
          Read more
        </Button>
      </Article>

      <Article>
        <H2>Appetitive state:</H2>
        <P>
          In reality, you do not need to do anything to gain an erection. It is
          partly an automatic reflex when you get into a sexually aroused state.
          When sexually aroused, your body enters a state we call appetitive.
        </P>
        <Button to="appetitive" className="home__btn">
          Read more
        </Button>
      </Article>
    </Section>
  </React.Fragment>
);

export default Mechanism;
