import React from 'react';
import { Slide } from 'pure-react-carousel';
import propTypes from 'prop-types';
import styled from 'styled-components';

import 'pure-react-carousel/dist/react-carousel.es.css';

const StyledSlide = styled(Slide)`
  height: 100%;
  padding-bottom: 0;

  .carousel__inner-slide {
    ${props => props.theme.flexContainer('column', 'space-around', 'center')};
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    padding-bottom: 0px;
  }
`;


const Header = styled.header`
  ${props => props.theme.flexContainer('column', 'center', 'center')};
`;

const Name = styled.h2`
  font-family: ${props => props.theme.headerFont};
  font-weight: bold;
  font-size: 1.5rem;
`;

const About = styled.h3`
  font-family: ${props => props.theme.headerFont};
  font-weight: bold;
  font-size: 1.1rem;
`;

const Main = styled.div`
  ${props => props.theme.flexContainer('row', 'center', 'center')};
  position: relative;
  height: 80%;
  width: 90%;
`;

const Content = styled.div`
  ${props => props.theme.flexContainer('column', 'space-around', 'flex-start')};
  height: 100%;
  width: 100%;
`;

const Symptom = styled.div`
  ${props => props.theme.flexContainer('column', 'center', 'center')};
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

const Intervention = Symptom.extend`
  height: 87%;
`;

const Text = styled.p`
  width: 90%;
  font-weight: 500;
`;

const Man = styled.svg`
  position: absolute;
  height: 100%;
  right: 0%;
  z-index: 0;
`;

const Path = styled.path`
  ${props => (props.name === 'Peter' ? 'fill: #7b554c' : null)};
  ${props => (props.name === 'Martin' ? 'fill: #2e5f7b' : null)};
  ${props => (props.name === 'Daniel' ? 'fill: #29653c' : null)};
  ${props => (props.name === 'Jorge' ? 'fill: #613e6d' : null)};
