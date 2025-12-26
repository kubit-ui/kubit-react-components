import type { CalendarCssClasses } from '../../types/calendar';
import type { CalendarStyleProps } from '../../types/calendarTheme';

export interface HeaderProps {
  styles?: CalendarStyleProps;
  isSundayFirst?: boolean;
  formatWeekDayOption?: Intl.DateTimeFormatOptions['weekday'];
  cssClasses?: CalendarCssClasses;
}
