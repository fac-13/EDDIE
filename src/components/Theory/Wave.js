import React from 'react';
import styled from 'styled-components';

import wave from '../../../assets/wave.svg';

const Ocean = styled.div`
  height: 5%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #15bdb2;
`;

let Water = styled.div`
  background: url(${wave}) repeat-x;
  position: absolute;
  bottom: 0;
  top: -150px;
  width: 3000px;
  height: 350px;
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1573px;
    }
  }
`;

const Wave = () => (
  <Ocean>
    <Water />
  </Ocean>
);

export default Wave;
