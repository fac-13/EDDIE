import React from 'react';
import { render } from 'react-testing-library';

import Splash from './Splash';
import { ThemeProvider } from 'styled-components';

const flexContainer = (direction, justify, align) => `
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
  `;

describe('test Splash', () => {
  test('displays heading', () => {
    const { container } = render(
      <ThemeProvider theme={{ flexContainer }}>
        <Splash />
      </ThemeProvider>
    );
    const actual = container.querySelector('svg');
    expect(actual).toBeTruthy()
  });
});
