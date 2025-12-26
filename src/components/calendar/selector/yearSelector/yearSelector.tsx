import { type RefObject, useMemo } from 'react';

import { Text } from '@/components/text/text';
import { CustomComponent } from '@/lib/components/customComponent/customComponent';
import { useRoveFocus } from '@/lib/hooks/useRoveFocus/useRoveFocus';
import { useUtilsProvider } from '@/lib/provider/utilsProvider/utilsProvider';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import { getYearList } from '../../utils/getYearList';
import { setYear } from '../../utils/setYear';
import type { YearSelectorStateType } from './types/state';
import type { YearSelectorProps } from './types/yearSelector';
import {
  keyDownMove,
  keyLeftMove,
  keyRightMove,
  keyTabMove,
  keyUpMove,
} from './utils/yearSelector.utils';

export const YearSelector = ({
  cssClasses,
  currentDate,
  maxDate,
  minDate,
  onYearClick,
  setCurrentDate,
  today,
  ...props
}: YearSelectorProps): JSX.Element => {
  const { transformDate } = useUtilsProvider();
  const dataTestId = props['data-testid'];
  const roveFocusProps = useMemo(
    () => ({
      currentFocusSelected: getYearList(minDate, maxDate).indexOf(
        currentDate ? currentDate.getFullYear() : new Date().getFullYear(),
      ),
      keyDownMove: keyDownMove(getYearList(minDate, maxDate)),
      keyLeftMove: keyLeftMove(getYearList(minDate, maxDate)),
      keyRightMove: keyRightMove(getYearList(minDate, maxDate)),
      keyTabMove,
      keyUpMove: keyUpMove(getYearList(minDate, maxDate)),
      size: getYearList(minDate, maxDate).length,
    }),
    [getYearList(minDate, maxDate).length, currentDate, minDate, maxDate],
  );
  const [focus, , listEl] = useRoveFocus(roveFocusProps);
  const getState = (selectedCurrentDate: Date, year: number) => {
    let state: YearSelectorStateType;
    if (selectedCurrentDate.getFullYear() === year) {
      state = 'selected';
    } else if (year === today.getFullYear()) {
      state = 'current';
    } else {
      state = 'default';
    }
    return state;
  };
  return (
    <ul
      ref={listEl as RefObject<HTMLUListElement>}
      className={cssClasses?.yearslist}
      data-testid="tbody-years-list"
    >
      {getYearList(minDate, maxDate).map((year, index) => {
        const state = getState(currentDate, year);
        const customAttributes = {
          'data-state': state,
        };
        return (
          <li
            key={String(year)}
            className={cssClasses?.yearlistitem}
            {...pickCustomAttributes(customAttributes)}
          >
            <CustomComponent
              aria-label={String(year)}
              className={cssClasses?.yearelement}
              component="button"
              focus={focus === index}
              index={index}
              type="button"
              {...pickCustomAttributes(customAttributes)}
              onSelectItem={() => {
                const auxCurrentYear = new Date(currentDate);
                setCurrentDate(transformDate(setYear(auxCurrentYear, year)));
                onYearClick?.(year.toString());
              }}
            >
              <Text
                additionalClasses={{
                  text: cssClasses?.year,
                }}
                component="span"
                customAttributes={customAttributes}
                data-testid={dataTestId}
              >
                {year}
              </Text>
            </CustomComponent>
          </li>
        );
      })}
    </ul>
  );
};
