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

  const enterDuration = () => {
    if (options?.enterDuration) {
      return options.enterDuration * 1000;
    } else if (options?.duration) {
      return options.duration * 1000;
    }
    return 0;
  };

  const exitDuration = () => {
    if (options?.exitDuration) {
      return options.exitDuration * 1000;
    } else if (options?.duration) {
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
 * @description
 * CssAnimation component is a wrapper component that can be used to wrap other components.
 *
 * @param {React.PropsWithChildren<ICssAnimation>} props
 * @returns {JSX.Element}
 * @constructor
 *
 */
export const CssAnimation = React.forwardRef(CssAnimationComponent);
