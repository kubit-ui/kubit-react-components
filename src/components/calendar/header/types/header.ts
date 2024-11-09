import { FormatWeekdayOptionType } from '@/types/date/date';

import { CalendarContainerStylesType } from '../../types/calendarTheme';

export interface IHeader {
  styles?: CalendarContainerStylesType;
  isSundayFirst?: boolean;
  formatWeekDayOption?: FormatWeekdayOptionType;
}
