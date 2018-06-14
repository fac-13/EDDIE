import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import Slide from './Slide';
import SectionHeader from './SectionHeader';
import Link from './Link';

import { flexContainer } from '../../utils/mixins';

const List = styled.ul`
  ${flexContainer('column', 'space-around', 'center')};
  list-style: initial;
  margin: 0.5em auto 0.5em auto;
  max-width: 900px;
`;

const ListItem = styled.li`
  width: 80%;
  list-style: initial;
  margin: 0.5em auto 0.5em auto;
`;

const Warning = styled.div`
  padding: 0.5em;
  border: 0.2em red dotted;
  font-weight: 500;
  max-width: 900px;
  width: 80%;
  margin: 1em auto;
`;

const Cause = ({ cause }) => {
  return (
    <Slide>
      <SectionHeader type={cause.type} />
      <List>
        {cause.list.map((item, index) => (
          <ListItem key={`key-${index}`}>{item}</ListItem>
        ))}
      </List>
      {cause.text ? <Warning>{cause.text}</Warning> : null}
      <Link to={cause.link}>
        STEPS YOU<br />CAN TAKE
      </Link>
    </Slide>
  );
};

Cause.propTypes = {
  cause: propTypes.object
};

export default Cause;
