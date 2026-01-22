import { type ForwardedRef, forwardRef } from 'react';

import { ButtonStandAlone } from '@/components/button/buttonStandAlone';
import { CustomComponent } from '@/lib/components/customComponent/customComponent';
import { POSITIONS } from '@/lib/types/positions/positions';
import { STATES } from '@/lib/types/states/states';
import { classNames } from '@/lib/utils/classNames/classNames';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { LinkAsButtonStandAloneProps } from '../types/link';

/**
 * Standalone link-as-button component for rendering links styled as buttons.
 *
 * This component renders a link that appears and behaves like a button,
 * combining navigation functionality with button visual styling.
 *
 * @example
 * ```tsx
 * <LinkAsButtonStandAlone
 *   href="/page"
 *   variant="primary"
 * >
 *   Go to page
 * </LinkAsButtonStandAlone>
 * ```
 */
export const LinkAsButtonStandAlone = forwardRef(
  (
    {
      ['aria-label']: ariaLabel,
      ['aria-labelledby']: ariaLabelledBy,
      ariaLabelText,
      children,
      component,
      cssLinkAsButtonClasses,
      cssSizeClasses,
      cssVariantClasses,
      fullWidth,
      iconPosition,
      minWidth,
      onClick,
      rel,
      role,
      state,
      target,
      url,
      ...props
    }: LinkAsButtonStandAloneProps,
    ref: ForwardedRef<HTMLElement> | undefined,
  ): JSX.Element => {
    const dataTestId = props['data-testid'] || 'link-as-button';
    const customProps = pickCustomAttributes(props);

    return (
      <div
        className={cssLinkAsButtonClasses?.link_as_button}
        data-kbt-full-width={fullWidth}
        data-testid={dataTestId}
        {...customProps}
      >
        <CustomComponent
          ref={ref}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          component={component}
          data-testid="link"
          decoration="none"
          isDisabled={state === STATES.DISABLED}
          rel={rel}
          role={role}
          target={target}
          url={url}
          onClick={onClick}
        >
          <span
            aria-label={ariaLabelText}
            {...props}
            className={classNames(
              cssSizeClasses?.button,
              cssVariantClasses?.button,
            )}
            style={{
              flexDirection:
                iconPosition === POSITIONS.LEFT ? 'row' : 'row-reverse',
              minWidth: minWidth,
              width: fullWidth ? '100%' : 'auto',
            }}
          >
            <ButtonStandAlone {...props}>{children}</ButtonStandAlone>
          </span>
        </CustomComponent>
      </div>
    );
  },
);
