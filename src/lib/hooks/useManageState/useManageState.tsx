import {
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

import { STATES, type StateType } from '../../types/states/states';
import type { ParamsType } from './types/useManageState';

/**
 * A custom React hook to manage and track the state of an element, including hover, pressed, active, disabled, and loading states.
 *
 * @param {ParamsType} params - The parameters to configure the hook.
 * @param {boolean} [params.active=false] - Indicates whether the element is in an active state.
 * @param {boolean} [params.disabled=false] - Indicates whether the element is disabled.
 * @param {boolean} [params.loading=false] - Indicates whether the element is in a loading state.
 * @param {STATES[]} [params.states] - An array of states to monitor (e.g., `STATES.HOVER`, `STATES.PRESSED`).
 * @param {React.ForwardedRef<HTMLElement>} [params.ref] - A forwarded ref to the target element.
 *
 * @returns {Object} - An object containing the current state and a `setRef` function.
 * @returns {STATES} return.states - The current state of the element (e.g., `STATES.HOVER`, `STATES.PRESSED`, `STATES.DEFAULT`).
 * @returns {(node: HTMLElement) => void} [return.setRef] - A callback function to set the ref for the target element.
 *
 * @remarks
 * - The hook uses `useImperativeHandle` to expose the inner ref to the parent component.
 * - It dynamically attaches and removes event listeners for hover and pointer events based on the provided states.
 * - The `supportHover` function checks if the device supports hover interactions.
 *
 * @see {@link STATES} for the list of available states.
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
  useImperativeHandle(ref, () => {
    return innerRef?.current as HTMLElement;
  }, []);
  const supportHover = () => {
    if (typeof window !== 'undefined' && window?.matchMedia) {
      const query = window.matchMedia('(hover: none)');
      return !query.matches;
    }
    return true;
  };
  const onMouseEnter = () => {
    setOver(true);
  };
  const onMouseLeave = () => {
    setOver(false);
  };
  const onPointerDown = () => {
    setPressed(true);
  };
  const onPointerCancel = () => {
    setPressed(false);
  };
  const onPointerUp = () => {
    setPressed(false);
  };
  const setRef = useCallback((node) => {
    if (node) {
      innerRef.current = node;
      if (states?.includes(STATES.PRESSED)) {
        innerRef?.current?.addEventListener('pointerdown', onPointerDown);
        innerRef?.current?.addEventListener('pointercancel', onPointerCancel);
        window.addEventListener('pointerup', onPointerUp);
      }
      if (supportHover() && states?.includes(STATES.HOVER)) {
        innerRef?.current?.addEventListener('mouseenter', onMouseEnter);
        innerRef?.current?.addEventListener('mouseleave', onMouseLeave);
      }
    } else {
      innerRef?.current?.removeEventListener('mouseenter', onMouseEnter);
      innerRef?.current?.removeEventListener('mouseleave', onMouseLeave);
      innerRef?.current?.removeEventListener('pointerdown', onPointerDown);
      innerRef?.current?.removeEventListener('pointercancel', onPointerCancel);
      window.removeEventListener('pointerup', onPointerUp);
      innerRef.current = node;
    }
  }, []);
  const state = useMemo(() => {
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
