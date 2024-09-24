import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

import { DrawerLevelPositionTypes } from '../types';

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
      description: 'Drawer variant',
      options: Object.keys(variants[themeSelected].DrawerVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    open: {
      description: 'Manage open drawer',
      type: { name: 'boolean', required: true },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    portalId: {
      description: 'Identifier of portal to render drawer',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    children: {
      description: 'Content',
      type: { name: 'string', required: true },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'ReactNode',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    footer: {
      description: 'Footer of the Drawer',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'DrawerFooterType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    closeIcon: {
      description: 'Close icon',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    title: {
      description: 'Tile of the drawer',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'DrawerTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    level: {
      description: 'Select the right or left icon depends of the value',
      control: { type: 'select' },
      type: { name: 'string', required: true },
      options: Object.keys(DrawerLevelPositionTypes),
      table: {
        type: {
          summary: 'DrawerLevelPositionTypes',
          detail: Object.keys(DrawerLevelPositionTypes).join(', '),
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    blocked: {
      description: 'Block drawer',
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
    popover: {
      description: 'Object with popover properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'DrawerPopoverType',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    onContentScroll: {
      description: 'Function to handle scroll event',
      type: { name: 'function' },
      table: {
        type: {
          summary: 'function',
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
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'object',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    extraCt: {
      description: 'Object used for update grid styles',
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
