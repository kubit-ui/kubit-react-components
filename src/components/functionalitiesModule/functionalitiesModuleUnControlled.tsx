import * as React from 'react';

import { FunctionalitiesModuleControlled } from './functionalitiesModuleControlled';
import { IFunctionalitiesModuleUnControlled } from './types';
import { getDefaultTabSeleted } from './utils/functionalitiesModule.utils';

const FunctionalitiesModuleUnControlledComponent = (
  {
    defaultOpen = false,
    trigger,
    actionBottomSheet,
    onOpenClose,
    onOptionClick,
    defaultSelectedValue,
    tabsConfig,
    ...props
  }: IFunctionalitiesModuleUnControlled,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const [selectedValue, setSelectedValue] = React.useState(defaultSelectedValue);
  const [open, setOpen] = React.useState(defaultOpen);

  const handleOptionClick = (value?: string | number) => {
    setSelectedValue(value);
    onOptionClick?.(value);
    setOpen(false);
  };

  const handleTriggerClick = e => {
    setOpen(true);
    trigger?.onClick?.(e);
    onOpenClose?.(true);
  };

  const handleActionBottomSheetCloseIconClick = e => {
    setOpen(false);
    actionBottomSheet?.closeIcon?.onClick?.(e);
    onOpenClose?.(false);
  };

  const handleActionBottomSheetPopoverCloseInternally = () => {
    setOpen(false);
    actionBottomSheet?.popover?.onCloseInternally?.();
    onOpenClose?.(false);
  };

  return (
    <FunctionalitiesModuleControlled
      {...props}
      ref={ref}
      actionBottomSheet={{
        ...actionBottomSheet,
        closeIcon: {
          ...actionBottomSheet?.closeIcon,
          onClick: handleActionBottomSheetCloseIconClick,
        },
        popover: {
          ...actionBottomSheet?.popover,
          onCloseInternally: handleActionBottomSheetPopoverCloseInternally,
        },
      }}
      open={open}
      selectedValue={selectedValue}
      tabsConfig={{
        ...tabsConfig,
        defaultSelectedTab:
          tabsConfig?.defaultSelectedTab ?? getDefaultTabSeleted(selectedValue, props.sections),
      }}
      trigger={trigger && { ...trigger, onClick: handleTriggerClick }}
      onOptionClick={handleOptionClick}
    />
  );
};

export const FunctionalitiesModuleUnControlled = React.forwardRef(
  FunctionalitiesModuleUnControlledComponent
);
