import type { InputType } from 'storybook/internal/types';

import { CATEGORY_CONTROL } from '../constants/categoryControl';

export const getAltTextArgTypes = (config?: {
  name?: string;
  subcategory?: string;
}): InputType => ({
  control: { type: 'text' },
  description: 'Alt text for the icon',
  name: config?.name || 'altText',
  table: {
    category: CATEGORY_CONTROL.CONTENT,
    subcategory: config?.subcategory || 'icon',
    type: {
      summary: 'string',
    },
  },
  type: { name: 'string' },
});
