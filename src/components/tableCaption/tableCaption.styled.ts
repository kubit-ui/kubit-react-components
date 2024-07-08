import styled from 'styled-components';

import { srOnlyMixin } from '@/styles';
import { getStyles, getTypographyStyles } from '@/utils';

import { TableCaptionPropsStylesType } from './types';

export const CaptionStyled = styled.caption<{
  $styles?: TableCaptionPropsStylesType;
}>`
  ${({ $styles }) => getStyles($styles?.container)};
  ${({ $styles }) => getTypographyStyles($styles?.container)};
  &[data-hidden='true'] {
    ${srOnlyMixin}
  }
`;
