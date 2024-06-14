import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useMediaDevice, useStyles } from '@/hooks';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { InputTypeType } from '../input/types';
import { useInputDropdown } from './hooks/useInputDropdown';
import { InputDropdownStandAlone } from './inputDropdownStandAlone';
import { IInputDropdown, IInputDropdownStandAlone, InputDropdownStylesProps } from './types';

const DEFAULT_LIMIT = 4;

const InputDropdownComponent = React.forwardRef(
  <V extends string | unknown>(
    {
      open = false,
      type = InputTypeType.TEXT,
      elementsToShow = DEFAULT_LIMIT,
      clearTextInputPopoverIconClick = true,
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
      handleInputPopoverKeyDown,
    } = useInputDropdown({
      open,
      optionList,
      type,
      value,
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
        icon={{ ...icon, onClick: handleClickIconInputDropdown }}
        informationAssociatedValue={informationAssociatedValue}
        inputPopoverValue={inputPopoverText}
        listOptionsHeight={listOptionsHeight}
        open={openOptions}
        optionList={optionsFiltered}
        rightIcon={{
          ...props.rightIcon,
          onClick: handleClickIconInputDropdown,
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
        onInputPopoverKeyDown={handleInputPopoverKeyDown}
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
