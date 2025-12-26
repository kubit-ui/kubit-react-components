import type { InputType } from 'storybook/internal/types';

import { CATEGORY_CONTROL } from '../constants/categoryControl';

export const getVariantArgTypes = (config?: {
  name?: string;
  variants?: object;
  subCategory?: string;
  category?: string;
  keyVariant?: string;
}): InputType => {
  const { keyVariant = 'variant' } = config || {};

  return {
    control: { type: 'select' },
    description: `Select the ${keyVariant} of the ${config?.name}. This determines the overall style and appearance.`,
    name: keyVariant,
    options: Object.values(config?.variants || {}),
    table: {
      category: config?.category || CATEGORY_CONTROL.MODIFIERS,
      subcategory: config?.subCategory,
      type: {
        summary: 'string',
      },
    },
    type: { name: 'string', required: true },
  };
};
