import type { InputType } from 'storybook/internal/types';

import { CATEGORY_CONTROL } from '../constants/categoryControl';

export const getNumbertArgTypes = (config?: {
  name?: string;
  subcategory?: string;
  keyName?: string;
  category?: string;
  extraDescription?: string;
  defaultValue?: number;
}): InputType => ({
  control: { type: 'number' },
  description: config?.extraDescription
    ? `${config?.extraDescription || ''}`.trim()
    : `${config?.keyName} for the ${config?.name}`,
  name: config?.keyName,
  table: {
    category: config?.category || CATEGORY_CONTROL.CONTENT,
    defaultValue: { summary: config?.defaultValue?.toString() ?? undefined },
    subcategory: config?.subcategory,
    type: {
      summary: 'number',
    },
  },
  type: { name: 'number' },
});
