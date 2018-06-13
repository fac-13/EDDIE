import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Communication from './Communication';

describe('test Mechanism', () => {
  test('displays title of Communication', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/communication']}>
        <Communication />
      </MemoryRouter>
    );
    const actual = container.querySelector('h1').textContent;
    expect(actual).toEqual('Cultivate communication');
  });
});
