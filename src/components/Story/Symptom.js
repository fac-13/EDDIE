import styled from 'styled-components';

import { flexContainer } from '../../utils/mixins';

export default styled.div`
  ${flexContainer('column', 'center', 'center')};
  height: 20%;
  width: 75%;
  opacity: 0.8;
  z-index: 1;
  border-radius: 5px;
  color: ${props => props.theme.white};
  font-size: 0.9rem;
  ${props =>
    props.type === 'physical'
      ? `background-color: ${props.theme.green}`
      : null};
  ${props =>
    props.type === 'relational'
      ? `background-color: ${props.theme.coral}`
      : null};
  ${props =>
    props.type === 'psychological'
      ? `background-color: ${props.theme.slate}`
      : null};
`;
