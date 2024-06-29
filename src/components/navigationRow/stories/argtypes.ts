import { CATEGORY_CONTROL } from '@/constants/categoryControl';
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
      type: { name: 'string', required: true },
      control: { type: 'select' },
      description: 'NavigationRow variant',
      options: Object.keys(variants[themeSelected].NavigationRowVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    text: {
      description: 'Object with text properties',
      type: { name: 'object', required: true },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'NavigationRowTextAndDescriptionType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    description: {
      description: 'Object with description properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'NavigationRowTextAndDescriptionType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    arrowIcon: {
      description: 'Object with arrow icon properties',
      control: { type: 'object' },
      type: { name: 'object', required: true },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    iconHighlighted: {
      description: 'Highlighted icon',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'NavigationRowIconHighlightedType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    decorativeIcon: {
      description: 'Object with decorative icon properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    topLine: {
      description: 'Show or not top line',
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
    bottomLine: {
      description: 'Show or not bottom line',
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
    lineSeparatorLineStyles: {
      description: 'Line separator styles',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'LineSeparatorLinePropsStylesType',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    onClick: {
      control: false,
      description: 'The event occurs when the user clicks on the element',
      table: {
        type: {
          summary: 'React.MouseEventHandler<HTMLButtonElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
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
      description: 'Object used for update line separator styles',
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
