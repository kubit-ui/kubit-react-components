/* eslint-disable @typescript-eslint/no-explicit-any */
import type { CSSProperties } from 'react';

import { Text } from '@/components/text/text';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type { TextComponentType } from '../../text/types/component';

interface OptionSliceProps extends DataAttributes {
  variant?: string;
  color?: string;
  weight?: number;
  decoration?: CSSProperties['textDecoration'];
  component?: TextComponentType;
  cssClasses?: string;
  customAttributes?: Record<string, string | boolean | any>;
}

export const OptionLabelSlice = ({
  children,
  component,
  cssClasses,
  customAttributes,
  ...props
}: React.PropsWithChildren<OptionSliceProps>): JSX.Element | null => {
  if (!children) {
    return null;
  }
  const customProps = pickCustomAttributes(props);
  return (
    <Text
      additionalClasses={{
        text: cssClasses,
      }}
      component={component}
      customAttributes={customAttributes}
      {...customProps}
    >
      {children}
    </Text>
  );
};
