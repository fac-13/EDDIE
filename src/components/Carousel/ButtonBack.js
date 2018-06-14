import { ButtonBack } from 'pure-react-carousel';

import styled from 'styled-components';

import 'pure-react-carousel/dist/react-carousel.es.css';

export default styled(ButtonBack)`
  color: ${props => props.theme.black};
  width: 5%;
  height: ${props => (props.type === 'causes' ? '80%' : '70%')};
  border: none;
  outline: none;
  position: absolute;
  left: 0;
  z-index: 1;
  opacity: 0;
  @media (min-width: 600px) {
    &:hover {
      background-color: ${props => props.theme.darkBlue};
      opacity: 0.1;
      font-weight: bold;
      font-size: 5em;
      color: black;
      height: 100vh;
    }
  }
`;
