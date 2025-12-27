import type { ElementOrIconProps } from '@/lib/components/elementOrIcon/types/elementOrIcon';

import type { CalendarCssClasses } from '../../types/calendar';
import type { CalendarStyleProps } from '../../types/calendarTheme';

export interface SelectorProps {
  currentDate: Date;
  customBackText?: string;
  setCurrentDate: (date: Date) => void;
  maxDate: Date;
  minDate: Date;
  showYearSelector: boolean;
  showMonthSelector: boolean;
  showDaySelector: boolean;
  setShowYearSelector: (value: boolean) => void;
  setShowMonthSelector: (value: boolean) => void;
  setShowDaySelector: (value: boolean) => void;
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
  onLeftIconClick?: (
    event?: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>,
  ) => void;
  onRightIconClick?: (
    event?: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>,
  ) => void;
  styles?: CalendarStyleProps;
  configCalendar: {
    leftArrowIcon: ElementOrIconProps;
    rightArrowIcon: ElementOrIconProps;
    variantSelectorButton?: string;
    sizeSelectorButton?: string;
  };
  configAccesibility?: {
    monthSelectorRole?: string;
    yearSelectorRole?: string;
    daySelectorRole?: string;
    monthSelectorAriaLabel?: string;
    yearSelectorAriaLabel?: string;
    daySelectorAriaLabel?: string;
    backToMonthAriaLabel?: string;
  };

  cssClasses?: CalendarCssClasses;
  useDaySelector?: boolean;
}
