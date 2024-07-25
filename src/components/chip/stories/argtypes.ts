import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

import { ChipStateType } from '../types';

export const argtypes = (variants: IThemeObjectVariants, themeSelected: string): ArgTypesReturn => {
  return {
    themeArgs: {
      table: {
        disable: true,
      },
    },
    variant: {
      description: 'Chip variant',
      type: { name: 'string', required: true },
      control: { type: 'select' },
      options: Object.keys(variants[themeSelected].ChipVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    state: {
      description: 'Select chip state',
      options: Object.keys(ChipStateType),
      type: { name: 'string' },
      control: { type: 'select' },
      table: {
        type: {
          summary: 'ChipStateType',
          detail: Object.keys(ChipStateType).join(','),
        },
        defaultValue: { summary: ChipStateType.DEFAULT },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    label: {
      description: 'Object with label properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'ChipLabelType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    closeIcon: {
      description: 'Object with close icon properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    leftIcon: {
      description:
        'Object with leftIcon properties. The chips could have an icon to reinforce the content meaning of the label. These icons would only appear when there is only one label.',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'sIElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    errorIcon: {
      description:
        'Object with errorIcon properties. Icon used to display along with error message',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    errorMessage: {
      description:
        'Object with errorMessage properties. Text to be displayed below the chip to indicate errors',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'ChipTextType',
        },
        defaultValue: {
          summary: 'Error message',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    range: {
      description: 'Array of labels for Chip with range',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'object',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    rangeIcon: {
      description:
        'Object with rangeIcon properties. In this case, the range icon is used as a representation of a range between 2 dates or amounts.',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    rangeSeparator: {
      description: 'Object with rangeSeparator properties. Range separator text',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'ChipTextType',
        },
        defaultValue: { summary: 'to' },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    deleteText: {
      description: 'Delete text for screen readers',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'Delete',
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
