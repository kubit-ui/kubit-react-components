import * as React from 'react';

import { ButtonType } from '@/components/button';
import { ItemRove } from '@/components/itemRove/itemRove';
import { useRoveFocus } from '@/hooks/useRoveFocus/useRoveFocus';
import { useUtilsProvider } from '@/provider';
import { NEUTRAL_DATE } from '@/types';

import { WEEK_DAYS } from '../constants/constants';
import {
  getAllDaysInMonth,
  getAvailableDaysAfterCurrentDate,
  getAvailableDaysBeforeCurrentDate,
  getFirstDayOfMonth,
  getStateDay,
  groupDaysByWeeks,
  handleKeyDownAndRightMove,
  handleKeyTabMove,
  handleKeyUpAndLeftMove,
} from '../utils/';
// styles
import {
  ElementEmptyStyled,
  ElementStyled,
  ItemRoveStyled,
  ListStyled,
  TableRowStyled,
} from './list.styled';
import { IList } from './types/list';
import { ListDaysStateType } from './types/state';

export const List = ({
  dataTestId = 'item',
  hasRange,
  selectedDate,
  disabledDates = [],
  ...props
}: IList): JSX.Element => {
  const { formatDate, dateHelpers, transformDate } = useUtilsProvider();

  const currentMonth = props.currentDate.getMonth() + 1;
  const currentYear = props.currentDate.getFullYear();
  const today = formatDate(new Date(), NEUTRAL_DATE);
  const days: Date[] = getAllDaysInMonth(currentMonth, currentYear);
  const dayStarted =
    getFirstDayOfMonth(currentYear, currentMonth - 1) - (props.sundayFirst ? 0 : 1);
  const dayList: (Date | undefined)[] = [...new Array(dayStarted >= 0 ? dayStarted : 6), ...days];
  const emptyDaysList: (Date | undefined)[] = dayList.filter(day => day === undefined);

  const [positionDateRange, setPositionDateRange] = React.useState<number | null>(0);
  const [ghostDateSelected, setGhostDateSelected] = React.useState<Date | 0>(0);

  const handleKeyMoveConfig = {
    emptyDaysList,
    dayList,
    isAfter: dateHelpers.isAfter,
    maxDate: props.maxDate,
    currentDate: props.currentDate,
    minDate: props.minDate,
    availableDaysBeforeCurrentDate: getAvailableDaysBeforeCurrentDate(
      emptyDaysList,
      props.minDate,
      props.currentDate
    ),
    availableDaysAfterCurrentDate: getAvailableDaysAfterCurrentDate(
      emptyDaysList,
      props.maxDate,
      props.currentDate
    ),
  };

  const config = React.useMemo(
    () => ({
      calendarBlankDaysSize: emptyDaysList.length,
      size: dayList.length,
      keyDownMove: handleKeyDownAndRightMove(handleKeyMoveConfig),
      keyUpMove: handleKeyUpAndLeftMove(handleKeyMoveConfig),
      keyRightMove: handleKeyDownAndRightMove(handleKeyMoveConfig),
      keyLeftMove: handleKeyUpAndLeftMove(handleKeyMoveConfig),
      keyTabMove: handleKeyTabMove,
      currentFocusSelected:
        (selectedDate[0] ? selectedDate[0].getDate() : new Date().getDate()) +
        emptyDaysList.length -
        1,
    }),
    [emptyDaysList.length, dayList.length, props.currentDate, props.minDate, props.maxDate]
  );

  const [focus, setFocus, listEl] = useRoveFocus(config);

  const handleFocus = (index: number) => {
    // when focus is on an empty date at the beginning
    if (index) {
      if (focus < emptyDaysList.length) {
        setFocus(emptyDaysList.length);
      }
      // when focus is on an empty date at the end
      if (focus > dayList.length) {
        setFocus(dayList.length - 1);
      }
    }
    return focus === index;
  };

  const onChangeSelectedDate = (newDate: Date | 0) => {
    const [firstDate, secondDate] = selectedDate;

    if (hasRange) {
      if ((firstDate && secondDate) || (!firstDate && !secondDate)) {
        props.setSelectedDate([newDate, 0]);
        setPositionDateRange(1);
        if (newDate instanceof Date) {
          props.onDayClick?.(newDate.getDate().toString());
        }
      } else {
        props.setSelectedDate([firstDate, newDate]);
        setPositionDateRange(0);
        if (newDate instanceof Date) {
          props.onDayClick?.(newDate.getDate().toString());
        }
      }
    } else {
      props.setSelectedDate([newDate]);
      if (newDate instanceof Date) {
        props.onDayClick?.(newDate.getDate().toString());
      }
    }
  };

  const isGhostSelected = (dayFormatted: Date | 0) => {
    if (ghostDateSelected) {
      if (ghostDateSelected < selectedDate[0]) {
        return dayFormatted > ghostDateSelected && dayFormatted < selectedDate[0];
      } else if (ghostDateSelected > selectedDate[0]) {
        return dayFormatted < ghostDateSelected && dayFormatted > selectedDate[0];
      }
    } else if (dayFormatted > selectedDate[0]) {
      return dayFormatted < selectedDate[1];
    } else if (dayFormatted < selectedDate[0]) {
      return dayFormatted > selectedDate[1];
    }

    return false;
  };

  const isSelectedToLeft = (dayFormatted: Date | 0) => {
    if (!hasRange) {
      return false;
    }

    const selectedIndex = selectedDate?.findIndex(
      date =>
        date &&
        dayFormatted &&
        formatDate(date, NEUTRAL_DATE) === formatDate(dayFormatted, NEUTRAL_DATE)
    );

    if (selectedIndex === 0 && ghostDateSelected) {
      return ghostDateSelected < dayFormatted;
    } else if (selectedIndex === 0) {
      return dayFormatted > selectedDate[1];
    } else if (selectedIndex === 1) {
      return dayFormatted > selectedDate[0];
    }

    return false;
  };

  const isSelectedToRight = (dayFormatted: Date | 0) => {
    if (!hasRange) {
      return false;
    }

    const selectedIndex = selectedDate?.findIndex(
      date =>
        date &&
        dayFormatted &&
        formatDate(date, NEUTRAL_DATE) === formatDate(dayFormatted, NEUTRAL_DATE)
    );

    if (selectedIndex === 0 && ghostDateSelected) {
      return ghostDateSelected > dayFormatted;
    } else if (selectedIndex === 0) {
      return dayFormatted < selectedDate[1];
    } else if (selectedIndex === 1) {
      return dayFormatted < selectedDate[0];
    }

    return false;
  };

  const buildDays = () => {
    return groupDaysByWeeks(dayList).map((grupo, index) => (
      <TableRowStyled key={index}>
        {grupo.map((day, dayIndex) => {
          const dayFormatted = day ? day : 0;
          let isDisabled = day
            ? dateHelpers.isBefore(day, props.minDate) ||
              dateHelpers.isAfter(
                day,
                transformDate(formatDate(props.maxDate, NEUTRAL_DATE), NEUTRAL_DATE)
              )
            : true;

          if (!isDisabled) {
            isDisabled = disabledDates.some(
              disabledDate => day && dateHelpers.isDatesEqual(day, disabledDate, false)
            );
          }

          const stateDay = getStateDay({
            dayFormatted,
            isSelectedToLeft,
            isSelectedToRight,
            isGhostSelected,
            selectedDate,
            hasRange,
            today,
            formatDate,
          });

          return day ? (
            <ItemRoveStyled
              key={`day${dayIndex + WEEK_DAYS * index}${dayFormatted}`}
              $disabled={isDisabled}
              aria-selected={stateDay === ListDaysStateType.SELECTED ? true : undefined}
              state={stateDay}
              styles={props.styles}
            >
              <ItemRove
                ariaDisabled={isDisabled}
                ariaLabel={formatDate(day, {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
                asElement={ElementStyled}
                dataTestId={dataTestId + (dayIndex + WEEK_DAYS * index)}
                focus={handleFocus(dayIndex + WEEK_DAYS * index)}
                index={dayIndex + WEEK_DAYS * index}
                type={ButtonType.BUTTON}
                onMouseOver={() => {
                  if (positionDateRange === 1) {
                    setGhostDateSelected(dayFormatted);
                  }
                }}
                onSelectItem={() => {
                  !isDisabled && onChangeSelectedDate(dayFormatted);
                }}
              >
                {day.getDate()}
              </ItemRove>
            </ItemRoveStyled>
          ) : (
            <ElementEmptyStyled
              key={`day${dayIndex + WEEK_DAYS * index}${dayFormatted}`}
              aria-hidden={true}
              aria-label="empty day"
            />
          );
        })}
      </TableRowStyled>
    ));
  };

  return (
    <ListStyled ref={listEl as React.RefObject<HTMLTableSectionElement>} styles={props.styles}>
      {buildDays()}
    </ListStyled>
  );
};
