import React from 'react';
import { render } from 'react-testing-library';

import Splash from './Splash';

describe('test Splash', () => {
  test('displays heading', () => {
    const { container } = render(<Splash />);
    const actual = container.querySelector('h1').textContent;
    expect(actual).toEqual('Eddie');
  });
});
