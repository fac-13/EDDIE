import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Mechanism from './Mechanism';

describe('test Mechanism', () => {
  test('displays title of mechanism', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/mechanism']}>
        <Mechanism />
      </MemoryRouter>
    );
    const actual = container.querySelector('h1').textContent;
    expect(actual).toEqual('Mechanism');
  });
});


