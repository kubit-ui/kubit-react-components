import React, { ForwardedRef, MutableRefObject, forwardRef, useRef } from 'react';

import { useId } from '@/hooks/useId/useId';

import { DeviceBreakpointsType } from '../../types/breakpoints/breakpoints';
import { ROLES } from '../../types/role/role';
import { isKeyTabPressed } from '../../utils/keyboard/keyboard.utility';
import { InputControlled as Input } from '../input/inputControlled';
import { AUTOCOMPLETE_TYPE } from '../input/types/input';
import { PopoverSearchList } from './components/popoverSearchList';
import { shouldOpenPopover } from './helpers/popover';
// helpers
// styles
import { InputSearchStyled } from './inputSearch.styled';
import { IInputSearchStandAlone } from './types/inputSearch';

interface MultipleRef {
  refInput?: MutableRefObject<HTMLInputElement | undefined>;
  refList: ForwardedRef<unknown> | (({ ref, index }) => void);
  refIcon: MutableRefObject<HTMLSpanElement | undefined>;
  refActionBottomSheet: React.ForwardedRef<HTMLDivElement> | undefined | null;
}

export const InputSearchStandAloneComponent = (
  { error, dataTestId = 'input-search', ...props }: IInputSearchStandAlone,
  ref: ForwardedRef<HTMLInputElement | undefined | null>
): JSX.Element => {
  const inputWrapperRef = useRef(null);
  const uniqueId: string = useId('inputSearch');
  const inputId: string = props.id ?? uniqueId;
  const ariaControls = `${uniqueId}List`;
  const { refInput, refIcon } = ref as unknown as MultipleRef;

  const sendRef = { refInput: refInput, refIcon: refIcon };

  const popoverOpen = shouldOpenPopover({
    open: props.open,
    useActionBottomSheet: props.styles?.[props.state]?.useActionBottomSheet?.[props.device],
    options: props.optionList,
    loadingList: props.loadingList,
    noResultText: props.noResultsText,
    hasHighlightedOption: props.hasHighlightedOption && props.highlightedOption !== '',
  });

  return (
    <InputSearchStyled
      data-testid={dataTestId}
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
          aria-controls={popoverOpen ? ariaControls : undefined}
          aria-expanded={popoverOpen}
          aria-haspopup={ROLES.LISTBOX}
          autocomplete={props.autocomplete || AUTOCOMPLETE_TYPE.OFF}
          icon={{
            ...props.icon,
            onClick: props.icon?.onClick,
          }}
          id={inputId}
          overrideStyles={props.styles}
          rightIcon={{
            ...props.rightIcon,
            onClick: props.rightIcon?.onClick,
          }}
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
        dataTestId={dataTestId}
        device={props.device}
        dragIcon={props.dragIcon}
        elementsToShow={props.elementsToShow}
        hasHighlightedOption={props.hasHighlightedOption}
        hasResultTextWrittenByUser={props.hasResultTextWrittenByUser}
        highlightedOption={props.highlightedOption}
        initialOptionsLength={props.initialOptionsLength}
        inputConfiguration={{
          additionalInfo: props.additionalInfo,
          label: props.label,
          secondaryLabel: props.secondaryLabel,
          helpMessage: props.helpMessage,
          icon: props.inputPopoverIcon,
          rightIcon: props.inputPopoverRightIcon,
          overrideStyles: props.styles,
          placeholder: props.placeholder,
          value: props.inputPopoverValue,
          error: error,
          errorIcon: props.errorIcon,
          errorMessage: props.errorMessage,
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
        open={popoverOpen}
        optionCheckedIcon={props.optionCheckedIcon}
        optionList={props.optionList}
        optionsListDefaultArias={props.optionsListDefaultArias}
        optionsScreenReaderText={props.optionsScreenReaderText}
        preventCloseOnClickElements={[
          (refInput as MutableRefObject<HTMLInputElement | null | undefined>)?.current,
          (refIcon as MutableRefObject<HTMLSpanElement | null | undefined>)?.current,
        ]}
        regex={props.regex}
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
