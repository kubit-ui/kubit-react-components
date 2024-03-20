import styled from 'styled-components';

import { CommonStyleType } from '@/types';
import { getStyles } from '@/utils/getStyles/getStyles';

import { TagStylesOptionPropsType } from './types/tagTheme';

type TagStyles = {
  height?: number;
  styles: CommonStyleType;
  optionStyles: TagStylesOptionPropsType;
  isArrowStyle?: boolean;
};

export const TagWrapperStyled = styled.div`
  display: flex;
`;

export const TagStyled = styled.div<TagStyles>`
  max-width: ${({ isArrowStyle }) => (isArrowStyle ? '95.5%' : '100%')};
  ${({ styles }) => getStyles(styles)};
`;
