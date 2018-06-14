import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { flexContainer } from '../../utils/mixins';

export default styled(Link)`
  ${flexContainer('row', 'center', 'center')};
  background-color: ${props => props.theme.darkBlue};
  border-radius: 5px;
  color: ${props => props.theme.white};
  text-align: center;
  height: 3em;
  max-width: 250px;
  margin: 1.5em auto;
  box-shadow: 1px 4px 10px ${props => props.theme.darkBlue};
  text-decoration: none;
  text-transform: uppercase;
  &:focus {
    cursor: pointer;
    box-shadow: 0 0 10px ${props => props.theme.darkBlue};
  }
  &:active {
    outline: none;
    box-shadow: 0 0 10px ${props => props.theme.darkBlue};
  }
`;
