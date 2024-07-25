import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

import { DividerEmbebed } from '../types';

export const argtypes = (variants: IThemeObjectVariants, themeSelected: string): ArgTypesReturn => {
  return {
    themeArgs: {
      table: {
        disable: true,
      },
    },
    variant: {
      control: { type: 'select' },
      type: { name: 'string', required: true },
      description: 'Divider variant',
      options: Object.keys(variants[themeSelected].DividerVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    leftLabel: {
      description: 'Object with left label properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'DividerLabelsType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    rightLabel: {
      description: 'Object with right label properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'DividerLabelsType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    leftSublabel: {
      description: 'Object with left sublabel properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'DividerLabelsType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    rightSublabel: {
      description: 'Object with right label properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'DividerLabelsType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    icon: {
      description: 'Object with icon properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    iconTooltip: {
      description: 'Tooltip for icon properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'DividerIconTooltipType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    customComponent: {
      description: 'Component right to the label',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'ReactNode',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    embebed: {
      description: 'Set the embebed type',
      options: [undefined, ...Object.keys(DividerEmbebed)],
      control: { type: 'select' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'DividerEmbebed',
          detail: Object.keys(DividerEmbebed).join(', '),
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    leftIcon: {
      description: 'Object with left icon properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
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
