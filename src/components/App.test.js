import React from 'react';
import { render, Simulate } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('test App', () => {

  test('displays Stories', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/stories']}>
        <App />
      </MemoryRouter>
    );
    const actual = container.querySelector('h1').textContent;
    expect(actual).toEqual('Stories');
  });

  test('displays ErrorPage', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/random']}>
        <App />
      </MemoryRouter>
    );
    const actual = container.querySelector('h1');
    expect(actual).toBeTruthy();
  });

  test('back button works', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/stories']}>
        <App />
      </MemoryRouter>
    );
    const link = container.querySelector('a');
    () => {
      Simulate.click(link);
      const actual = container.querySelector('h1').textContent;
      expect(actual).toEqual('Home');
    };
  });
});
