import { Slider } from 'pure-react-carousel';

import { flexContainer } from '../../utils/mixins';

import styled from 'styled-components';

import 'pure-react-carousel/dist/react-carousel.es.css';

export default styled(Slider)`
  ${flexContainer('column', 'space-between', 'center')};
  height: 100%;
  width: 100vw;

  .carousel__slider-tray-wrapper {
    width: 100%;
    height: 100%;
  }
  .carousel__slider-tray {
    width: 100%;
    height: 100%;
    overflow-y: ${props => (props.type === 'stories' ? 'hidden' : 'scroll')};
  }
`;
