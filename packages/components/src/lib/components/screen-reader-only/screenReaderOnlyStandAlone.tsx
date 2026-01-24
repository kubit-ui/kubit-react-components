import { type ComponentPropsWithoutRef, forwardRef } from 'react';

import { classNames } from '@/lib/utils/classNames/classNames';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { ScreenReaderOnlyStandAloneProps } from './types/screenReaderOnly';

/**
 * ScreenReaderOnlyStandAlone is a component that renders content that is only visible to screen readers.
 * It uses absolute positioning and tiny dimensions to hide the content visually while keeping it accessible.
 *
 * @example
 * <ScreenReaderOnlyStandAlone>
 *   This text is only for screen readers
 * </ScreenReaderOnlyStandAlone>
 */
export const ScreenReaderOnlyStandAlone = forwardRef<
  HTMLSpanElement,
  ScreenReaderOnlyStandAloneProps
>(
  (
    { ariaAtomic, ariaLive, children, className, id, role, ...props },
    ref,
  ): JSX.Element => {
    const customProps = pickCustomAttributes(props);

    const combinedClassName = classNames('kbt-screen-reader-only', className);

    const ariaProps: ComponentPropsWithoutRef<'span'> = {};

    if (ariaLive !== undefined) {
      ariaProps['aria-live'] = ariaLive;
    }

    if (ariaAtomic !== undefined) {
      ariaProps['aria-atomic'] = ariaAtomic;
    }

    if (role !== undefined) {
      ariaProps.role = role;
    }

    return (
      <span
        ref={ref}
        className={combinedClassName}
        id={id}
        {...ariaProps}
        {...customProps}
      >
        {children}
      </span>
    );
  },
);

ScreenReaderOnlyStandAlone.displayName = 'ScreenReaderOnlyStandAlone';
