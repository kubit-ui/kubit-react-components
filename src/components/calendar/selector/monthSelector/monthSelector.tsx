import * as React from 'react';

import { ButtonType } from '@/components/button';
import { ItemRove } from '@/components/itemRove';
import { Text, TextComponentType } from '@/components/text';
import { useRoveFocus } from '@/hooks';
import { useUtilsProvider } from '@/provider';

import { setMonth } from '../../utils/setMonth';
// styles
import { MonthElementStyled, MonthListStyled, MonthSelectorStyled } from './monthSelector.styled';
import { IMonthSelector } from './types/monthSelector';
import { MonthSelectorStateType } from './types/state';
import { keyLeftMove, keyRightMove, keyTabMove } from './utils';

export const MonthSelector = (props: IMonthSelector): JSX.Element => {
  const { dateHelpers, transformDate } = useUtilsProvider();

  const roveFocusProps = React.useMemo(
    () => ({
      size: dateHelpers.getAllMonthName('long').length,
      keyLeftMove,
      keyRightMove: keyRightMove(new Date().getMonth()),
      currentFocusSelected: props.currentDate
        ? props.currentDate.getMonth()
        : new Date().getMonth(),
      keyUpMove: 0,
      keyDownMove: 0,
      keyTabMove,
    }),
    [dateHelpers.getAllMonthName('long').length, props.currentDate]
  );
  const [focus, , listEl] = useRoveFocus(roveFocusProps);

  const getState = (currentDate: Date, index: number, isDisabled: boolean) => {
    let state;
    if (currentDate.getMonth() === index) {
      state = MonthSelectorStateType.SELECTED;
    } else if (index === props.today.getMonth()) {
      state = MonthSelectorStateType.CURRENT;
    } else if (isDisabled) {
      state = MonthSelectorStateType.DISABLED;
    } else {
      state = MonthSelectorStateType.DEFAULT;
    }
    return state;
  };

  const setDisabledMonths = index => {
    const year = props.currentDate?.getFullYear();

    return (
      (props.minDate?.getFullYear() === year && props.minDate?.getMonth() > index) ||
      (props.maxDate?.getFullYear() === year && props.maxDate?.getMonth() < index)
    );
  };

  return (
    <MonthSelectorStyled ref={listEl as React.RefObject<HTMLUListElement>} styles={props.styles}>
      {dateHelpers.getAllMonthName('long').map((month, index) => {
        const state = getState(props.currentDate, index, setDisabledMonths(index));

        return (
          <MonthListStyled
            key={index}
            $disabled={setDisabledMonths(index)}
            state={state}
            styles={props.styles}
          >
            <ItemRove
              ariaDisabled={setDisabledMonths(index)}
              ariaLabel={month.charAt(0).toUpperCase() + month.slice(1)}
              asElement={MonthElementStyled}
              focus={focus === index}
              index={index}
              type={ButtonType.BUTTON}
              onSelectItem={() => {
                const auxCurrentYear = new Date(props.currentDate);
                props.setCurrentDate(transformDate(setMonth(auxCurrentYear, index)));
                props.onMonthClick?.(month);
              }}
            >
              <Text
                component={TextComponentType.SPAN}
                customTypography={props.styles?.month?.[state]}
                dataTestId={props.dataTestId}
              >
                {month.charAt(0).toUpperCase() + month.slice(1)}
              </Text>
            </ItemRove>
          </MonthListStyled>
        );
      })}
    </MonthSelectorStyled>
  );
};
