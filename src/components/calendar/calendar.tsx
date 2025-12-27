import { type ForwardedRef, forwardRef, useEffect, useState } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { CalendarProps } from './types/calendar';

import { CalendarStandAlone } from './calendarStandAlone';

export const Calendar = forwardRef(
  <Variant extends string>(
    {
      additionalClasses,
      defaultCurrentDate,
      hasRange = false,
      maxDate = new Date(),
      onSelectedDateChange,
      secondSelectedDate,
      selectedDate,
      variant = 'default',
      ...props
    }: CalendarProps<Variant>,
    ref: ForwardedRef<HTMLDivElement> | undefined | null,
  ): JSX.Element => {
    const cssClasses = useClassName({
      additionalClassNames: additionalClasses,
      component: 'CALENDAR',
      variant,
    });
    const getInitialDate = () => {
      let initialDate;
      if (hasRange) {
        initialDate = [
          selectedDate ? selectedDate : null,
          secondSelectedDate ? secondSelectedDate : null,
        ];
      } else if (selectedDate) {
        try {
          initialDate = [selectedDate];
        } catch {
          initialDate = [null];
        }
      } else {
        initialDate = [null];
      }
      return initialDate;
    };
    const [date, setDate] = useState(getInitialDate());
    const getCurrentDate = () => {
      const _defaultCurrentDate = defaultCurrentDate ?? new Date();
      if (!hasRange && selectedDate) {
        return selectedDate;
      }
      if (date[1]) {
        return date[1];
      }
      if (date[0]) {
        return date[0];
      }
      return _defaultCurrentDate;
    };
    const [currentDate, setCurrentDate] = useState(getCurrentDate());
    useEffect(() => {
      setDate(getInitialDate());
    }, [selectedDate]);
    useEffect(() => {
      setCurrentDate(getCurrentDate());
    }, [defaultCurrentDate]);
    return (
      <CalendarStandAlone
        {...props}
        ref={ref}
        cssClasses={cssClasses}
        currentDate={currentDate}
        hasRange={hasRange}
        maxDate={maxDate}
        selectedDate={date}
        setCurrentDate={setCurrentDate}
        setSelectedDate={(newSelectedDate) => {
          setDate(selectedDate);
          onSelectedDateChange?.(newSelectedDate);
        }}
      />
    );
  },
);
