import { forwardRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';
import { useTrapFocus } from '@/lib/hooks/useTrapFocus/useTrapFocus';

import { usePopoverInteractions } from './hooks/usePopoverInteractions';
import { usePopoverLifecycle } from './hooks/usePopoverLifecycle';
import { usePopoverPositioning } from './hooks/usePopoverPositioning';
import { PopoverStandAlone } from './popoverStandAlone';
import type { IPopover } from './types/popover';

/**
 * Controlled version of the Popover component with advanced positioning.
 * This component manages positioning logic, focus, interactions, and animations.
 */
const PopoverComponent = (
  {
    additionalClasses,
    anchorElement,
    animationExitDuration = 200,
    disableAnimations = false,
    disableAutoFocusFirstDescendant = false,
    disableAutoFocusFirstDescendantAfterClose = true,
    disableClickOverlayClose = false,
    disableEscapeClose = false,
    disableRestoreFocusAfterClose = false,
    disableScrollBackground = false,
    disableTrapFocus = false,
    middlewareOptions,
    middlewares,
    onClose,
    open = false,
    preventCloseOnClickElements = [],
    preventScrollOnCloseFocus = false,
    strategy = 'absolute',
    popoverContainerRef,
    ...props
  }: IPopover,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null,
): JSX.Element => {
  const _disableAnimations = disableAnimations || !!anchorElement;
  const cssClasses = useClassName({
    additionalClassNames: additionalClasses,
    component: 'POPOVER',
  });

  // Reference management
  const { isVisible, isClosing, handleInnerRef, popoverRef } =
    usePopoverLifecycle({
      open,
      disableAnimations: _disableAnimations,
      disableAutoFocusFirstDescendant,
      disableAutoFocusFirstDescendantAfterClose,
      disableRestoreFocusAfterClose,
      disableScrollBackground,
      preventScrollOnCloseFocus,
      popoverContainerRef,
      animationExitDuration,
    });

  // Configure trap focus
  useTrapFocus({
    ref: popoverRef,
    trapFocus: !disableTrapFocus && isVisible,
  });

  // Configure user interactions
  usePopoverInteractions({
    disableClickOverlayClose,
    disableEscapeClose,
    isVisible,
    onClose,
    popoverRef,
    preventCloseOnClickElements,
  });

  // Configure positioning
  usePopoverPositioning({
    anchorElement,
    arrowStyles: props.arrowStyles,
    isVisible,
    middlewareOptions,
    middlewares,
    placement: props.placement,
    ref: popoverRef,
    strategy,
  });

  // Render the popover
  return (
    <PopoverStandAlone
      ref={ref}
      {...props}
      anchorElement={!!anchorElement}
      cssClasses={cssClasses}
      disableAnimations={_disableAnimations}
      isClosing={isClosing}
      isVisible={isVisible}
      middlewareOptions={middlewareOptions}
      popoverContainerRef={handleInnerRef}
      strategy={strategy}
    />
  );
};

/**
 * Positioning utilities built on top of Floating UI.
 * @see https://floating-ui.com/docs/platform
 * @license MIT - Floating UI is licensed under MIT
 */
export const Popover = forwardRef(PopoverComponent);
