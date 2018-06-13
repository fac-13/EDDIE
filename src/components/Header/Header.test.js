import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';
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

describe('test Header', () => {
  test('displays correct title', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/stories']}>
        <ThemeProvider theme={{ flexContainer }}>
          <Header title="Stories" />
        </ThemeProvider>
      </MemoryRouter>
    );
    const actual = container.querySelector('h1').textContent;
    expect(actual).toEqual('Stories');
  });
});
