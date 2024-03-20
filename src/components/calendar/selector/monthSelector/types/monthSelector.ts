import { CalendarContainerStylesType } from '@/components/calendar/types/calendarTheme';

export interface IMonthSelector {
  minDate?: Date;
  maxDate?: Date;
  currentDate: Date;
  setCurrentDate: (date) => void;
  onMonthClick?: (value?: string) => void;
  today: Date;
  styles?: CalendarContainerStylesType;
  dataTestId?: string;
}
