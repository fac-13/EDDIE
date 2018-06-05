import React from 'react';
import { render } from 'react-testing-library';

import Home from './Home';

describe('test Home', () => {
  test('displays Header', () => {
    const { container } = render(<Home />);
    const actual = container.querySelector('h1').textContent;
    expect(actual).toEqual('Home');
  });
});
