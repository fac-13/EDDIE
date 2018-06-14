import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { flexContainer } from '../../utils/mixins';

import { Physical, Psychological, Relational } from '../Assets/Assets';

const Header = styled.header`
  ${flexContainer('row-reverse', 'flex-end', 'center')};
  height: 5rem;
  width: 100%;
  margin: auto;
  max-width: 1000px;
  color: ${props => props.theme.white}
  font-weight: 300;
  opacity: 0.9;
  ${props =>
    props.type === 'PHYSICAL'
      ? `background-color: ${props.theme.lightGreen}`
      : null};
  ${props =>
    props.type === 'RELATIONAL'
      ? `background-color: ${props.theme.lightCoral}`
      : null};
  ${props =>
    props.type === 'PSYCHOLOGICAL'
      ? `background-color: ${props.theme.lightSlate}`
      : null};
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.2em;
  color: ${props => props.theme.white};
`;

const StyledPhysical = styled(Physical)`
  height: 3rem;
  width: 3rem;
  margin: 0.7rem;
`;

const StyledPsychological = styled(Psychological)`
  height: 3rem;
  width: 3rem;
  margin: 0.7rem;
`;

const StyledRelational = styled(Relational)`
  height: 3rem;
  width: 3rem;
  margin: 0.7rem;
`;

const SectionHeader = ({ type }) => (
  <Header>
    <Title>{type} CAUSES</Title>
    {type === 'PHYSICAL' ? <StyledPhysical /> : null}
    {type === 'PSYCHOLOGICAL' ? <StyledPsychological /> : null}
    {type === 'RELATIONAL' ? <StyledRelational /> : null}
  </Header>
);

SectionHeader.propTypes = {
  type: propTypes.string
};

export default SectionHeader;
