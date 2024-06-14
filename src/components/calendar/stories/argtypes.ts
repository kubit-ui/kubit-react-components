import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

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
      description: 'Calendar variant',
      options: Object.keys(variants[themeSelected].CalendarVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    id: {
      description: '´Calendar id',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    disabledDates: {
      description: 'List of disabled dates',
      control: { type: 'array' },
      type: { name: 'array' },
      table: {
        type: {
          summary: 'Date[]',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    selectedDate: {
      description: 'Selected date in the calendar',
      table: {
        defaultValue: { summary: null },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    secondSelectedDate: {
      description: 'Second selected date in the calendar',
      control: false,
      table: {
        defaultValue: { summary: null },
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
        defaultValue: { summary: false },
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
        defaultValue: { summary: 'new Date()' },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    onSelectedDateChange: {
      description: 'Function of the calendar when user click on a date',
      control: false,
      table: {
        type: {
          summary: '(date: any) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onDaySelectorClick: {
      description:
        'Callback to know the value of the actual calendar day when day selector is clicked',
      control: false,
      table: {
        type: {
          summary:
            '(value?: string, event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onMonthSelectorClick: {
      description:
        'Callback to know the value of the actual calendar month when month selector is clicked',
      control: false,
      table: {
        type: {
          summary:
            '(value?: string, event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onYearSelectorClick: {
      description:
        'Callback to know the value of the actual calendar year when year selector is clicked',
      control: false,
      table: {
        type: {
          summary:
            '(value?: string, event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onDayClick: {
      description: 'Callback to know the value of the calendar day when selected a new one',
      control: false,
      table: {
        type: {
          summary: '(value?: string) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onMonthClick: {
      description: 'Callback to know the value of the calendar month when selected a new one',
      control: false,
      table: {
        type: {
          summary: '(value?: string) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onYearClick: {
      description: 'Callback to know the value of the calendar year when selected a new one',
      control: false,
      table: {
        type: {
          summary: '(value?: string) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onLeftIconClick: {
      description: 'Callback to know when the calendar left icon is clicked',
      control: false,
      table: {
        type: {
          summary:
            '(event?: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onRightIconClick: {
      description: 'Callback to know when the calendar right icon is clicked',
      control: false,
      table: {
        type: {
          summary:
            '(event?: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    open: {
      description: 'Indicates if the calendar is open or not',
      type: { name: 'boolean', required: true },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    configCalendar: {
      description: 'Configuration of the calendar',
      control: { type: 'object' },
      type: { name: 'object', required: true },
      table: {
        type: {
          summary: 'IConfigCalendar',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    configAccesibility: {
      description: 'Configuration of the aria labels',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'IConfigAccesibility',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    defaultCurrentDate: {
      description: 'Date show when the calendar opens',
      control: { type: 'date' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'Date',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    sundayFirst: {
      description: 'Option to choose between mondoy or sunday to start the week',
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    formatWeekDayOption: {
      description: 'Option to formatting week days',
      options: ['short', 'long', 'narrow'],
      control: { type: 'select' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'FormatWeekdayOptionType',
          detail: ['short', 'long'],
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    onPopoverCloseInternally: {
      description: 'Informs when the calendar is closed internally',
      control: false,
      table: {
        type: {
          summary: '() => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    preventCloseOnClickElements: {
      description: 'Avoid to close popover when click inside these elements',
      control: false,
      type: { name: 'array' },
      table: {
        type: {
          summary: '(HTMLElement | null | undefined)[]',
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
  };
};
