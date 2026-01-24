import {
  type FocusEventHandler,
  type KeyboardEventHandler,
  type MouseEventHandler,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';

import { ESCAPE } from '@/lib/constants/keyboardKeys/keyboardKeys';

import type { SelectUnControlledProps } from './types/select';

import { SelectControlled } from './selectControlled';

/**
 * Uncontrolled select component for displaying selectable options.
 *
 * This component manages its own open/close state and selected option internally, so you do not need
 * to control the select state from the parent. It is useful when you want a simple select that handles
 * its own toggle and selection logic. You can optionally receive state changes via callbacks.
 *
 * Internally, it wraps {@link SelectControlled} and passes the necessary props.
 *
 * @example
 * ```tsx
 * <SelectUnControlled defaultOpen />
 * ```
 */
export const SelectUnControlled = forwardRef<
  HTMLDivElement,
  SelectUnControlledProps
>(
  (
    {
      defaultOpen = false,
      defaultOptionSelected,
      onBlur,
      onButtonClick,
      onClosePopover,
      onFocus,
      onOptionClick,
      openAndCloseOnHover = false,
      ...props
    },
    ref,
  ): JSX.Element => {
    const [open, setOpen] = useState<boolean>(defaultOpen);
    const [optionSelected, setOptionSelected] = useState<string | undefined>(
      defaultOptionSelected,
    );
    const buttonOrLinkRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      const handleVisibilityChange = () => {
        if (document.hidden) {
          setOpen(false);
        }
      };
      document.addEventListener('visibilitychange', handleVisibilityChange);
      return () =>
        document.removeEventListener(
          'visibilitychange',
          handleVisibilityChange,
        );
    }, []);

    const handleOnClickButton: MouseEventHandler<
      HTMLButtonElement | HTMLLinkElement
    > = () => {
      onButtonClick?.(!open);
      setOpen(!open);
    };

    const handleOnClosePopover = () => {
      setOpen(false);
      onClosePopover?.(false);
    };

    const handleOnClickOption = (value: string) => {
      setOptionSelected(value);
      onOptionClick?.(value);
    };

    const handleOnKeyDown: KeyboardEventHandler<HTMLElement> = (event) => {
      if (ESCAPE.key.includes(event.key) && open) {
        buttonOrLinkRef.current?.focus();
        setOpen(false);
      }
    };

    const handleOnFocus: FocusEventHandler<HTMLDivElement> = () => {
      if (openAndCloseOnHover) {
        setOpen(true);
        onFocus?.(true);
      }
    };

    const handleOnBlur: FocusEventHandler<HTMLDivElement> = (event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) {
        setOpen(false);
        onBlur?.(false);
      }
      if (openAndCloseOnHover) {
        setOpen(false);
        onBlur?.(false);
      }
    };

    return (
      <SelectControlled
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
        onOptionClick={handleOnClickOption}
      />
    );
  },
);

export { SelectUnControlled as Select };
