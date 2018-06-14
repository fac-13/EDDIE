import React from 'react';
import styled from 'styled-components';

import { flexContainer } from '../../utils/mixins';

import Header from '../Header/Header';

import Link from './Link';
import Wave from './Wave';

const Main = styled.main`
  ${flexContainer('column', 'space-between', 'center')};
  width: 100%;
  height: 100%;
`;

const Buttons = styled.div`
  ${flexContainer('column', 'space-around', 'center')};
  height: 50%;
  width: 100%;
  max-width: 800px;
  @media only screen and (min-width: 1000px) {
    ${flexContainer('row', 'space-between', 'center')};
  }
`;

const Theory = () => (
  <React.Fragment>
    <Header title="Theory" />
    <Main>
      <Buttons>
        <Link to="causes">Causes</Link>
        <Link to="mechanism">Mechanism</Link>
        <Link to="myths">Myths</Link>
      </Buttons>
      <Wave />
    </Main>
  </React.Fragment>
);

export default Theory;
