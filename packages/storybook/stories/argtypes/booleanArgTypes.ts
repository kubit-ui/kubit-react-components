import type { InputType } from 'storybook/internal/types';

import { CATEGORY_CONTROL } from '../constants/categoryControl';

export const getBooleanArgTypes = (config: {
  name?: string;
  subCategory?: string;
  descriptionName?: string;
  defaultValue?: string;
}): InputType => ({
  control: { type: 'boolean' },
  description: `Boolean value for the ${config.descriptionName || config.name}.`,
  name: config.name || 'content',
  table: {
    category: CATEGORY_CONTROL.MODIFIERS,
    defaultValue: { summary: config.defaultValue ?? 'false' },
    type: {
      summary: 'boolean',
    },
  },
  type: { name: 'boolean' },
});
