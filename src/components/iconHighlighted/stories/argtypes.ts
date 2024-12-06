import { ICONS } from '@/assets/storybook/icons/icons';
import { CATEGORY_CONTROL } from '@/constants/categoryControl/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject/themesObject';
import { objectFlip } from '@/storybook/utils/utils';
import { ArgTypesReturn } from '@/types/type/type';

import { IconHighlightedSizeType } from '../types/size';
import { IconHighlightedType } from '../types/type';

export const argtypes = (variants: IThemeObjectVariants, themeSelected: string): ArgTypesReturn => {
  return {
    themeArgs: {
      table: {
        disable: true,
      },
    },
    variant: {
      type: { name: 'string', required: true },
      control: { type: 'select' },
      description: 'Iconhighleted variant',
      options: Object.keys(variants[themeSelected].IconHighlightedVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    icon: {
      description: 'Icon',
      control: { type: 'select', labels: objectFlip(ICONS) },
      type: { name: 'string' },
      options: Object.values(ICONS),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    size: {
      description: 'Define buttons size',
      options: Object.keys(IconHighlightedSizeType),
      control: { type: 'select' },
      type: { name: 'string', required: true },
      table: {
        type: {
          summary: 'IconHighlightedSizeType',
          detail: Object.keys(IconHighlightedSizeType).join(', '),
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    type: {
      description: 'IconHighlighted type',
      options: Object.keys(IconHighlightedType),
      control: { type: 'select' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'IconHighlightedType',
          detail: Object.keys(IconHighlightedType).join(', '),
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    backgroundColor: {
      description: 'Color of the background.',
      control: { type: 'color' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    altText: {
      description: 'Aria label of the icon',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    color: {
      description: 'Color of the icon. If icon has a color then it is a svg else it is an img',
      control: { type: 'color' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    disabled: {
      description: 'Specifies if the IconHighlighted element is disabled or not',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    selected: {
      description: 'Applies selected styles',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    dataTestId: {
      description: 'String used for testing',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.TESTING,
      },
    },
    ctv: {
      description: 'Object used for update variant styles',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'object',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
  };
};