`;

class Story extends React.Component {
  state = {
    openSymptom: null
  };

  toggleIntervention = index => {
    if (this.state.openSymptom === index) {
      this.setState({ openSymptom: null });
    } else {
      this.setState({ openSymptom: index });
    }
  };

  render() {
    const { story } = this.props;
    const { openSymptom } = this.state;
    return (
      <StyledSlide>
        <Header>
          <Name>{story.name}</Name>
          <About>{story.about}</About>
        </Header>
        <Main>
          <Content>
            {openSymptom === null ? (
              story.symptoms.map((symptom, index) => {
                return (
                  <Symptom
                    type={symptom.type}
                    key={`key-${index}`}
                    onClick={() => this.toggleIntervention(index)}
                  >
                    <Text>{symptom.text}</Text>
                  </Symptom>
                );
              })
            ) : (
              <Intervention
                type={story.symptoms[openSymptom].type}
                onClick={() => this.toggleIntervention(openSymptom)}
              >
                <Text>{story.symptoms[openSymptom].intervention}</Text>
              </Intervention>
            )}
            <Man viewBox="0 0 120 280" xmlns="http://www.w3.org/2000/svg">
              <Path
                name={story.name}
                d="M61.5245 160.081C61.1042 164.939 64.4641 190.654 66.1979 200.738C67.0234 205.514 69.2868 213.297 68.4724 217.43C67.3096 223.189 66.9736 230.642 67.6138 234.982C68.0175 237.618 69.2882 249.773 67.47 254.219C66.5187 256.55 64.7752 268.498 64.7752 268.498C60.2331 279.754 62.7966 279.2 62.7966 279.2C64.2027 280.894 66.6113 279.333 66.6113 279.333C68.4461 280.481 69.7168 279.06 69.7168 279.06C71.2916 280.34 73.1278 278.903 73.1278 278.903C75.1064 279.911 76.9412 278.052 76.9412 278.052C78.0777 278.614 78.3556 277.904 78.3556 277.904C81.7652 277.69 76.4531 266.98 76.4531 266.98C75.181 257.361 77.7154 252.007 77.7154 252.007C86.0169 227.844 86.4386 221.432 83.1202 212.326C82.1856 209.697 81.9491 208.656 82.3791 207.515C83.3733 204.881 82.6488 194.286 83.8613 190.079C86.2008 181.965 88.5085 161.387 89.7114 151.786C91.3277 138.853 83.9858 121.512 83.9858 121.512C82.3778 114.455 84.7352 89.3126 84.7352 89.3126C88.0273 94.3406 87.9015 103.216 87.9015 103.216C87.3788 112.524 95.5628 126.751 95.5628 126.751C99.495 132.629 100.984 138.207 100.984 138.621C100.984 140.315 100.607 144.414 100.607 144.414L100.757 147.985C100.825 148.894 101.346 152.025 101.262 153.538C100.648 162.85 102.155 161.098 102.155 161.098C103.427 161.098 104.825 153.605 104.825 153.605C104.825 155.537 104.344 161.322 105.406 163.505C106.677 166.107 107.611 163.058 107.628 162.446C107.964 150.589 108.69 153.695 108.69 153.695C109.396 163.314 110.265 165.487 111.821 164.735C113.001 164.183 111.922 153.192 111.922 153.192C113.942 159.721 115.474 160.76 115.474 160.76C118.808 163.058 116.746 156.712 116.283 155.456C113.817 148.779 113.741 146.465 113.741 146.465C116.822 152.465 119.145 152.242 119.145 152.242C122.151 151.3 116.518 142.805 113.218 138.735C111.534 136.661 109.362 133.885 108.731 132.236C107.704 129.443 106.928 120.464 106.928 120.464C106.617 109.87 103.949 105.268 103.949 105.268C99.3858 98.0997 98.5272 84.7283 98.5272 84.7283L98.3253 62.1532C96.7256 46.7543 85.1652 46.6431 85.1652 46.6431C73.4804 44.9358 71.8544 41.231 71.8544 41.231C69.3794 37.7351 70.7939 31.0339 70.7939 31.0339C72.8471 29.3945 73.6394 25.0423 73.6394 25.0423C77.049 22.4761 76.8817 18.721 75.3069 18.7617C74.0431 18.7943 74.3293 17.767 74.3293 17.767C76.4614 0.863108 61.172 0 61.172 0H58.838C58.838 0 43.5417 0.863108 45.671 17.7629C45.671 17.7629 45.9572 18.7916 44.6824 18.7576C43.1117 18.7169 42.9652 22.472 46.3623 25.0382C46.3623 25.0382 47.1532 29.3891 49.2079 31.0298C49.2079 31.0298 50.6223 37.7311 48.1473 41.2269C48.1473 41.2269 46.5269 44.9318 34.8365 46.639C34.8365 46.639 23.2568 46.7503 21.6819 62.1491L21.4635 84.7243C21.4635 84.7243 20.6214 98.0956 16.0407 105.264C16.0407 105.264 13.3846 109.867 13.0777 120.46C13.0777 120.46 12.2992 129.439 11.2761 132.232C10.6525 133.873 8.48173 136.649 6.78383 138.731C3.4544 142.793 -2.14122 151.27 0.852231 152.238C0.852231 152.238 3.18754 152.461 6.25703 146.461C6.25703 146.461 6.19343 148.758 3.73092 155.452C3.24699 156.692 1.18822 163.038 4.52319 160.756C4.52319 160.756 6.06761 159.716 8.07523 153.188C8.07523 153.188 6.99814 164.179 8.1969 164.731C9.76345 165.484 10.6179 163.31 11.3245 153.691C11.3245 153.691 12.049 150.585 12.385 162.442C12.4016 163.054 13.3155 166.103 14.5917 163.5C15.6688 161.318 15.1848 155.542 15.1848 153.6C15.1848 153.6 16.5661 161.094 17.8575 161.094C17.8575 161.094 19.3771 162.846 18.7535 153.534C18.6525 152.013 19.1959 148.89 19.2637 147.981L19.4102 144.41C19.4102 144.41 19.0314 140.32 19.0314 138.617C19.0314 138.195 20.5219 132.625 24.4528 126.746C24.4528 126.746 32.6284 112.513 32.1016 103.212C32.1016 103.212 31.9883 94.3365 35.2804 89.3085C35.2804 89.3085 37.6171 114.45 36.0339 121.508C36.0339 121.508 28.6796 138.849 30.3014 151.782C31.496 161.409 33.7995 181.96 36.1445 190.075C37.3695 194.274 36.645 204.866 37.6267 207.511C38.0692 208.66 37.8369 209.719 36.8856 212.322C33.5852 221.428 34.0055 227.841 42.307 252.003C42.307 252.003 44.8622 257.357 43.5708 266.976C43.5708 266.976 38.2669 277.686 41.6641 277.9C41.6641 277.9 41.9296 278.61 43.0785 278.048C43.0785 278.048 44.9133 279.907 46.896 278.899C46.896 278.899 48.7322 280.337 50.3015 279.056C50.3015 279.056 51.5597 280.477 53.3945 279.329C53.3945 279.329 55.8031 280.924 57.2342 279.196C57.2342 279.196 59.7769 279.75 55.25 268.494C55.25 268.494 53.5162 256.561 52.5608 254.215C50.7384 249.77 52.0257 237.589 52.4142 234.978C53.0406 230.614 52.7046 223.178 51.5597 217.426C50.7219 213.303 52.9908 205.519 53.8287 200.733C55.5501 190.66 58.9238 164.943 58.5021 160.076L59.8958 160.557C60.8941 160.56 61.5245 160.081 61.5245 160.081Z"
                fill="#F2994A"
              />
            </Man>
          </Content>
        </Main>
      </StyledSlide>
    );
  }
}

Story.propTypes = {
  story: propTypes.object
};

export default Story;
