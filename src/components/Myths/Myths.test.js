import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Myths from './Myths';
import { ThemeProvider } from 'styled-components';

describe('test Myths', () => {
  test('displays myths title', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/myths']}>
        <ThemeProvider theme={{ flexContainer: () => { } }}>
          <Myths />
        </ThemeProvider>
      </MemoryRouter>
    );
    const actual = container.querySelector('h1').textContent;
    expect(actual).toEqual('Myths of male sexuality');
  });
});


