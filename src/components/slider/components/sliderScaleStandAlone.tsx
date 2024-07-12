import * as React from 'react';

import { useId } from '@/hooks';

import { SliderBaseStylesType } from '../types';
import { StyledScaleWrap, StyledScaledOption } from './sliderScaleStandAlone.styled';

export interface ISliderScaleStandAlone {
  showScale: boolean;
  scaleOffsets: number[];
  styles: SliderBaseStylesType;
}

/**
 * @description
 * SliderScaleStandAlone component is used to display a scale for the slider.
 */
export const SliderScaleStandAlone = ({
  showScale,
  scaleOffsets,
  styles,
}: ISliderScaleStandAlone): JSX.Element | null => {
  const uniqueTickmarksId = useId('tickmarks');
  if (!showScale) {
    return null;
  }
  return (
    <StyledScaleWrap id={uniqueTickmarksId} styles={styles}>
      {scaleOffsets.map((scaleElementOffset, i) => {
        return (
          <StyledScaledOption
            key={`${uniqueTickmarksId}_${i}`}
            scaleOffset={scaleElementOffset}
            styles={styles}
          />
        );
      })}
    </StyledScaleWrap>
  );
};
