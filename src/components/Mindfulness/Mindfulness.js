import React from 'react';
import styled from 'styled-components';

import Header from '../Shared/Header/Header';

import { Psychological } from '../Assets/Assets';
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

const StyledPsycho = styled(Psychological)`
  height: 150px;
  width: 5rem;
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

const Mindfulness = () => (
  <React.Fragment>
    <Header title="Mindful Stimulation for Men" border="#7CA5A9 solid 5px" />
    <Section>
      <Article>
        <StyledPsycho />
        <P>
          One activity that can develop your sensuality is self-practice (i.e.
          masturbation, intimate touching) and the sensual exploration of your
          own body. As a child you probably noticed it felt good when you
          intentionally rubbed your genitals or they accidentally rubbed against
          something like another person, a stream of running water, or a pillow.
          The expression of healthy sexual relationships between two people
          begins with self-pleasuring from the time of birth. For most of us,
          masturbation provides our first source of sexual enjoyment. It can be
          a lifelong source of sexual pleasure if your mind allows you to accept
          this. However many people associate masturbating with juvenile or
          sinful, inappropriate behaviour.
        </P>
        <P>
          There are lots of myths and misinformation surrounding masturbation,
          and the topic tends to be shrouded in a veil of shame, guilt, and
          punishment. Masturbation does not cause physical problems or
          psychological problems. Masturbation is a self-limiting behaviour,
          which means you will ultimately lose interest in it and start doing
          something else. As long as you follow basic hygiene precautions (clean
          hands, toys, and so on) and have adequate lubrication, you can
          masturbate as often as you want.
        </P>
        <P>
          Rather than being a source of problems, masturbation is a healthy
          outlet for sexual desire, and can be a way to explore and enhance your
          sexuality.
        </P>
        <P>
          Connecting better with your own body; and learning the types of
          stimulation, areas in your body, postures, and the environments that
          enhance your arousal can be pleasurable and fun. Armed with this
          information, you may also decide to talk with your partner about what
          it takes to please you sexually; or engage in mutual mindful
          stimulation.
        </P>

        <Warning>
          You do not need to get or maintain an erection, you penis has
          sensations also when flaccid. You can end the practice by ejaculating
          or simply stopping by the end of the 30mins.
        </Warning>

        <Title>A mindful masturbation exercise</Title>

        <P>
          Allow at least 30 uninterrupted minutes for this exercise. This will
          give you enough time to reach a climax and return to an un-aroused
          state. Turn off your telephones, television, and other distractions.
          When performing this activity, focus your attention on the sensations
          in your genitals. Focus your attention on how each motion feels. Note
          the thoughts, feelings, personal scripts, and mental images that
          accompany your actions.
        </P>
        <P>
          Whenever your thoughts, feelings, personal scripts, and mental images
          drift away from the present moment and into the past or the future,
          tell yourself: “There goes my runaway mind again, taking me out of the
          present moment.” Just notice, accept it and get back to the task at
          hand.
        </P>

        <List>
          <Item style={{ fontWeight: '700' }}>
            Lie on your back on your bed or on a mat on the floor. Make sure the
            room is warm enough so your muscles can relax.
          </Item>
          <Item>
            Play relaxing background music to help override distracting sounds
            from the outside world.
          </Item>
          <Item>
            Use warm massage oil, lotion, or a lubricating jelly. This not only
            prevents damage to your skin, it also enhances the experience by
            providing a warm, slippery sensation to your genitals, fingers, and
            hands.
          </Item>
          <Item>
            Lightly swirl the lubrication around the head of your penis with
            only your fingertips.
          </Item>
          <Item>
            Focus your attention on the sensations on the tip of your penis and
            your fingertips.
          </Item>
          <Item>
            Note the thoughts, feelings, personal scripts, and mental images
            that accompany your actions.
          </Item>
          <Item>Continue to do this for another minute or two.</Item>
          <Item style={{ fontWeight: '700' }}>
            Now use your thumb and middle two fingers to swirl the lubrication
            around the head of your penis. Use your fingers to apply pressure to
            your circular motion.
          </Item>
          <Item>
            Experiment with different levels of pressure, but keep the
            stimulation limited to just the head of your penis.
          </Item>
          <Item>
            Focus your attention on the sensations in your pubic area and
            fingertips.
          </Item>
          <Item>
            Note the thoughts, feelings, personal scripts, and mental images
            that accompany your actions.
          </Item>
          <Item>Continue to do this for another minute or two.</Item>
          <Item style={{ fontWeight: '700' }}>
            Now shift your attention to the shaft of your penis, the area that
            extends from the head to your testicles (balls). Lightly move your
            fingers up and down and around the shaft of your penis with your
            fingertips only.
          </Item>
          <Item>
            Do not grab hold of your penis, just stroke with your fingertips
            gently.
          </Item>
          <Item>
            Note the thoughts, feelings, personal scripts, and mental images
            that accompany your actions.
          </Item>
          <Item>Continue to do this for another minute or two.</Item>
          <Item style={{ fontWeight: '700' }}>
            Now put some oil, lotion or jelly on your testicles and lightly
            swirl the lubrication around your testicles with your fingertips
            only.
          </Item>
          <Item>
            Focus your attention on the sensations in your testicles and your
            fingertips. Note the thoughts, feelings and mental images that
            accompany your actions.
          </Item>
          <Item>
            Note the thoughts, feelings, personal scripts, and mental images
            that accompany your actions.
          </Item>
          <Item>Continue to do this for another minute or two.</Item>
          <Item style={{ fontWeight: '700' }}>
            Now wrap your hand around your testicles and apply pressure as you
            knead your testicles. Experiment with different levels of pressure
            and the speed of your kneading motion.
          </Item>
          <Item>
            Focus your attention on the sensations in your entire penis and in
            your hand. Note the thoughts, feelings and mental images that
            accompany your actions.
          </Item>
          <Item>Continue to do this for another minute or two.</Item>
          <Item style={{ fontWeight: '700' }}>
            Now apply some oil, lotion, or jelly on your perineum, the area
            between your testicles and anal opening.
          </Item>
          <Item>
            Lightly swirl the lubrication around your perineum with your
            fingertips.
          </Item>
          <Item>
            Focus your attention on the sensations coming from your perineum and
            your fingertips.
          </Item>
          <Item>
            While stimulating this area you might find it enjoyable to insert
            the first finger (or more) into your anus.
          </Item>
          <Item>
            Note the thoughts, feelings, personal scripts, and mental images
            that accompany your actions.
          </Item>
          <Item>
            Exploring this area can feel threatening for some heterosexual men.
            Some men believe experiencing pleasurable sensations in this area
            might mean they have gay tendencies. This is not the case. The
            reality is that stimulating this area can feel pleasurable and good
            for all men, straight or gay.
          </Item>
          <Item style={{ fontWeight: '700' }}>
            Now go back to any type of stimulation you find pleasurable and
            continue this activity. You might try combining different types of
            stimulation or using both hands to pleasure yourself.
          </Item>
          <Item>
            Focus your attention on the sensations in your entire penis,
            testicles, perineum and your hand. Note the thoughts, feelings and
            mental images that accompany your actions.
          </Item>
          <Item>
            Continue doing this until you achieve orgasm or decide to stop.
          </Item>
        </List>

        <P>
          After you ejaculate, lie quietly and pay attention to the sensations
          in your genital area and the rest of your body. Note the thoughts,
          feelings and mental images that you experience as you return to a
          resting, non-aroused state. Allow your body to relax, your penis to go
          limp and your breathing to return to normal before getting up and
          washing off.
        </P>

        <P style={{ fontWeight: '700' }}>
          Try to think of mindful masturbation as a personal form of mindfulness
          practice to help you increase your overall moment-to-moment awareness
          as you become more aware of your personal sexual response.
        </P>

        <P style={{ fontWeight: '700' }}>
          If your mind keeps bringing up outdated personal scripts or beliefs
          related to masturbation, try to examine their helpfulness by asking
          yourself the following questions: Are these thoughts, personal
          scripts, emotions, and mental images related to masturbation helping
          or hindering my personal and relationship sexual goals?
        </P>
      </Article>
    </Section>
  </React.Fragment>
);

export default Mindfulness;
