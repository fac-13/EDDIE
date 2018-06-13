import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Appetitive from './Appetitive';

describe('test Mechanism', () => {
  test('displays title of Appetitive', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/appetitive']}>
        <ThemeProvider theme={{ flexContainer: () => {} }}>
          <Appetitive />
        </ThemeProvider>
      </MemoryRouter>
    );
    const actual = container.querySelector('h1').textContent;
    expect(actual).toEqual('Appetitive state');
  });
});
