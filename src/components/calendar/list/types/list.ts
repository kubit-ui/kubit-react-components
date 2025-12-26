import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

import type { CalendarCssClasses } from '../../types/calendar';
import type { ListStyleProps } from './listTheme';

export interface ListProps extends DataAttributes {
  selectedDate: Date[];
  currentDate: Date;
  minDate: Date;
  maxDate: Date;
  hasRange?: boolean;
  setSelectedDate: (date) => void;
  onDayClick?: (value?: string) => void;
  styles?: ListStyleProps;
  sundayFirst?: boolean;
  disabledDates?: Date[];
  cssClasses?: CalendarCssClasses;
}
