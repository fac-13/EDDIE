import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Theory from './Theory';
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

describe('test Theory page', () => {
  test('checks Theory page components', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/theory']}>
        <ThemeProvider theme={{ flexContainer }}>
          <Theory />
        </ThemeProvider>
      </MemoryRouter>
    );
    const actual = container.querySelectorAll('a')[0].textContent;
    expect(actual).toEqual('Causes');
  });
});
