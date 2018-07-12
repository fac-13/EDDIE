import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Kegels from './Kegels';
import { ThemeProvider } from 'styled-components';

describe('test Kegels component', () => {
  test('checks Kegels contains a string', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/kegels']}>
        <ThemeProvider theme={{ flexContainer: () => {} }}>
          <Kegels />
        </ThemeProvider>
      </MemoryRouter>
    );
    const actual = container
      .querySelectorAll('h2')[0]
      .textContent.includes('pelvic');
    expect(actual).toBeTruthy;
  });
});
