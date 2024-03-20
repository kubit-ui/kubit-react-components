import { LinkTargetType } from '@/components/link';
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
      description: 'DropdownSelected variant',
      options: Object.keys(variants[themeSelected].DropdownSelectedVariantType || {}),
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
      type: { name: 'object', required: true },
      table: {
        type: {
          summary: 'DropdownSelectedTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    icon: {
      description: 'Set icon besides the text',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    defaultOpen: {
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      description: 'Indicates if options are opened or not',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    openAndCloseOnHover: {
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      description: 'It opens and closes dropdown on hover',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    closePopoverOnScroll: {
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      description: 'Indicates if popover should be closed on scroll',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: true },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    options: {
      description: 'List of options',
      type: { name: 'array', required: true },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'ListOptionsOptionType[]',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    url: {
      description: 'URL',
      control: { type: 'text' },
      type: { name: 'string', required: true },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    urlTarget: {
      description: 'The target attribute specifies where to open the linked document',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'LinkTargetType',
          detail: Object.keys(LinkTargetType).join(', '),
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    dataTestIdComponent: {
      description: 'data test id for component',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.TESTING,
      },
    },
    dataTestIdListOptionsContainer: {
      description: 'data test id for list options container',
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
