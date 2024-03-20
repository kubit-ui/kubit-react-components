import { CalendarContainerStylesType } from '@/components/calendar/types/calendarTheme';

export interface IYearSelector {
  minDate: Date;
  maxDate: Date;
  currentDate: Date;
  setCurrentDate: (date) => void;
  onYearClick?: (value?: string) => void;
  today: Date;
  styles?: CalendarContainerStylesType;
  dataTestId?: string;
}
