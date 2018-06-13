import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
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


describe('test Home', () => {
  test('displays Header', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/home']}>
        <ThemeProvider theme={{ flexContainer }}>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    );
    const actual = container.querySelectorAll('p')[0].textContent.includes('sexually');
    expect(actual).toBeTruthy();
  });
});
