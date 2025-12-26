import type { InputType } from 'storybook/internal/types';

import { CATEGORY_CONTROL } from '../constants/categoryControl';

const CATEGORIES = [
  'no-option',
  'custom-background',
  'custom-border',
  'custom-text-color',
  'custom-border',
  'custom-padding',
  'custom-border-radius',
  'custom-font-size',
];

export const getAdditionalClassesArgTypes = (config: {
  name?: string;
  subCategory?: string;
}): InputType => ({
  control: { type: 'select' },
  description: `Additional CSS classes for the ${config.name}`,

  name: config.name,
  options: CATEGORIES,
  table: {
    category: CATEGORY_CONTROL.CSS_CUSTOMIZATON,
    subcategory: config.subCategory || 'additionalClasses',
    type: {
      summary: 'string',
    },
  },
  type: { name: 'string' },
});
