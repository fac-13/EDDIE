import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Communication from './Communication';

describe('test Mechanism', () => {
  test('displays title of Communication', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/communication']}>
        <ThemeProvider theme={{ flexContainer: () => {} }}>
          <Communication />
        </ThemeProvider>
      </MemoryRouter>
    );
    const actual = container.querySelector('h1').textContent;
    expect(actual).toEqual('Cultivate communication');
  });
});
