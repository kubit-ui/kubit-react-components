import { FormatWeekdayOptionType } from '@/types';

import { CalendarContainerStylesType } from '../../types/calendarTheme';

export interface IHeader {
  styles?: CalendarContainerStylesType;
  isSundayFirst?: boolean;
  formatWeekDayOption?: FormatWeekdayOptionType;
}
