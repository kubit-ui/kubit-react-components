import type {
  CalendarAccessibilityProps,
  CalendarCssClasses,
} from '@/components/calendar/types/calendar';
import type { CalendarStyleProps } from '@/components/calendar/types/calendarTheme';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

export interface MonthSelectorProps extends DataAttributes {
  minDate: Date;
  maxDate: Date;
  currentDate: Date;
  locale?: string;
  setCurrentDate: (date) => void;
  onMonthClick?: (value?: string) => void;
  today: Date;
  styles?: CalendarStyleProps;
  configAccesibility?: CalendarAccessibilityProps;
  cssClasses?: CalendarCssClasses;
}
