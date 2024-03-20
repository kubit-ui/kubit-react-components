import { NEUTRAL_DATE } from '@/types';

import { ListDaysStateType } from '../list/types/state';

type getStatePropsType = {
  dayFormatted: Date | 0;
  isSelectedToLeft: (dayFormatted: Date | 0) => boolean;
  isSelectedToRight: (dayFormatted: Date | 0) => boolean;
  isGhostSelected: (dayFormatted: Date | 0) => boolean;
  selectedDate: Date[];
  hasRange?: boolean;
  today: string;
  formatDate: (date: Date, format: string) => string;
};

// eslint-disable-next-line complexity
export const getStateDay = ({
  dayFormatted,
  isSelectedToLeft,
  isSelectedToRight,
  isGhostSelected,
  selectedDate,
  hasRange,
  today,
  formatDate,
}: getStatePropsType): ListDaysStateType => {
  let state = ListDaysStateType.DEFAULT;
  if (isSelectedToLeft(dayFormatted)) {
    state = ListDaysStateType.END_DATE_RANGE;
  } else if (isSelectedToRight(dayFormatted)) {
    state = ListDaysStateType.START_DATE_RANGE;
  } else if (isGhostSelected(dayFormatted)) {
    state = ListDaysStateType.MIDLE_DATE_RANGE;
  } else if (
    selectedDate[0] &&
    dayFormatted &&
    !hasRange &&
    formatDate(selectedDate[0], NEUTRAL_DATE) === formatDate(dayFormatted, NEUTRAL_DATE)
  ) {
    state = ListDaysStateType.SELECTED;
  } else if (dayFormatted && today === formatDate(dayFormatted, NEUTRAL_DATE)) {
    state = ListDaysStateType.CURRENT_DAY;
  }

  return state;
};
