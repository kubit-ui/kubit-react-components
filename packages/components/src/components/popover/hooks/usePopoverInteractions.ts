/**
 * Custom hook to handle user interactions with the popover
 * (clicks outside the popover and Escape key)
 */
import { useCallback, useEffect, useMemo } from 'react';

import { ESCAPE } from '@/lib/constants/keyboardKeys/keyboardKeys';
import { useClickOutside } from '@/lib/hooks/useClickOutside/useClickOutside';
import { isKeyPressed } from '@/lib/utils/keyboard/keyboard';

import type { IUsePopoverInteractions } from './types/usePopoverInteractions';

export const usePopoverInteractions: IUsePopoverInteractions = ({
  disableClickOverlayClose = false,
  disableEscapeClose = false,
  isVisible,
  onClose,
  popoverRef,
  preventCloseOnClickElements = [],
}) => {
  // Filter null or undefined elements to avoid type errors
  const validElements = useMemo(() => {
    return preventCloseOnClickElements.filter(Boolean) as HTMLElement[];
  }, [preventCloseOnClickElements]);

  // Handle click outside the popover
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      // Quick validations to exit early
      if (!isVisible || disableClickOverlayClose) {
        return;
      }

      const target = event.target as Node;

      // Early return if click is inside popover
      if (popoverRef.current?.contains(target)) {
        return;
      }

      // Check if click should be ignored using pre-filtered elements
      const shouldPreventClose = validElements.some((element) =>
        element.contains(target),
      );

      if (shouldPreventClose) {
        return;
      }

      // Proceed with closing
      onClose?.();
    },
    [isVisible, disableClickOverlayClose, popoverRef, validElements, onClose],
  );

  // Configure outside click detector
  useClickOutside(popoverRef, handleClickOutside, validElements);

  // Handle Escape key
  useEffect(() => {
    // Only add listener if popover is isVisible
    if (!isVisible) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (isKeyPressed(event.key, ...ESCAPE.key)) {
        event.preventDefault();
        event.stopPropagation();
        if (!disableEscapeClose) {
          onClose?.();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [disableEscapeClose, isVisible, onClose]);

  return {
    handleClickOutside,
  };
};
