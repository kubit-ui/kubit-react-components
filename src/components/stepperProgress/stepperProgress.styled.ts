import styled from 'styled-components';

import { getStyles } from '@/utils';

import { IStepperProgressStyled } from './types';

export const StepperProgressContainerStyled = styled.div<IStepperProgressStyled>`
  ${({ styles }) => getStyles(styles.container)};
`;

export const StepperProgressStyled = styled.progress<IStepperProgressStyled>`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  ${({ styles }) => getStyles(styles.progress)};

  &::-webkit-progress-bar {
    ${({ styles }) => getStyles(styles.progress?.webkitProgressBar)};
  }

  &::-webkit-progress-value {
    ${({ styles }) => getStyles(styles.progress?.webkitProgressValue)};
  }

  ::-moz-progress-bar {
    ${({ styles }) => getStyles(styles.progress?.mozProgressBar)};
  }
`;

export const StepperProgressHelpText = styled.div<IStepperProgressStyled>`
  ${({ styles }) => getStyles(styles.helpTextContainer)};
`;
