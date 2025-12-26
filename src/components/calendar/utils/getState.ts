import { STATES } from '@/lib/types/states/states';

import type { ListDaysStateType } from '../list/types/state';

interface getStatePropsType {
  dayFormatted: Date | 0;
  isSelectedToLeft: (dayFormatted: Date | 0) => boolean;
  isSelectedToRight: (dayFormatted: Date | 0) => boolean;
  isGhostSelected: (dayFormatted: Date | 0) => boolean;
  selectedDate: Date[];
  hasRange?: boolean;
  today: string;
  formatDate: (date: Date, format: string) => string;
}

const NEUTRAL_DATE = 'ddMMyyyy';

export const getStateDay = ({
  dayFormatted,
  formatDate,
  hasRange,
  isGhostSelected,
  isSelectedToLeft,
  isSelectedToRight,
  selectedDate,
  today,
}: getStatePropsType): ListDaysStateType => {
  let state = STATES.DEFAULT as ListDaysStateType;
  if (isSelectedToLeft(dayFormatted)) {
    state = STATES.END_DATE_RANGE;
  } else if (isSelectedToRight(dayFormatted)) {
    state = STATES.START_DATE_RANGE;
  } else if (isGhostSelected(dayFormatted)) {
    state = STATES.MIDLE_DATE_RANGE;
  } else if (
    selectedDate[0] &&
    dayFormatted &&
    !hasRange &&
    formatDate(selectedDate[0], NEUTRAL_DATE) ===
      formatDate(dayFormatted, NEUTRAL_DATE)
  ) {
    state = STATES.SELECTED;
  } else if (dayFormatted && today === formatDate(dayFormatted, NEUTRAL_DATE)) {
    state = STATES.CURRENT_DAY;
  }

  return state;
};
