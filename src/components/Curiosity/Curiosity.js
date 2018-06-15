import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Physical } from '../Assets/Assets';

import Header from '../Shared/Header/Header';

const Section = styled.section`
  border-top: 0.3em solid ${props => props.theme.green};
  width: 100%;
  height: 90%;
`;

const Article = styled.article`
  display: block;
  margin: auto;
  height: 87%;
  text-align: center;
  max-width: 1000px;
`;

const Category = styled(Physical)`
  height: 150px;
  width: 5rem;
  padding: 1rem;
  margin: 1em auto 0 auto;
`;

const P = styled.p`
  padding: 1em;
  text-align: left;
`;

const Curiosity = () => (
  <React.Fragment>
    <Header title="Cultivate your curiosity" />
    <Section>
      <Article>
        <Category />
        <P>
          Explore ways that increase physical comfort and emotional excitement.
        </P>

        <P>
          You can start on your own by using the <Link to="mindfulness">mindful masturbation exercise</Link>.
        </P>

        <P>
          The aim of this exercise is to increase your level of physical comfort
          and your awareness of what increases your pleasure.
        </P>

        <P>
          You might also find helpful to increase your awareness of the muscles
          around the genitals by practising <Link to="kegels">Kegels for Men</Link>.
        </P>

        <P>
          Finally, if you have a sexual partner, you can explore together sexual
          experiences that do not involve penetration (<Link to="sensate">Sensate Focus</Link>).
        </P>

        <P>
          This will help to increase your sexual repertoire and communication
          skills.
        </P>
      </Article>
    </Section>
  </React.Fragment>
);

export default Curiosity;
