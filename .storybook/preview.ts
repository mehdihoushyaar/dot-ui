import type { Preview } from '@storybook/react';
import '../src/storybook.css'; // Load Tailwind v4 and our themes

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;