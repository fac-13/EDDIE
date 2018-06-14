import { CarouselProvider } from 'pure-react-carousel';

import { flexContainer } from '../../utils/mixins';

import styled from 'styled-components';

import 'pure-react-carousel/dist/react-carousel.es.css';

export default styled(CarouselProvider)`
  ${flexContainer('column', 'space-between', 'center')};
  width: 100%;
  height: 90%};
`;
