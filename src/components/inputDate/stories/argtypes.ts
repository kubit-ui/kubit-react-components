import { MASK_TYPE } from '@/components/input/types';
import { TextComponentType } from '@/components/text';
import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn, POSITIONS } from '@/types';

import { argtypes as inputArgTypes } from '../../input/stories/argtypes';

export const argtypes = (variants: IThemeObjectVariants, themeSelected: string): ArgTypesReturn => {
  return {
    themeArgs: {
      table: {
        disable: true,
      },
    },
    // EXTENDED properties from Input Basic
    ...inputArgTypes(variants, themeSelected),
    variant: {
      type: { name: 'string', required: true },
      control: { type: 'select' },
      description: 'Input date variant',
      options: Object.keys(variants[themeSelected].InputDateVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    inputVariant: {
      description: 'Variant for input used inside InputDate',
      control: { type: 'string' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    format: {
      type: { name: 'string', required: true },
      control: { type: 'text' },
      description: 'Format of the input mask',
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    maskType: {
      description: 'Type of the mask',
      control: { type: 'select' },
      options: Object.keys(MASK_TYPE),
      table: {
        type: {
          summary: 'MASK_TYPE',
          detail: Object.keys(MASK_TYPE).join(', '),
        },
        defaultValue: { summary: MASK_TYPE.NUMBERS },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    dateSeparator: {
      description: 'Separator for date ranges',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'to' },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    initialDate: {
      description: 'Initial date',
      table: {
        type: {
          summary: 'Date or null',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    initialSecondDate: {
      description: 'Second initial date for a date range',
      table: {
        type: {
          summary: 'Date or null',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    disabledDates: {
      description: 'Array of disabled dates',
      table: {
        type: {
          summary: 'Date[]',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    today: {
      description: 'Set the Today string to show when today date is selected',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    locale: {
      description: 'Language of the specified date in the user agents timezone',
      control: { type: 'text' },
      type: { name: 'string', required: true },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    minDate: {
      description: 'Minimum date of the list of days',
      control: { type: 'date' },
      type: { name: 'string', required: true },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    maxDate: {
      description: 'Maximum date of the list of days',
      control: { type: 'date' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'Date',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    calendar: {
      description: 'Configuration of the calendar',
      type: { name: 'object', required: true },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'InputDateCalendarType',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    labelComponentType: {
      options: Object.keys(TextComponentType),
      description: 'Component of the label for the actionBottomSheet',
      control: { type: 'select' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    closeIcon: {
      description: 'Set icon of the close button in ActionBottomSheet',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    hasRange: {
      description: 'Indicates if the selected date is a range of dates',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    defaultDate: {
      description: 'Set calendar&apos;s default date when opening',
      control: { type: 'date' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },

    extraCalendarWidth: {
      description: 'Set extra width to the calendar',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: 'to' },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    extraCalendarWidthSide: {
      description: 'Set extra side for the extra width',
      control: { type: 'select' },
      type: { name: 'text' },
      options: Object.keys(POSITIONS),
      table: {
        type: {
          summary: 'POSITIONS',
          detail: Object.keys(POSITIONS).join(', '),
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    configAccesibility: {
      description: 'Accesibility configuration of the calendar',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IConfigAccesibilityPopover',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    onSelectedDateChange: {
      description: 'Function of the calendar when user click on a date',
      control: false,
      table: {
        type: {
          summary: '(newDate: any) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onCalendarOpen: {
      description: 'Callback to know when calendar show or not',
      control: false,
      table: {
        type: {
          summary: '(showCalendar: boolean) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onDateError: {
      description: 'Callback to know when has error',
      control: false,
      table: {
        type: {
          summary: '(hasError: boolean) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    textCounter: {
      table: {
        disable: true,
      },
    },
    rightIcon: {
      description:
        'Icon to show on the right side of the input. `altText` are not allowed here. You can set in configAccesibility prop in `iconInputOpenAriaLabel` and `iconInputCloseAriaLabel`',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'object',
          detail: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    onWrapperBlur: {
      description: 'Function that is called when blur the component wrapper',
      control: false,
      table: {
        type: {
          summary: 'FocusEventHandler<HTMLDivElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
  };
};
