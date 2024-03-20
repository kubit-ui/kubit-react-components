import styled from 'styled-components';

import { getStyles } from '@/utils';

import { PageControlAutomatePropsStylesType } from './types';

type ComponentStylesProps = {
  styles: PageControlAutomatePropsStylesType;
};

export const PageControlAutomateContainerStyled = styled.div<ComponentStylesProps>`
  ${({ styles }) => getStyles(styles.container)};
`;

export const MediaButtonWrapperStyled = styled.div<ComponentStylesProps>`
  ${({ styles }) => getStyles(styles.mediaButtonContainer)};
`;

export const ArrowLeftWrapperStyled = styled.div<ComponentStylesProps>`
  ${({ styles }) => getStyles(styles.leftArrowContainer)};
`;

export const ArrowRightWrapperStyled = styled.div<ComponentStylesProps>`
  ${({ styles }) => getStyles(styles.rightArrowContainer)};
`;

export const IndicatorsContainerStyled = styled.div<ComponentStylesProps>`
  ${({ styles }) => getStyles(styles.indicatorsContainer)};
`;
