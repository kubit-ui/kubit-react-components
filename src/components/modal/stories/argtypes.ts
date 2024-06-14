import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

// eslint-disable-next-line complexity
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
      description: 'Modal variant',
      options: Object.keys(variants[themeSelected].ModalVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    maxHeight: {
      description: 'Maximum height of the modal',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    minHeight: {
      description: 'Minimum height of the modal',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    maxWidth: {
      description: 'Maximum width of the modal',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    minWidth: {
      description: 'Minimum width of the modal',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    minContentHeight: {
      description: 'Minimum height of the content modal',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    customHeightAllDevices: {
      description: 'Indicates if custom height is applied to all devices',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    customWidthAllDevices: {
      description: 'Indicates if custom width is applied to all devices',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    portalId: {
      description: 'Identifier of portal to render modal',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    id: {
      description: 'String used for id modal',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    open: {
      description: 'Indicates if modal is open or not',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    popover: {
      description: 'Popover configuration',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'ModalPopoverType',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    blocked: {
      description: 'Indicates if modal is blocked or not',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    title: {
      description: 'Title of the modal',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'ModalTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    closeIcon: {
      description: 'Icon to close the modal',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOricon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    closeButton: {
      description: 'Close text button',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'ModalButtonType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    imageIllustrationHeader: {
      description: 'Image illustration of header',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'IElementOrillustration',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    imageHeader: {
      description: 'Image header',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    content: {
      description: 'This will appear in your modal',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'ReactNode',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    footer: {
      description: 'Footer of the modal',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'ModalFooterType',
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
    onClose: {
      description: 'Invoked when modal state `open` is set to `false`',
      control: false,
      table: {
        type: {
          summary: '() => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onKeyDown: {
      description: 'Invoked when escp modal. Only for internal use',
      control: false,
      table: {
        type: {
          summary: '(event: KeyboardEvent<HTMLDivElement>) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
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
  };
};
