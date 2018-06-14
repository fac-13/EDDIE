import { Slide } from 'pure-react-carousel';
import styled from 'styled-components';

import { flexContainer } from '../../utils/mixins';

import 'pure-react-carousel/dist/react-carousel.es.css';

export default styled(Slide)`
  height: 100%;
  padding-bottom: 0;

  .carousel__inner-slide {
    height: 100vh; !important
    ${flexContainer('column', 'center', 'center')};
  }
`;
