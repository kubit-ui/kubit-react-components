import styled, { css } from 'styled-components';

import { srOnlyMixin } from '../../styles/mixins/srOnly.mixin';
import { getStyles } from '../../utils/getStyles/getStyles';
import { StepperNumberOrientationType } from './types/orientation';
import { StepperNumberStateType } from './types/state';
import { StepperNumberStateStylesType } from './types/stepperNumberTheme';

export const StepperNumberContainerStyled = styled.section``;

export const StepsContainerStyled = styled.ol<{ styles?: StepperNumberStateStylesType }>`
  ${({ styles }) => getStyles(styles?.container)};
`;

export const BuilStepContainerStyled = styled.li<{
  $orientation: StepperNumberOrientationType;
  horizontalOrientationWidth?: string;
}>`
  ${({ $orientation, horizontalOrientationWidth }) =>
    $orientation === StepperNumberOrientationType.VERTICAL
      ? css`
          display: flex;
        `
      : css`
          width: ${horizontalOrientationWidth};
        `}
`;

export const StepContainerStyled = styled.span<{
  styles?: StepperNumberStateStylesType;
  state: StepperNumberStateType;
}>`
  ${({ styles, state }) => getStyles(styles?.[state]?.stepContainer)};
`;

export const StepCircleBarWrapperStyled = styled.span<{
  $orientation: StepperNumberOrientationType;
}>`
  display: flex;
  flex-direction: ${({ $orientation }) =>
    $orientation === StepperNumberOrientationType.VERTICAL ? 'column' : 'row'};
  align-items: center;
  flex: 1;
`;

export const StepCircleStyled = styled.span<{
  styles?: StepperNumberStateStylesType;
  state: StepperNumberStateType;
}>`
  ${({ styles, state }) => getStyles(styles?.[state]?.stepCircle)};
`;

export const StepBarStyled = styled.span<{
  styles?: StepperNumberStateStylesType;
  state: StepperNumberStateType;
}>`
  ${({ styles, state }) => getStyles(styles?.[state]?.stepBar)};
`;

export const StepperNumberContainerVerticalStep = styled.span<{
  styles?: StepperNumberStateStylesType;
  state: StepperNumberStateType;
  isLastStep: boolean;
}>`
  ${({ styles, state }) => getStyles(styles?.[state]?.stepNameContainer)};
  ${({ styles, state, isLastStep }) =>
    isLastStep && getStyles(styles?.[state]?.stepNameContainer?.isLast)};
`;

export const ScreenReaderTitle = styled.h2`
  ${srOnlyMixin}
`;

export const ScreenReaderCompletedStep = styled.span`
  ${srOnlyMixin}
`;
