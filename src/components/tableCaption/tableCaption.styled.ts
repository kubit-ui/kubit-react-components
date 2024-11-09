import styled from 'styled-components';

import { srOnlyMixin } from '../../styles/mixins/srOnly.mixin';
import { getStyles, getTypographyStyles } from '../../utils/getStyles/getStyles';
import { TableCaptionPropsStylesType } from './types/tableCaptionTheme';

export const CaptionStyled = styled.caption<{
  $styles?: TableCaptionPropsStylesType;
}>`
  ${({ $styles }) => getStyles($styles?.container)};
  ${({ $styles }) => getTypographyStyles($styles?.container)};
  &[data-hidden='true'] {
    ${srOnlyMixin}
  }
`;
