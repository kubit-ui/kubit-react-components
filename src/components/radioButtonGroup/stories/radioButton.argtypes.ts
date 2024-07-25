import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

export const argtypes = (
  variantsObject: IThemeObjectVariants,
  themeSelected: string
): ArgTypesReturn => {
  return {
    variant: {
      description: 'Current variant of RadioButton',
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
    checked: {
      description: 'Checked state of RadioButton',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        defaultValue: {
          summary: false,
        },
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    name: {
      description: 'Name of RadioButton',
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    label: {
      description: 'Label of RadioButton',
      type: { name: 'object' },
      table: {
        type: {
          summary: 'RadioButtonLabelType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    ['aria-label']: {
      description: 'Aria label of RadioButton',
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-labelledby']: {
      description: 'Aria labelled by of RadioButton',
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-hidden']: {
      description: 'Hide element from screen readers',
      type: { name: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    errorMessage: {
      description: 'Error message of RadioButton',
      type: { name: 'string' },
      table: {
        // Not available in kubit theme
        disable: true,
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    errorIcon: {
      description: 'Error icon of RadioButton',
      type: { name: 'object' },
      table: {
        // Not available in kubit theme
        disable: true,
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    errorAriaLiveType: {
      description: 'Error aria live type of RadioButton',
      type: { name: 'string' },
      table: {
        type: {
          summary: 'AriaLiveOptionType',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    onBlur: {
      description: 'On blur event of RadioButton',
      type: { name: 'function' },
      table: {
        type: {
          summary: 'React.FocusEventHandler<HTMLInputElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onChange: {
      description: 'On change event of RadioButton',
      type: { name: 'function' },
      table: {
        type: {
          summary: 'React.ChangeEventHandler<HTMLInputElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    subTitle: {
      description: 'Subtitle of RadioButton',
      type: { name: 'object' },
      table: {
        type: {
          summary: 'RadioButtonSubtitleType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    error: {
      description: 'Indicate it has error',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        // Not available in kubit theme
        disable: true,
        defaultValue: {
          summary: false,
        },
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    disabled: {
      description: 'Indicate it is disabled',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        defaultValue: {
          summary: false,
        },
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    value: {
      description: 'Value of RadioButton',
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string | number',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    dataTestId: {
      description: 'Data test id of RadioButton',
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.TESTING,
      },
    },
    screenReaderId: {
      description:
        'Screen reader id of RadioButton, it will appear as part of the input aria-description',
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    tabIndex: {
      description: 'Tab index',
      type: { name: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    id: {
      description: 'Id of RadioButton',
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    state: {
      table: {
        disable: true,
      },
    },
    styles: {
      table: {
        disable: true,
      },
    },
    lastChild: {
      table: {
        disable: true,
      },
    },
  };
};
