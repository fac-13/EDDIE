import React from 'react';
import styled from 'styled-components';

import Header from '../Shared/Header/Header';

import { Relational } from '../Assets/Assets';
import { flexContainer } from '../../utils/mixins';

const StyledRelational = styled(Relational)`
  height: 150px;
  width: 5rem;
`;

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

const Sensate = () => (
  <React.Fragment>
    <Header title="Sensate Focus" border="#FD8489 solid 5px" />
    <Section>
      <Article>
        <StyledRelational />
        <P>
          Sensate focussing exercises involve intimacy without penetration, by
          stimulating your five senses of hearing, seeing, touching, listening
          and tasting. It helps you and your partner to focus on the sensations
          that are produced by exploring each other’s bodies. In doing so, you
          learn to receive, take, and share pleasure through your encounters.
        </P>
        <P>
          Often the expectation to “perform” during sex can lead to anxiety,
          tension and less enjoyment. This can lead to a variety of sexual
          performance problems and a loss of pleasure in sex. Exploring and
          focusing on your body’s sensations and those of your partner’s body
          can help increase a sense of joy through intimacy by cultivating
          openness, playfulness, self-expression and communication.
        </P>
        <P>
          These exercises do not involve penetration. In fact, these exercises
          start with an agreement for no genital contact. The instructions for
          the exercises apply to everyone, including heterosexual, lesbian, gay,
          transsexual and queer people.
        </P>
        <Warning>
          Sensate focussing exercises are done in three stages. In order to get
          the maximum benefit, try to practice each stage 3 times per week for
          two or three weeks before advancing to the next stage.
        </Warning>

        <Title>Preparation</Title>

        <P>
          It is important to consider a variety of practical factors that can
          increase your pleasure or playfulness. These include the type of
          lighting, the room you use, temperature that allows both of you to be
          relaxed, body oils/lotions, a soft piece of cloth, etc.
        </P>
        <P>
          Also, it is important to explore potential obstacles to physical
          intimacy and think of ways to manage these. For example, if you are
          very busy then you may have to schedule a time to engage in this
          practice. If one partner has any current psychological difficulties,
          then they may need to address this first. If some areas of the body
          feel like “no go” areas, you should discuss this with your partner so
          you can feel safe and comfortable during the practice.
        </P>

        <Title>Stage 1: Pleasure taking</Title>

        <P>
          The focus at this first stage is to concentrate on taking pleasure
          from your partner’s body for yourself. This does not involve taking
          pleasure in pleasing your partner. Instead, it is experiencing
          pleasure by focusing on what brings a sense of joy and pleasure to
          your senses through your contact with her/his body.
        </P>
        <P>
          There are countless ways to explore how to get pleasure from your
          partner’s body. Below are some very general instructions.
        </P>

        <Subtitle>Instructions</Subtitle>

        <List>
          <Item>
            On your first turn, get your partner to lay on their front. Explore
            their body through touching, stroking, smelling, kissing their back,
            neck, arms, buttocks and legs. Don’t forget to pay attention to
            their hands and feet. Pay attention to the different skin textures
            of your partners’ body, any marks, body odours, etc. Make sure to
            pay attention to the sensations, thoughts and feelings stirred up in
            you as you explore their body.
          </Item>
          <Item>
            On your second turn, get the other person to lie on their back and
            massage their neck, chest, stomach, shoulders, arms and legs. You
            may also gently massage their scalp and face without lotion.
          </Item>
          <Item>
            Swap places and repeat the previous two steps with your partner
            touching your body. As yourself, your partner is invited to explore
            in their own way how to get as much pleasure from your body.
          </Item>
          <Item>
            Take plenty of time (from 15 to 60 minutes), to explore the other
            person’s body: stroke, tickle, gently touch and massage the other
            person’s body all over - avoiding sexual areas.
          </Item>
          <Item>
            Experiment with different sensations and use all your senses to
            “drink in” your partner’s body. Focus on your own pleasure in
            experiencing the texture, form and temperature of the other person’s
            body.
          </Item>
        </List>

        <P style={{ fontWeight: '700' }}>
          Reflection: You might find it useful to talk about what you’ve both
          enjoyed while taking pleasure from each other’s bodies, e.g. ‘I really
          liked…’
        </P>

        <Title>Stage 2: Pleasure giving</Title>

        <P>
          In this 2nd stage, you become open to listening and responding to what
          your partner finds pleasurable. The focus at this stage is to
          concentrate on giving pleasure to your partner following their
          instructions and suggestions.
        </P>
        <P>
          The emphasis is on the reactions of the person being caressed, rather
          than your own.
        </P>

        <Subtitle>Instructions</Subtitle>

        <List>
          <Item>
            If you are the first to being touched by your partner, make sure to
            let them know what you like and don’t like.
          </Item>
          <Item>
            Sometimes a touch will be too light, gentle or ticklish, or too
            heavy or uncomfortable. You can say how you feel, make appreciative
            noises, or move the other person’s hand to where or how you want to
            be touched.
          </Item>
          <Item>
            When guiding your partner, concentrate on your feelings and bodily
            sensations, rather than worrying if your partner gets tired or
            bored.
          </Item>
          <Item>
            You can spent as much time as you like in areas of your body or in
            ways of being touched that you find soothing, pleasurable and/or
            exciting. Also, you can experiment with areas you might have not
            been touched before or ways your partner has not touched you until
            then. Also, you can invite your partner to use a soft piece of
            clothing or a feather to touch you if you like.
          </Item>
          <Item>
            When it is your turn to touch your partner’s body, try to discover
            the degrees of pressure and types of touch that they find most
            pleasurable by encouraging feedback or by placing your hand under
            their hand so they can show you.
          </Item>
        </List>

        <P style={{ fontWeight: '700' }}>
          Reflection: You might find it useful to talk about your experiences
          afterwards, e.g. ‘I really liked it when you…’
        </P>

        <Title>Stage 3: Pleasure giving/taking including the genitals </Title>

        <P>
          Now you can include touching of the breasts and genital areas. You
          might want to spend several sessions or weeks on each phase of this
          stage before moving on to the next.
        </P>
        <P>
          Continue to pay attention to the other parts of the body that you
          explored in the previous sessions as well as the new areas that you
          are incorporating.
        </P>
        <P>
          The main aim of this stage is to increase each person’s pleasure and
          awareness of each other’s responses to different types of stimulation.
          If one or both of you become sexually aroused, this is fine but it is
          not the aim of the exercise.
        </P>

        <Subtitle>Instructions</Subtitle>
        <List>
          <Item>First, touch the breasts and nipples.</Item>
          <Item>
            Then include the areas around the genitals, including the testicles
            for men. You could do this with one person lying on their back, or
            sitting up against a support. Also, you might find helpful to sit
            with your partner holding them from behind or both facing each other
            with the person being touched’ legs around the other person’s hips.
            Make sure you are both comfortable with your backs supported if
            necessary.
          </Item>
          <Item>
            Finally, start touching the genitals themselves (the clitoris and
            entrance to the vagina on a woman, or the penis, shaft and glans on
            a man).
          </Item>
        </List>

        <P style={{ fontWeight: '700' }}>
          After a while you may also want to incorporate oral as well as manual
          touching (kissing, licking and sucking) into both non-genital and
          genital touching. You may also want to experiment with vibrators of
          different shapes and sizes (e.g. back massagers available from
          pharmacies, specialised vibrators available from specialist shops).
        </P>
      </Article>
    </Section>
  </React.Fragment>
);

export default Sensate;
