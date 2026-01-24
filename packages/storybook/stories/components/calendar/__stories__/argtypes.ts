import type { ArgTypes } from 'storybook/internal/types';

import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getBooleanArgTypes } from '@/stories/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/stories/argtypes/disabledArgTypes';
import { getSelectorArgTypes } from '@/stories/argtypes/selectorArgTypes';
import { getStringtArgTypes } from '@/stories/argtypes/stringArgTypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

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
