import * as React from 'react';

import { Text, TextComponentType } from '../../text';
import { SliderBaseStylesType, SliderStateType } from '../types';
import {
  StyledHelperTextWrapper,
  StyledLeftHelperText,
  StyledRightHelperText,
} from './sliderHelperTextStandAlone.styled';

interface ISliderHelperTextStandAlone {
  leftHelperText?: string;
  leftHelperTextId?: string;
  rightHelperText?: string;
  rightHelperTextId?: string;
  styles: SliderBaseStylesType;
  state: SliderStateType;
}

/**
 * @description
 * SliderHelperTextStandAlone component is used to display helper text for the slider.
 * It can be displayed on the left or right side of the slider.
 */
export const SliderHelperTextStandAlone = ({
  leftHelperText,
  leftHelperTextId,
  rightHelperText,
  rightHelperTextId,
  styles,
  state,
}: ISliderHelperTextStandAlone): JSX.Element | null => {
  if (!leftHelperText && !rightHelperText) {
    return null;
  }
  return (
    <StyledHelperTextWrapper styles={styles}>
      {leftHelperText && (
        <StyledLeftHelperText styles={styles}>
          <Text
            component={TextComponentType.SPAN}
            customTypography={styles?.states?.[state]?.helperText}
            id={leftHelperTextId}
          >
            {leftHelperText}
          </Text>
        </StyledLeftHelperText>
      )}
      {rightHelperText && (
        <StyledRightHelperText styles={styles}>
          <Text
            component={TextComponentType.SPAN}
            customTypography={styles?.states?.[state]?.helperText}
            id={rightHelperTextId}
          >
            {rightHelperText}
          </Text>
        </StyledRightHelperText>
      )}
    </StyledHelperTextWrapper>
  );
};
