import { TextComponentType } from '@/components/text';
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
      description: 'Container variant',
      options: Object.keys(variants[themeSelected]?.AccordionVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    defaultOpen: {
      description: 'Initial open/close state',
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    onOpenClose: {
      description: 'Invoked when accordion state `open` is modified',
      control: false,
      table: {
        type: {
          summary: '(open: boolean, event: React.MouseEvent<HTMLButtonElement>) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    headerRightContent: {
      description: 'Content to place at the right side of header',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'ReactNode',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    subHeaderContent: {
      description: 'Content to place below header',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'ReactNode',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    title: {
      description: 'This will appear in your container',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'AccordionTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    triggerComponent: {
      description: 'HTML Tag to wrap accordion header',
      options: Object.keys(TextComponentType),
      type: { name: 'string' },
      control: { type: 'select' },
      table: {
        type: {
          summary: 'TextComponentType',
          detail: Object.keys(TextComponentType).join(', '),
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    triggerButton: {
      description: 'Trigger button configuration',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'AccordionTriggerButtonType',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    triggerIcon: {
      description: 'Trigger icon',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    footerContent: {
      description: 'Content to place at footer',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'ReactNode',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    titleIcon: {
      description: 'Title icon',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    hasHeaderLineSeparator: {
      description: 'It shows or not the line separator below the header',
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: true },
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
