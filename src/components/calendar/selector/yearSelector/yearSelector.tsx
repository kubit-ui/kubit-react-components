import React from 'react';

import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';
import { useRoveFocus } from '@/hooks/useRoveFocus/useRoveFocus';
import { useUtilsProvider } from '@/provider/utils/provider';

import { ButtonType } from '../../../button/types/type';
import { ItemRove } from '../../../itemRove/itemRove';
import { getYearList } from '../../utils/getYearList';
import { setYear } from '../../utils/setYear';
import { YearSelectorStateType } from './types/state';
import { IYearSelector } from './types/yearSelector';
import {
  keyDownMove,
  keyLeftMove,
  keyRightMove,
  keyTabMove,
  keyUpMove,
} from './utils/yearSelector.utils';
// styles
import { YearElementStyled, YearListStyled, YearSelectorStyled } from './yearSelector.styled';

export const YearSelector = (props: IYearSelector): JSX.Element => {
  const { transformDate } = useUtilsProvider();

  const roveFocusProps = React.useMemo(
    () => ({
      size: getYearList(props.minDate, props.maxDate).length,
      keyLeftMove: keyLeftMove(getYearList(props.minDate, props.maxDate)),
      keyRightMove: keyRightMove(getYearList(props.minDate, props.maxDate)),
      keyUpMove: keyUpMove(getYearList(props.minDate, props.maxDate)),
      keyDownMove: keyDownMove(getYearList(props.minDate, props.maxDate)),
      keyTabMove,
      currentFocusSelected: getYearList(props.minDate, props.maxDate).indexOf(
        props.currentDate ? props.currentDate.getFullYear() : new Date().getFullYear()
      ),
    }),
    [
      getYearList(props.minDate, props.maxDate).length,
      props.currentDate,
      props.minDate,
      props.maxDate,
    ]
  );
  const [focus, , listEl] = useRoveFocus(roveFocusProps);

  const getState = (currentDate: Date, year: number) => {
    let state;

    if (currentDate.getFullYear() === year) {
      state = YearSelectorStateType.SELECTED;
    } else if (year === props.today.getFullYear()) {
      state = YearSelectorStateType.CURRENT;
    } else {
      state = YearSelectorStateType.DEFAULT;
    }
    return state;
  };

  return (
    <YearSelectorStyled ref={listEl as React.RefObject<HTMLUListElement>} styles={props.styles}>
      {getYearList(props.minDate, props.maxDate).map((year, index) => {
        const state = getState(props.currentDate, year);

        return (
          <YearListStyled
            key={index}
            aria-selected={state === YearSelectorStateType.SELECTED ? true : undefined}
            state={state}
            styles={props.styles}
          >
            <ItemRove
              ariaLabel={String(year)}
              asElement={YearElementStyled}
              focus={focus === index}
              index={index}
              type={ButtonType.BUTTON}
              onSelectItem={() => {
                const auxCurrentYear = new Date(props.currentDate);
                props.setCurrentDate(transformDate(setYear(auxCurrentYear, year)));
                props.onYearClick?.(year.toString());
              }}
            >
              <Text
                component={TextComponentType.SPAN}
                customTypography={props.styles?.year?.[state]}
                dataTestId={props.dataTestId}
              >
                {year}
              </Text>
            </ItemRove>
          </YearListStyled>
        );
      })}
    </YearSelectorStyled>
  );
};
