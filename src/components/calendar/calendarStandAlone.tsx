import { type ForwardedRef, forwardRef, useState } from 'react';

import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import { CustomComponent } from '../../lib/components/customComponent/customComponent';
import { Header } from './header/header';
import { List } from './list/list';
import { MonthSelector } from './selector/monthSelector/monthSelector';
import { Selector } from './selector/selector';
import { YearSelector } from './selector/yearSelector/yearSelector';
import type { CalendarStandAloneProps } from './types/calendar';

const CalendarStandAloneComponent = (
  {
    configAccesibility,
    configCalendar,
    cssClasses,
    currentDate,
    customBackText = 'Back',
    disabledDates,
    formatWeekDayOption,
    hasRange,
    id,
    locale,
    maxDate = new Date(),
    minDate,
    onDayClick,
    onDaySelectorClick,
    onLeftIconClick,
    onMonthClick,
    onMonthSelectorClick,
    onRightIconClick,
    onYearClick,
    onYearSelectorClick,
    selectedDate,
    setCurrentDate,
    setSelectedDate,
    sundayFirst,
    ...props
  }: CalendarStandAloneProps,
  ref: ForwardedRef<HTMLDivElement> | undefined | null,
): JSX.Element => {
  const [showMonthSelector, setShowMonthSelector] = useState(false);
  const [showYearSelector, setShowYearSelector] = useState(false);
  const [showDaySelector, setShowDaySelector] = useState(true);
  const today = new Date();
  const customProps = pickCustomAttributes(props);
  const dataTestId = props['data-testid'] || 'calendar';
  return (
    <div
      ref={ref}
      className={cssClasses?.calendar}
      data-calendar={true}
      data-testid={dataTestId}
      id={id}
      {...customProps}
    >
      <Selector
        configAccesibility={configAccesibility}
        configCalendar={configCalendar}
        cssClasses={cssClasses}
        currentDate={currentDate}
        customBackText={customBackText}
        maxDate={maxDate}
        minDate={minDate}
        setCurrentDate={setCurrentDate}
        setShowDaySelector={setShowDaySelector}
        setShowMonthSelector={setShowMonthSelector}
        setShowYearSelector={setShowYearSelector}
        showDaySelector={showDaySelector}
        showMonthSelector={showMonthSelector}
        showYearSelector={showYearSelector}
        onDaySelectorClick={onDaySelectorClick}
        onLeftIconClick={onLeftIconClick}
        onMonthSelectorClick={onMonthSelectorClick}
        onRightIconClick={onRightIconClick}
        onYearSelectorClick={onYearSelectorClick}
      />
      <div className={cssClasses?.container}>
        {!showMonthSelector && !showYearSelector && showDaySelector && (
          <table
            aria-label={currentDate.toLocaleDateString(locale, {
              month: 'long',
              timeZone: 'UTC',
              year: 'numeric',
            })}
            className={cssClasses?.table}
          >
            <Header
              cssClasses={cssClasses}
              formatWeekDayOption={formatWeekDayOption}
              isSundayFirst={sundayFirst}
            />
            <List
              cssClasses={cssClasses}
              currentDate={currentDate}
              data-testid={`${dataTestId}-item-list`}
              disabledDates={disabledDates}
              hasRange={hasRange}
              maxDate={maxDate}
              minDate={minDate}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              sundayFirst={sundayFirst}
              onDayClick={onDayClick}
            />
          </table>
        )}
        {showMonthSelector && (
          <CustomComponent className="kbt-calendar__table" component="div">
            <MonthSelector
              configAccesibility={configAccesibility}
              cssClasses={cssClasses}
              currentDate={currentDate}
              data-testid={`${dataTestId}-month`}
              locale={locale}
              maxDate={maxDate}
              minDate={minDate}
              setCurrentDate={setCurrentDate}
              today={today}
              onMonthClick={onMonthClick}
            />
          </CustomComponent>
        )}
        {showYearSelector && (
          <CustomComponent className="kbt-calendar__table" component="div">
            <YearSelector
              configAccesibility={configAccesibility}
              cssClasses={cssClasses}
              currentDate={currentDate}
              data-testid={`${dataTestId}-year`}
              maxDate={maxDate}
              minDate={minDate}
              setCurrentDate={setCurrentDate}
              today={today}
              onYearClick={onYearClick}
            />
          </CustomComponent>
        )}
      </div>
    </div>
  );
};
export const CalendarStandAlone = forwardRef(CalendarStandAloneComponent);
