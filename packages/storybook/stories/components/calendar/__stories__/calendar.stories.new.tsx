import type { Meta, StoryObj } from '@storybook/react-vite';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import {
  type CalendarProps,
  Calendar as CalendarStory,
} from '@kubit-ui-web/react-components';
import { useState } from 'react';

import { ICONS } from '@/stories/assets/icons/icons';

import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: CalendarStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['resources'],
  title: 'Components/Resources/Calendar',
} satisfies Meta<typeof CalendarStory>;

export default meta;

const { ButtonSizeType, ButtonVariantType } = KUBIT_VARIANTS;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonConfig: Pick<
  CalendarProps,
  'configCalendar' | 'configAccesibility'
> = {
  configAccesibility: {
    backToMonthAriaLabel: 'Back to month view',
    monthSelectorAriaLabel: 'Select month',
    yearSelectorAriaLabel: 'Select year',
  },
  configCalendar: {
    leftArrowIcon: ICONS.CHEVRON_LEFT,
    rightArrowIcon: ICONS.CHEVRON_RIGHT,
    sizeSelectorButton: ButtonSizeType.SMALL,
    variantSelectorButton: ButtonVariantType.PRIMARY,
  },
};

/**
 * Single date selection calendar.
 */
export const SingleDate: Story = {
  args: {
    ...commonConfig,
    hasRange: false,
    maxDate: new Date(),
    minDate: new Date('2020-01-01'),
    open: true,
    selectedDate: new Date(),
    variant: 'default',
  },
  parameters: {
    docs: {
      source: {
        code: `const [selectedDate, setSelectedDate] = useState(new Date());

<Calendar
  selectedDate={selectedDate}
  onSelectedDateChange={(dates) => setSelectedDate(dates[0])}
  minDate={new Date('2020-01-01')}
  maxDate={new Date()}
  configCalendar={{
    leftArrowIcon: ICONS.CHEVRON_LEFT,
    rightArrowIcon: ICONS.CHEVRON_RIGHT,
    variantSelectorButton: ButtonVariantType.PRIMARY,
    sizeSelectorButton: ButtonSizeType.SMALL,
  }}
  variant="default"
/>`,
      },
    },
  },
  render: (args) => {
    const [selectedDate, setSelectedDate] = useState(
      args.selectedDate || new Date(),
    );
    return (
      <CalendarStory
        {...args}
        selectedDate={selectedDate}
        onSelectedDateChange={(dates) => {
          const dateArray = Array.isArray(dates) ? dates : [dates];
          setSelectedDate(dateArray[0]);
        }}
      />
    );
  },
};

/**
 * Date range selection.
 */
export const DateRange: Story = {
  args: {
    ...commonConfig,
    hasRange: true,
    maxDate: new Date(),
    minDate: new Date('2020-01-01'),
    open: true,
    secondSelectedDate: undefined,
    selectedDate: new Date(),
    variant: 'default',
  },
  parameters: {
    docs: {
      source: {
        code: `const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState<Date | undefined>(undefined);

<Calendar
  hasRange
  selectedDate={startDate}
  secondSelectedDate={endDate}
  onSelectedDateChange={(dates) => {
    setStartDate(dates[0]);
    setEndDate(dates[1]);
  }}
  minDate={new Date('2020-01-01')}
  maxDate={new Date()}
  configCalendar={{
    leftArrowIcon: ICONS.CHEVRON_LEFT,
    rightArrowIcon: ICONS.CHEVRON_RIGHT,
  }}
/>`,
      },
    },
  },
  render: (args) => {
    const [startDate, setStartDate] = useState(args.selectedDate || new Date());
    const [endDate, setEndDate] = useState<Date | undefined>(
      args.secondSelectedDate,
    );
    return (
      <CalendarStory
        {...args}
        secondSelectedDate={endDate}
        selectedDate={startDate}
        onSelectedDateChange={(dates) => {
          const [start, end] = dates as Date[];
          setStartDate(start);
          setEndDate(end);
        }}
      />
    );
  },
};

