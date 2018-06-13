import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Resources from './Resources';
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

describe('test Resources', () => {
  test('checks Resources contain a string', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/resources']}>
        <ThemeProvider theme={{ flexContainer }}>
          <Resources />
        </ThemeProvider>
      </MemoryRouter>
    );
    const actual = container.querySelectorAll('h3')[0].textContent;
    expect(actual).toBe('Recommended reading');
  });
});