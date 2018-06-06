import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('test Home', () => {
  test('displays Header', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/home']}>
        <Home />
      </MemoryRouter>
    );
    const actual = container.querySelectorAll('p')[0].textContent.includes('sexually');
    expect(actual).toBeTruthy();
  });
});
