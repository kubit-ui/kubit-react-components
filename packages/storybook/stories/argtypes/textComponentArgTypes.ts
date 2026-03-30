import type { InputType } from 'storybook/internal/types';

import { CATEGORY_CONTROL } from '../constants/categoryControl';
import { TextComponentOptions } from '../constants/textComponentOptions';

export const getTextComponentArgTypes = (config: {
  name?: string;
  subCategory?: string;
}): InputType => ({
  control: { type: 'select' },
  description: `HTML tag to be used for the ${config.name} component. This allows for semantic HTML and accessibility improvements.`,
  name: 'component',
  options: TextComponentOptions,
  table: {
    category: CATEGORY_CONTROL.CONTENT,
    subcategory: config.subCategory,
    type: {
      summary: 'string',
    },
  },
  type: { name: 'string' },
});
