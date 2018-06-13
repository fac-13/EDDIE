import React from 'react';
import { render } from 'react-testing-library';

import Splash from './Splash';
import { ThemeProvider } from 'styled-components';

describe('test Splash', () => {
  test('displays heading', () => {
    const { container } = render(
      <ThemeProvider theme={{ flexContainer: () => {} }}>
        <Splash />
      </ThemeProvider>
    );
    const actual = container.querySelector('svg');
    expect(actual).toBeTruthy();
  });
});
