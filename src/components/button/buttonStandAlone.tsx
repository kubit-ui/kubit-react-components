import { Children, type ForwardedRef, forwardRef, useMemo } from 'react';

import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';
import { POSITIONS } from '@/lib/types/positions/positions';
import { classNames } from '@/lib/utils/classNames/classNames';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';
import { processIconProp } from '@/lib/utils/process/processCommonProp';

import type { ButtonStandAloneProps } from './types/button';

/**
 * Low-level button component for rendering a styled button element.
 *
 * This component is responsible for rendering the actual `<button>` element with
 * the correct classes, icon, loader, and layout. It is used internally by higher-level
 * button components and is not intended to be used directly in most cases.
 *
 * It supports icons, loading state, full width, and custom alignment. The component
 * is flexible and can be themed via CSS classes.
 *
 * @example
 * ```tsx
 * <ButtonStandAlone loading icon={{ icon: <MyIcon /> }}>
 *   Save
 * </ButtonStandAlone>
 * ```
 *
 * @returns The rendered button element.
 */
export const ButtonStandAlone = forwardRef(
  (
    {
      alignText,
      children,
      cssSizeClasses,
      cssVariantClasses,
      disabled,
      form,
      fullWidth,
      icon,
      iconPosition,
      id,
      loader,
      loading,
      minWidth,
      onClick,
      role,
      tabIndex,
      title,
      type,
      ...props
    }: ButtonStandAloneProps,
    ref: ForwardedRef<HTMLButtonElement> | undefined | null,
  ): JSX.Element => {
    const dynamicVars = useMemo(() => {
      return cssSizeClasses?.dynamic_values({ $alignText: alignText || 'left' })
        .object;
    }, [alignText]);

    const customAttributes = {
      'data-content': Children.toArray(children)[0],
      'data-full-width': fullWidth,
      'data-loading': loading,
      'data-position': iconPosition || POSITIONS.LEFT,
    };
    const customProps = pickCustomAttributes({ ...props, customAttributes });

    return (
      <button
        ref={ref}
        className={classNames(
          cssSizeClasses?.button,
          cssVariantClasses?.button,
        )}
        data-testid="button"
        disabled={disabled}
        form={form}
        id={id}
        role={role}
        style={dynamicVars}
        tabIndex={tabIndex}
        title={title}
        type={type}
        onClick={onClick}
        {...customProps}
        {...customAttributes}
      >
        {!!loader && !!loading && (
          <span
            className={classNames(
              cssSizeClasses?.loader,
              cssVariantClasses?.loader,
            )}
          >
            {loader}
          </span>
        )}
        {!loading && (
          <>
            <ElementOrIcon
              {...processIconProp(icon)}
              className={classNames(
                cssSizeClasses?.icon,
                cssVariantClasses?.icon,
              )}
            />
            {children}
          </>
        )}
      </button>
    );
  },
);
