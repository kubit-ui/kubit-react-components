import styled from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { TextCountPropsStylesType } from './types/textCountTheme';

type StylesType = {
  styles?: TextCountPropsStylesType;
  marginTop?: string;
};

export const TextCountContainerStyled = styled.div<StylesType>`
  ${({ styles }) => getStyles(styles?.wrapper)};
  // external prop to overwrite the margin-top
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop};`}
`;
