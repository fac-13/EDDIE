import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { flexContainer } from '../../utils/mixins';

import 'pure-react-carousel/dist/react-carousel.es.css';

export default styled(Link)`
  ${flexContainer('row', 'center', 'center')};
  width: 250px;
  height: 70px;
  background: ${params => params.theme.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  color: ${params => params.theme.darkBlue};
`;
