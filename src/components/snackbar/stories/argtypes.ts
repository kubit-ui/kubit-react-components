import { CATEGORY_CONTROL } from '@/constants';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn, POSITIONS } from '@/types';

import { SnackbarMessageType } from '../types';

export const argtypes = (variants: IThemeObjectVariants, themeSelected: string): ArgTypesReturn => {
  return {
    theme: {
      table: {
        disable: true,
      },
    },
    variant: {
      description: 'Variant for snackbar styling',
      type: { name: 'string', required: true },
      control: { type: 'select' },
      options: Object.keys(variants[themeSelected].SnackbarVariant || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    type: {
      description: 'Type of snackbar content',
      type: { name: 'SnackbarMessageType', required: true },
      control: { type: 'select' },
      options: Object.values(SnackbarMessageType),
      table: {
        type: {
          summary: 'SnackbarMessageType',
          detail: Object.values(SnackbarMessageType).join(', '),
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    title: {
      description: 'Object with title properties',
      type: { name: 'object', required: true },
      control: { type: 'object' },
      table: {
        type: { summary: 'SnackbarTitleType' },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    align: {
      description: 'Variant for snackbar styling',
      type: { name: 'string' },
      options: [POSITIONS.TOP_CENTER_FIXED, POSITIONS.BOTTOM_CENTER_FIXED],
      control: { type: 'select' },
      table: {
        type: {
          summary: 'string',
          detail: '[POSITIONS.TOP_CENTER_FIXED, POSITIONS.BOTTOM_CENTER_FIXED]',
        },
        defaultValue: { summary: POSITIONS.TOP_CENTER_FIXED },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    icon: {
      description: 'Object with icon properties used on the left side of the snackbar',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: { summary: 'IElementOrIcon' },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    closeIcon: {
      description: 'Object with icon properties used on the right side to close the snackbar',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: { summary: 'SnackbarCloseIconType' },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    isOpen: {
      description: 'Toggles the snackbar open/close state',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    link: {
      description: 'Object with Action link properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: { summary: 'SnackbarLinkType' },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    secondaryActionContent: {
      description: 'Link name of the snackbar',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    secondaryActionButton: {
      description: 'Object with secondary action button properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: { summary: 'SnackbarActionButtonType' },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    secondaryActionLink: {
      description: 'Object with secondary action link properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: { summary: 'SnackbarLinkType' },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    secondaryActionAriaLabel: {
      description: 'Aria label of the action button',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    description: {
      description:
        'Object with Description of the snackbar properties, located between the title and the link',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: { summary: 'SnackbarDescriptionType' },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    closeTimeout: {
      description: 'Timeout to close the snackbar',
      type: { name: 'number' },
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    onSecondaryActionClick: {
      description: 'Click of the link',
      type: { name: 'function' },
      control: false,
      table: {
        type: { summary: 'React.MouseEventHandler<HTMLButtonElement>' },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onCloseButtonClick: {
      description: 'When controlled, Set `isOpen` state value',
      type: { name: 'function', required: true },
      control: false,
      table: {
        type: { summary: '(value) => void' },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onOpenClose: {
      description: 'Callback to be be called when the snackbar is opened or closed',
      type: { name: 'function' },
      control: false,
      table: {
        type: {
          summary:
            '(open: boolean, event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onMouseEnter: {
      description: 'Mouse enter event',
      type: { name: 'function' },
      control: false,
      table: {
        type: { summary: 'React.MouseEventHandler<HTMLDivElement>' },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onMouseLeave: {
      description: 'Mouse leave event',
      type: { name: 'function' },
      control: false,
      table: {
        type: { summary: 'React.MouseEventHandler<HTMLDivElement>' },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onFocus: {
      description: 'Focus event',
      type: { name: 'function' },
      control: false,
      table: {
        type: { summary: 'React.FocusEventHandler<HTMLDivElement>' },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onBlur: {
      description: 'Blur event',
      type: { name: 'function' },
      control: false,
      table: {
        type: { summary: 'React.FocusEventHandler<HTMLDivElement>' },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    dataTestId: {
      description: 'Test id',
      type: { name: 'string' },
      control: false,
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
