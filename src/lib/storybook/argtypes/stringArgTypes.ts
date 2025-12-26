import type { InputType } from 'storybook/internal/types';

import { CATEGORY_CONTROL } from '../constants/categoryControl';

export const getStringtArgTypes = (config?: {
  name?: string;
  subcategory?: string;
  keyName?: string;
  category?: string;
  extraDescription?: string;
}): InputType => ({
  control: { type: 'text' },
  description: config?.extraDescription
    ? `${config?.extraDescription || ''}`.trim()
    : `${config?.keyName} for the ${config?.name}`,
  name: config?.keyName,
  table: {
    category: config?.category || CATEGORY_CONTROL.CONTENT,
    subcategory: config?.subcategory,
    type: {
      summary: 'string',
    },
  },
  type: { name: 'string' },
});
