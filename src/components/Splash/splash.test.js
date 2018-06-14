import React from 'react';
import { render } from 'react-testing-library';
// import { MemoryRouter } from 'react-router-dom';

import Splash from './Splash';

jest.useFakeTimers();

describe('test Splash', () => {
  test('displays svg', () => {
    const { container } = render(<Splash />);
    const actual = container.querySelector('svg');
    expect(actual).toBeTruthy();
  });

  // test('displays heading of home after 2 seconds', () => {
  //   const { container } = render(
  //     <MemoryRouter initialEntries={['/']}>
  //       <Splash />
  //     </MemoryRouter>
  //   );
  //   jest.runAllTimers();
  //   const actual = container.querySelector('h1').textContent;
  //   expect(actual).toBe('Eddie');
  // });
});
