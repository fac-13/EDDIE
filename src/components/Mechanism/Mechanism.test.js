import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Mechanism from './Mechanism';
import { ThemeProvider } from 'styled-components';

describe('test Mechanism', () => {
  test('displays title of mechanism', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/mechanism']}>
        <ThemeProvider theme={{ flexContainer: () => { } }}>
          <Mechanism />
        </ThemeProvider>
      </MemoryRouter>
    );
    const actual = container.querySelector('h1').textContent;
    expect(actual).toEqual('The mechanism of erection');
  });
});


