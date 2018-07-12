import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Mindfulness from './Mindfulness';
import { ThemeProvider } from 'styled-components';

describe('test Mindfulness component', () => {
  test('checks Mindfulness contains a string', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/mindfulness']}>
        <ThemeProvider theme={{ flexContainer: () => {} }}>
          <Mindfulness />
        </ThemeProvider>
      </MemoryRouter>
    );
    const actual = container.querySelectorAll('h2')[0].textContent;
    expect(actual).toBe('A mindful masturbation exercise');
  });
});
