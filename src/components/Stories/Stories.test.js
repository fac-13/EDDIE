import React from 'react';
import { render } from 'react-testing-library';

import Stories from './Stories';

describe('test Stories', () => {
  test('displays Header', () => {
    const { container } = render(<Stories />);
    const actual = container.querySelector('h1').textContent;
    expect(actual).toEqual('Stories');
  });
});
