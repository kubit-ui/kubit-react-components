import type { InputType } from 'storybook/internal/types';

import { CATEGORY_CONTROL } from '../constants/categoryControl';

export const getHtmlComponentArgTypes = (config: {
  name?: string;
  subCategory?: string;
}): InputType => ({
  control: { type: 'select' },
  description: `HTML tag to be used for the ${config.name} container. This allows for semantic HTML and accessibility improvements.`,
  options: [
    'div',
    'span',
    'section',
    'article',
    'aside',
    'header',
    'footer',
    'nav',
    'main',
  ],
  table: {
    category: CATEGORY_CONTROL.CUSTOMIZATION,
    type: {
      summary: 'string',
    },
  },
  type: { name: 'string' },
});
