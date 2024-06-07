import * as React from 'react';

import { ESCAPE } from '@/constants';

import { DropdownSelectedControlled } from './dropdownSelectedControlled';
import { IDropdownSelectedUncontrolled } from './types';

const DropdownSelectedUnControlledComponent = (
  {
    defaultOpen = false,
    defaultOptionSelected,
    openAndCloseOnHover = false,
    onClosePopover,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    ...props
  }: IDropdownSelectedUncontrolled,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const [open, setOpen] = React.useState<boolean>(defaultOpen);
  const [optionSelected, setOptionSelected] = React.useState<string | undefined>(
    defaultOptionSelected
  );

  const buttonOrLinkRef = React.useRef<HTMLButtonElement>(null);

  // Close dropdown when the document hides
  React.useEffect(() => {
    const handleVisibilityChange = e => {
      if (document.hidden) {
        setOpen(false);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  const handleOnClickButton: React.MouseEventHandler<HTMLButtonElement | HTMLLinkElement> = () => {
    props.onButtonClick?.(!open);
    setOpen(!open);
  };

  const handleOnClosePopover = () => {
    const openValue = false;
    setOpen(openValue);
    onClosePopover?.(openValue);
  };

  const handleOnClickOption = (value: string) => {
    setOptionSelected(value);
    props.onOptionClick?.(value);
  };

  const handleOnMouseEnter: React.MouseEventHandler<HTMLDivElement> = () => {
    if (openAndCloseOnHover) {
      const openValue = true;
      setOpen(openValue);
      onMouseEnter?.(openValue);
    }
  };

  const handleOnMouseLeave: React.MouseEventHandler<HTMLDivElement> = () => {
    if (openAndCloseOnHover) {
      const openValue = false;
      setOpen(openValue);
      onMouseLeave?.(openValue);
    }
  };

  const handleOnKeyDown: React.KeyboardEventHandler<HTMLElement> = event => {
    if (ESCAPE.key.includes(event.key) && open) {
      buttonOrLinkRef.current?.focus();
      setOpen(false);
    }
  };

  const handleOnFocus: React.FocusEventHandler<HTMLDivElement> = () => {
    if (openAndCloseOnHover) {
      const openValue = true;
      setOpen(openValue);
      onFocus?.(openValue);
    }
  };

  const handleOnBlur: React.FocusEventHandler<HTMLDivElement> = event => {
    const openValue = false;
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setOpen(openValue);
      onBlur?.(openValue);
    }
    if (openAndCloseOnHover) {
      setOpen(openValue);
      onBlur?.(openValue);
    }
  };

  return (
    <DropdownSelectedControlled
      {...props}
      ref={ref}
      buttonOrLinkRef={buttonOrLinkRef}
      open={open}
      optionSelected={optionSelected}
      onBlur={handleOnBlur}
      onButtonClick={handleOnClickButton}
      onClosePopover={handleOnClosePopover}
      onFocus={handleOnFocus}
      onKeyDown={handleOnKeyDown}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      onOptionClick={handleOnClickOption}
    />
  );
};

const DropdownSelectedUnControlled = React.forwardRef(DropdownSelectedUnControlledComponent) as (
  props: IDropdownSelectedUncontrolled & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => JSX.Element;

export { DropdownSelectedUnControlled };
