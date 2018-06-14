import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';

import Stories from './Stories';

describe('test Stories', () => {
  test('displays Header', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/stories']}>
        <Stories />
      </MemoryRouter>
    );
    const actual = container.querySelector('h1').textContent;
    expect(actual).toEqual('Stories');
  });
});