/**
 * Calendar with disabled dates.
 */
export const WithDisabledDates: Story = {
  args: {
    ...commonConfig,
    disabledDates: [
      new Date('2024-01-01'),
      new Date('2024-01-15'),
      new Date('2024-02-14'),
      new Date('2024-12-25'),
    ],
    hasRange: false,
    maxDate: new Date('2024-12-31'),
    minDate: new Date('2024-01-01'),
    open: true,
    selectedDate: new Date('2024-06-15'),
    variant: 'default',
  },
  parameters: {
    docs: {
      source: {
        code: `<Calendar
  selectedDate={date}
  onSelectedDateChange={(dates) => setDate(dates[0])}
  disabledDates={[
    new Date('2024-01-01'),
    new Date('2024-12-25'),
  ]}
  minDate={new Date('2024-01-01')}
  maxDate={new Date('2024-12-31')}
/>`,
      },
    },
  },
  render: (args) => {
    const [selectedDate, setSelectedDate] = useState(
      args.selectedDate || new Date('2024-06-15'),
    );
    return (
      <CalendarStory
        {...args}
        selectedDate={selectedDate}
        onSelectedDateChange={(dates) => {
          const dateArray = Array.isArray(dates) ? dates : [dates];
          setSelectedDate(dateArray[0]);
        }}
      />
    );
  },
};

/**
 * Future dates only.
 */
export const FutureDatesOnly: Story = {
  args: {
    ...commonConfig,
    hasRange: false,
    maxDate: new Date(new Date().getFullYear() + 1, 11, 31),
    minDate: new Date(),
    open: true,
    selectedDate: new Date(),
    variant: 'default',
  },
  parameters: {
    docs: {
      source: {
        code: `const today = new Date();
const nextYear = new Date(today.getFullYear() + 1, 11, 31);

<Calendar
  selectedDate={date}
  onSelectedDateChange={(dates) => setDate(dates[0])}
  minDate={today}
  maxDate={nextYear}
/>`,
      },
    },
  },
  render: (args) => {
    const [selectedDate, setSelectedDate] = useState(
      args.selectedDate || new Date(),
    );
    return (
      <CalendarStory
        {...args}
        selectedDate={selectedDate}
        onSelectedDateChange={(dates) => {
          const dateArray = Array.isArray(dates) ? dates : [dates];
          setSelectedDate(dateArray[0]);
        }}
      />
    );
  },
};

/**
 * Past dates only.
 */
export const PastDatesOnly: Story = {
  args: {
    ...commonConfig,
    defaultCurrentDate: new Date('1990-01-01'),
    hasRange: false,
    maxDate: new Date(),
    minDate: new Date('1900-01-01'),
    open: true,
    selectedDate: new Date('1990-01-01'),
    variant: 'default',
  },
  parameters: {
    docs: {
      source: {
        code: `<Calendar
  selectedDate={birthDate}
  onSelectedDateChange={(dates) => setBirthDate(dates[0])}
  minDate={new Date('1900-01-01')}
  maxDate={new Date()}
  defaultCurrentDate={new Date('1990-01-01')}
/>`,
      },
    },
  },
  render: (args) => {
    const [selectedDate, setSelectedDate] = useState(
      args.selectedDate || new Date('1990-01-01'),
    );
    return (
      <CalendarStory
        {...args}
        selectedDate={selectedDate}
        onSelectedDateChange={(dates) => {
          const dateArray = Array.isArray(dates) ? dates : [dates];
          setSelectedDate(dateArray[0]);
        }}
      />
    );
  },
};

/**
 * Booking date range.
 */
