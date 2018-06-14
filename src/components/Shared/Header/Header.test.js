import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

describe('test Header', () => {
  test('displays correct title', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/stories']}>
        <Header title="Stories" />
      </MemoryRouter>
    );
    const actual = container.querySelector('h1').textContent;
    expect(actual).toEqual('Stories');
  });
});
