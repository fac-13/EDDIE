import React from 'react';
import { render } from 'react-testing-library';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

describe('test App', () => {
  test('displays Header', () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const actual = container.querySelector('header');
    expect(actual).toBeTruthy;
  });
});
