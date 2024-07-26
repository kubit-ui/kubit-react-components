import * as React from 'react';

import { ButtonType } from '@/components/button';
import { ItemRove } from '@/components/itemRove';
import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';
import { useRoveFocus } from '@/hooks';
import { useUtilsProvider } from '@/provider';

import { getYearList } from '../../utils/getYearList';
import { setYear } from '../../utils/setYear';
import { YearSelectorStateType } from './types/state';
import { IYearSelector } from './types/yearSelector';
import { keyLeftMove, keyRightMove, keyTabMove } from './utils';
// styles
import { YearElementStyled, YearListStyled, YearSelectorStyled } from './yearSelector.styled';

export const YearSelector = (props: IYearSelector): JSX.Element => {
  const { transformDate } = useUtilsProvider();

  const roveFocusProps = React.useMemo(
    () => ({
      size: getYearList(props.minDate, props.maxDate).length,
      keyLeftMove: keyLeftMove(getYearList(props.minDate, props.maxDate)),
      keyRightMove: keyRightMove(getYearList(props.minDate, props.maxDate)),
      currentFocusSelected: getYearList(props.minDate, props.maxDate).indexOf(
        props.currentDate ? props.currentDate.getFullYear() : new Date().getFullYear()
      ),
      keyUpMove: 0,
      keyDownMove: 0,
      keyTabMove,
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
          <YearListStyled key={index} state={state} styles={props.styles}>
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
