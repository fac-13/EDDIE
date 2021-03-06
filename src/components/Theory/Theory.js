import React from 'react';
import styled from 'styled-components';

import { flexContainer } from '../../utils/mixins';

import Header from '../Shared/Header/Header';

import Link from './Link';
import Wave from './Wave';

const Main = styled.main`
  ${flexContainer('column', 'space-between', 'center')};
  height: 90%;
  width: 100%;
  bottom: 0;
  position: absolute;
  overflow: auto;
`;

const Buttons = styled.div`
  ${flexContainer('column', 'space-around', 'center')};
  margin-top: 2rem;
  height: 50%;
  width: 100%;
  max-width: 800px;
  @media only screen and (min-width: 1000px) {
    ${flexContainer('row', 'space-between', 'center')};
  }
`;

const Theory = () => (
  <React.Fragment>
    <Header title="Theory" border="#15bdb2 solid 5px" />
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
