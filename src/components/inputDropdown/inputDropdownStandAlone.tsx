import React from 'react';

import { useId } from '@/hooks/useId/useId';

import { DeviceBreakpointsType } from '../../types/breakpoints/breakpoints';
import { ROLES } from '../../types/role/role';
import { isKeyTabPressed } from '../../utils/keyboard/keyboard.utility';
import { InputControlled as Input } from '../input/inputControlled';
import { AUTOCOMPLETE_TYPE } from '../input/types/input';
import { PopoverSearchList } from './components/popoverSearchList';
import { MultipleRef } from './hooks/useInputDropdown';
// styles
import { InputDropdownStyled } from './inputDropdown.styled';
import { IInputDropdownStandAlone } from './types/inputDropdown';

export const InputDropdownStandAloneComponent = (
  { dataTestId = 'input-dropdown', ...props }: IInputDropdownStandAlone,
  ref: React.ForwardedRef<unknown>
): JSX.Element => {
  const inputWrapperRef = React.useRef(null);
  const uniqueId: string = useId('inputDropdown');
  const inputId: string = props.id ?? uniqueId;
  const ariaControls = `${uniqueId}List`;
  const { refInput, refIcon } = ref as unknown as MultipleRef;
  const refs = { refInput, refIcon };

  return (
    <InputDropdownStyled
      data-testid={dataTestId}
      styles={props.styles?.[props.state]}
      onKeyDown={e => {
        if (props.device === DeviceBreakpointsType.DESKTOP && isKeyTabPressed(e.key)) {
          props.onOpenOptions(false);
        }
      }}
    >
      <div ref={inputWrapperRef}>
        <Input
          {...props}
          ref={
            refs as unknown as React.ForwardedRef<HTMLInputElement | undefined | null> | undefined
          }
          aria-controls={props.open ? ariaControls : undefined}
          aria-expanded={props.open}
          aria-haspopup={ROLES.LISTBOX}
          autocomplete={
            props.autocomplete || props.styles?.[props.state]?.allowSearch
              ? AUTOCOMPLETE_TYPE.ON
              : AUTOCOMPLETE_TYPE.OFF
          }
          icon={{ rotate: props.open ? '180deg' : '0deg', ...props.icon }}
          id={inputId}
          overrideStyles={props.styles}
          rightIcon={{ rotate: props.open ? '180deg' : '0deg', ...props.rightIcon }}
          role={ROLES.COMBOBOX}
          value={props.searchText}
          variant={props.inputVariant ?? props.styles?.[props.state]?.inputVariant}
          onChange={event =>
            props.autocomplete ||
            (props.styles?.[props.state]?.allowSearch &&
              props.device === DeviceBreakpointsType.DESKTOP)
              ? props.onChange?.(event)
              : undefined
          }
        />
      </div>
      <PopoverSearchList
        ref={ref}
        aria-controls={ariaControls}
        closeIcon={props.closeIcon}
        device={props.device}
        elementsToShow={props.elementsToShow}
        hasInputInSearchList={props.hasInputInSearchList}
        hasResultTextWrittenByUser={props.hasResultTextWrittenByUser}
        inputPopoverIcon={props.inputPopoverIcon}
        inputPopoverRightIcon={props.inputPopoverRightIcon}
        inputPopoverValue={props.inputPopoverValue}
        label={props.label}
        listOptionsHeight={props.listOptionsHeight}
        loader={props.loader}
        loading={props.loadingList}
        loadingText={props.loadingText}
        noResultsText={props.noResultsText}
        open={props.open}
        optionList={props.optionList}
        preventCloseOnClickElements={[inputWrapperRef.current]}
        searchText={props.searchText}
        state={props.state}
        styles={props.styles}
        value={props.value}
        onCloseIconTabletMobileClick={props.onCloseIconTabletMobileClick}
        onInputPopoverChange={props.onInputPopoverChange}
        onInputPopoverIconClick={props.onInputPopoverIconClick}
        onInputPopoverKeyDown={props.onInputPopoverKeyDown}
        onOpenOptions={props.onOpenOptions}
        onValueSelected={props.onValueSelected}
      />
    </InputDropdownStyled>
  );
};

export const InputDropdownStandAlone = React.forwardRef(InputDropdownStandAloneComponent);
