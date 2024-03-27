import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { Calendar as Story } from '../calendar';
import { ICalendar } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Resources/Calendar',
  component: Story,
  parameters: {
    layout: 'centered',
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/calendar',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3922-29766',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: ICalendar = {
  variant: Object.values(variantsObject[themeSelected].CalendarVariantType || {})[0] as string,
  minDate: new Date('2000-01-01'),
  maxDate: new Date(),
  hasRange: false,
  open: true,
  configCalendar: {
    leftArrowIcon: { icon: ICONS.ICON_CHEVRON_LEFT, ['aria-label']: 'Previous month' },
    rightArrowIcon: { icon: ICONS.ICON_CHEVRON_RIGHT, ['aria-label']: 'Next month' },
    variantSelectorButton: Object.values(
      variantsObject[themeSelected].ButtonVariantType || {}
    )[0] as string,
    sizeSelectorButton: Object.values(
      variantsObject[themeSelected].ButtonSizeType || {}
    )[0] as string,
  },
  configAccesibility: {
    monthSelectorAriaLabel: 'Select month',
    yearSelectorAriaLabel: 'Select year',
    backToMonthAriaLabel: 'Back to month view',
  },
  disabledDates: [new Date('2020-01-01'), new Date('2020-01-05')],
};

export const Calendar: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.CALENDAR],
  },
};

export const CalendarWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      daysList: {
        default: {
          background_color: 'red',
        },
      },
    },
  },
};
