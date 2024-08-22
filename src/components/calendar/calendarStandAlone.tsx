import * as React from 'react';

import { ROLES } from '@/types';

// styles
import { CalendarSelectorStyled, CalendarStyled, TableStyled } from './calendar.styled';
import { Header } from './header/header';
import { List } from './list/list';
import { MonthSelector } from './selector/monthSelector/monthSelector';
import { Selector } from './selector/selector';
import { YearSelector } from './selector/yearSelector/yearSelector';
import { ICalendarStandAlone } from './types';

const CalendarStandAloneComponent = (
  { maxDate = new Date(), customBackText = 'Back', ...props }: ICalendarStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): React.JSX.Element => {
  const [showMonthSelector, setShowMonthSelector] = React.useState(false);
  const [showYearSelector, setShowYearSelector] = React.useState(false);
  const [showDaySelector, setShowDaySelector] = React.useState(true);
  const today = new Date();

  return (
    <CalendarStyled
      ref={ref}
      data-testid={`${props.dataTestId}Calendar`}
      id={props.id}
      styles={props.styles}
    >
      <Selector
        configAccesibility={props.configAccesibility}
        configCalendar={props.configCalendar}
        currentDate={props.currentDate}
        customBackText={customBackText}
        maxDate={maxDate}
        minDate={props.minDate}
        setCurrentDate={props.setCurrentDate}
        setShowDaySelector={setShowDaySelector}
        setShowMonthSelector={setShowMonthSelector}
        setShowYearSelector={setShowYearSelector}
        showDaySelector={showDaySelector}
        showMonthSelector={showMonthSelector}
        showYearSelector={showYearSelector}
        styles={props.styles}
        onDaySelectorClick={props.onDaySelectorClick}
        onLeftIconClick={props.onLeftIconClick}
        onMonthSelectorClick={props.onMonthSelectorClick}
        onRightIconClick={props.onRightIconClick}
        onYearSelectorClick={props.onYearSelectorClick}
      />
      <CalendarSelectorStyled>
        {!showMonthSelector && !showYearSelector && showDaySelector && (
          <TableStyled role={ROLES.GRID}>
            <Header
              formatWeekDayOption={props.formatWeekDayOption}
              isSundayFirst={props.sundayFirst}
              styles={props.styles}
            />
            <List
              currentDate={props.currentDate}
              dataTestId={`${props.dataTestId}ItemList`}
              disabledDates={props.disabledDates}
              hasRange={props.hasRange}
              maxDate={maxDate}
              minDate={props.minDate}
              selectedDate={props.selectedDate}
              setSelectedDate={props.setSelectedDate}
              styles={props.styles?.daysList}
              sundayFirst={props.sundayFirst}
              onDayClick={props.onDayClick}
            />
          </TableStyled>
        )}
        {showMonthSelector && (
          <MonthSelector
            currentDate={props.currentDate}
            dataTestId={`${props.dataTestId}Month`}
            maxDate={maxDate}
            minDate={props.minDate}
            setCurrentDate={props.setCurrentDate}
            styles={props.styles}
            today={today}
            onMonthClick={props.onMonthClick}
          />
        )}
        {showYearSelector && (
          <YearSelector
            currentDate={props.currentDate}
            dataTestId={`${props.dataTestId}Year`}
            maxDate={maxDate}
            minDate={props.minDate}
            setCurrentDate={props.setCurrentDate}
            styles={props.styles}
            today={today}
            onYearClick={props.onYearClick}
          />
        )}
      </CalendarSelectorStyled>
    </CalendarStyled>
  );
};

export const CalendarStandAlone = React.forwardRef(CalendarStandAloneComponent);
