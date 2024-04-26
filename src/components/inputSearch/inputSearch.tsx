import * as React from 'react';

import { InputTypeType } from '@/components/input';
import { STYLES_NAME } from '@/constants';
import { useMediaDevice, useStyles } from '@/hooks';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { useInputSearch } from './hooks/useInputSearch';
import { InputSearchStandAlone } from './inputSearchStandAlone';
import { InputSearchStylesProps } from './types';
import { IInputSearch, IInputSearchStandAlone } from './types/inputSearch';

const DEFAULT_LIMIT = 4;

const InputSearchComponent = React.forwardRef(
  <V extends string | unknown>(
    {
      open = false,
      type = InputTypeType.TEXT,
      elementsToShow = DEFAULT_LIMIT,
      hasResultTextWrittenByUser = true,
      disableErrorInvalidOption = false,
      clearTextInputPopoverIconClick = true,
      highlightedOption = '',
      value,
      disabled,
      error,
      optionList,
      informationAssociatedValue,
      variant,
      maxLength,
      regex,
      onClick,
      onInputPopoverIconClick,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      onPopoverOpen,
      onOptionClick,
      onInternalErrors,
      executeInternalOpenOptions,
      ctv,
      blockBackPopover = false,
      searchFilterConfig,
      caseSensitive,
      ...props
    }: IInputSearch<V>,
    ref: React.ForwardedRef<HTMLInputElement | undefined>
  ): JSX.Element => {
    const styles = useStyles<InputSearchStylesProps, V>(STYLES_NAME.INPUT_SEARCH, variant, ctv);
    const device = useMediaDevice();

    const {
      openOptions,
      optionsFiltered,
      searchText,
      inputPopoverText,
      valueSearchSelected,
      showHighlightedOption,
      handleChangeInputSearch,
      handleClickInputSearch,
      handleIconClick,
      handleInputPopoverIconClick,
      handleOpenOptions,
      handleValueSelected,
      handleInputKeyDown,
      state,
      ref: innerRef,
      listOptionsHeight,
      handleBlurInternal,
      handleFocusInternal,
      handleInputPopoverChange,
      handleInputPopoverKeyDown,
      handleOptionsListKeyDown,
    } = useInputSearch({
      open,
      type,
      options: optionList,
      value,
      styles,
      maxLength,
      regex,
      onClick,
      onIconClick: props.icon?.onClick,
      executeInternalOpenOptions,
      onInputPopoverIconClick,
      elementsToShow,
      disabled,
      error,
      informationAssociated: informationAssociatedValue?.content,
      ref,
      hasResultTextWrittenByUser,
      disableErrorInvalidOption,
      highlightedOption,
      clearTextInputPopoverIconClick,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      onPopoverOpen,
      onOptionClick,
      onInternalErrors,
      searchFilterConfig,
      caseSensitive,
    });

    return (
      <InputSearchStandAlone
        {...props}
        ref={
          innerRef as unknown as React.ForwardedRef<HTMLInputElement | undefined | null> | undefined
        }
        blockBackPopover={blockBackPopover}
        caseSensitive={caseSensitive}
        device={device}
        hasHighlightedOption={showHighlightedOption}
        hasResultTextWrittenByUser={hasResultTextWrittenByUser}
        highlightedOption={highlightedOption}
        icon={{ ...props.icon, onClick: handleIconClick }}
        informationAssociatedValue={informationAssociatedValue}
        inputPopoverValue={inputPopoverText}
        listOptionsHeight={listOptionsHeight}
        maxLength={maxLength}
        open={openOptions}
        optionList={optionsFiltered}
        searchText={searchText}
        state={state}
        styles={styles}
        type={type}
        value={valueSearchSelected}
        onBlur={handleBlurInternal}
        onChange={handleChangeInputSearch}
        onClick={handleClickInputSearch}
        onFocus={handleFocusInternal}
        onInputPopoverChange={handleInputPopoverChange}
        onInputPopoverIconClick={handleInputPopoverIconClick}
        onInputPopoverKeyDown={handleInputPopoverKeyDown}
        onKeyDown={handleInputKeyDown}
        onOpenOptions={handleOpenOptions}
        onOptionsListKeyDown={handleOptionsListKeyDown}
        onValueSelected={handleValueSelected}
      />
    );
  }
);
InputSearchComponent.displayName = 'InputSearchComponent';

const InputSearchBoundary = <V extends string | unknown>(
  props: IInputSearch<V>,
  ref: React.ForwardedRef<HTMLInputElement | undefined>
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <InputSearchStandAlone {...(props as unknown as IInputSearchStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <InputSearchComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const InputSearch = React.forwardRef(InputSearchBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<IInputSearch<V>> & {
    ref?: React.ForwardedRef<HTMLInputElement | undefined>;
  }
) => JSX.Element;

export { InputSearch };
