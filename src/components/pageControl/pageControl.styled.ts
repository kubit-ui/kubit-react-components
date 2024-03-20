import styled from 'styled-components';

import { getStyles } from '@/utils';

// enums
import { PageControlState } from './types';
import {
  ArrowsControlVariantStylesType,
  PageControlVariantStylesType,
} from './types/pageControlTheme';

type ComponentStylesProps = {
  styles: PageControlVariantStylesType;
};

type ComponentStateProps = {
  state: PageControlState;
};

export const PageControlContainer = styled.div<ComponentStylesProps>`
  ${({ styles }) => getStyles(styles.container)};
`;

export const DotsWrapper = styled.div<ComponentStylesProps>`
  ${({ styles }) => getStyles(styles.dotsContainer)};
`;

export const PageControlDot = styled.div<ComponentStylesProps & ComponentStateProps>`
  ${({ styles, state }) => getStyles(styles?.[state]?.pageDot)};
`;

export const LeftArrowControlWrapperStyled = styled.div<{
  arrowsControlStyles: ArrowsControlVariantStylesType;
}>`
  line-height: 0;
  ${({ arrowsControlStyles }) => getStyles(arrowsControlStyles.leftArrowControlContainer)};
`;

export const RightArrowControlWrapperStyled = styled.div<{
  arrowsControlStyles: ArrowsControlVariantStylesType;
}>`
  line-height: 0;
  ${({ arrowsControlStyles }) => getStyles(arrowsControlStyles.rightArrowControlContainer)};
`;
