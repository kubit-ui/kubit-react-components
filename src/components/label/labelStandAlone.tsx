import { forwardRef } from 'react';

import { Text } from '@/components/text/text';
import { RenderIf } from '@/lib/components/renderIf/renderIf';
import { useId } from '@/lib/hooks/useId/useId';

import type { LabelStandAloneProps } from './types/label';

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
    const uniqueId = useId('label');
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
        <RenderIf condition={required}>
          <Text
            additionalClasses={{
              text: asteriskCssClasses,
            }}
            aria-hidden={true}
            color={asteriskColor}
            component="span"
            data-testid={`${dataTestId}Required`}
            weight={asteriskWeight}
          >
            {requiredSymbol}
          </Text>
        </RenderIf>
      </Text>
    );
  },
);

export { LabelStandAlone as Label };
