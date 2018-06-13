import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import { ThemeProvider } from 'styled-components';

describe('test Home', () => {
  test('displays Header', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/home']}>
        <ThemeProvider theme={{ flexContainer: () => { } }}>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    );
    const actual = container.querySelectorAll('p')[0].textContent.includes('sexually');
    expect(actual).toBeTruthy();
  });
});
