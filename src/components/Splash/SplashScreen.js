import styled from 'styled-components';

export default styled.div`
${props => props.theme.flexContainer('column', 'center', 'center')}
background-color: ${props => props.theme.blue};
height: 100vh;
width: 100vw;
animation: appear 2s ease-out;
@keyframes appear {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.5
  }
}
`;
