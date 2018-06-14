import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';

import Aversive from './Aversive';

describe('test Mechanism', () => {
  test('displays title of Aversive', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/aversive']}>
        <Aversive />
      </MemoryRouter>
    );
    const actual = container.querySelector('h1').textContent;
    expect(actual).toEqual('Aversive state');
  });
});
