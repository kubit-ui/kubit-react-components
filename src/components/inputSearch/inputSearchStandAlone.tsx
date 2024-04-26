import React, { ForwardedRef, MutableRefObject, forwardRef, useRef } from 'react';

import { InputControlled as Input } from '@/components/input';
import { PopoverComponentType } from '@/components/popover';
import { useId } from '@/hooks';
import { DeviceBreakpointsType, ROLES } from '@/types';
import { isKeyTabPressed } from '@/utils';

import { AUTOCOMPLETE_TYPE } from '../input/types/input';
import { PopoverSearchList } from './components';
// helpers
import { getAriaControls } from './helpers';
import { MultipleRef } from './hooks/useInputSearch';
// styles
import { InputSearchStyled } from './inputSearch.styled';
import { IInputSearchStandAlone } from './types';

export const InputSearchStandAloneComponent = (
  props: IInputSearchStandAlone,
  ref: ForwardedRef<HTMLInputElement | undefined | null>
): JSX.Element => {
  const inputWrapperRef = useRef(null);
  const uniqueId: string = useId('inputSearch');
  const inputId: string = props.id ?? uniqueId;
  const ariaControls = `${uniqueId}List`;
  const { refInput, refIcon } = ref as unknown as MultipleRef;

  const sendRef = { refInput: refInput, refIcon: refIcon };

  return (
    <InputSearchStyled
      data-testid={`${props.dataTestId}InputSearch`}
      onKeyDown={e => {
        if (props.device === DeviceBreakpointsType.DESKTOP && isKeyTabPressed(e.key)) {
          props.onOpenOptions(false);
        }
      }}
    >
      <div ref={inputWrapperRef}>
        <Input
          {...props}
          ref={sendRef as unknown as ForwardedRef<HTMLInputElement | undefined | null> | undefined}
          aria-controls={props.open ? getAriaControls(props.optionList, ariaControls) : undefined}
          aria-expanded={props.open}
          aria-haspopup={PopoverComponentType.DIALOG}
          autocomplete={AUTOCOMPLETE_TYPE.OFF}
          icon={{
            ...props.icon,
            onClick: props.icon?.onClick,
          }}
          id={inputId}
          overrideStyles={props.styles}
          role={ROLES.COMBOBOX}
          value={props.searchText}
          variant={props.inputVariant ?? props.styles?.[props.state]?.inputVariant}
          onClick={props.onClick}
        />
      </div>
      <PopoverSearchList
        ref={ref}
        aria-controls={ariaControls}
        blockBackPopover={props.blockBackPopover}
        caseSensitive={props.caseSensitive}
        closeIcon={props.closeIcon}
        dataTestId={props.dataTestId}
        device={props.device}
        elementsToShow={props.elementsToShow}
        hasHighlightedOption={props.hasHighlightedOption}
        hasResultTextWrittenByUser={props.hasResultTextWrittenByUser}
        highlightedOption={props.highlightedOption}
        inputConfiguration={{
          additionalInfo: props.additionalInfo,
          label: props.label,
          secondaryLabel: props.secondaryLabel,
          helpMessage: props.helpMessage,
          icon: props.inputPopoverIcon,
          overrideStyles: props.styles,
          placeholder: props.placeholder,
          value: props.inputPopoverValue,
          // The variant is the same for all the states
          variant:
            props.inputPopoverVariant ?? (props.styles?.[props.state]?.inputVariant as string),
          onChange: props.onInputPopoverChange,
          onKeyDown: props.onInputPopoverKeyDown,
          onIconClick: props.onInputPopoverIconClick,
        }}
        listOptionsHeight={props.listOptionsHeight}
        loader={props.loader}
        loading={props.loadingList}
        loadingText={props.loadingText}
        noResultsText={props.noResultsText}
        open={props.open}
        optionList={props.optionList}
        preventCloseOnClickElements={[
          (refInput as MutableRefObject<HTMLInputElement | null | undefined>)?.current,
          (refIcon as MutableRefObject<HTMLSpanElement | null | undefined>)?.current,
        ]}
        searchText={props.searchText}
        state={props.state}
        styles={props.styles}
        sublabel={props.sublabel}
        titleActionBottomSheet={props.titleActionBottomSheet}
        value={props.value}
        onOpenOptions={props.onOpenOptions}
        onOptionsListKeyDown={props.onOptionsListKeyDown}
        onValueSelected={props.onValueSelected}
      />
    </InputSearchStyled>
  );
};

export const InputSearchStandAlone = forwardRef(InputSearchStandAloneComponent);
