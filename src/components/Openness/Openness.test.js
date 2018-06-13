import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Openness from './Openness';

describe('test Mechanism', () => {
  test('displays title of Openness', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/openness']}>
        <Openness />
      </MemoryRouter>
    );
    const actual = container.querySelector('h1').textContent;
    expect(actual).toEqual('Cultivate openness');
  });
});
