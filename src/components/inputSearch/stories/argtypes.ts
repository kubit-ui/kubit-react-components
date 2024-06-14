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
      description: 'InputSearch variant',
      options: Object.keys(variants[themeSelected].InputSearchVariant || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    inputVariant: {
      description: 'Variant for input used inside InputSearch',
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
    optionList: {
      description: 'List of options',
      type: { name: 'object', required: true },
      table: {
        type: {
          summary: 'IOptionGroup[]',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    optionsListDefaultArias: {
      description: 'Arias for the options list',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'OptionGroupAriasTypes',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
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
      description: 'Object with noResultText properties. Message to display when results are empty',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'InputSearchNoResultTextType',
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
          summary: 'InputSearchLoadingTextType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    highlightedOption: {
      control: { type: 'text' },
      type: { name: 'string' },
      description:
        'Displays by default a highlighted option above the predefined ones that will disappear if the user enters text in the input. In case the user enters something that does not match any of the options the message "No results" will be displayed and when exiting focus it will give error.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: '' },
        category: CATEGORY_CONTROL.MODIFIERS,
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
    disableErrorInvalidOption: {
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      description: 'It disables the INVALID_OPTION error',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    sublabel: {
      control: { type: 'text' },
      type: { name: 'string' },
      description: 'Message displayed next to the suggested result',
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
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
    titleActionBottomSheet: {
      description: 'Title of the ActionBottomSheet',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
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
    blockBackPopover: {
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      description: 'Allow to block the back of the popover',
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    executeInternalOpenOptions: {
      description:
        'Prevents the call of the handleOpenOptions function, to control whether the options are opened, when the input icon is clicked',
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
    onInputSearchChange: {
      description:
        'Function that is called when writting on the component and get the actual input value',
      control: false,
      table: {
        type: {
          summary: '(optionSelected: {label: string; value: string;} | null) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onIconClick: {
      description: 'Function that is called when click on the input icon',
      control: false,
      table: {
        type: {
          summary: 'React.MouseEventHandler<HTMLButtonElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
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
    onPopoverOpen: {
      description: 'Function that is called when opening or closing the popover',
      control: false,
      table: {
        type: {
          summary: '(open: boolean) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onOptionsListKeyDown: {
      description:
        'Function that is triggered anytime the user presses a key on their keyboard in the ListOptions container',
      control: false,
      table: {
        type: {
          summary: '() => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onInternalErrors: {
      description: 'Function to get input internal errors',
      control: false,
      table: {
        type: {
          summary: '(errors: string[]) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onClickOption: {
      description: 'Function that is called when opening an value is selected',
      control: false,
      table: {
        type: {
          summary: '() => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
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
    ['aria-controls']: {
      table: {
        disable: true,
      },
    },
    ['aria-xpanded']: {
      table: {
        disable: true,
      },
    },
    ['aria-haspopup']: {
      table: {
        disable: true,
      },
    },
    textCounter: {
      table: {
        disable: true,
      },
    },
    max: {
      table: {
        disable: true,
      },
    },
    min: {
      table: {
        disable: true,
      },
    },
    minLength: {
      table: {
        disable: true,
      },
    },
    mask: {
      table: {
        disable: true,
      },
    },
    maskType: {
      table: {
        disable: true,
      },
    },
    truncate: {
      table: {
        disable: true,
      },
    },
    role: {
      table: {
        disable: true,
      },
    },
  };
};
