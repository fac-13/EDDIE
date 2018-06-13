import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Curiosity from './Curiosity';

describe('test Mechanism', () => {
  test('displays title of Curiosity', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/curiosity']}>
        <Curiosity />
      </MemoryRouter>
    );
    const actual = container.querySelector('h1').textContent;
    expect(actual).toEqual('Cultivate your curiosity');
  });
});
