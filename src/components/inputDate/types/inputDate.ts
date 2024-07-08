import { ICalendar, IConfigAccesibility } from '@/components/calendar';
import { IElementOrIcon } from '@/components/elementOrIcon';
import {
  ERROR_EXECUTION,
  IInputStandAlone,
  INTERNAL_ERROR_EXECUTION,
  InputLabelType,
  InputState,
} from '@/components/input/types';
import { IText, TextComponentType } from '@/components/text';
import { CustomTokenTypes, POSITIONS } from '@/types';

import { InputDateStylesProps } from './inputDateTheme';

type InputRightIconType = Omit<IElementOrIcon, 'altText'>;

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
