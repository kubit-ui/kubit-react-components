import { type RefObject, useMemo, useState } from 'react';

import { CustomComponent } from '@/lib/components/customComponent/customComponent';
import { useRoveFocus } from '@/lib/hooks/useRoveFocus/useRoveFocus';
import { useUtilsProvider } from '@/lib/provider/utilsProvider/utilsProvider';
import { STATES } from '@/lib/types/states/states';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { ListProps } from './types/list';

import { WEEK_DAYS } from '../constants/constants';
import { getAllDaysInMonth } from '../utils/getAllDaysInMonth';
import { getFirstDayOfMonth } from '../utils/getFirstDayOfMonth';
import { getStateDay } from '../utils/getState';
import { groupDaysByWeeks } from '../utils/groupDaysByWeeks';
import {
  getDaysAndEmptyDaysUntilMaxDate,
  getFirstEmptyAndDisabledDays,
  handleKeyDownMove,
  handleKeyLeftMove,
  handleKeyPageDownMove,
  handleKeyPageUpMove,
  handleKeyRightMove,
  handleKeyTabMove,
  handleKeyUpMove,
} from '../utils/handleKeysmoves';

const NEUTRAL_DATE = 'ddMMyyyy';
export const List = ({
  cssClasses,
  currentDate,
  disabledDates = [],
  hasRange,
  maxDate,
  minDate,
  onDayClick,
  selectedDate,
  setSelectedDate,
  sundayFirst,
  ...props
}: ListProps): JSX.Element => {
  const { dateHelpers, formatDate, transformDate } = useUtilsProvider();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  const today = formatDate(new Date(), NEUTRAL_DATE);
  const days: Date[] = getAllDaysInMonth(currentMonth, currentYear);
  const dayStarted =
    getFirstDayOfMonth(currentYear, currentMonth - 1) - (sundayFirst ? 0 : 1);
  const dayList: (Date | undefined)[] = [
    ...new Array(dayStarted >= 0 ? dayStarted : 6),
    ...days,
  ];
  const emptyDaysList: (Date | undefined)[] = dayList.filter(
    (day) => day === undefined,
  );
  const [positionDateRange, setPositionDateRange] = useState<number | null>(0);
  const [ghostDateSelected, setGhostDateSelected] = useState<Date | 0>(0);
  const dataTestId = props['data-testid'] || 'calendar';
  const handleKeyMoveConfig = {
    currentDate: currentDate,
    dayList,
    daysAndEmptyDaysUntilMaxDate: getDaysAndEmptyDaysUntilMaxDate(
      emptyDaysList,
      maxDate,
      currentDate,
    ),
    firstEmptyAndDisabledDays: getFirstEmptyAndDisabledDays(
      emptyDaysList,
      minDate,
      currentDate,
    ),
    maxDate: maxDate,
    minDate: minDate,
  };
  const config = useMemo(
    () => ({
      calendarBlankDaysSize: emptyDaysList.length,
      currentFocusSelected:
        (selectedDate[0] ? selectedDate[0].getDate() : new Date().getDate()) +
        emptyDaysList.length -
        1,
      keyDownMove: handleKeyDownMove(handleKeyMoveConfig),
      keyLeftMove: handleKeyLeftMove(handleKeyMoveConfig),
      keyPageDownMove: handleKeyPageDownMove(handleKeyMoveConfig),
      keyPageUpMove: handleKeyPageUpMove(handleKeyMoveConfig),
      keyRightMove: handleKeyRightMove(handleKeyMoveConfig),
      keyTabMove: handleKeyTabMove,
      keyUpMove: handleKeyUpMove(handleKeyMoveConfig),
      size: dayList.length,
    }),
    [emptyDaysList.length, dayList.length, currentDate, minDate, maxDate],
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
        setSelectedDate([newDate, 0]);
        setPositionDateRange(1);
        if (newDate instanceof Date) {
          onDayClick?.(newDate.getDate().toString());
        }
      } else {
        setSelectedDate([firstDate, newDate]);
        setPositionDateRange(0);
        if (newDate instanceof Date) {
          onDayClick?.(newDate.getDate().toString());
        }
      }
    } else {
      setSelectedDate([newDate]);
      if (newDate instanceof Date) {
        onDayClick?.(newDate.getDate().toString());
      }
    }
  };
  const isGhostSelected = (dayFormatted: Date | 0) => {
    if (ghostDateSelected) {
      if (ghostDateSelected < selectedDate[0]) {
        return (
          dayFormatted > ghostDateSelected && dayFormatted < selectedDate[0]
        );
      }
      if (ghostDateSelected > selectedDate[0]) {
        return (
          dayFormatted < ghostDateSelected && dayFormatted > selectedDate[0]
        );
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
      (date) =>
        date &&
        dayFormatted &&
        formatDate(date, NEUTRAL_DATE) ===
          formatDate(dayFormatted, NEUTRAL_DATE),
    );
    if (selectedIndex === 0 && ghostDateSelected) {
      return ghostDateSelected < dayFormatted;
    }
    if (selectedIndex === 0) {
      return dayFormatted > selectedDate[1];
    }
    if (selectedIndex === 1) {
      return dayFormatted > selectedDate[0];
    }
    return false;
  };
  const isSelectedToRight = (dayFormatted: Date | 0) => {
    if (!hasRange) {
      return false;
    }
    const selectedIndex = selectedDate?.findIndex(
      (date) =>
        date &&
        dayFormatted &&
        formatDate(date, NEUTRAL_DATE) ===
          formatDate(dayFormatted, NEUTRAL_DATE),
    );
    if (selectedIndex === 0 && ghostDateSelected) {
      return ghostDateSelected > dayFormatted;
    }
    if (selectedIndex === 0) {
      return dayFormatted < selectedDate[1];
    }
    if (selectedIndex === 1) {
      return dayFormatted < selectedDate[0];
    }
    return false;
  };
  const buildDays = () => {
    return groupDaysByWeeks(dayList).map((group, index) => (
      <tr
        key={`table-row-${index.toString()}`}
        className={cssClasses?.tablerow}
      >
        {group.map((day, dayIndex) => {
          const dayFormatted = day ? day : 0;
          let isDisabled = day
            ? dateHelpers.isBefore(day, minDate) ||
              dateHelpers.isAfter(
                day,
                transformDate(formatDate(maxDate, NEUTRAL_DATE), NEUTRAL_DATE),
              )
            : true;
          if (!isDisabled) {
            isDisabled = disabledDates.some(
              (disabledDate) =>
                day && dateHelpers.isDatesEqual(day, disabledDate, false),
            );
          }
          const stateDay = getStateDay({
            dayFormatted,
            formatDate,
            hasRange,
            isGhostSelected,
            isSelectedToLeft,
            isSelectedToRight,
            selectedDate,
            today,
          });
          const customAttributes = {
            'data-state': isDisabled ? STATES.DISABLED : stateDay,
          };
          return day ? (
            <td
              key={`day${dayIndex + WEEK_DAYS * index}${dayFormatted}`}
              aria-selected={stateDay === STATES.SELECTED ? true : undefined}
              className={cssClasses?.listelementrove}
              style={{
                width: `calc(100% / ${WEEK_DAYS})`,
              }}
              {...pickCustomAttributes(customAttributes)}
            >
              <CustomComponent
                aria-disabled={isDisabled}
                aria-label={formatDate(day, {
                  day: 'numeric',
                  month: 'long',
                  weekday: 'long',
                  year: 'numeric',
                })}
                className={cssClasses?.dayslist}
                component="button"
                data-testid={`${dataTestId}-${dayIndex + WEEK_DAYS * index}`}
                focus={handleFocus(dayIndex + WEEK_DAYS * index)}
                index={dayIndex + WEEK_DAYS * index}
                type="button"
                onMouseOver={() => {
                  if (positionDateRange === 1) {
                    setGhostDateSelected(dayFormatted);
                  }
                }}
                onSelectItem={() => {
                  if (!isDisabled) {
                    onChangeSelectedDate(dayFormatted);
                  }
                }}
                {...pickCustomAttributes(customAttributes)}
              >
                {day.getDate()}
              </CustomComponent>
            </td>
          ) : (
            <td
              key={`day${dayIndex + WEEK_DAYS * index}${dayFormatted}`}
              aria-hidden={true}
              aria-label="empty day"
              className={cssClasses?.listelementempty}
              style={{
                width: `calc(100% / ${WEEK_DAYS})`,
              }}
            />
          );
        })}
      </tr>
    ));
  };
  return (
    <tbody
      ref={listEl as RefObject<HTMLTableSectionElement>}
      className={cssClasses?.tbody}
      data-testid="tbody-days-list"
    >
      {buildDays()}
    </tbody>
  );
};
