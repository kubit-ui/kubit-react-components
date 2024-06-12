import { ICONS } from '@/assets';
import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { objectFlip } from '@/storybook/utils/utils';
import { ArgTypesReturn } from '@/types';

import { ListOptionsType } from '../types';

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
      description: 'Listoptions variant',
      options: Object.keys(variants[themeSelected].ListOptionsVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    optionVariant: {
      type: { name: 'string', required: true },
      control: { type: 'select' },
      description: 'Listoptions variant',
      options: Object.keys(variants[themeSelected].OptionVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    hightlightedOptionVariant: {
      description: 'Variant to apply when the option is highlighted',
      options: Object.keys(variants[themeSelected].OptionVariantType || {}),
      control: { type: 'select' },
      type: { name: 'string' },
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    type: {
      description: 'Defines if the list has a navigation o selection purpose',
      options: Object.values(ListOptionsType),
      control: { type: 'select' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'ListOptionsType',
          detail: Object.keys(ListOptionsType).join(', '),
        },
        defaultValue: {
          summary: ListOptionsType.SELECTION,
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    content: {
      description: 'Content to show before the options',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'React.ReactNode',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    options: {
      description: 'List of options',
      type: { name: 'array', required: true },
      control: { type: 'object' },
      table: {
        category: CATEGORY_CONTROL.CONTENT,
        type: {
          summary: 'ListOptionsOptionType[]',
          detail:
            // eslint-disable-next-line quotes
            "Omit<IOption<string>, 'children' | 'variant'> & { variant?: string; highlighted?: boolean; value?: string | number; }",
        },
      },
    },
    charsHighlighted: {
      description: 'Highlighted chars of the labels of the options',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    selectedValue: {
      description: 'Value selected. When multiSelect you should pass an array of values',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string, number, string[], number[], null',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    title: {
      description:
        'Object with title properties. Title of options. Only apply on mobile and tablet',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'ListOptionsTitleType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    onOptionClick: {
      description: 'Action called when click on an option',
      control: false,
      table: {
        type: {
          summary:
            '(value, event: KeyboardEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    multiSelect: {
      description:
        'It allows to select more than one option. In this case, should specify iconChecked prop and selectedValue should be an array of values',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    checkedIcon: {
      description: 'When multiselect icon that indicate the element is checked',
      options: Object.values(ICONS),
      control: { type: 'select', labels: objectFlip(ICONS) },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    id: {
      description: 'Id',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    roveFocus: {
      description: 'Object for useRoveFocus hook (custom control keyboard actions)',
      control: false,
      table: {
        type: {
          summary: 'UseRoveFocusProps',
        },
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
    caseSensitive: {
      description: 'Indicates if the search is case sensitive',
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
  };
};
