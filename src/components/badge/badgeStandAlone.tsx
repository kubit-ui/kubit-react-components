import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';

import { Dot } from '@/components/dot/dot';
import { Text } from '@/components/text/text';
import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';
import { processIcon } from '@/lib/utils/process/processIcon/processIcon';
import { processText } from '@/lib/utils/process/processText/processText';

import type { BadgeStandAloneProps } from './types/badge';

/**
 * BadgeStandAlone is a reusable badge component that displays a label, optional icon, and a dot indicator.
 * It is typically used to highlight notifications, statuses, or counts in a UI.
 * The component is accessible, customizable via CSS classes, and supports forwarding refs for integration with parent components.
 *
 * @example
 * <BadgeStandAlone label="New" active={true} hasDot={true} />
 *
 * This component does not accept generics.
 */
export const BadgeStandAlone = forwardRef<unknown, BadgeStandAloneProps>(
  (
    {
      active,
      ariaLiveText,
      cssSizeClasses,
      cssVariantClasses,
      dot,
      hasDot,
      icon,
      label,
      labelIcon,
      onBadgeBlur,
      onClick,
      role,
      ...props
    },
    ref,
  ) => {
    const badgeButtonRef = useRef<HTMLButtonElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const customAttributes = {
      'data-active': !!active,
    };
    const customProps = pickCustomAttributes({
      ...props,
      customAttributes,
    });
    const customAttributesProps = pickCustomAttributes(customAttributes);
    const dataTestId = customProps['data-testid'] || 'badge';

    useImperativeHandle(ref, () => containerRef.current as HTMLDivElement, []);

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLButtonElement>) => {
        onBadgeBlur?.(e);
      },
      [onBadgeBlur],
    );

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(e);
      },
      [onClick],
    );

    return (
      <div
        ref={containerRef}
        className={`${cssVariantClasses?.badge} ${cssSizeClasses?.badge}`}
        data-testid={`${dataTestId}-container`}
        {...customAttributesProps}
      >
        <button
          ref={badgeButtonRef}
          className={cssVariantClasses?.button}
          data-testid={dataTestId}
          role={role}
          type="button"
          onBlur={handleBlur}
          onClick={handleClick}
          {...customProps}
        >
          <span className={cssVariantClasses?.dotcontainer}>
            {!!dot && !!hasDot && (
              <span aria-hidden={true} className={cssVariantClasses?.dot}>
                <Dot {...dot} />
              </span>
            )}
            <ElementOrIcon
              className={`${cssVariantClasses?.icon} ${cssSizeClasses?.icon}`}
              {...processIcon(icon)}
              customAttributes={customAttributes}
            />
          </span>
          {!!label && (
            <span
              aria-hidden={true}
              className={cssVariantClasses?.labelcontainer}
            >
              <Text
                additionalClasses={{
                  text: `${cssSizeClasses?.label} ${cssVariantClasses?.label}`,
                }}
                component="span"
                {...processText(label)}
                customAttributes={customAttributes}
              />
              <ElementOrIcon
                className={cssVariantClasses?.labelicon}
                rotate={active ? '180deg' : '0deg'}
                transitionDuration="0.2s"
                {...processIcon(labelIcon)}
                customAttributes={customAttributes}
              />
            </span>
          )}
          <screen-reader-only aria-live="polite">
            {ariaLiveText}
          </screen-reader-only>
        </button>
      </div>
    );
  },
);
