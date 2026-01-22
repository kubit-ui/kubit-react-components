import type { ArgTypes } from 'storybook/internal/types';

import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getBooleanArgTypes } from '@/lib/storybook/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/lib/storybook/argtypes/disabledArgTypes';
import { getSelectorArgTypes } from '@/lib/storybook/argtypes/selectorArgTypes';
import { getStringtArgTypes } from '@/lib/storybook/argtypes/stringArgTypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'configAccesibility',
      'configCalendar',
      'defaultCurrentDate',
      'disabledDates',
      'maxDate',
      'minDate',
      'onDayClick',
      'onDaySelectorClick',
      'onLeftIconClick',
      'onMonthClick',
      'onMonthSelectorClick',
      'onPopoverCloseInternally',
      'onRightIconClick',
      'onSelectedDateChange',
      'onYearClick',
      'onYearSelectorClick',
      'preventCloseOnClickElements',
      'secondSelectedDate',
      'selectedDate',
    ]),
    formatWeekDayOption: getSelectorArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'formatWeekDayOption',
      name: 'calendar',
      options: { long: 'long', narrow: 'narrow', short: 'short' },
    }),
    hasRange: getBooleanArgTypes({
      descriptionName: 'calendar',
      name: 'hasRange',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    id: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'id',
      name: 'calendar',
    }),
    open: {
      ...getBooleanArgTypes({
        descriptionName: 'calendar',
        name: 'open',
        subCategory: CATEGORY_CONTROL.MODIFIERS,
      }),
      type: { name: 'boolean', required: true },
    },
    sundayFirst: getBooleanArgTypes({
      descriptionName: 'calendar',
      name: 'sundayFirst',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    variant: {
      control: { type: 'select' },
      description: 'Calendar variant',
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string', required: true },
    },
  };
};
