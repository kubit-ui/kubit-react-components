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
      description: 'Input digit sequence variant',
      options: Object.keys(variants[themeSelected].InputDigitSequenceVariant || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    inputsArray: {
      control: { type: 'object' },
      type: { name: 'string', required: true },
      description: 'Each element will be an input',
      table: {
        type: {
          summary: 'array',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    showDigitAfterWrite: {
      control: { type: 'boolean' },
      type: { name: 'string' },
      description: 'Show the digit after user writes',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: true },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    showDigitTimeMiliseconds: {
      control: { type: 'number' },
      type: { name: 'number' },
      description: 'If showDigitAfterWrite is true, time in miliseconds to show the digit',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: '500' },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    onInputChange: {
      description: 'Function called when the user writes a digit',
      control: false,
      table: {
        type: {
          summary:
            '(value: UseStateInputDigitsType[], event: React.ChangeEvent<HTMLInputElement>) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    title: {
      description: 'Title of the component',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'InputDigiSequenceTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    tooltipIcon: {
      description: 'Tooltip icon',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
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
          summary: 'InputDigitSequenceTooltipType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    actionButton: {
      description: 'Object with actionButton properties.',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'InputDigiSequenceButtonType',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    disabled: {
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      description: 'Boolean to disable or not inputs',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    error: {
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      description: 'Boolean to show inputs with error',
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    errorText: {
      description: 'Error text showed when isError is true',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'InputDigiSequenceTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    errorIcon: {
      description: 'Error icon showed when isError is true',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    helpText: {
      description: 'Help text',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'InputDigitSequenceTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    inputMode: {
      control: { type: 'text' },
      type: { name: 'string' },
      description: 'Inputmode for input',
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    animated: {
      description: 'Boolean to animate the input',
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
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
        defaultValue: { summary: 'inputDigitSequence' },
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
