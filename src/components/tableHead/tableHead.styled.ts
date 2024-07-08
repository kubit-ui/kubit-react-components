import styled from 'styled-components';

import { srOnlyMixin } from '@/styles';
import { getStyles, getTypographyStyles } from '@/utils';

import { TableHeadPropsStylesType } from './types';

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
