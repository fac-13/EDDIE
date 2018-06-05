import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('test App', () => {
  test('displays Home', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/home']}>
        <App />
      </MemoryRouter>
    );
    const actual = container.querySelector('h1').textContent;
    expect(actual).toEqual('Home');
  });

  test('displays Header', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/stories']}>
        <App />
      </MemoryRouter>
    );
    const actual = container.querySelector('h1').textContent;
    expect(actual).toEqual('Stories');
  });

  test('displays Header', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/random']}>
        <App />
      </MemoryRouter>
    );
    const actual = container.querySelector('h1');
    expect(actual).toBeTruthy();
  });
});
