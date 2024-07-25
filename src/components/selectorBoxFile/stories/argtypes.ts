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
      control: { type: 'select' },
      type: { name: 'string', required: true },
      description: 'Selector box file variant',
      options: Object.keys(variants[themeSelected].SelectorBoxFileVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    loading: {
      description: 'Component is loading',
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
    success: {
      description: 'Component uploaded the file properly',
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
    error: {
      description: 'Component has errors',
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
    disabled: {
      description: 'Component is disabled',
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
    title: {
      description: 'Object with title properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'SelectorBoxFileTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    subtitle: {
      description: 'Object with subtitle properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'SelectorBoxFileTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    tooltip: {
      description: 'When present a tooltip will be shown',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'SelectorBoxFileTooltipType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    tooltipIcon: {
      description: 'Object with tooltip icon properties. Icon next to the subtitle',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    description: {
      description: 'Object with description properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'SelectorBoxFileTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    button: {
      description: 'Object with button properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'SelectorBoxFileButtonType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    containerBoxStateContent: {
      description: 'Container box literals (icon and text)',
      control: { type: 'object' },
      type: { name: 'object', required: true },
      table: {
        type: {
          summary: 'SelectorBoxFileContainerBoxStateContentType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    filename: {
      description: 'Uploading file name',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    errorMessageIcon: {
      description: 'Object with error message icon properties. When error, error message icon',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    errorMessage: {
      description: 'Object with error message properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'SelectorBoxFileTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    id: {
      description: 'Input file id',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    name: {
      description: 'Input file name',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    accept: {
      description: 'Input file accept',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    multiple: {
      description: 'Input file multiple',
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    fileExtension: {
      description: 'Allowed extensions',
      type: { name: 'array' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'array',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    maxSize: {
      description: 'Max file size (mb)',
      control: { type: 'number' },
      type: { name: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    errorFileExtensionMessage: {
      description: 'Object for custom message when file extension is wrong',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'SelectorBoxFileTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    errorMaxSizeMessage: {
      description: 'Object for custom message when size is wrong',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'SelectorBoxFileTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    onChange: {
      description: 'Input file onChange',
      control: false,
      table: {
        type: {
          summary: 'React.ChangeEventHandler<HTMLInputElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onClick: {
      description: 'Input file onClick',
      control: false,
      table: {
        type: {
          summary: 'MouseEventHandler<HTMLInputElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onFileError: {
      description: 'CallBack File Extension Error',
      control: false,
      table: {
        type: {
          summary: '(status: boolean) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onSizeError: {
      description: 'CallBack File Size Error',
      control: false,
      table: {
        type: {
          summary: '(status: boolean) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    dataTestId: {
      control: { type: 'text' },
      type: { name: 'string' },
      description: 'String used for testing',
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
