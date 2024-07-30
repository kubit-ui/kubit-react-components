import * as React from 'react';
import {
  Children,
  RefAttributes,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import { CSSTransition } from 'react-transition-group';

import { convertDurationToNumber } from '@/utils/stringUtility/string.utility';

import { CssAnimationContainer } from './cssAnimation.styled';
import { CssAnimationExecuteOption, ICssAnimation } from './types';

const CssAnimationComponent = (
  {
    children,
    variant,
    options,
    exec = CssAnimationExecuteOption.HIDDEN,
    dataTestId = 'cssAnimation',
  }: ICssAnimation,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const nodeRef = useRef<HTMLDivElement>();
  const [execute, setExecute] = useState(CssAnimationExecuteOption.HIDDEN);

  // deprecated - Remove the condition when `enterDuration` and `duration` are type string
  const enterDuration = () => {
    if (options?.enterDuration) {
      if (typeof options?.enterDuration === 'string') {
        return convertDurationToNumber(options?.enterDuration);
      }
      return options.enterDuration * 1000;
    } else if (options?.duration) {
      if (typeof options?.duration === 'string') {
        return convertDurationToNumber(options?.duration);
      }
      return options.duration * 1000;
    }
    return 0;
  };

  // deprecated - Remove the condition when `exitDuration` and `duration` are type string
  const exitDuration = () => {
    if (options?.exitDuration) {
      if (typeof options?.exitDuration === 'string') {
        return convertDurationToNumber(options?.exitDuration);
      }
      return options.exitDuration * 1000;
    } else if (options?.duration) {
      if (typeof options?.duration === 'string') {
        return convertDurationToNumber(options?.duration);
      }
      return options.duration * 1000;
    }
    return 0;
  };

  const setNodeRef = React.useCallback(node => {
    nodeRef.current = node;
    if (ref) {
      if (typeof ref === 'function') {
        ref(node);
      } else {
        ref.current = node;
      }
    }
  }, []);

  useEffect(() => {
    if (exec) setExecute(exec);
  }, [exec]);

  return (
    <CSSTransition
      unmountOnExit
      classNames={`${variant.type}`}
      in={execute === CssAnimationExecuteOption.START ? true : false}
      nodeRef={nodeRef}
      timeout={{
        enter: enterDuration(),
        exit: exitDuration(),
      }}
    >
      <CssAnimationContainer
        data-testid={dataTestId}
        exec={exec}
        options={options}
        variant={variant}
      >
        {(exec === CssAnimationExecuteOption.START || exec === CssAnimationExecuteOption.END) &&
          Children.map(
            children,
            child =>
              isValidElement(child) &&
              cloneElement(child, {
                ref: setNodeRef,
              } as RefAttributes<HTMLDivElement>)
          )}
      </CssAnimationContainer>
    </CSSTransition>
  );
};

/**
 * @deprecated This component has been deprecated and will be removed in the next MAJOR release.
 *
 * CssAnimation component is a wrapper component that can be used to wrap other components.
 *
 * @param {React.PropsWithChildren<ICssAnimation>} props
 * @returns {JSX.Element}
 * @constructor
 *
 */
export const CssAnimation = React.forwardRef(CssAnimationComponent);
