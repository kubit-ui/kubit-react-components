import { CATEGORY_CONTROL } from '@/constants/categoryControl/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject/themesObject';
import { ArgTypesReturn } from '@/types/type/type';

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
      type: { name: 'string' },
      description: 'Set the variant for the arrows. Only needed when arrows are used',
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
      description: 'Left arrow. Deprecated. Please use leftControl instead',
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
      description: 'Left arrow. Deprecated. Please use rigthControl instead',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'ArrowControlType',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    leftControl: {
      description: 'Left control (Draw arrow [IElementOrIcon] or Button [ButtonControl])',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'PageControlControlType',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    rightControl: {
      description: 'Right control (Draw arrow [IElementOrIcon] or Button [ButtonControl])',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'PageControlControlType',
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
