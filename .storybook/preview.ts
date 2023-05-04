import type { Preview } from '@storybook/react';

import '@app/globals.css';

const preview: Preview = {
  parameters: {
    viewMode: 'docs',
    layout: 'centered',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '##27272a',
        },
      ],
    },
  },
};

export default preview;
