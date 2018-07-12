import React from 'react';
import Header from '../Shared/Header/Header';
import Carousel from '../Carousel/Carousel';

// Data for carousel
const SlidesData = [
  {
    name: 'Daniel',
    about: '47 years old',
    symptoms: [
      {
        type: 'physical',
        text: 'Smoker. Diabetic',
        intervention:
          'Long–term smoking and Diabetes both cause erection difficulties. Daniel can discuss with his physician about medications that can help with his ED, alongside psychotherapy or couples counselling.'
      },
      {
        type: 'psychological',
        text: 'ED for more than 10 years',
        intervention:
          'Feelings of hopelessness and frustration about ongoing ED lead to avoiding sex or seeking help making the possibility of change less likely. He is embarrassed about ED and feeling guilty, avoids talking to his wife. Using mindfulness Daniel can learn to connect with his feelings and learn to stay emotionally calm particularly around issues'
      },
      {
        type: 'relational',
        text: 'Impacting on his marriage',
        intervention:
          'His wife, unaware of his worries and feelings, feels rejected and angry creating more tension between them. In psychotherapy or couples therapy Daniel and his wife could use Sensate Focus Exercises as a way to reconnect intimately and explore a wide range of options to give and receive sexual pleasure with each other beyond erections and penetration.'
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
          'Jorge’s ED is related to feelings of anxiety and the expectations his sets to perform sexually for his partner. Also, moving to a new country, and in an new relationship can introduce a number of challenges that can increase feelings of anxiety and the fear of failing. Jorge would benefit reading about male sexuality and how he can develop his own sexual self (see Resources section)'
      },
      {
        type: 'relational',
        text: 'Has a girlfriend of 6 months',
        intervention:
          'Expectations from media, film, family, friends for men to always perform sexually, or to know how to “please” a partner. His girlfriend is understanding but not sure how to help him. Sensate focus exercises could help them both increase pleasure and reduce performance anxieties (see Resources section)'
      },

      {
        type: 'physical',
        text: 'Has no difficulties when he masturbates',
        intervention:
          'Although when masturbating Jorge is able to stay in a physically pleasurable state of mind and body, when having sex with his partner his body goes into “fight or flight” mode, shutting down the pleasure centres in his brain that relate to maintain erection. Jorge would benefit to know more about his body’s responses to signals of stress and pleasure (see Mechanism section). Mindfulness could help him cultivate appetitive state. Kegel exercises could help Jorge become familiar with voluntary tensing and relaxing of the pelvic floor muscles that can hinder or facilitate erections (see Resources)'
      }
    ]
  },
  {
    name: 'Martin',
    about: '32 years old',
    symptoms: [
      {
        type: 'relational',
        text: 'His 3-year relationship to another man ended recently',
        intervention:
          'The loss of a long-term relationship can bring feelings of loneliness, and affect our desire for sex, leading to ED. Experiences of bullying or rejection because of one’s sexuality by family, friends or other social groups can increase the fear of rejection when meeting new people. Martin could benefit from joining an LGBTQ social groups that foster belonging and a sense of community.'
      },
      {
        type: 'physical',
        text:
          'Has used a mediction for ED but didn’t work. Takes anti-depressants',
        intervention:
          'Anti-depressants can cause ED. Medications work only when a man is in an appetitive state of mind. Talking to his physician could help Martin make a change or adjustment to his anti-depressant medication. Reading about the way ED medications work with his body can help him use them effectively (see Resources)'
      },

      {
        type: 'psychological',
        text: 'Has casual sex but for the first time he can’t get an erection',
        intervention:
          'The uncertainties of meeting casual partners can trigger personal insecurities and fears of being rejected that contribute to ED. Martin would benefit to know more about his body’s responses to signals of stress and pleasure. Mindfulness could help Martin cultivate emotional calmness particularly at times when he faces uncertainty'
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
          'Most people learn about sex from pornography which is mainly for entertainment. It is common for men at Peter’s age to feel overwhelmed by the expectations to perform sexually. Reading about male sexuality and anatomy can help Peter develop a better understanding of his own body and the ongoing process of developing his own sexual self without fear and/or unrealistic expectations.'
      },
      {
        type: 'physical',
        text: 'Masturbates compulsively 7-8 times a day',
        intervention:
          'Peter’s body needs to become familiar being stimulated in the presence of another person. Although there is no fixed number of how often or how long someone can masturbate, compulsive masturbation can reduce sensitivity to the penis during that period.'
      },
      {
        type: 'psychological',
        text:
          'Does not feel as much pleasure as before when he masturbates. Worried about his penis becoming smaller',
        intervention:
          'Anxiety and fear often show in the body as tension and stress, and masturbation or sex can be one way of relieving them. However, compulsive masturbation as a strategy to control or avoid anxiety will only make things worse in the long-term. Mindfulness could help Peter explore alternative ways to regulate physical tension and anxiety in his body, and become more aware of physical sensations.'
      }
    ]
  },
  {
    name: 'Mohamed',
    about: '36 years old',
    symptoms: [
      {
        type: 'relational',
        text: 'His spouse used to experience pain during sex',
        intervention:
          'Exploring with his partner their previous experiences in terms of feelings of fear or guilt; how they both hold responsibility for their experience. Exploring sensate focus to explore pleasure in sex rather than focus on penetration; and later explore positions with partner on top can be some helpful interventions.'
      },
      {
        type: 'physical',
        text:
          'Although his wife learned how to manage pain, he now experiences ED',
        intervention:
          'Previous experiences of pain by his partner during sex are likely to have triggered Mohamed’s aversive system (see Mechanism), causing tension and physical discomfort in the thought of potentially harming/causing pain to his partner during sex. Mindfulness could help Mohamed to understand his fear response and learn how stay calm in his own body.'
      },
      {
        type: 'psychological',
        text:
          'Feels frustrated with this new development, as he believes his partner is now ready for more sex.',
        intervention:
          'Pain response by a partner can trigger feelings of fear and guilt that can lead to ED in men.'
      }
    ]
  },
  {
    name: 'Ralph',
    about: '44 years old',
    symptoms: [
      {
        type: 'relational',
        text: 'Tends to avoid relationships',
        intervention:
          'Ralph might need to discuss with a partner the possible impact of sexual abuse in terms of feelings of fear about physical intimacy. Organisations such as relate.org.uk and tavistockrelationships.org provide support to couples that experience relational difficulties and challenges with intimacy.'
      },
      {
        type: 'physical',
        text: 'Has low desire for sex due to sexual abuse as an adolescent',
        intervention:
          'History of sexual abuse can trigger high levels of physical and emotional stress in sex leading to low sex-drive (desire) in the long term'
      },
      {
        type: 'psychological',
        text:
          'Feels increasingly lonely and would like to be in a long-term relationship',
        intervention:
          'Ralph is likely to have associated sexual relationships with fear and feelings of vulnerability that might need to be addressed in psychotherapy. Also, organisations such as survivorsuk.org provide counselling and peer support groups.'
      }
    ]
  }
];

const Stories = () => (
  <React.Fragment>
    <Header title="Stories" />
    <Carousel type="stories" slides={SlidesData} />
  </React.Fragment>
);

export default Stories;
