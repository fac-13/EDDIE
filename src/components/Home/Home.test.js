import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from './Home';

describe('test Home', () => {
  test('displays Header', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/home']}>
        <ThemeProvider theme={{ flexContainer: () => {} }}>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    );
    const actual = container.querySelector('h1').textContent;
    expect(actual).toBe('Eddie');
  });
});
