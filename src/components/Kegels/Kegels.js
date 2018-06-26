import React from 'react';
import styled from 'styled-components';

import Header from '../Shared/Header/Header';

import { Physical } from '../Assets/Assets';
import { flexContainer } from '../../utils/mixins';

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
  max-width: 1000px;
  text-align: center;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.2em;
  margin: 1em;
`;

const StyledPhysical = styled(Physical)`
  height: 150px;
  width: 5rem;
`;

const Subtitle = styled.h3`
  font-weight: 700;
  font-size: 1.1em;
`;

const List = styled.ul`
  ${flexContainer('column', 'space-around', 'center')};
  list-style: initial;
  margin: 0.5em auto 0.5em auto;
  max-width: 900px;
`;

const Item = styled.li`
  width: 80%;
  list-style: initial;
  margin: 0.5em auto 0.5em auto;
  text-align: left;
`;

const P = styled.p`
  padding: 1em;
  text-align: left;
  line-height: 1.1rem;
`;

const Warning = styled.div`
  padding: 0.5em;
  border: 0.2em red dotted;
  font-weight: 500;
  max-width: 900px;
  width: 80%;
  margin: 1em auto;
`;

const A = styled.a`
  ${flexContainer('row', 'center', 'center')};
  background-color: ${props => props.theme.darkBlue};
  border-radius: 5px;
  color: ${props => props.theme.white};
  text-align: center;
  height: 3em;
  max-width: 250px;
  margin: 1.5em auto;
  box-shadow: 1px 4px 10px ${props => props.theme.darkBlue};
  text-decoration: none;
  text-transform: uppercase;
  &:focus {
    cursor: pointer;
    box-shadow: 0 0 10px ${props => props.theme.darkBlue};
  }
  &:active {
    outline: none;
    box-shadow: 0 0 10px ${props => props.theme.darkBlue};
  }
`;

const Kegels = () => (
  <React.Fragment>
    <Header title="Kegels for Men" border="#71BE63 solid 5px" />
    <Section>
      <Article>
        <StyledPhysical />
        <P>
          There are a variety of techniques that can help you to develop better
          awareness and control of the various parts of your body that are
          usually involved in sex.
        </P>
        <P>
          Kegels are a series of exercises designed to identify and build
          control of the pelvic floor muscles. They are useful for improving
          sexual functioning; by increasing your awareness of tension and
          relaxation especially in the pelvic area. Although tensing can
          increase your pleasure; it can also reduce the blood flow to your
          penis (see also Male Anatomy). Learning how and when to relax or tense
          your pelvic muscles can be a very helpful skill to practice to
          increase your sexual pleasure and enjoyment.
        </P>

        <Title>Where are my pelvic floor muscles?</Title>

        <P>
          Pelvic floor muscles lie at the bottom of your pelvic cradle and are
          shaped like a figure eight which encircles the urethra and anus. When
          doing Kegels, it is important to learn how to tighten and contract the
          correct muscles (they are similar to pelvic floor lifts in pilates and
          yoga). Try the exercises below to help you identify your pelvic floor
          muscles:
        </P>

        <List>
          <Item>
            When next you go to the toilet, try to stop the flow of urine
            midstream by tightening your pelvic floor muscles. Repeat this
            action a couple of times to locate the pelvic floor muscles.
          </Item>
          <Item>
            You can also identify these muscles by contracting the anus (as if
            trying to hold back some wind). With practice, you can move or tilt
            the pelvic muscle forwards towards your genitals.
          </Item>
        </List>

        <P>
          At first, some people will find it challenging to focus only on the
          pelvic floor muscles. Sometimes people may try ‘too hard’ by
          overextending and tensing their tummy, thighs and buttocks. If you
          feel any discomfort in your abdomen or lower back, you may not be
          doing the exercise correctly.
        </P>

        <Title>How do I practice Kegels exercises?</Title>

        <P>
          Regular practice will help build your muscle tone in the pelvic floor
          area. It will also increase your awareness of the pelvic area. Over
          time, you will notice improvements in sexual pleasure, confidence and
          pelvic control.
        </P>

        <Subtitle>Slow kegels</Subtitle>

        <P>
          Tighten the pelvic floor muscles and hold for a count of 10 and then
          relax these muscles for another count of 10. Aim for three sets of 10
          slow kegels per day (morning, afternoon and evening).
        </P>

        <Subtitle>Fast kegels</Subtitle>

        <P>
          Tighten and relax the pelvic floor muscles as quickly as you can for 5
          to 10 repetitions. Try to practice a set of 10 rapid contractions
          three times per day (morning, afternoon and evening).
        </P>

        <P style={{ fontWeight: '700' }}>
          You can do these exercises at any time and any place. Most people
          prefer to do the exercises while lying down or sitting in a chair.
          After 5 - 6 weeks, you should notice some improvement.
        </P>

        <Warning>
          Do not try to {"'speed up'"} progress by increasing the number of
          repetitions. Excessive exercising can cause muscle soreness and/or
          fatigue. Allow yourself time to practice so you can start to notice
          gradual improvements.
        </Warning>

        <P style={{ fontWeight: '700' }}>
          With practice, you can learn to exercise the pelvic muscles in
          isolation. This can help to fine tune your focused awareness on
          muscles involved in sexual pleasure. {"Don't"} forget – you are taking
          steps to improve your sexual health and wellbeing!
        </P>

        <A href="https://sexualwellbeingforall.files.wordpress.com/2016/11/kegelexercisesmen.pdf">
          DOWNLOAD PDF
        </A>
      </Article>
    </Section>
  </React.Fragment>
);

export default Kegels;
