import { ICONS } from '@/assets';
import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { objectFlip } from '@/storybook/utils/utils';
import { ArgTypesReturn, POSITIONS } from '@/types';

export const argtypes = (
  variantsObject: IThemeObjectVariants,
  themeSelected: string
): ArgTypesReturn => {
  return {
    variant: {
      description: 'Variant to add styles',
      type: { name: 'string', required: true },
      control: { type: 'select' },
      options: Object.keys(variantsObject[themeSelected].ToggleWithLabelVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    toggleVariant: {
      description: 'Current variant of Toggle  ',
      type: { name: 'string', required: true },
      control: { type: 'select' },
      options: Object.keys(variantsObject[themeSelected]?.ToggleVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    label: {
      description: 'Object with label properties. Set the Toggle label',
      type: { name: 'object', required: true },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'ToggleLabelType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    name: {
      description: 'Set the toggle name',
      type: { name: 'string', required: true },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    required: {
      description: 'Indicate when this parameter is required into the its father component',
      type: { name: 'boolean', required: true },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    requiredSymbol: {
      description: 'Object with Required symbol properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'ToggleRequiredSymbolType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    defaultTogglePosition: {
      description: 'Initial position of the toggle ',
      type: { name: 'string' },
      control: { type: 'select' },
      options: [POSITIONS.LEFT, POSITIONS.CENTER, POSITIONS.RIGHT],
      table: {
        type: {
          summary: 'POSITIONS',
          detail: '[POSITIONS.LEFT, POSITIONS.CENTER, POSITIONS.RIGHT]',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    togglePosition: {
      description: 'Position of the toggle. When this property is used, the toggle is controlled',
      type: { name: 'string' },
      control: { type: 'select' },
      options: [POSITIONS.LEFT, POSITIONS.CENTER, POSITIONS.RIGHT],
      table: {
        type: {
          summary: 'POSITIONS',
          detail: '[POSITIONS.LEFT, POSITIONS.CENTER, POSITIONS.RIGHT]',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    hasThreePositions: {
      description: 'Indicates if toggle has three positions or two',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    displayRow: {
      description: 'Set label aligment',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    textVariant: {
      description: 'Select text variant type for label',
      type: { name: 'string' },
      control: { type: 'select' },
      options: Object.keys(variantsObject[themeSelected]?.TextVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    screenReaderText: {
      description:
        'String used for screen reader. In the case of context change put message for screen readers',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    onClick: {
      description: 'Callback called when toggle click',
      type: { name: 'function' },
      control: false,
      table: {
        type: {
          summary: 'React.MouseEventHandler<HTMLElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onKeyDown: {
      description: 'Callback called when toggle keyDown',
      type: { name: 'function' },
      control: false,
      table: {
        type: {
          summary: 'React.KeyboardEventHandler<HTMLElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onChange: {
      description: 'Callback called when toggle switch position',
      type: { name: 'function' },
      control: false,
      table: {
        type: {
          summary: '(position: POSITIONS) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    offText: {
      description: 'Text applied when toggle should be off',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    offIcon: {
      description: 'Icon applied when toggle should be off',
      type: { name: 'string' },
      control: { type: 'select', labels: objectFlip(ICONS) },
      options: Object.values(ICONS),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    onText: {
      description: 'Text applied when toggle should be on',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    onIcon: {
      description: 'Icon applied when toggle should be on',
      type: { name: 'string' },
      control: { type: 'select', labels: objectFlip(ICONS) },
      options: Object.values(ICONS),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    inputValues: {
      description: 'Determinates de alternative text of each icon or it is used to build the label',
      type: { name: 'IInputValue' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IInputValue',
          detail:
            '{ rightInputValue?: string; centerInputValue?: string; leftInputValue?: string; }',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    radioButtonToggleName: {
      description: 'Value of the name property in the input component ',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'group-toggle',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    isDisabled: {
      description: 'Boolean to indicate if input component is disabled',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    blockCenter: {
      description: 'Boolean to block toggle in the center',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    id: {
      description: 'Id for toggle container',
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
      description: ' Id for testing',
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
