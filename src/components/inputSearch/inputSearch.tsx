import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useMediaDevice } from '@/hooks/useMediaDevice/useMediaDevice';
import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { INTERNAL_ERROR_EXECUTION } from '../input/types/input';
import { InputTypeType } from '../input/types/inputType';
import { getLength } from './helpers/options';
import { useInputSearch } from './hooks/useInputSearch';
import { InputSearchStandAlone } from './inputSearchStandAlone';
import { IInputSearch, IInputSearchStandAlone } from './types/inputSearch';
import { InputSearchStylesProps } from './types/inputSearchTheme';

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
      internalErrorExecution = INTERNAL_ERROR_EXECUTION.ON_CHANGE_ON_BLUR,
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
      onInputPopoverEnterKeyDown,
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
      showHighlightedOption,
      handleChangeInputSearch,
      handleClickInputSearch,
      handleIconClick,
      handleRightIconClick,
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
      internalErrorExecution,
      open,
      type,
      options: optionList,
      value,
      styles,
      maxLength,
      regex,
      onClick,
      onIconClick: props.icon?.onClick,
      onRightIconClick: props.rightIcon?.onClick,
      executeInternalOpenOptions,
      onInputPopoverIconClick,
      onInputPopoverEnterKeyDown,
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
        error={error}
        hasHighlightedOption={showHighlightedOption}
        hasResultTextWrittenByUser={hasResultTextWrittenByUser}
        highlightedOption={highlightedOption}
        icon={{ ...props.icon, onClick: handleIconClick }}
        informationAssociatedValue={informationAssociatedValue}
        initialOptionsLength={getLength(optionList)}
        inputPopoverValue={inputPopoverText}
        listOptionsHeight={listOptionsHeight}
        maxLength={maxLength}
        open={openOptions}
        optionList={optionsFiltered}
        regex={regex}
        rightIcon={{ ...props.rightIcon, onClick: handleRightIconClick }}
        searchText={searchText}
        state={state}
        styles={styles}
        type={type}
        value={searchText}
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
