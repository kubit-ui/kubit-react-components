import { ICONS } from '@/assets';
import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { objectFlip } from '@/storybook/utils/utils';
import { ArgTypesReturn } from '@/types';

export const argtypes = (
  variantsObject: IThemeObjectVariants,
  themeSelected: string
): ArgTypesReturn => {
  return {
    variant: {
      description: 'VirtualKeyboard variant',
      type: { name: 'string', required: true },
      control: { type: 'select' },
      options: Object.keys(variantsObject[themeSelected].VirtualKeyboardVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    digits: {
      description: 'There will be range number buttons from 0 value to 9 value placed randomly.',
      type: { name: 'array', required: true },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'string[]',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    icon: {
      description: 'Icon of the remove button',
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
    iconAltText: {
      description: 'Alt text of the icon',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    onDigitButtonClick: {
      description: 'The event occurs when the user clicks on the digit button',
      type: { name: 'function', required: true },
      control: false,
      table: {
        type: {
          summary:
            '(digit: string, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onRemoveButtonClick: {
      description:
        'User can remove what they have clicked. The event occurs when the user clicks on the remove button',
      type: { name: 'function', required: true },
      control: false,
      table: {
        type: {
          summary: 'React.MouseEventHandler<HTMLButtonElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    id: {
      description: 'Identifier of the virtual keyboard',
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
      description:
        'Test id of the virtual keyboard. Internal components will concatenate from this test id',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'virtualkeyboard',
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
