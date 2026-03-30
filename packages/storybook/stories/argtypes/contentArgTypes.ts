import type { InputType } from 'storybook/internal/types';

import { CATEGORY_CONTROL } from '../constants/categoryControl';

export const getContentArgTypes = (config: {
  name?: string;
  subCategory?: string;
  descriptionName?: string;
  isString?: boolean;
}): InputType => {
  const baseArgTypes = {
    description: `Text content for the ${config.descriptionName || config.name}.`,
    name: config.name || 'content',
    table: {
      category: CATEGORY_CONTROL.CONTENT,
      subcategory: config.subCategory,
      type: {
        summary: 'string',
      },
    },
  };

  if (!config.isString) {
    baseArgTypes.table.subcategory = config.subCategory || '';
  }

  return baseArgTypes;
};
