import styled from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { DividerEmbebed, DividerVariantStylesProps } from './types';

interface IDividerStyled {
  styles: DividerVariantStylesProps;
}

const getTokens = (styles?: DividerVariantStylesProps, embebed?: DividerEmbebed) => {
  const embebedTokens = styles?.embebed && embebed ? styles.embebed[embebed] : {};
  const combineStyles = { ...styles?.container, ...embebedTokens };

  return getStyles(combineStyles);
};

export const DividerStyled = styled.div<IDividerStyled & { embebed?: DividerEmbebed }>`
  ${props => getTokens(props.styles, props.embebed)}
  height: auto;
`;

export const DividerRowStyled = styled.div<IDividerStyled>`
  ${props => getStyles(props.styles?.row)}
`;

export const DividerRowLabelIconGroupStyled = styled.div<IDividerStyled>`
  ${props => getStyles(props.styles?.labelIconContainer)}
`;
