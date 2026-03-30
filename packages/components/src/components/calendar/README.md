# Calendar

The Calendar component provides an interactive date selection interface with support for single dates, date ranges, and customizable navigation.

## Features

- **Single date selection**: Pick individual dates
- **Date range selection**: Select start and end dates
- **Month/Year navigation**: Navigate through different periods
- **Date restrictions**: Set min/max dates and disable specific dates
- **Customizable icons**: Configure navigation arrows
- **Accessible**: Built-in ARIA labels and keyboard navigation

## Basic Usage

```tsx
import { Calendar } from '@/components/calendar';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Calendar
      selectedDate={selectedDate}
      onSelectedDateChange={(date) => setSelectedDate(date)}
      minDate={new Date('2020-01-01')}
      maxDate={new Date()}
      variant="default"
    />
  );
}
```

## Date Range Selection

```tsx
function DateRangePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  return (
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
    />
  );
}
```

## Props

### Main Props

| Prop                   | Type                             | Default     | Description                    |
| ---------------------- | -------------------------------- | ----------- | ------------------------------ |
| `selectedDate`         | `Date \| null`                   | -           | Currently selected date        |
| `onSelectedDateChange` | `(date: Date \| Date[]) => void` | -           | Callback when date is selected |
| `hasRange`             | `boolean`                        | `false`     | Enable date range selection    |
| `secondSelectedDate`   | `Date \| null`                   | -           | End date for range selection   |
| `variant`              | `string`                         | `'default'` | Visual variant of the calendar |

### Date Restrictions

| Prop                 | Type     | Default                  | Description                   |
| -------------------- | -------- | ------------------------ | ----------------------------- |
| `minDate`            | `Date`   | `new Date('2000-01-01')` | Minimum selectable date       |
| `maxDate`            | `Date`   | `new Date()`             | Maximum selectable date       |
| `disabledDates`      | `Date[]` | `[]`                     | Array of dates to disable     |
| `defaultCurrentDate` | `Date`   | -                        | Initial month/year to display |

### Configuration

| Prop                 | Type                         | Description                        |
| -------------------- | ---------------------------- | ---------------------------------- |
| `configCalendar`     | `CalendarConfigProps`        | Navigation icons and button styles |
| `configAccesibility` | `CalendarAccessibilityProps` | ARIA labels and roles              |
| `customBackText`     | `string`                     | Custom text for back button        |

#### CalendarConfigProps

```tsx
interface CalendarConfigProps {
  leftArrowIcon: { icon: string; 'aria-label': string };
  rightArrowIcon: { icon: string; 'aria-label': string };
  variantSelectorButton?: string;
  sizeSelectorButton?: string;
}
```

#### CalendarAccessibilityProps

```tsx
interface CalendarAccessibilityProps {
  monthSelectorAriaLabel?: string;
  yearSelectorAriaLabel?: string;
  backToMonthAriaLabel?: string;
  monthSelectorRole?: string;
  yearSelectorRole?: string;
  daySelectorRole?: string;
}
```

## Examples

### With Disabled Dates

```tsx
<Calendar
  selectedDate={date}
  onSelectedDateChange={setDate}
  disabledDates={[
    new Date('2024-12-25'), // Christmas
    new Date('2024-12-31'), // New Year's Eve
  ]}
/>
```

### With Custom Navigation Icons

```tsx
<Calendar
  selectedDate={date}
  onSelectedDateChange={setDate}
  configCalendar={{
    leftArrowIcon: {
      icon: ICONS.ARROW_LEFT,
      'aria-label': 'Previous month',
    },
    rightArrowIcon: {
      icon: ICONS.ARROW_RIGHT,
      'aria-label': 'Next month',
    },
    variantSelectorButton: ButtonVariantType.PRIMARY,
    sizeSelectorButton: ButtonSizeType.SMALL,
  }}
/>
```

### Booking System Example

```tsx
function BookingCalendar() {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);

  // Disable past dates
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <Calendar
      hasRange
      selectedDate={checkIn}
      secondSelectedDate={checkOut}
      onSelectedDateChange={(dates) => {
        setCheckIn(dates[0]);
        setCheckOut(dates[1]);
      }}
      minDate={today}
      maxDate={
        new Date(today.getFullYear() + 1, today.getMonth(), today.getDate())
      }
      configAccesibility={{
        monthSelectorAriaLabel: 'Select check-in month',
        yearSelectorAriaLabel: 'Select check-in year',
      }}
    />
  );
}
```

## Accessibility

The Calendar component follows WCAG 2.1 AA guidelines:

- **Keyboard Navigation**:
  - Arrow keys to navigate dates
  - Enter/Space to select dates
  - Tab to move between controls
- **Screen Reader Support**:
  - Proper ARIA labels for all interactive elements
  - Role attributes for semantic meaning
  - Announcement of selected dates
- **Focus Management**: Clear visual focus indicators

### Customizing ARIA Labels

```tsx
<Calendar
  selectedDate={date}
  onSelectedDateChange={setDate}
  configAccesibility={{
    monthSelectorAriaLabel: 'Choose month',
    yearSelectorAriaLabel: 'Choose year',
    backToMonthAriaLabel: 'Return to month selection',
    monthSelectorRole: 'button',
    yearSelectorRole: 'button',
    daySelectorRole: 'button',
  }}
/>
```

## Best Practices

1. **Always set min/max dates** to prevent invalid selections
2. **Provide clear labels** for navigation icons
3. **Use date ranges** for booking systems and period selection
4. **Disable unavailable dates** explicitly rather than hiding them
5. **Handle timezone considerations** when working with dates
6. **Validate selected dates** in your change handler
7. **Provide feedback** when dates are selected or changed

## Common Patterns

### Event Date Picker

```tsx
<Calendar
  selectedDate={eventDate}
  onSelectedDateChange={setEventDate}
  minDate={new Date()} // Only future dates
  disabledDates={holidays} // Disable holidays
/>
```

### Birth Date Selector

```tsx
<Calendar
  selectedDate={birthDate}
  onSelectedDateChange={setBirthDate}
  minDate={new Date('1900-01-01')}
  maxDate={new Date()} // Only past dates
  defaultCurrentDate={new Date('1990-01-01')} // Start in 1990
/>
```

### Period Selection

```tsx
<Calendar
  hasRange
  selectedDate={startDate}
  secondSelectedDate={endDate}
  onSelectedDateChange={(dates) => {
    const [start, end] = dates;
    // Validate that end is after start
    if (end && start && end < start) {
      alert('End date must be after start date');
      return;
    }
    setStartDate(start);
    setEndDate(end);
  }}
/>
```

## TypeScript Support

The component is fully typed with TypeScript:

```tsx
import type { CalendarConfigProps, CalendarProps } from '@/components/calendar';

const config: CalendarConfigProps = {
  leftArrowIcon: { icon: ICONS.CHEVRON_LEFT, 'aria-label': 'Previous' },
  rightArrowIcon: { icon: ICONS.CHEVRON_RIGHT, 'aria-label': 'Next' },
};

const MyCalendar: React.FC = () => {
  const props: CalendarProps = {
    selectedDate: new Date(),
    onSelectedDateChange: (date) => console.log(date),
    configCalendar: config,
  };

  return <Calendar {...props} />;
};
```
