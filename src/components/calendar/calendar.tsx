import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { CalendarStandAlone } from './calendarStandAlone';
import { ICalendar, ICalendarStandAlone } from './types/calendar';
import { CalendarContainerStylesType } from './types/calendarTheme';
import { CalendarVariantType } from './types/variant';

const CalendarComponent = React.forwardRef(
  <V extends string | unknown | CalendarVariantType>(
    {
      hasRange = false,
      variant = CalendarVariantType.DEFAULT,
      maxDate = new Date(),
      defaultCurrentDate,
      onSelectedDateChange,
      ctv,
      ...props
    }: ICalendar<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<CalendarContainerStylesType, V | CalendarVariantType>(
      STYLES_NAME.CALENDAR,
      variant,
      ctv
    );

    const getCurrentDate = () => {
      const _defaultCurrentDate = defaultCurrentDate ?? new Date();

      if (!hasRange && props.selectedDate) {
        return props.selectedDate;
      }
      if (date[1]) {
        return date[1];
      } else if (date[0]) {
        return date[0];
      }

      return _defaultCurrentDate;
    };

    const getInitialDate = () => {
      let initialDate;

      if (hasRange) {
        initialDate = [
          props.selectedDate ? props.selectedDate : null,
          props.secondSelectedDate ? props.secondSelectedDate : null,
        ];
      } else if (props.selectedDate) {
        try {
          initialDate = [props.selectedDate];
        } catch {
          initialDate = [null];
        }
      } else {
        initialDate = [null];
      }

      return initialDate;
    };

    React.useEffect(() => {
      setDate(getInitialDate());
    }, [props.selectedDate]);

    const [date, setDate] = React.useState(getInitialDate());
    const [currentDate, setCurrentDate] = React.useState(getCurrentDate());

    React.useEffect(() => {
      setCurrentDate(getCurrentDate());
    }, [defaultCurrentDate]);

    return (
      <CalendarStandAlone
        {...props}
        ref={ref}
        currentDate={currentDate}
        hasRange={hasRange}
        maxDate={maxDate}
        selectedDate={date}
        setCurrentDate={setCurrentDate}
        setSelectedDate={date => {
          setDate(date);
          onSelectedDateChange?.(date);
        }}
        styles={styles}
      />
    );
  }
);
CalendarComponent.displayName = 'CalendarComponent';

const CalendarBoundary = <V extends string | unknown | CalendarVariantType>(
  props: ICalendar<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <CalendarStandAlone {...(props as unknown as ICalendarStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <CalendarComponent {...props} ref={ref} />
  </ErrorBoundary>
);

/**
 * @description
 * Calendar component is a selector of dates, that includes a month and year selector.
 * @param {React.PropsWithChildren<ICalendar<V>>} props
 * @returns {JSX.Element}
 */
const Calendar = React.forwardRef(CalendarBoundary) as <
  V extends string | unknown | CalendarVariantType,
>(
  props: React.PropsWithChildren<ICalendar<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof CalendarBoundary>;

export { Calendar };
