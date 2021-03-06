import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Resources from './Resources';
import { ThemeProvider } from 'styled-components';

describe('test Resources', () => {
  test('checks Resources contain a string', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/resources']}>
        <ThemeProvider theme={{ flexContainer: () => { } }}>
          <Resources />
        </ThemeProvider>
      </MemoryRouter>
    );
    const actual = container.querySelectorAll('h3')[0].textContent;
    expect(actual).toBe('Recommended reading');
  });
});