export const BookingRange: Story = {
  args: {
    ...commonConfig,
    hasRange: true,
    maxDate: new Date(new Date().getFullYear(), new Date().getMonth() + 6, 0),
    minDate: new Date(),
    open: true,
    secondSelectedDate: undefined,
    selectedDate: new Date(),
    variant: 'default',
  },
  parameters: {
    docs: {
      source: {
        code: `const today = new Date();
const sixMonthsLater = new Date(today.getFullYear(), today.getMonth() + 6, 0);

<Calendar
  hasRange
  selectedDate={checkIn}
  secondSelectedDate={checkOut}
  onSelectedDateChange={(dates) => {
    setCheckIn(dates[0]);
    setCheckOut(dates[1]);
  }}
  minDate={today}
  maxDate={sixMonthsLater}
  configAccesibility={{
    monthSelectorAriaLabel: 'Select check-in month',
    yearSelectorAriaLabel: 'Select check-in year',
  }}
/>`,
      },
    },
  },
  render: (args) => {
    const [startDate, setStartDate] = useState(args.selectedDate || new Date());
    const [endDate, setEndDate] = useState<Date | undefined>(
      args.secondSelectedDate,
    );
    return (
      <CalendarStory
        {...args}
        secondSelectedDate={endDate}
        selectedDate={startDate}
        onSelectedDateChange={(dates) => {
          const [start, end] = dates as Date[];
          setStartDate(start);
          setEndDate(end);
        }}
      />
    );
  },
};

/**
 * Custom accessibility labels.
 */
export const WithCustomAccessibility: Story = {
  args: {
    ...commonConfig,
    configAccesibility: {
      backToMonthAriaLabel: 'Return to month selection',
      daySelectorRole: 'button',
      monthSelectorAriaLabel: 'Choose month',
      monthSelectorRole: 'button',
      yearSelectorAriaLabel: 'Choose year',
      yearSelectorRole: 'button',
    },
    hasRange: false,
    maxDate: new Date(),
    minDate: new Date('2020-01-01'),
    open: true,
    selectedDate: new Date(),
    variant: 'default',
  },
  parameters: {
    docs: {
      source: {
        code: `<Calendar
  selectedDate={date}
  onSelectedDateChange={(dates) => setDate(dates[0])}
  configAccesibility={{
    monthSelectorAriaLabel: 'Choose month',
    yearSelectorAriaLabel: 'Choose year',
    backToMonthAriaLabel: 'Return to month selection',
    monthSelectorRole: 'button',
    yearSelectorRole: 'button',
    daySelectorRole: 'button',
  }}
/>`,
      },
    },
  },
  render: (args) => {
    const [selectedDate, setSelectedDate] = useState(
      args.selectedDate || new Date(),
    );
    return (
      <CalendarStory
        {...args}
        selectedDate={selectedDate}
        onSelectedDateChange={(dates) => {
          const dateArray = Array.isArray(dates) ? dates : [dates];
          setSelectedDate(dateArray[0]);
        }}
      />
    );
  },
};

/**
 * Multiple calendars.
 */
export const MultipleCalendars: Story = {
  args: {
    ...commonConfig,
    hasRange: false,
    maxDate: new Date(),
    minDate: new Date('2020-01-01'),
    open: true,
    selectedDate: new Date(),
    variant: 'default',
  },
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'flex', gap: '24px' }}>
  <Calendar
    selectedDate={date1}
    onSelectedDateChange={(dates) => setDate1(dates[0])}
    minDate={new Date('2020-01-01')}
    maxDate={new Date()}
  />
  <Calendar
    selectedDate={date2}
    onSelectedDateChange={(dates) => setDate2(dates[0])}
    minDate={new Date('2020-01-01')}
    maxDate={new Date()}
  />
</div>`,
      },
    },
  },
  render: (args) => {
    const [date1, setDate1] = useState(new Date());
    const [date2, setDate2] = useState(new Date());
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
        <CalendarStory
          {...args}
          selectedDate={date1}
          onSelectedDateChange={(dates) => {
            const dateArray = Array.isArray(dates) ? dates : [dates];
            setDate1(dateArray[0]);
          }}
        />
        <CalendarStory
          {...args}
          selectedDate={date2}
          onSelectedDateChange={(dates) => {
            const dateArray = Array.isArray(dates) ? dates : [dates];
            setDate2(dateArray[0]);
          }}
        />
      </div>
    );
  },
};
