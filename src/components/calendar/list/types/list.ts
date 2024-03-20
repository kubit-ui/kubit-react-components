import { ListStylesVariantType } from './listTheme';

export interface IList {
  selectedDate: Date[];
  currentDate: Date;
  minDate: Date;
  maxDate: Date;
  hasRange?: boolean;
  setSelectedDate: (date) => void;
  onDayClick?: (value?: string) => void;
  styles?: ListStylesVariantType;
  dataTestId?: string;
  sundayFirst?: boolean;
  disabledDates?: Date[];
}
