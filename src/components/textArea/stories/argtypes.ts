import { ICONS } from '@/assets';
import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn, AriaLiveOptionType } from '@/types';

export const argtypes = (
  variantsObject: IThemeObjectVariants,
  themeSelected: string
): ArgTypesReturn => {
  return {
    variant: {
      description: 'Variant to add styles',
      type: { name: 'string', required: true },
      control: { type: 'select' },
      options: Object.keys(variantsObject[themeSelected].TextAreaVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    label: {
      description: 'Object with label properties. Label. It is shown inside the textArea',
      type: { name: 'object', required: true },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'TextAreaLabelType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    maxLength: {
      description: 'Counter max length',
      type: { name: 'number', required: true },
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    screenReaderTextCount: {
      description: 'It helps the screen reader informing about the counter data',
      type: { name: 'string', required: true },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    placeholder: {
      description: 'Placeholder inside the textArea',
      type: { name: 'string', required: true },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    disabled: {
      description: 'It indicates if the component is disabled',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    error: {
      description: 'It indicates if the component has errors',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    errorIcon: {
      description: 'Object with error icon properties. When error, error icon',
      type: { name: 'object' },
      control: { type: 'object' },
      options: Object.values(ICONS),
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    errorMessage: {
      description: 'Object with error message properties.When error, error message',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'TextAreaTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    errorAriaLiveType: {
      description: 'Error message aria-live type',
      type: { name: 'AriaLiveOptionType' },
      control: { type: 'select' },
      options: Object.values(AriaLiveOptionType),
      table: {
        type: {
          summary: 'AriaLiveOptionType',
          detail: Object.values(AriaLiveOptionType).join(', '),
        },
        defaultValue: { summary: AriaLiveOptionType.ASSERTIVE },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    title: {
      description: 'Object with title properties. It provides extra information to the component',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'TextAreaTitleType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    helpMessage: {
      description:
        'Object with help message properties. It provides more information about the input',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'TextAreaTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    required: {
      description: 'It indicates if the field is mandatory',
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
    height: {
      description: 'It allows to set the textArea height',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    id: {
      description: 'It allows to set an id for the textArea',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    value: {
      description: 'Value of the component',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    additionalInfo: {
      description: 'Element displayed at right of the label',
      type: { name: 'string' },
      table: {
        type: {
          summary: 'ReactNode',
        },
        defaultValue: { summary: null },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    onChange: {
      description: 'Function that is called when writting on the component',
      type: { name: 'function' },
      control: false,
      table: {
        type: {
          summary: 'React.ChangeEventHandler<HTMLTextAreaElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onFocus: {
      description: 'Function that is called when focus on the component',
      type: { name: 'function' },
      control: false,
      table: {
        type: {
          summary: 'React.FocusEventHandler<HTMLTextAreaElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onBlur: {
      description: 'Function that is called when blur the component',
      type: { name: 'function' },
      control: false,
      table: {
        type: {
          summary: 'React.FocusEventHandler<HTMLTextAreaElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    dataTestId: {
      description:
        'Test id of the component. Internal components will concatenate from this test id',
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
