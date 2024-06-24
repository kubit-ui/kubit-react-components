import * as React from 'react';
import { ReactElement } from 'react';

import { Button } from '@/components/button';

import { SliderButtonType, SliderIncDecButtonStylesType } from '../types';

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
