import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

import type { ParamsType } from './types/useManageState';

import { STATES, type StateType } from '../../types/states/states';

/**
 * A custom React hook to manage and track interactive states of an element.
 *
 * Provides automatic state management for hover, pressed, active, disabled, and loading states.
 * Efficiently handles event listeners with proper cleanup and prevents memory leaks.
 * Implements hover detection that respects device capabilities (touch vs mouse devices).
 *
 * @param params - Configuration options for state management
 * @param params.active - Whether the element should be in an active state (e.g., selected/highlighted)
 * @param params.disabled - Whether the element should be in a disabled state (non-interactive)
 * @param params.loading - Whether the element should be in a loading state (pending operation)
 * @param params.states - Array of states to monitor (e.g., `[STATES.HOVER, STATES.PRESSED]`)
 * @param params.ref - Optional forwarded ref to expose the internal element reference
 *
 * @returns Object containing the current state and ref setter
 * @returns return.states - The current active state based on priority: loading > disabled > active > pressed > hover > default
 * @returns return.setRef - Callback ref to attach to the target element for state tracking
 *
 * @remarks
 * **State Priority:**
 * States are evaluated in priority order: LOADING → DISABLED → ACTIVE → PRESSED → HOVER → DEFAULT
 *
 * **Device Detection:**
 * - Automatically detects hover capability using media queries
 * - Hover events are not attached on touch-only devices
 * - Prevents unwanted hover states on mobile devices
 *
 * **Performance:**
 * - Event listeners are only attached for requested states
 * - Proper cleanup prevents memory leaks
 * - Uses callback refs for efficient element tracking
 * - Memoized state calculation prevents unnecessary re-renders
 *
 * **Event Handling:**
 * - Hover: `mouseenter` and `mouseleave` events
 * - Pressed: `pointerdown`, `pointercancel`, and `pointerup` events
 * - Window-level `pointerup` ensures pressed state is cleared even when pointer moves outside element
 *
 * @example
 * **Basic button with hover and pressed states:**
 * ```tsx
 * const { states, setRef } = useManageState({
 *   states: [STATES.HOVER, STATES.PRESSED, STATES.DISABLED],
 *   disabled: isDisabled
 * });
 *
 * <button ref={setRef} className={`button-${states}`}>
 *   Click me
 * </button>
 * ```
 *
 * @example
 * **With forwarded ref:**
 * ```tsx
 * const MyComponent = forwardRef<HTMLDivElement>((props, ref) => {
 *   const { states, setRef } = useManageState({
 *     ref,
 *     states: [STATES.HOVER, STATES.ACTIVE],
 *     active: props.isSelected
 *   });
 *
 *   return <div ref={setRef}>Content</div>;
 * });
 * ```
 *
 * @example
 * **Loading state with all interactions:**
 * ```tsx
 * const { states, setRef } = useManageState({
 *   states: Object.values(STATES),
 *   loading: isLoading,
 *   disabled: isDisabled,
 *   active: isActive
 * });
 *
 * // When loading=true, states will be STATES.LOADING regardless of other interactions
 * ```
 *
 * @see {@link STATES} - Available state constants
 * @see {@link StateType} - State type definitions
 */
export const useManageState = ({
  active = false,
  disabled = false,
  loading = false,
  ref,
  states,
}: ParamsType): {
  states: StateType;
  setRef?: (node: HTMLElement) => void;
} => {
  const [over, setOver] = useState(false);
  const [pressed, setPressed] = useState(false);
  const innerRef = useRef<HTMLElement | null>(null);

  // Expose inner ref to parent component
  useImperativeHandle(ref, () => innerRef?.current as HTMLElement, []);

  /**
   * Checks if the current device supports hover interactions.
   * Touch-only devices (phones, tablets) will return false.
   *
   * @returns True if the device supports hover, false otherwise
   */
  const supportHover = useCallback((): boolean => {
    if (typeof window !== 'undefined' && window?.matchMedia) {
      const query = window.matchMedia('(hover: none)');
      return !query.matches;
    }
    return true;
  }, []);

  // Memoize event handlers to prevent recreation on every render
  const onMouseEnter = useCallback(() => setOver(true), []);
  const onMouseLeave = useCallback(() => setOver(false), []);
  const onPointerDown = useCallback(() => setPressed(true), []);
  const onPointerCancel = useCallback(() => setPressed(false), []);
  const onPointerUp = useCallback(() => setPressed(false), []);

  // Callback ref to attach element and setup event listeners
  const setRef = useCallback(
    (node: HTMLElement | null) => {
      // Clean up previous element's listeners
      if (innerRef.current) {
        innerRef.current.removeEventListener('mouseenter', onMouseEnter);
        innerRef.current.removeEventListener('mouseleave', onMouseLeave);
        innerRef.current.removeEventListener('pointerdown', onPointerDown);
        innerRef.current.removeEventListener('pointercancel', onPointerCancel);
        window.removeEventListener('pointerup', onPointerUp);
      }

      // Set new ref
      innerRef.current = node;

      // Attach listeners to new element
      if (node) {
        if (states?.includes(STATES.PRESSED)) {
          node.addEventListener('pointerdown', onPointerDown);
          node.addEventListener('pointercancel', onPointerCancel);
          window.addEventListener('pointerup', onPointerUp);
        }
        if (supportHover() && states?.includes(STATES.HOVER)) {
          node.addEventListener('mouseenter', onMouseEnter);
          node.addEventListener('mouseleave', onMouseLeave);
        }
      }
    },
    [
      states,
      onMouseEnter,
      onMouseLeave,
      onPointerDown,
      onPointerCancel,
      onPointerUp,
      supportHover,
    ],
  );

  // Cleanup effect when states dependencies change
  useEffect(() => {
    return () => {
      if (innerRef.current) {
        innerRef.current.removeEventListener('mouseenter', onMouseEnter);
        innerRef.current.removeEventListener('mouseleave', onMouseLeave);
        innerRef.current.removeEventListener('pointerdown', onPointerDown);
        innerRef.current.removeEventListener('pointercancel', onPointerCancel);
        window.removeEventListener('pointerup', onPointerUp);
      }
    };
  }, [onMouseEnter, onMouseLeave, onPointerDown, onPointerCancel, onPointerUp]);

  // Calculate current state based on priority
  const state = useMemo((): StateType => {
    if (states?.includes(STATES.LOADING) && loading) {
      return STATES.LOADING;
    }
    if (states?.includes(STATES.DISABLED) && disabled) {
      return STATES.DISABLED;
    }
    if (states?.includes(STATES.ACTIVE) && active) {
      return STATES.ACTIVE;
    }
    if (states?.includes(STATES.PRESSED) && pressed) {
      return STATES.PRESSED;
    }
    if (states?.includes(STATES.HOVER) && over) {
      return STATES.HOVER;
    }
    return STATES.DEFAULT;
  }, [states, disabled, loading, active, over, pressed]);

  return {
    setRef,
    states: state,
  };
};
