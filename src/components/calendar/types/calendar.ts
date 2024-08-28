import { IElementOrIcon } from '@/components/elementOrIcon';
import { CustomTokenTypes, FormatWeekdayOptionType } from '@/types';

import { CalendarContainerStylesType } from './calendarTheme';
import { CalendarVariantType } from './variant';

export enum CalendarElementType {
  DAY = 'day',
  MONTH = 'month',
  YEAR = 'year',
}

/**
 * @description
 * @interface ICalendarStandAlone
 * @template V
 * @property {string} [id]
 */

export type IConfigCalendar = {
  leftArrowIcon: IElementOrIcon;
  rightArrowIcon: IElementOrIcon;
  variantSelectorButton?: string;
  sizeSelectorButton?: string;
};

export type IConfigAccesibility = {
  monthSelectorAriaLabel?: string;
  yearSelectorAriaLabel?: string;
  backToMonthAriaLabel?: string;
  monthSelectorRole?: string;
  yearSelectorRole?: string;
  daySelectorRole?: string;
};
export interface ICalendarStandAlone<V = undefined extends string ? unknown : string> {
  id?: string;
  customBackText?: string;
  selectedDate: Date[];
  hasRange?: boolean;
  disabledDates?: Date[];
  currentDate: Date;
  minDate: Date;
  maxDate?: Date;
  onSelectedDateChange?: (date: Date[]) => void;
  setSelectedDate: (date: Date[]) => void;
  setCurrentDate: (date: Date) => void;
  variant?: V | CalendarVariantType;
  styles?: CalendarContainerStylesType;
  open: boolean;
  configCalendar: IConfigCalendar;
  configAccesibility?: IConfigAccesibility;
  dataTestId?: string;
  defaultCurrentDate?: Date;
  sundayFirst?: boolean;
  formatWeekDayOption?: FormatWeekdayOptionType;
  onPopoverCloseInternally?: () => void;
  onDaySelectorClick?: (
    value?: string,
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onMonthSelectorClick?: (
    value?: string,
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onYearSelectorClick?: (
    value?: string,
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onDayClick?: (value?: string) => void;
  onMonthClick?: (value?: string) => void;
  onYearClick?: (value?: string) => void;
  onLeftIconClick?: (
    event?: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>
  ) => void;
  onRightIconClick?: (
    event?: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>
  ) => void;
  preventCloseOnClickElements?: (HTMLElement | null | undefined)[];
  locale?: string;
}

type propsToOmit = 'currentDate' | 'setCurrentDate' | 'selectedDate' | 'setSelectedDate' | 'styles';

/**
 * @description
 * @interface ICalendar
 * @template V
 * @extends {Omit<ICalendarStandAlone<V>, 'currentDate' | 'setCurrentDate' | 'setSelectedDate' | 'styles'>}
 * @example
 */
export interface ICalendar<V = undefined extends string ? unknown : string>
  extends Omit<ICalendarStandAlone<V>, propsToOmit>,
    Omit<CustomTokenTypes<CalendarContainerStylesType>, 'cts' | 'extraCt'> {
  selectedDate?: Date;
  secondSelectedDate?: Date;
}
