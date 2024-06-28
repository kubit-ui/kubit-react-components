import { ICONS } from '@/assets';
import { ButtonType } from '@/components/button';
import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { objectFlip } from '@/storybook/utils/utils';
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
      description: 'Quick button variant',
      options: Object.keys(variants[themeSelected].QuickButtonVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    disabled: {
      description: 'Specifies if the quickButton element is disabled or not',
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
    buttonId: {
      description: 'String used for join button with label',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    label: {
      description: 'Object with label properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'QuickButtonLabelType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    icon: {
      description: 'Object with icon properties',
      control: { type: 'object', labels: objectFlip(ICONS) },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    maxWidth: {
      description: 'Max width container box',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    onClick: {
      description: 'The event occurs when the user clicks on the element',
      control: false,
      table: {
        type: {
          summary: 'MouseEventHandler<HTMLButtonElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    type: {
      options: Object.keys(ButtonType),
      control: { type: 'select' },
      type: { name: 'string' },
      description: 'Define buttons type',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: ButtonType.BUTTON },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    ['aria-label']: {
      description: 'Aria label of the button',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
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
