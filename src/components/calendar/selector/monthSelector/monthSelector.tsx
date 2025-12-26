import { type RefObject, useMemo } from 'react';

import { Text } from '@/components/text/text';
import { CustomComponent } from '@/lib/components/customComponent/customComponent';
import { useRoveFocus } from '@/lib/hooks/useRoveFocus/useRoveFocus';
import { useUtilsProvider } from '@/lib/provider/utilsProvider/utilsProvider';
import { STATES } from '@/lib/types/states/states';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import { setMonth } from '../../utils/setMonth';
import type { MonthSelectorProps } from './types/monthSelector';
import {
  keyDownMove,
  keyLeftMove,
  keyRightMove,
  keyTabMove,
  keyUpMove,
} from './utils/monthSelector.utils';

export const MonthSelector = ({
  configAccesibility,
  cssClasses,
  currentDate,
  maxDate,
  minDate,
  onMonthClick,
  setCurrentDate,
  today,
  ...props
}: MonthSelectorProps): JSX.Element => {
  const { dateHelpers, transformDate } = useUtilsProvider();
  const dataTestId = props['data-testid'] || 'calendar';
  const handleKeyMoveConfig = {
    currentDate: currentDate,
    maxDate: maxDate,
    minDate: minDate,
  };
  const roveFocusProps = useMemo(
    () => ({
      currentFocusSelected: currentDate
        ? currentDate.getMonth()
        : new Date().getMonth(),
      keyDownMove: keyDownMove(handleKeyMoveConfig),
      keyLeftMove: keyLeftMove(handleKeyMoveConfig),
      keyRightMove: keyRightMove(handleKeyMoveConfig),
      keyTabMove,
      keyUpMove: keyUpMove(handleKeyMoveConfig),
      size: dateHelpers.getAllMonthName('long').length,
    }),
    [dateHelpers.getAllMonthName('long').length, currentDate],
  );
  const [focus, , listEl] = useRoveFocus(roveFocusProps);

  const getState = (
    selectedCurrentDate: Date,
    index: number,
    isDisabled: boolean,
  ) => {
    let state;
    if (selectedCurrentDate.getMonth() === index) {
      state = STATES.SELECTED;
    } else if (index === today.getMonth()) {
      state = STATES.CURRENT;
    } else if (isDisabled) {
      state = STATES.DISABLED;
    } else {
      state = STATES.DEFAULT;
    }
    return state;
  };

  const setDisabledMonths = (index) => {
    const year = currentDate?.getFullYear();
    return (
      (minDate?.getFullYear() === year && minDate?.getMonth() > index) ||
      (maxDate?.getFullYear() === year && maxDate?.getMonth() < index)
    );
  };
  return (
    <ul
      ref={listEl as RefObject<HTMLUListElement>}
      aria-label={configAccesibility?.monthSelectorAriaLabel}
      className={cssClasses?.monthslist}
      data-testid="tbody-months-list"
    >
      {dateHelpers.getAllMonthName('long', props.locale).map((month, index) => {
        const state = getState(currentDate, index, setDisabledMonths(index));
        const customAttributes = {
          'data-state': setDisabledMonths(index) ? STATES.DISABLED : state,
        };
        return (
          <li
            key={month}
            aria-selected={state === STATES.SELECTED ? true : undefined}
            className={cssClasses?.monthlistitem}
            // role="option"
            {...pickCustomAttributes(customAttributes)}
          >
            <CustomComponent
              aria-label={month.charAt(0).toUpperCase() + month.slice(1)}
              ariaDisabled={setDisabledMonths(index)}
              className={cssClasses?.monthelement}
              component="button"
              focus={focus === index}
              index={index}
              type="button"
              {...pickCustomAttributes(customAttributes)}
              onSelectItem={() => {
                const auxCurrentYear = new Date(currentDate);
                setCurrentDate(transformDate(setMonth(auxCurrentYear, index)));
                onMonthClick?.(month);
              }}
            >
              <Text component="span" data-testid={dataTestId}>
                {month.charAt(0).toUpperCase() + month.slice(1)}
              </Text>
            </CustomComponent>
          </li>
        );
      })}
    </ul>
  );
};
