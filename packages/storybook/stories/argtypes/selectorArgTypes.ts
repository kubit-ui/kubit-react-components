import type { InputType } from 'storybook/internal/types';

import { CATEGORY_CONTROL } from '../constants/categoryControl';

export const getSelectorArgTypes = (config?: {
  name?: string;
  options?: object;
  subCategory?: string;
  category?: string;
  keyName?: string;
  defaultValue?: string;
}): InputType => {
  return {
    control: { type: 'select' },
    description: `Select the ${config?.keyName} of the ${config?.name}.`,
    name: config?.keyName,
    options: Object.values(config?.options || {}),
    table: {
      category: config?.category || CATEGORY_CONTROL.MODIFIERS,
      defaultValue: { summary: config?.defaultValue },
      subcategory: config?.subCategory,
      // type: {
      //   detail: Object.entries(config?.options || {})
      //     .map(([key, value]) => `${key}: ${value}`)
      //     .join(', '),
      // },
    },
    type: { name: 'string', required: true },
  };
};
