import React from 'react';
import { render } from 'react-testing-library';
import { ThemeProvider } from 'styled-components';

import Story from './Story';

const story = {
  name: 'Daniel',
  about: 'Married 25 years, has 1 child',
  symptoms: [
    {
      type: 'physical',
      text: 'Smoker. Diabetic',
      intervention:
        'Long–term smoking and Diabetes both cause erection difficulties. Daniel can discuss with his physician about medications that can help with his ED, alongside psychotherapy or couples counselling. '
    },
    {
      type: 'psychological',
      text: 'ED for more than 10 years',
      intervention:
        'Feelings of hopelessness and frustration about ongoing ED lead to avoiding sex or seeking help making the possibility of change less likely. He is embarrassed about ED and feeling guilty, avoids talking to his wife. Using mindfulness Daniel can learn to connect with his feelings and learn to stay emotionally calm particularly around issues'
    },
    {
      type: 'relational',
      text: 'Impacting on relationship',
      intervention:
        'His wife, unaware of his worries and feelings, feels rejected and angry creating more tension and fights between them. In psychotherapy or couples therapy Daniel and his wife could use Sensate Focus Exercises as a way to reconnect intimately and explore a wide range of options to give and receive sexual pleasure with each other beyond erections and penetration. '
    }
  ]
};

describe('test Story', () => {
  test('displays title of Story', () => {
    const { container } = render(
      <ThemeProvider theme={{ flexContainer: () => {} }}>
        <Story story={story} />
      </ThemeProvider>
    );
    const actual = container.querySelector('h2').textContent;
    expect(actual).toEqual('Daniel');
  });
});
