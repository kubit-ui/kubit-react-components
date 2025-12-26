import type { ReactElement } from 'react';

import { Button } from '@/components/button/button';

import type { SliderButtonProps, SliderCssClasses } from '../types/slider';

interface SliderButtonStandAloneProps extends SliderButtonProps {
  cssClasses?: SliderCssClasses;
  customAttributes?: Record<string, string>;
}
export const SliderButtonStandAlone = ({
  content,
  cssClasses,
  customAttributes,
  ...props
}: SliderButtonStandAloneProps): ReactElement | null => {
  const variant = cssClasses?.decrement_button_variant;
  const size = cssClasses?.decrement_button_size;
  if (!variant || !size) {
    return null;
  }
  return (
    <Button
      {...props}
      additionalSizeClasses={size}
      additionalVariantClasses={variant}
    >
      {content}
    </Button>
  );
};
