import styled, { css, keyframes } from 'styled-components';

import { inputFocusWidthMixin } from '@/styles/mixins';
import { getStyles, getTypographyStyles } from '@/utils';

import { InputDigitSequenceStyles } from './types';

export const ParentContainer = styled.div<{
  styles?: InputDigitSequenceStyles;
}>`
  display: flex;
  flex-direction: column;
  ${({ styles }) => getStyles(styles?.rootContainer)};
`;

export const TitleTooltipContainer = styled.div<{
  styles?: InputDigitSequenceStyles;
}>`
  ${({ styles }) => getStyles(styles?.titleTooltipContainer)};
`;

export const AnimationInputsContainer = styled.div<{
  styles?: InputDigitSequenceStyles;
}>`
  ${({ styles }) => getStyles(styles?.animationInputsContainer)};
`;

type IncreaseLabelHeightType = {
  height?: string;
};

const increaseLabelHeight = (props: IncreaseLabelHeightType) =>
  keyframes`
  0% {
    height: 0rem;
  }
  100% {
    height: ${props.height};
  }
`;

export const InputDigitsContainerAnimated = styled.div<{
  styles?: InputDigitSequenceStyles;
  animated: boolean;
  boxesAnimationDone: boolean;
}>`
  display: flex;
  align-items: end;
  ${({ styles }) => getStyles(styles?.inputDigitsContainer)};
  ${({ animated }) =>
    animated &&
    css`
      p,
      label {
        height: 0rem;
        overflow: hidden;
      }
    `};
  ${({ boxesAnimationDone, styles }) =>
    boxesAnimationDone &&
    css`
      p,
      label {
        animation: ${increaseLabelHeight({ height: styles?.inputNumber?.line_height })} 250ms
          forwards;
      }
    `};
`;

export const InputDigitsContainer = styled.div<{
  styles?: InputDigitSequenceStyles;
  animated: boolean;
  boxesAnimationDone: boolean;
  labelAnimationDone: boolean;
}>`
  display: flex;
  align-items: end;
  ${({ styles }) => getStyles(styles?.inputDigitsContainer)};
  ${({ animated }) =>
    animated &&
    css`
      visibility: hidden;
      p,
      label {
        height: 0rem;
        overflow: hidden;
      }
    `};
  ${({ boxesAnimationDone, styles }) =>
    boxesAnimationDone &&
    css`
      p,
      label {
        animation: ${increaseLabelHeight({ height: styles?.inputNumber?.line_height })} 250ms
          forwards;
      }
    `};

  ${({ labelAnimationDone }) =>
    labelAnimationDone &&
    css`
      visibility: visible;
    `};
`;

type IncreaseGapType = {
  row_gap?: string;
  gap?: string;
};

const increaseGap = (props: IncreaseGapType) => keyframes`
  0% {
    row-gap: 0rem;
    gap: 0rem;
  }
  100% {
    gap: ${props.gap};
    row-gap: ${props.row_gap};
  }
`;

export const InputDigitAndNumberContainer = styled.div<{
  styles?: InputDigitSequenceStyles;
  animated: boolean;
  boxesAnimationDone: boolean;
}>`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  ${({ styles }) => getStyles(styles?.inputDigitAndNumberContainer)};
  ${({ animated }) =>
    animated &&
    css`
      row-gap: 0rem;
      gap: 0rem;
    `};
  ${({ boxesAnimationDone, styles }) =>
    boxesAnimationDone &&
    css`
      animation: ${increaseGap({
          row_gap: styles?.inputDigitAndNumberContainer?.row_gap,
          gap: styles?.inputDigitAndNumberContainer?.gap,
        })}
        250ms forwards;
    `};
`;

export const InputDigitStyled = styled.input<{
  styles?: InputDigitSequenceStyles;
  error?: boolean;
}>`
  text-align: center;
  border-style: solid;
  ${({ styles }) => getTypographyStyles(styles?.inputDigitText)};
  ${({ styles }) => getStyles(styles?.inputDigitContainer)};

  ${({ styles, error }) => error && getStyles(styles?.inputDigitContainerError)};

  :focus {
    ${({ styles }) => getStyles(styles?.inputDigitContainerfocus)};
  }
  &:focus-visible {
    ${inputFocusWidthMixin}
  }

  &[type='password'] {
    ${({ styles }) => getTypographyStyles(styles?.inputDigitTextTypePassword)}
  }
`;

export const IconAndErrorTextContainer = styled.div<{
  styles?: InputDigitSequenceStyles;
}>`
  display: flex;
  ${({ styles }) => getStyles(styles?.errorContainer)};
`;

export const HelpTextContainerStyled = styled.div<{
  styles?: InputDigitSequenceStyles;
}>`
  ${({ styles }) => getStyles(styles?.helpTextContainer)};
`;

export const ButtonContainer = styled.div<{
  styles?: InputDigitSequenceStyles;
}>`
  ${({ styles }) => getStyles(styles?.actionButtonContainer)};
`;
