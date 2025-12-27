import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  ButtonSizeType,
  ButtonVariantType,
} from '@/lib/designSystem/kubit/components/button/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';

import type { CalendarProps } from '../types/calendar';

import { Calendar as Story } from '../calendar';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    controls: {
      disable: true,
    },
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3922-29766',
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/calendar',
    layout: 'centered',
  },
  tags: ['autodocs', 'resources'],
  title: 'Components/Resources/Calendar',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: CalendarProps = {
  configAccesibility: {
    backToMonthAriaLabel: 'Back to month view',
    monthSelectorAriaLabel: 'Select month',
    yearSelectorAriaLabel: 'Select year',
  },
  configCalendar: {
    leftArrowIcon: {
      ['aria-label']: 'Previous month',
      icon: ICONS.CHEVRON_LEFT,
    },
    rightArrowIcon: { ['aria-label']: 'Next month', icon: ICONS.CHEVRON_RIGHT },
    sizeSelectorButton: ButtonSizeType.SMALL,
    variantSelectorButton: ButtonVariantType.PRIMARY,
  },
  disabledDates: [new Date('2020-01-01'), new Date('2020-01-05')],
  hasRange: false,
  maxDate: new Date(),
  minDate: new Date('2000-01-01'),
  open: true,
  variant: 'default',
};

export const Calendar: Story = {
  args: {
    ...commonArgs,
  },
};
