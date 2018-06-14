import { Slide } from 'pure-react-carousel';
import styled from 'styled-components';

import 'pure-react-carousel/dist/react-carousel.es.css';

export default styled(Slide)`
  height: 100%;
  padding-bottom: 0px;
  font-size: 1.1em;

  .carousel__inner-slide {
    width: 95%;
    margin: auto;
    padding: 2%;
  }
`;
