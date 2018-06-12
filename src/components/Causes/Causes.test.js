import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Causes from './Causes';

describe('test Causes', () => {
  test('displays Cases title', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/causes']}>
        <ThemeProvider theme={{ flexContainer: () => {} }}>
          <Causes />
        </ThemeProvider>
      </MemoryRouter>
    );
    const actual = container.querySelector('h1').textContent;
    expect(actual).toEqual('What causes ED?');
  });
});
