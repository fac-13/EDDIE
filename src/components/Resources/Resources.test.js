import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Resources from './Resources';

describe('test Resources', () => {
  test('checks Resources contain a string', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/resources']}>
        <Resources />
      </MemoryRouter>
    );
    const actual = container.querySelectorAll('h3')[0].textContent;
    expect(actual).toBe('Recommended reading');
  });
});