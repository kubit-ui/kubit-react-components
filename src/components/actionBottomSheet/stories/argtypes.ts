import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

export const argtypes = (variants: IThemeObjectVariants, themeSelected: string): ArgTypesReturn => {
  return {
    themeArgs: {
      table: {
        disable: true,
      },
    },
    variant: {
      type: { name: 'string', required: true },
      control: { type: 'select' },
      description: 'ActionBottomSheet variant',
      options: Object.keys(variants[themeSelected].ActionBottomSheetVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    open: {
      description: 'Indicates if ActionBottomSheet is open or not',
      type: { name: 'boolean', required: true },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    blocked: {
      description: 'It blocks the click outside',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
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
    popover: {
      description: 'Popover props',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'ActionBottomPopoverType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    children: {
      description: 'Content to place inside ActionBottomSheet ',
      type: { name: 'string', required: true },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'ReactNode',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    headerContent: {
      description: 'Content to place inside the Header in the component',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'ReactNode',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    height: {
      description: 'Component height',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    closeIcon: {
      description: 'Add close icon',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    onCloseIconClick: {
      description: 'Function to executed when closeIcon is clicked',
      control: false,
      table: {
        type: {
          summary: 'React.MouseEventHandler<HTMLButtonElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    title: {
      description: 'Title of the ActionBottomSheet',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'ActionBottomSheetTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    hasHeader: {
      description: 'Show header',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
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
