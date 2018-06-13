import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Curiosity from './Curiosity';

describe('test Mechanism', () => {
  test('displays title of Curiosity', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/curiosity']}>
        <ThemeProvider theme={{ flexContainer: () => {} }}>
          <Curiosity />
        </ThemeProvider>
      </MemoryRouter>
    );
    const actual = container.querySelector('h1').textContent;
    expect(actual).toEqual('Cultivate your curiosity');
  });
});
