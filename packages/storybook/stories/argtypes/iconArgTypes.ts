import type { InputType } from 'storybook/internal/types';

import { ICONS } from '../assets/icons/icons';
import { CATEGORY_CONTROL } from '../constants/categoryControl';

export const getIconArgTypes = (config?: {
  category?: string;
  name?: string;
  subcategory?: string;
  defaultIcon?: string;
  isString?: boolean;
}): InputType => {
  const baseArgTypes = {
    control: { type: 'select' },
    defaultValue: config?.defaultIcon,
    description: 'Icon (url or imported file)',
    mapping: ICONS,
    name: config?.name || 'icon',
    options: Object.keys(ICONS),
    table: {
      category: config?.category || CATEGORY_CONTROL.CONTENT,
      subcategory: config?.subcategory,

      type: {
        summary: 'string',
      },
    },
  };

  return baseArgTypes as InputType;
};
