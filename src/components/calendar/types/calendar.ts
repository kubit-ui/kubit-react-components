import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

import type { ElementOrIconProps } from '../../elementOrIcon/types/elementOrIcon';

export type CalendarCssClasses = ComponentSelected<
  ComponentsTypesComponents['CALENDAR']
>;
/**
 * Interface for the calendar configuration.
 * Includes properties for navigation icons and button styles.
 */
export interface CalendarConfigProps {
  leftArrowIcon: ElementOrIconProps;
  rightArrowIcon: ElementOrIconProps;
  variantSelectorButton?: string;
  sizeSelectorButton?: string;
}

/**
 * Interface for accessibility configuration of the calendar.
 * Includes ARIA labels and roles for various elements.
 */
export interface CalendarAccessibilityProps {
  monthSelectorAriaLabel?: string;
  yearSelectorAriaLabel?: string;
  backToMonthAriaLabel?: string;
  monthSelectorRole?: string;
  yearSelectorRole?: string;
  daySelectorRole?: string;
}

/**
 * Interface for the standalone calendar component.
 * Includes properties for date selection, configuration, and event handlers.
 *
 * @template Variant - The type of the variant for the calendar.
 */
export interface CalendarStandAloneProps<
  Variant = undefined extends string ? unknown : string,
> extends DataAttributes {
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
  variant?: Variant | string;
  cssClasses?: CalendarCssClasses;
  open: boolean;
  configCalendar: CalendarConfigProps;
  configAccesibility?: CalendarAccessibilityProps;
  defaultCurrentDate?: Date;
  sundayFirst?: boolean;
  formatWeekDayOption?: Intl.DateTimeFormatOptions['weekday'];
  onPopoverCloseInternally?: () => void;
  onDaySelectorClick?: (
    value?: string,
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  onMonthSelectorClick?: (
    value?: string,
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  onYearSelectorClick?: (
    value?: string,
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  onDayClick?: (value?: string) => void;
  onMonthClick?: (value?: string) => void;
  onYearClick?: (value?: string) => void;
  onLeftIconClick?: (
    event?: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>,
  ) => void;
  onRightIconClick?: (
    event?: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>,
  ) => void;
  preventCloseOnClickElements?: (HTMLElement | null | undefined)[];
  locale?: string;
}

type CalendarPropsToOmit =
  | 'currentDate'
  | 'setCurrentDate'
  | 'selectedDate'
  | 'setSelectedDate'
  | 'styles';

/**
 * Interface for the calendar component with a variant.
 * Extends the CalendarStandAloneProps interface and adds additional properties.
 *
 * @template Variant - The type of the variant for the calendar.
 */
export interface CalendarProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<CalendarStandAloneProps<Variant>, CalendarPropsToOmit> {
  selectedDate?: Date;
  secondSelectedDate?: Date;
  additionalClasses?: Partial<CalendarCssClasses>;
}
