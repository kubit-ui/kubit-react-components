import styled from 'styled-components';

import { getStyles } from '../../utils/getStyles/getStyles';
import { InputPhoneStateProps } from './types/inputPhoneTheme';

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
