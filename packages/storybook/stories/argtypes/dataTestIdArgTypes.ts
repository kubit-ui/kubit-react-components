import type { InputType } from 'storybook/internal/types';

import { CATEGORY_CONTROL } from '../constants/categoryControl';

export const getDataTestIdArgTypes = (): InputType => ({
  control: { type: 'text' },
  description:
    'Unique identifier used for testing purposes. This helps in selecting elements during automated tests.',
  table: {
    category: CATEGORY_CONTROL.TESTING,
    defaultValue: { summary: '' },
    type: {
      summary: 'string',
    },
  },
  type: { name: 'string' },
});
