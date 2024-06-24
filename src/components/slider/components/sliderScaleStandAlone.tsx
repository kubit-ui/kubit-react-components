import * as React from 'react';

import { useId } from '@/hooks';

import { SliderBaseStylesType } from '../types';
import { StyledScaleWrap, StyledScaledOption } from './sliderScaleStandAlone.styled';

export interface ISliderScaleStandAlone {
  showScale: boolean;
  scaleArray: number[];
  max: number;
  min: number;
  step: number;
  scaleCount: number;
  styles: SliderBaseStylesType;
}

/**
 * @description
 * SliderScaleStandAlone component is used to display a scale for the slider.
 */
export const SliderScaleStandAlone = ({
  showScale,
  scaleArray,
  max,
  min,
  step,
  scaleCount,
  styles,
}: ISliderScaleStandAlone): JSX.Element | null => {
  const uniqueTickmarksId = useId('tickmarks');
  if (!showScale) {
    return null;
  }
  return (
    <StyledScaleWrap id={uniqueTickmarksId} styles={styles}>
      {scaleArray.map(i => {
        let scaleOffset = 0;
        if (i === scaleArray.length - 1) {
          scaleOffset = 100;
        } else if (i > 0) {
          scaleOffset = (((1 - ((max - min) % step) / (max - min)) * 100) / scaleCount) * i;
        }
        return (
          <StyledScaledOption
            key={`${uniqueTickmarksId}_${i}`}
            scaleOffset={scaleOffset}
            styles={styles}
          />
        );
      })}
    </StyledScaleWrap>
  );
};
