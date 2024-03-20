import styled, { css } from 'styled-components';

import { getStyles } from '@/utils';

import {
  StepperNumberOrientationType,
  StepperNumberStateStylesType,
  StepperNumberStateType,
} from './types';

export const StepperNumberContainerStyled = styled.section``;

export const StepsContainerStyled = styled.ol<{ styles?: StepperNumberStateStylesType }>`
  ${({ styles }) => getStyles(styles?.container)};
`;

export const BuilStepContainerStyled = styled.li<{
  orientation: StepperNumberOrientationType;
  horizontalOrientationWidth?: string;
}>`
  ${({ orientation, horizontalOrientationWidth }) =>
    orientation === StepperNumberOrientationType.VERTICAL
      ? css`
          display: flex;
        `
      : css`
          width: ${horizontalOrientationWidth};
        `}
`;

export const StepContainerStyled = styled.div<{
  styles?: StepperNumberStateStylesType;
  state: StepperNumberStateType;
}>`
  ${({ styles, state }) => getStyles(styles?.[state]?.stepContainer)};
`;

export const StepCircleBarWrapperStyled = styled.div<{ orientation: StepperNumberOrientationType }>`
  display: flex;
  flex-direction: ${({ orientation }) =>
    orientation === StepperNumberOrientationType.VERTICAL ? 'column' : 'row'};
  align-items: center;
  flex: 1;
`;

export const StepCircleStyled = styled.div<{
  styles?: StepperNumberStateStylesType;
  state: StepperNumberStateType;
}>`
  ${({ styles, state }) => getStyles(styles?.[state]?.stepCircle)};
`;

export const StepBarStyled = styled.div<{
  styles?: StepperNumberStateStylesType;
  state: StepperNumberStateType;
}>`
  ${({ styles, state }) => getStyles(styles?.[state]?.stepBar)};
`;

export const StepperNumberContainerVerticalStep = styled.div<{
  styles?: StepperNumberStateStylesType;
  state: StepperNumberStateType;
  isLastStep: boolean;
}>`
  ${({ styles, state }) => getStyles(styles?.[state]?.stepNameContainer)};
  ${({ styles, state, isLastStep }) =>
    isLastStep && getStyles(styles?.[state]?.stepNameContainer?.isLast)};
`;
