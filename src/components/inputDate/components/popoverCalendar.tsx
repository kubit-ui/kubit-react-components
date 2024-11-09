import React from 'react';

import { PopoverControlled } from '@/components/popover/popoverControlled';
import { useMediaDevice } from '@/hooks/useMediaDevice/useMediaDevice';
import { ROLES } from '@/types/role/role';

import { ActionBottomSheetControlledStructure as ActionBottomSheet } from '../../actionBottomSheet/actionBottomSheetControlled';
import { Calendar } from '../../calendar/calendar';
//components
import { PopoverComponentType } from '../../popover/types/component';
//types
import { IPopoverCalendar } from '../types/inputDate';

const PopoverCalendarComponent = (
  props: IPopoverCalendar,
  ref: React.ForwardedRef<unknown>
): JSX.Element => {
  const idPopoverCalendar = `${props.inputId}Calendar`;

  const device = useMediaDevice();

  const isActionBottomSheet = props.styles?.[props.state]?.useActionBottomSheet?.[device];

  const renderCalendar = () => (
    <Calendar
      configAccesibility={props.configAccesibility}
      dataTestId={props.dataTestId}
      defaultCurrentDate={props.defaultDate}
      hasRange={props.hasRange}
      id={idPopoverCalendar}
      locale={props.locale}
      maxDate={props.maxDate}
      minDate={props.minDate}
      preventCloseOnClickElements={[
        (ref as React.MutableRefObject<HTMLInputElement | null | undefined>)?.current
          ?.parentNode as HTMLElement,
      ]}
      secondSelectedDate={props.secondSelectedDate}
      selectedDate={props.selectedDate}
      {...props.calendar}
      disabledDates={props.disabledDates}
      open={props.calendarOpen}
      onSelectedDateChange={props.onDateChange}
    />
  );

  return (
    <PopoverControlled
      hasBackDrop
      aria-label={props.configAccesibility?.calendarAriaLabel}
      aria-modal={props.calendarOpen}
      component={PopoverComponentType.DIV}
      dataTestId={`${props.dataTestId}Popover`}
      extraWidth={props.extraCalendarWidth}
      extraWidthSide={props.extraCalendarWidthSide}
      focusFirstDescendantAutomatically={false}
      focusLastElementFocusedAfterClose={true}
      open={props.calendarOpen}
      preventCloseOnClickElements={[
        (ref as React.MutableRefObject<HTMLInputElement | null | undefined>)?.current
          ?.parentNode as HTMLElement,
      ]}
      role={ROLES.DIALOG}
      trapFocusInsideModal={true}
      variant={props.styles?.[props.state]?.popoverVariant?.[device]}
      onCloseInternally={() => props.onCalendarOpen?.(false)}
    >
      {isActionBottomSheet ? (
        <ActionBottomSheet
          closeIcon={{
            ...props.closeIcon,
            onClick: event => {
              props.onCalendarOpen?.(false);
              props.closeIcon?.onClick?.(event);
            },
          }}
          dataTestId={`${props.dataTestId}ActionBottomSheet`}
          title={{ content: props.label?.content, component: props.labelComponentType }}
          // The variant is the same for all the states
          variant={props.styles?.[props.state]?.actionBottomSheetVariant}
        >
          {renderCalendar()}
        </ActionBottomSheet>
      ) : (
        renderCalendar()
      )}
    </PopoverControlled>
  );
};

export const PopoverCalendar = React.forwardRef(PopoverCalendarComponent);
