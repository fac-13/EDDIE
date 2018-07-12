import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Sensate from './Sensate';
import { ThemeProvider } from 'styled-components';

describe('test Sensate component', () => {
  test('checks Sensate contains a string', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/sensate']}>
        <ThemeProvider theme={{ flexContainer: () => {} }}>
          <Sensate />
        </ThemeProvider>
      </MemoryRouter>
    );
    const actual = container.querySelectorAll('h2')[0].textContent;
    expect(actual).toBe('Preparation');
  });
});
