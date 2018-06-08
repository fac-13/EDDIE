import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Theory from './Theory';

describe('test Theory page', () => {
  test('checks Theory page components', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/theory']}>
        <Theory />
      </MemoryRouter>
    );
    const actual = container.querySelectorAll('a')[0].textContent;
    expect(actual).toEqual('Causes');
  });
});


