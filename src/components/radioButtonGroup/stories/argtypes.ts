import { TextComponentType } from '@/components/text';
import { CATEGORY_CONTROL } from '@/constants';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

import { RadioButtonGroupStateType } from '../types';

export const argtypes = (
  variantsObject: IThemeObjectVariants,
  themeSelected: string
): ArgTypesReturn => {
  return {
    variant: {
      description: 'Current variant of RadioButtonGroup',
      type: { name: 'string', required: true },
      control: { type: 'select' },
      options: Object.keys(variantsObject[themeSelected]?.RadioButtonGroupVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    state: {
      description: 'State of RadioButtonGroup',
      type: { name: 'RadioButtonGroupStateType', required: true },
      control: { type: 'select' },
      options: Object.values(RadioButtonGroupStateType),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    options: {
      description: 'Radio button options',
      type: { name: 'array', required: true },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'RadioButtonOptionType[]',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    defaultSelectedOption: {
      description: 'option selected by default',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'RadioButtonOptionType',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    legend: {
      description: 'Text for legend component',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    legendComponent: {
      description: 'Component applied to legend component',
      type: { name: 'string' },
      control: { type: 'select' },
      options: Object.values(TextComponentType),
      table: {
        type: {
          summary: 'TextComponentType',
          detail: Object.keys(TextComponentType).join(', '),
        },
        defaultValue: {
          summary: TextComponentType.LEGEND,
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    name: {
      description: 'Value associated to property name of fieldset component',
      type: { name: 'string', required: true },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    onBlur: {
      description: 'Function called on the onBlur method of each option',
      control: false,
      table: {
        type: {
          summary: 'FocusEventHandler<HTMLInputElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onChange: {
      description: 'Function called on the onBlur method of each option',
      control: false,
      table: {
        type: {
          summary: 'ChangeEventHandler<HTMLInputElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    infoIcon: {
      description: 'Object with info icon properties',
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
      description: 'Object with tooltip properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'RadioButtonGroupTooltipType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    required: {
      description: 'Boolean to indicate if radioButtonGrupo is required',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    requiredSymbol: {
      description: 'Symbol for required prop',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    screenReaderText: {
      description: 'Text for screenReader',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    requiredScreenReaderText: {
      description: 'Text for screenReader when the fieldset is required',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    errorMessageId: {
      description: 'Id for error message',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
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
