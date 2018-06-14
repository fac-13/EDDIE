import React from 'react';
import Header from '../Header/Header';
import styled from 'styled-components';
import { Sad } from '../Assets/Assets';

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

const Aversive = () => (
  <React.Fragment>
    <Header title="Aversive state" />
    <Article>
    <Logo><Sad /></Logo>
      <P>
        Your heart speeds up and blood flows to your arms and legs to prepare
        you to fight or move away from an unpleasant situation. However, in a
        sexual context, fighting your thoughts or physical sensations or running
        away (e.g., avoid having sex with a partner, avoid talking about your
        difficulties), will only fuel your anxiety in the future.{' '}
      </P>
      <P>
        Learning to identify triggers for your anxiety, such as unrealistic
        beliefs about sex (see below), and unhelpful behaviours helps to improve
        sexual performance and pleasure. This also happens if you can create
        physical comfort and emotional calmness when you are with a sexual
        partner. These are the key processes for a healthy and enjoyable sexual
        life.
      </P>
    </Article>
  </React.Fragment>
);

export default Aversive;
