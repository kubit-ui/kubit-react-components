import type { InputType } from 'storybook/internal/types';

import { IMAGES } from '../assets/images/images';
import { CATEGORY_CONTROL } from '../constants/categoryControl';

export const getImageArgTypes = (config?: {
  name?: string;
  subcategory?: string;
  defaultImage?: string;
  isString?: boolean;
}): InputType => {
  const baseArgTypes = {
    control: { type: 'select' },
    description: 'Image (url or imported file)',
    mapping: IMAGES,
    name: config?.name || 'image',
    options: Object.keys(IMAGES),
    table: {
      category: CATEGORY_CONTROL.CONTENT,
      subcategory: config?.subcategory,
      type: {
        summary: 'string',
      },
    },
  };

  return baseArgTypes as InputType;
};
