import { CustomTokenTypes } from '@/types/customToken/customToken';
import { POSITIONS } from '@/types/positions/positions';

import { ICalendar, IConfigAccesibility } from '../../calendar/types/calendar';
import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import {
  ERROR_EXECUTION,
  IInputStandAlone,
  INTERNAL_ERROR_EXECUTION,
  InputLabelType,
} from '../../input/types/input';
import { InputState } from '../../input/types/inputTheme';
import { TextComponentType } from '../../text/types/component';
import { IText } from '../../text/types/text';
import { InputDateStylesProps } from './inputDateTheme';

type InputRightIconType = Omit<IElementOrIcon, 'altText' | 'aria-label'>;

export type SelectedDate = {
  startDate: Date;
  endDate: Date;
};

export type InputDateCalendarType = Omit<
  ICalendar,
  'open' | 'minDate' | 'maxDate' | 'onSelectedDateChange' | 'configAccesibility'
>;

export type InputDateTextType = Omit<IText<string>, 'children'> & {
  content: React.ReactNode;
};

export interface IConfigAccesibilityPopover extends IConfigAccesibility {
  openInputIconAriaLabel?: string;
  closeInputIconAriaLabel?: string;
  calendarAriaLabel?: string;
}

export interface IPopoverCalendar {
  inputId?: string;
  dataTestId?: string;
  state: InputState;
  calendar: InputDateCalendarType;
  label?: InputLabelType;
  closeIcon?: IElementOrIcon;
  labelComponentType?: TextComponentType;
  styles: InputDateStylesProps;
  minDate: Date;
  maxDate?: Date;
  calendarOpen: boolean;
  selectedDate: Date;
  secondSelectedDate: Date;
  hasRange?: boolean;
  defaultDate?: Date;
  // calendar options
  configAccesibility?: IConfigAccesibilityPopover;
  disabledDates?: Date[];
  // functions
  onDateChange: (newDate: Date[]) => void;
  onCalendarOpen?: (open: boolean) => void;
  extraCalendarWidth?: string;
  extraCalendarWidthSide?: POSITIONS;
  locale?: string;
}

type propsToOmitInputBasic =
  | 'styles'
  | 'inputId'
  | 'variant'
  | 'error'
  | 'disabled'
  | 'textCounter'
  | 'aria-controls'
  | 'aria-expanded'
  | 'aria-haspopup'
  | 'formatNumber'
  | 'locale'
  | 'rightIcon';

export interface IInputDateStandAlone extends Omit<IInputStandAlone, propsToOmitInputBasic> {
  styles: InputDateStylesProps;
  // modifiers
  locale: string;
  inputVariant?: string;
  rightIcon?: InputRightIconType;
  // actionBottomSheet
  closeIcon?: IElementOrIcon;
  labelComponentType?: TextComponentType;
  // calendar options
  calendar: InputDateCalendarType;
  calendarOpen: boolean;
  minDate: Date;
  maxDate: Date;
  dateFormatted: Date[];
  defaultDate?: Date;
  hasRange?: boolean;
  configAccesibility?: IConfigAccesibilityPopover;
  disabledDates?: Date[];
  extraCalendarWidth?: string;
  extraCalendarWidthSide?: POSITIONS;
  // functions
  onCalendarOpen?: (open: boolean) => void;
  onDateChange: (newDate: Date[]) => void;
  onWrapperBlur?: React.FocusEventHandler<HTMLDivElement>;
}

type propsToOmit =
  | 'styles'
  | 'state'
  | 'mask'
  | 'dateFormatted'
  | 'calendarOpen'
  | 'onDateChange'
  | 'onCalendarOpen'
  | 'onClick'
  | 'maxDate';

export interface IInputDate<V = undefined extends string ? unknown : string>
  extends Omit<IInputDateStandAlone, propsToOmit>,
    Omit<CustomTokenTypes<InputDateStylesProps>, 'cts' | 'extraCt'> {
  format: string;
  dateSeparator?: string;
  initialDate?: Date;
  initialSecondDate?: Date;
  today?: string;
  error?: boolean;
  disabled?: boolean;
  errorExecution?: ERROR_EXECUTION;
  internalErrorExecution?: INTERNAL_ERROR_EXECUTION;
  keyValidation?: string;
  maxDate?: Date;
  // functions
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  onCalendarOpen?: (calendarOpen: boolean) => void;
  onSelectedDateChange?: (newDate: Date | SelectedDate) => void;
  onDateError?: (hasError: boolean) => void;
  onInternalErrors?: (errors: string[]) => void;
  onError?: (error: boolean) => void;
  variant: V;
}
