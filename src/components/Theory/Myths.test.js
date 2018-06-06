import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Myths from './Myths';

describe('test Myths', () => {
  test('displays myths title', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/myths']}>
        <Myths />
      </MemoryRouter>
    );
    const actual = container.querySelector('h1').textContent;
    expect(actual).toEqual('Myths of male sexuality');
  });
});


