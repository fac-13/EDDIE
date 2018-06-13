import React from 'react';
import { render } from 'react-testing-library';
// import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Splash from './Splash';

jest.useFakeTimers();

describe('test Splash', () => {
  test('displays svg', () => {
    const { container } = render(
      <ThemeProvider theme={{ flexContainer: () => {} }}>
        <Splash />
      </ThemeProvider>
    );
    const actual = container.querySelector('svg');
    expect(actual).toBeTruthy();
  });

  // test('displays heading of home after 2 seconds', () => {
  //   const { container } = render(
  //     <MemoryRouter initialEntries={['/']}>
  //       <ThemeProvider theme={{ flexContainer: () => {} }}>
  //         <Splash />
  //       </ThemeProvider>
  //     </MemoryRouter>
  //   );
  //   jest.runAllTimers();
  //   const actual = container.querySelector('h1').textContent;
  //   expect(actual).toBe('Eddie');
  // });
});
