import {
  Children,
  type PropsWithChildren,
  cloneElement,
  isValidElement,
} from 'react';

import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { SelectorBoxFileCssClasses } from '../types/selectorBoxFile';
import type { SelectorBoxFileStateType } from '../types/state';
import type { SelectorBoxFileContainerBoxProps } from './selectorBoxFileContainerBox';

import { useBorderAnimation } from '../hooks/useBorderAnimation';

interface SelectorBoxFileAnimationProps extends DataAttributes {
  state: SelectorBoxFileStateType;
  cssClasses?: SelectorBoxFileCssClasses;
  percentage: number;
  focus: boolean;
  onAnimationCompleted?: () => void;
}
export const SelectorBoxFileAnimation = ({
  children,
  cssClasses,
  focus,
  onAnimationCompleted,
  percentage,
  state,
  ...props
}: PropsWithChildren<SelectorBoxFileAnimationProps>): JSX.Element => {
  const { bottomRef, leftRef, rightRef, topRef } = useBorderAnimation({
    onAnimationCompleted: onAnimationCompleted,
    percentage: percentage,
  });
  const customAttributes = {
    'data-focus': focus,
    'data-state': state,
  };
  const customAttributesProps = pickCustomAttributes({
    ...customAttributes,
  });
  const animationContainer = cssClasses?.animationcontainer;
  const topAnimationContainer = cssClasses?.topanimationcontainer;
  const rightAnimationContainer = cssClasses?.rightanimationcontainer;
  const bottomAnimationContainer = cssClasses?.bottomanimationcontainer;
  const leftAnimationContainer = cssClasses?.leftanimationcontainer;
  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement<SelectorBoxFileContainerBoxProps>(child)) {
      return cloneElement(child, {
        focus: focus,
      });
    }
    return child;
  });
  return animationContainer ? (
    <div
      className={animationContainer}
      data-focus={focus}
      data-testid={`${props['data-testid']}-animations`}
      {...customAttributesProps}
    >
      {/* Animation containers */}
      {!!topAnimationContainer && (
        <div
          {...customAttributesProps}
          ref={topRef}
          className={topAnimationContainer}
        />
      )}
      {!!rightAnimationContainer && (
        <div
          {...customAttributesProps}
          ref={rightRef}
          className={rightAnimationContainer}
        />
      )}
      {!!bottomAnimationContainer && (
        <div
          {...customAttributesProps}
          ref={bottomRef}
          className={bottomAnimationContainer}
        />
      )}
      {!!leftAnimationContainer && (
        <div
          {...customAttributesProps}
          ref={leftRef}
          className={leftAnimationContainer}
        />
      )}
      <div
        {...customAttributesProps}
        className={cssClasses.borderanimationcontainer}
      >
        {children}
      </div>
    </div>
  ) : (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{childrenWithProps}</>
  );
};
