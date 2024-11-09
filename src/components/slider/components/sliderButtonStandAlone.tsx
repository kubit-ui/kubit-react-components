import React, { ReactElement } from 'react';

import { Button } from '@/components/button/button';

import { SliderButtonType } from '../types/slider';
import { SliderIncDecButtonStylesType } from '../types/sliderTheme';

interface ISliderButtonStandAlone extends SliderButtonType {
  styles?: SliderIncDecButtonStylesType;
}

export const SliderButtonStandAlone = (props: ISliderButtonStandAlone): ReactElement | null => {
  const variant = props.variant ?? props.styles?.variant;
  const size = props.size ?? props.styles?.size;
  if (!variant || !variant) {
    return null;
  }
  return (
    <Button {...props} size={size} variant={variant}>
      {props.content}
    </Button>
  );
};
