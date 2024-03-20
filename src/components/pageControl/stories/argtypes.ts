import { CATEGORY_CONTROL } from '@/constants';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

export const argtypes = (variants: IThemeObjectVariants, themeSelected: string): ArgTypesReturn => {
  return {
    theme: {
      table: {
        disable: true,
      },
    },
    variant: {
      control: { type: 'select' },
      type: { name: 'string', required: true },
      description: 'Page control variant',
      options: Object.keys(variants[themeSelected].PageControlVariant || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    maxDots: {
      description: 'Set the Dot max number to show into component',
      control: { type: 'number' },
      type: { name: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: 5,
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    arrowsControlVariant: {
      options: Object.keys(variants[themeSelected].ArrowsControlVariant || {}),
      control: { type: 'select' },
      type: { name: 'string', required: true },
      description: 'Set the variant for the arrows',
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    pages: {
      description: 'Max father collection length',
      control: { type: 'number' },
      type: { name: 'number', required: true },
      table: {
        type: {
          summary: 'number',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    currentPosition: {
      description: 'Current focus position into father collections',
      control: { type: 'number' },
      type: { name: 'number', required: true },
      table: {
        type: {
          summary: 'number',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    leftArrowControl: {
      description: 'Left arrow',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'ArrowControlType',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    rightArrowControl: {
      description: 'Left arrow',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'ArrowControlType',
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
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'object',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    extraCt: {
      description: 'Object used for update arrow controls styles',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'object',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
  };
};
