import styled from 'styled-components';

import { getStyles } from '@/utils';

import { InputPhoneStateProps } from './types';

// affix
type AffixStyledProps = {
  styles?: InputPhoneStateProps;
};

type AffixIconWrapperStyledProps = {
  styles?: InputPhoneStateProps;
};

export const AffixStyled = styled.div<AffixStyledProps>`
  ${({ styles }) => getStyles(styles?.affixContainer)};
`;

export const AffixIconWrapperStyled = styled.div<AffixIconWrapperStyledProps>`
  ${({ styles }) => getStyles(styles?.affixIconContainer)};
`;
