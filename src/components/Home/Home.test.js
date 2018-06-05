import React from 'react';
import { render } from 'react-testing-library';
import Home from './Home';

describe('test Home', () => {
  test('displays Header', () => {
    const { container } = render(<Home />);
    const actual = container.querySelector('p');
    expect(actual).includes('sexually');
  });
});
