import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Mechanism from './Mechanism';
import { ThemeProvider } from 'styled-components';

const flexContainer = (direction, justify, align) => `
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
  `;
describe('test Mechanism', () => {
  test('displays title of mechanism', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/mechanism']}>
        <ThemeProvider theme={{ flexContainer }}>
          <Mechanism />
        </ThemeProvider>
      </MemoryRouter>
    );
    const actual = container.querySelector('h1').textContent;
    expect(actual).toEqual('The mechanism of erection');
  });
});


