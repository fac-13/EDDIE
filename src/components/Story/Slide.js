import { Slide } from 'pure-react-carousel';
import styled from 'styled-components';

import { flexContainer } from '../../utils/mixins';

import 'pure-react-carousel/dist/react-carousel.es.css';

export default styled(Slide)`
  height: 100%;
  padding-bottom: 0;

  .carousel__inner-slide {
    ${flexContainer('column', 'space-around', 'center')};
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    padding-bottom: 0px;
  }
`;
