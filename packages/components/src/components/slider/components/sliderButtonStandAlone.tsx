import type { ReactElement } from 'react';

import { Button } from '@/components/button/button';

import type { SliderButtonProps, SliderCssClasses } from '../types/slider';

interface SliderButtonStandAloneProps extends SliderButtonProps {
  cssClasses?: SliderCssClasses;
  customAttributes?: Record<string, string>;
}

/**
 * Standalone slider button component for increment/decrement controls.
 *
 * This component renders a button used to increase or decrease the slider value.
 * It returns null if required CSS classes are not provided.
 *
 * @example
 * ```tsx
 * <SliderButtonStandAlone
 *   content="+"
 *   onClick={() => {}}
 * />
 * ```
 */
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
