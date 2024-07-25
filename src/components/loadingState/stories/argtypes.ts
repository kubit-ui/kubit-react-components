import { TextComponentType } from '@/components/text';
import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

import { LoadingStateState } from '../types';

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
      description: 'Loading state variant',
      options: Object.keys(variants[themeSelected].LoadingStateVariant || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    ['aria-label']: {
      description: 'Aria label of the LoadingState',
      control: { type: 'text' },
      type: { name: 'string', required: true },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    description: {
      description: 'Object with description properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'LoadingStateTitleAndDescriptionType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    hideText: {
      description: 'Show or hide title and description',
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    title: {
      description: 'Object with title properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'LoadingStateTitleAndDescriptionType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    screenReaderText: {
      description: 'String used for screen reader text',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    state: {
      options: ['PRIMARY', 'SECONDARY', 'PRIMARY_ALTERNATIVE'],
      control: { type: 'select' },
      type: { name: 'string', required: true },
      table: {
        type: {
          summary: 'LoadingStateState',
          detail: Object.keys(LoadingStateState).join(', '),
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    titleComponent: {
      description: 'Title HTML tag',
      control: { type: 'select' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'TextComponentType',
          detail: Object.keys(TextComponentType).join(', '),
        },
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
