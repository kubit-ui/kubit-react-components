import * as React from 'react';

import { InputControlled as Input } from '@/components/input';
import { useId } from '@/hooks';
import { ROLES } from '@/types';

import { PopoverCalendar } from './components/popoverCalendar';
// styles
import { InputDateStyled } from './inputDate.styled';
import { IInputDateStandAlone } from './types';

export const InputDateStandAloneComponent = (
  { dataTestId = 'input-data', maxDate, ...props }: IInputDateStandAlone,
  ref: React.ForwardedRef<HTMLInputElement | undefined>
): React.JSX.Element => {
  const uniqueId = useId('inputDate');
  const inputId = props.id ?? uniqueId;
  const ariaControls = props.calendarOpen ? `${inputId}Calendar` : undefined;
  const { onWrapperBlur, ...innerInputProps } = props;

  return (
    <InputDateStyled data-testid={dataTestId} onBlur={onWrapperBlur}>
      <Input
        {...innerInputProps}
        ref={ref}
        aria-controls={ariaControls}
        aria-expanded={props.calendarOpen}
        icon={{
          ...props.icon,
          altText: props.calendarOpen
            ? props.configAccesibility?.closeInputIconAriaLabel
            : props.configAccesibility?.openInputIconAriaLabel,
        }}
        id={inputId}
        overrideStyles={props.styles}
        rightIcon={{
          ...props.rightIcon,
          altText: props.calendarOpen
            ? props.configAccesibility?.closeInputIconAriaLabel
            : props.configAccesibility?.openInputIconAriaLabel,
          ['aria-haspopup']: true,
          ['aria-controls']: ariaControls,
        }}
        role={ROLES.COMBOBOX}
        variant={props.inputVariant ?? props.styles?.[props.state]?.inputVariant}
      />
      <PopoverCalendar
        ref={ref}
        calendar={props.calendar}
        calendarOpen={props.calendarOpen}
        closeIcon={props.closeIcon}
        configAccesibility={props.configAccesibility}
        defaultDate={new Date(props.defaultDate ?? maxDate)}
        disabledDates={props.disabledDates}
        extraCalendarWidth={props.extraCalendarWidth}
        extraCalendarWidthSide={props.extraCalendarWidthSide}
        hasRange={props.hasRange}
        inputId={inputId}
        label={props.label}
        labelComponentType={props.labelComponentType}
        locale={props.locale}
        maxDate={maxDate}
        minDate={props.minDate}
        secondSelectedDate={props.dateFormatted[1]}
        selectedDate={props.dateFormatted[0]}
        state={props.state}
        styles={props.styles}
        onCalendarOpen={props.onCalendarOpen}
        onDateChange={props.onDateChange}
      />
    </InputDateStyled>
  );
};

export const InputDateStandAlone = React.forwardRef(InputDateStandAloneComponent);
