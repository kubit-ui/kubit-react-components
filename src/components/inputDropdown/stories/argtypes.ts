import { TextComponentType } from '@/components/text';
import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

import { argtypes as inputArgTypes } from '../../input/stories/argtypes';

export const argtypes = (variants: IThemeObjectVariants, themeSelected: string): ArgTypesReturn => {
  return {
    theme: {
      table: {
        disable: true,
      },
    },
    // EXTENDED properties from Input Basic
    ...inputArgTypes(variants, themeSelected),
    variant: {
      type: { name: 'string', required: true },
      control: { type: 'select' },
      description: 'InputDropdown variant',
      options: Object.keys(variants[themeSelected].InputDropdownVariant || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    inputVariant: {
      description: 'Variant for input used inside InputDropdown',
      control: { type: 'string' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    open: {
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      description: 'Indicates if inputSearch is open or not',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    options: {
      description: 'List of options',
      type: { name: 'object', required: true },
      table: {
        type: {
          summary: 'array',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    elementsToShow: {
      description: 'Number of elements to show in the list',
      control: { type: 'text' },
      type: { name: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: 4 },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    noResultsText: {
      description: 'Message to display when results are empty',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    loadingList: {
      description: 'Add loading in result list when database does not find results',
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    loadingText: {
      description: 'Object with loading text properties. Text for loading result list',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'InputDropdownLoadingTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    hasResultTextWrittenByUser: {
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      description:
        'Show or not the search option in the list. When the user enters text it shows the "Use this" option above the predefined ones to allow him to continue with a text that does not match any of the available options. It will allow to continue with any text the user enters as a free text input and should never give an error.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: true },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    hasInputInSearchList: {
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      description: 'Show or not the input in the list',
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    value: {
      control: { type: 'text' },
      type: { name: 'string' },
      description: 'The option value selected',
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    label: {
      options: Object.keys(TextComponentType),
      control: { type: 'select' },
      type: { name: 'string' },
      description: 'Component of the label for the actionBottomSheet',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: '' },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    closeIcon: {
      description:
        'Object with close icon properties. Set icon of the close button in ActionBottomSheet',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    inputPopoverIcon: {
      description:
        'Object with input popover icon properties. Set icon of the input icon in the ActionBottomSheet',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    inputPopoverVariant: {
      type: { name: 'string' },
      control: { type: 'text' },
      description: 'Variant for input inside the popover',
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    clearTextInputPopoverIconClick: {
      description:
        'Indicates if click on the icon of the input in the ActionBottomSheet clears the input value',
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: true },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    onInputPopoverIconClick: {
      description: 'Function that is called when click on the input icon in the ActionBottomSheet',
      control: false,
      table: {
        type: {
          summary: '() => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onOpenCloseOptions: {
      description: 'Function that is called when the options are opened or closed',
      control: false,
      table: {
        type: {
          summary: '(open: boolean) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
  };
};
