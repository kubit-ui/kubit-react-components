import styled from 'styled-components';

import { srOnlyMixin } from '../../styles/mixins/srOnly.mixin';
import { getStyles, getTypographyStyles } from '../../utils/getStyles/getStyles';
import { TableHeadPropsStylesType } from './types/tableHeadTheme';

export const THeadStyled = styled.thead<{
  $styles?: TableHeadPropsStylesType;
}>`
  ${({ $styles }) => getStyles($styles?.container)};
  ${({ $styles }) => getTypographyStyles($styles?.container)};
  &[data-sticky='true'] {
    position: sticky;
    top: 0;
  }
  &[data-hidden='true'] {
    ${srOnlyMixin}
  }
`;
