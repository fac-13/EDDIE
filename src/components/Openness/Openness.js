import React from 'react';
import Header from '../Header/Header';
import { Psychological } from '../Assets/Assets';
import styled from 'styled-components';


const Article = styled.article`
  display:block;
  margin: auto;
  height: 87%;
  text-align: center;
  border-top: .3em solid ${props => props.theme.slate};;
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


const Openness = () => (
  <React.Fragment>
    <Header title="Cultivate openness" />
    <Article>
    <Logo><Psychological /></Logo>
      <P>
        We experience emotional reactions (feelings) throughout the day, from
        excitement when meeting a good friend for lunch to irritation when
        getting stuck on the Underground. Feelings are experienced in our bodies
        as physiological reactions as well as our minds as thoughts or mental
        events.
      </P>

      <P>
        Our brains and bodies are interconnected in complex and subtle ways.
        Feelings are constantly changing throughout the day as we interact and
        respond to the world. It’s part of being alive. We even experience
        feelings when we are asleep.
      </P>

      <P>
        Self-criticism and catastrophising which tend to be associated with ED,
        together with avoidance behaviours are likely to create a vicious cycle
        that maintains ED.
      </P>

      <P>
        Explore and address unrealistic beliefs that might trigger and maintain
        your anxiety around sex.
      </P>

      <P>
        You can look in our resources section to learn more about your body and
        sexual wellbeing, or you can meet with a psychosexual therapist or
        mental health professional to discuss any difficulties you experience,
        in person.
      </P>
    </Article>
  </React.Fragment>
);

export default Openness;
