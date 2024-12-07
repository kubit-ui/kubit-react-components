import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useMediaDevice } from '@/hooks/useMediaDevice/useMediaDevice';
import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { INTERNAL_ERROR_EXECUTION } from '../input/types/input';
import { InputTypeType } from '../input/types/inputType';
import { useInputDropdown } from './hooks/useInputDropdown';
import { InputDropdownStandAlone } from './inputDropdownStandAlone';
import { IInputDropdown, IInputDropdownStandAlone } from './types/inputDropdown';
import { InputDropdownStylesProps } from './types/inputDropdownTheme';

const DEFAULT_LIMIT = 4;

const InputDropdownComponent = React.forwardRef(
  <V extends string | unknown>(
    {
      open = false,
      type = InputTypeType.TEXT,
      elementsToShow = DEFAULT_LIMIT,
      clearTextInputPopoverIconClick = true,
      internalErrorExecution = INTERNAL_ERROR_EXECUTION.ON_CHANGE_ON_BLUR,
      value,
      icon,
      disabled,
      error,
      optionList,
      informationAssociatedValue,
      variant,
      onClick,
      onInputPopoverIconClick,
      onBlur,
      onChange,
      onFocus,
      onOpenCloseOptions,
      name,
      ctv,
      ...props
    }: IInputDropdown<V>,
    ref: React.ForwardedRef<HTMLSelectElement | undefined>
  ): JSX.Element => {
    const styles = useStyles<InputDropdownStylesProps, V>(
      STYLES_NAME.INMPUT_DROPDOWN,
      variant,
      ctv
    );
    const device = useMediaDevice();
    const hasIconAction = !!icon?.onClick || !!props.rightIcon?.onClick;

    const {
      openOptions,
      optionsFiltered,
      searchText,
      inputPopoverText,
      valueSearchSelected,
      handleChangeInputDropdown,
      handleClickInputDropdown,
      handleClickIconInputDropdown,
      handleInputPopoverIconClick,
      handleOpenOptions,
      handleValueSelected,
      handleInputKeyDown,
      handleInputBlur,
      state,
      ref: innerRef,
      listOptionsHeight,
      handleFocusInternal,
      handleInputPopoverChange,
    } = useInputDropdown({
      internalErrorExecution,
      open,
      optionList,
      type,
      value,
      allowSearch: props.allowSearch,
      styles,
      onClick,
      onIconClick: icon?.onClick,
      onRightIconClick: props.rightIcon?.onClick,
      onInputPopoverIconClick,
      elementsToShow,
      disabled,
      error,
      informationAssociated: informationAssociatedValue?.content,
      ref,
      name,
      onBlur,
      onChange,
      onFocus,
      hasInputInSearchList: props.hasInputInSearchList,
      onOpenCloseOptions,
      clearTextInputPopoverIconClick,
    });

    return (
      <InputDropdownStandAlone
        {...props}
        ref={innerRef as unknown as React.Ref<unknown> | undefined}
        device={device}
        icon={{ ...icon, onClick: hasIconAction ? handleClickIconInputDropdown : undefined }}
        informationAssociatedValue={informationAssociatedValue}
        inputPopoverValue={inputPopoverText}
        listOptionsHeight={listOptionsHeight}
        open={openOptions}
        optionList={optionsFiltered}
        rightIcon={{
          ...props.rightIcon,
          onClick: hasIconAction ? handleClickIconInputDropdown : undefined,
        }}
        searchText={searchText}
        state={state}
        styles={styles}
        type={type}
        value={valueSearchSelected}
        onBlur={handleInputBlur}
        onChange={handleChangeInputDropdown}
        onClick={handleClickInputDropdown}
        onFocus={handleFocusInternal}
        onInputPopoverChange={handleInputPopoverChange}
        onInputPopoverIconClick={handleInputPopoverIconClick}
        onKeyDown={handleInputKeyDown}
        onOpenOptions={handleOpenOptions}
        onValueSelected={handleValueSelected}
      />
    );
  }
);
InputDropdownComponent.displayName = 'InputDropdownComponent';

const InputDropdownBoundary = <V extends string | unknown>(
  props: IInputDropdown<V>,
  ref: React.ForwardedRef<HTMLSelectElement | undefined>
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <InputDropdownStandAlone {...(props as unknown as IInputDropdownStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <InputDropdownComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const InputDropdown = React.forwardRef(InputDropdownBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<IInputDropdown<V>> & {
    ref?: React.ForwardedRef<HTMLSelectElement | undefined>;
  }
) => ReturnType<typeof InputDropdownBoundary>;

export { InputDropdown };
