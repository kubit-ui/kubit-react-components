import React from 'react';

import { Text } from '@/components/text/text';

import { TextComponentType } from '../../text/types/component';
import { TextDecorationType } from '../../text/types/decoration';

/**
 * @description
 * IOptionSlice is used to create a slice of an option.
 * @interface IOptionSlice
 * @internal
 */
interface IOptionSlice {
  variant?: string;
  color?: string;
  weight?: number;
  decoration?: TextDecorationType;
  component?: TextComponentType;
  dataTestId?: string;
}

/**
 * @description
 * OptionLabelSlice component is used to render the label of an option.
 * @param {React.PropsWithChildren<IOptionSlice>} props
 * @returns {JSX.Element | null}
 * @constructor
 */
export const OptionLabelSlice = ({
  variant,
  color,
  weight,
  decoration,
  component,
  dataTestId,
  children,
}: React.PropsWithChildren<IOptionSlice>): JSX.Element | null => {
  if (!children) {
    return null;
  }
  return (
    <Text
      color={color}
      component={component}
      dataTestId={dataTestId}
      decoration={decoration}
      variant={variant}
      weight={weight}
    >
      {children}
    </Text>
  );
};
