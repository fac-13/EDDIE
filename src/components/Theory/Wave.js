import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  width: 100%;
  @media only screen and (min-width: 800px) {
    transform: scaleX(1.6);
  }
`;

const Wave = () => (
  <Svg
    className="theory__svg"
    viewBox="0 0 720 364"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M107.434 181.647H0V0C81.7091 7.06445 146.486 24.1143 198.169 37.718C238.586 48.3562 270.995 56.8867 297.234 56.8867L305.812 75.3982L107.434 181.647Z"
      transform="translate(0 0.705566) scale(2)"
      fill="#9ADA65"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 113.114V153.21H360V0C335.893 8.80103 311.835 18.5991 286.989 28.7175C208.146 60.8267 121.378 96.1636 0 113.114Z"
      transform="translate(0 57.5791) scale(2)"
      fill="#7CA5A9"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M172.634 0V92.7683H0C29.918 77.3401 59.3933 61.1619 88.2316 45.3335C117.067 29.5063 145.266 14.0288 172.634 0Z"
      transform="translate(374.731 176.463) scale(2)"
      fill="#FD8489"
    />
  </Svg>
);

export default Wave;
