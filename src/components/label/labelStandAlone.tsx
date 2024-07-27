import * as React from 'react';

import { Text } from '@/components/text/text';
import { useId } from '@/hooks/useId/useId';

import { TextComponentType } from '../text/types/component';
import type { ILabelStandAlone } from './types';

export const LabelStandAloneComponent = (
  {
    children,
    inputId,
    required,
    requiredSymbol,
    textVariant,
    weight,
    color,
    cursor,
    asteriskVariant,
    asteriskWeight,
    asteriskColor,
    dataTestId,
    id,
  }: ILabelStandAlone,
  ref: React.ForwardedRef<HTMLElement> | undefined | null
): JSX.Element => {
  const uniqueId = useId('label');

  const labelId = id ?? uniqueId;
  return (
    <Text
      ref={ref}
      color={color}
      component={TextComponentType.LABEL}
      cursor={cursor}
      dataTestId={dataTestId}
      htmlFor={inputId}
      id={labelId}
      variant={textVariant}
      weight={weight}
    >
      {children}
      {required && (
        <Text
          aria-hidden={true}
          color={asteriskColor}
          component={TextComponentType.SPAN}
          dataTestId={`${dataTestId}Required`}
          variant={asteriskVariant}
          weight={asteriskWeight}
        >
          {requiredSymbol}
        </Text>
      )}
    </Text>
  );
};

/**
 * @description
 * Label component to show labels
 * @internal
 */
export const LabelStandAlone = React.forwardRef(LabelStandAloneComponent);
