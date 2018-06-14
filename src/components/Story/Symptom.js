import styled from 'styled-components';

import { flexContainer } from '../../utils/mixins';

export default styled.div`
  ${flexContainer('column', 'center', 'center')};
  height: 25%;
  width: 75%;
  opacity: 0.9;
  z-index: 1;
  border-radius: 5px;
  color: ${props => props.theme.white};
  font-size: 0.9rem;
  ${props =>
    props.type === 'physical'
      ? `background-color: ${props.theme.lightGreen}`
      : null};
  ${props =>
    props.type === 'relational'
      ? `background-color: ${props.theme.lightCoral}`
      : null};
  ${props =>
    props.type === 'psychological'
      ? `background-color: ${props.theme.lightSlate}`
      : null};
`;
