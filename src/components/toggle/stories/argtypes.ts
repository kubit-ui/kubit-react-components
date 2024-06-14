import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn, POSITIONS } from '@/types';

export const argtypes = (
  variantsObject: IThemeObjectVariants,
  themeSelected: string
): ArgTypesReturn => {
  return {
    variant: {
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
    hasThreePositions: {
      description: 'Indicates if toggle has three positions or two',
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
    defaultTogglePosition: {
      description: 'Default position of the toggle',
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
      description: 'bject with offText properties.Text applied when toggle should be off',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'ToggleOnAndOffTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    offIcon: {
      description: 'Object with offIcon properties. Icon applied when toggle should be off',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    onText: {
      description: 'Object with onText properties. Text applied when toggle should be on',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'ToggleOnAndOffTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    onIcon: {
      description: 'Object with onIcon properties.Icon applied when toggle should be on',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
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
    ['aria-label']: {
      description: 'Text for property aria-label applied to parent container',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-describedby']: {
      description: 'Text for property aria-labelledby applied to parent component',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-labelledby']: {
      description: 'Text for property aria-labelledby applied to parent component',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    disabled: {
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
    tabIndex: {
      description: 'Prop to manage the tabIndex of toggle',
      type: { name: 'number' },
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
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
    screenReaderId: {
      description: 'Id for ScreenReader',
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
