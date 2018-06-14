import React from 'react';
import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { flexContainer } from '../../../utils/mixins';

const StyledHeader = styled.header`
  ${flexContainer('row', 'space-around', 'center')};
  width: 100%;
  height: 10%;
`;

const Back = styled.div`
  ${flexContainer('row', 'center', 'center')};
  height: 40%;
  width: 6%;
`;

const Title = styled.h1`
  ${flexContainer('row', 'flex-start', 'center')};
  height: 40%;
  width: 80%;
  font-family: ${props => props.theme.bodyFont};
  font-size: 1.3rem;
`;

const Header = ({ title, history }) => (
  <StyledHeader>
    <Back onClick={history.goBack}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.8 7L9.4 1.4L8 0L0 8L8 16L9.4 14.6L3.8 9H16V7H3.8Z"
          fill="#3D4F51"
        />
      </svg>
    </Back>
    <Title>{title}</Title>
  </StyledHeader>
);
Header.propTypes = {
  title: propTypes.string,
  history: propTypes.object
};

export default withRouter(Header);
