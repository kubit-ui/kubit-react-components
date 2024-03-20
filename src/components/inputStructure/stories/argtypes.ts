import { CATEGORY_CONTROL } from '@/constants';
import { ArgTypesReturn } from '@/types';

export const argtypes = (): ArgTypesReturn => {
  return {
    topContent: {
      type: { name: 'string' },
      control: { type: 'text' },
      description: 'Input top container',
      table: {
        type: {
          summary: 'string or JSX.Element',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    topExtraStyles: {
      type: { name: 'string' },
      control: { type: 'text' },
      description: 'Input top container styles',
      table: {
        type: {
          summary: 'CSSProp',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    leftContent: {
      type: { name: 'string' },
      control: { type: 'text' },
      description: 'Input left container',
      table: {
        type: {
          summary: 'string or JSX.Element',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    leftExtraStyles: {
      type: { name: 'string' },
      control: { type: 'text' },
      description: 'Input left container styles',
      table: {
        type: {
          summary: 'CSSProp',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    bottomContent: {
      type: { name: 'string' },
      control: { type: 'text' },
      description: 'Input bottom container',
      table: {
        type: {
          summary: 'string or JSX.Element',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    bottomExtraStyles: {
      type: { name: 'string' },
      control: { type: 'text' },
      description: 'Input bottom container styles',
      table: {
        type: {
          summary: 'CSSProp',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    rightContent: {
      type: { name: 'string' },
      control: { type: 'text' },
      description: 'Input right container',
      table: {
        type: {
          summary: 'string or JSX.Element',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    rightExtraStyles: {
      type: { name: 'string' },
      control: { type: 'text' },
      description: 'Input right container styles',
      table: {
        type: {
          summary: 'CSSProp',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    centerContent: {
      type: { name: 'string' },
      control: { type: 'text' },
      description: 'Input center container',
      table: {
        type: {
          summary: 'string or JSX.Element',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    centerExtraStyles: {
      type: { name: 'string' },
      control: { type: 'text' },
      description: 'Input center container styles',
      table: {
        type: {
          summary: 'CSSProp',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    onBlurStructure: {
      description: 'Function that is called when blur the component',
      control: false,
      table: {
        type: {
          summary: 'FocusEventHandler<HTMLDivElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onFocusStructure: {
      description: 'Function that is called when focus the component',
      control: false,
      table: {
        type: {
          summary: 'FocusEventHandler<HTMLDivElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    dataTestIdParentContainer: {
      description: 'id for testing',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
  };
};
