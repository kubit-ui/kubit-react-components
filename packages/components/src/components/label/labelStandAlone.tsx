import { forwardRef, useId } from 'react';

import { Text } from '@/components/text/text';

import type { LabelStandAloneProps } from './types/label';

/**
 * LabelStandAlone component renders an accessible label element with optional required indicator.
 *
 * @component
 * @example
 * ```tsx
 * <LabelStandAlone inputId="email" required requiredSymbol="*">
 *   Email Address
 * </LabelStandAlone>
 * ```
 */
export const LabelStandAlone = forwardRef<
  HTMLParagraphElement,
  LabelStandAloneProps
>(
  (
    {
      asteriskColor,
      asteriskCssClasses,
      asteriskWeight,
      children,
      color,
      cursor,
      customAttributes,
      id,
      inputId,
      required,
      requiredSymbol,
      textCssClasses,
      weight,
      ...props
    },
    ref,
  ): JSX.Element => {
    const reactId = useId();
    const uniqueId = `label-${reactId.replace(/:/g, '')}`;
    const labelId = id ?? uniqueId;
    const dataTestId = props['data-testid'] || 'label';

    return (
      <Text
        ref={ref}
        additionalClasses={{
          text: textCssClasses,
        }}
        color={color}
        component="label"
        cursor={cursor}
        customAttributes={customAttributes}
        data-testid={dataTestId}
        htmlFor={inputId}
        id={labelId}
        weight={weight}
      >
        {children}
        {required && (
          <Text
            aria-hidden
            additionalClasses={{
              text: asteriskCssClasses,
            }}
            color={asteriskColor}
            component="span"
            data-testid={`${dataTestId}Required`}
            weight={asteriskWeight}
          >
            {requiredSymbol}
          </Text>
        )}
      </Text>
    );
  },
);

export { LabelStandAlone as Label };
