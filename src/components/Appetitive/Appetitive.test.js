import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Appetitive from './Appetitive';

describe('test Mechanism', () => {
  test('displays title of Appetitive', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/appetitive']}>
        <Appetitive />
      </MemoryRouter>
    );
    const actual = container.querySelector('h1').textContent;
    expect(actual).toEqual('Appetitive state');
  });
});
