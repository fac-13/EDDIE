import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Myths from './Myths';
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
describe('test Myths', () => {
  test('displays myths title', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/myths']}>
        <ThemeProvider theme={{ flexContainer }}>
          <Myths />
        </ThemeProvider>
      </MemoryRouter>
    );
    const actual = container.querySelector('h1').textContent;
    expect(actual).toEqual('Myths of male sexuality');
  });
});


