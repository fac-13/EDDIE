import React from 'react';

import Header from '../Header/Header';
import Carousel from '../Carousel/Carousel';
import styled from 'styled-components';

// Data for carousel
const SlidesData = [
  {
    name: 'Daniel',
    about: 'Married 25 years, has 1 child',
    symptoms: [
      {
        type: 'physical',
        text: 'Smoker. Diabetic',
        intervention:
          'Long–term smoking and Diabetes both cause erection difficulties. Daniel can discuss with his physician about medications that can help with his ED, alongside psychotherapy or couples counselling. '
      },
      {
        type: 'psychological',
        text: 'ED for more than 10 years',
        intervention:
          'Feelings of hopelessness and frustration about ongoing ED lead to avoiding sex or seeking help making the possibility of change less likely. He is embarrassed about ED and feeling guilty, avoids talking to his wife. Using mindfulness Daniel can learn to connect with his feelings and learn to stay emotionally calm particularly around issues'
      },
      {
        type: 'relational',
        text: 'Impacting on relationship',
        intervention:
          'His wife, unaware of his worries and feelings, feels rejected and angry creating more tension and fights between them. In psychotherapy or couples therapy Daniel and his wife could use Sensate Focus Exercises as a way to reconnect intimately and explore a wide range of options to give and receive sexual pleasure with each other beyond erections and penetration. '
      }
    ]
  },
  {
    name: 'Jorge',
    about: '22 years old',
    symptoms: [
      {
        type: 'psychological',
        text:
          'Moved to London last year to study. He can get an erection but soon after he loses it',
        intervention:
          'Jorge’s ED is related to feelings of anxiety and the expectations his sets to perform sexually for his partner. Also, moving to a new country, and in an new relationship can introduce a number of challenges that can increase feelings of anxiety and the fear of failing. Jorge would benefit reading about male sexuality and how he can develop his own sexual self (link resources)'
      },
      {
        type: 'relational',
        text: 'Has a girlfriend of 6 months',
        intervention:
          'Expectations from media, film, family, friends for men to always perform sexually, or to know how to “please” a partner. His girlfriend is understanding but not sure how to help him. Sensate focus exercises could help them both increase pleasure and reduce performance anxieties. Playing the game of “ten things I enjoy in sex” can be a fun way to open up converstaions about sex with a partner. The list can be regularly reviewed and items been added or removed, more like a sexual shopping list of what is on offer'
      },

      {
        type: 'physical',
        text: 'Has no difficulties when he masturbates',
        intervention:
          'Although when masturbating Jorge is able to stay in a physically pleasurable state of mind and body, when having sex with his partner his body goes into “fight or flight” mode, hutting down the pleasure centres in his brain that relate to maintain erection. Jorge would benefit to know more about his body’s responses to signals of stress and pleasure (appetitive and aversive states). Mindfulness could help him cultivate appetitive state. Kegel exercises could help Jorge become familiar with voluntary tensing and relaxing of the pelvic floor muscles that can hinder or facilitate erections'
      }
    ]
  },
  {
    name: 'Martin',
    about: '32 years old',
    symptoms: [
      {
        type: 'relational',
        text: 'His-year relationship to another man ended recently',
        intervention:
          'The loss of a long-term relationship can bring feelings of loneliness, and affect our desire for sex, leading to ED. Experiences of bullying or rejection because of one’s sexuality by family, friends or other social groups can increase the fear of rejection when meeting new people. Martin could benefit from joining an LGBTQ social groups that foster belonging and a sense of community.'
      },
      {
        type: 'physical',
        text:
          'Has used a mediction for ED but didn’t work. Takes anti-depressants',
        intervention:
          'Anti-depressants can cause ED. Medications work only when a man is in an appetitive state of mind. Talking to his physician could help Martin make a change or adjustment to his anti-depressant medication. Reading about the way ED medications work with his body can help him use them effectively.'
      },

      {
        type: 'psychological',
        text: 'Has casual sex but for the first time he can’t get an erection',
        intervention:
          'The uncertainties of meeting casual partners can trigger personal insecurities and fears of being rejected than contribute to ED. Martin would benefit to know more about his body’s responses to signals of stress and pleasure (appetitive and aversive states). Mindfulness could help Martin cultivate emotional calmness particularly at times when he faces uncertainty'
      }
    ]
  },
  {
    name: 'Peter',
    about: '19 years old',
    symptoms: [
      {
        type: 'relational',
        text:
          'ED the first time he tried to have sex with a partner 2 years ago',
        intervention:
          'Although we learn to use every part of our bodies as babies through our relationship with our parents or caretakers as a step to being socialised, we rarely have guidance how to use our bodies for pleasure. Most people learn about sex from pornography which is for entertainment rather than to educate, or peers. Its common for men at Peter’s age to feel overwhelmed by the expectations to perform sexually with limited experiences or support. Basic education about anatomy would be helpful for Peter to understand and explore his own body and that of his partner’s. Reading about male sexuality can help Peter develop a better understanding of his own self and the ongoing process of developing his own sexual self without fear and/or unrealistic expectations '
      },
      {
        type: 'physical',
        text: 'Masturbates compulsively 7-8 times a day',
        intervention:
          'Peter’s body needs to become familiar being stimulated in the presence of another person. Although there is no fixed number of how often or how long someone can masturbate, compulsive masturbation can reduce sensitivity to the penis during that period'
      },
      {
        type: 'psychological',
        text:
          'Does not feel as much pleasure as before when he masturbates. Worried about his penis becoming smaller',
        intervention:
          'Anxiety and fear often show in the body as tension and stress, and masturbation or sex can be one way of relieving them. However, compulsive masturbation can indicate social anxiety in which case avoiding meeting others and using masturbating as a strategy to control/avoid anxiety will only make things worse in the long-term. Mindfulness could help Peter explore alternative ways to regulate physical tension and anxiety in his body, and become more aware of physical sensations'
      }
    ]
  }
];

const Main = styled.main`
${params => params.theme.flexContainer('column', 'space-around', 'center')}
height: 90%;
width: 100%;
`
const Instructions = styled.p`
width: 80%;
text-align: center;
height: 8%;
margin: 5px;
`

const Stories = () => (
  <React.Fragment>
    <Header title="Stories" />
    <Main>
      <Carousel type="stories" slides={SlidesData} />
      <Instructions>
        Click each item to learn how he coped with ED
      </Instructions>
    </Main>
  </React.Fragment>
);

export default Stories;
