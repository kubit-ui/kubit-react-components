import styled from 'styled-components';

import { getStyles } from '@/utils';

import { ListOptionsPropsStylesType } from './types';

export const ButtonStyled = styled.button``;

export const ListOptionsWrapperStyled = styled.div<{ styles: ListOptionsPropsStylesType }>`
  ${({ styles }) => getStyles(styles.parentContainer)}
`;

export const TitleWrapperStyled = styled.div<{ styles: ListOptionsPropsStylesType }>`
  ${({ styles }) => getStyles(styles.titleContainer)}
`;

export const OptionsWrapperStyled = styled.div<{ styles: ListOptionsPropsStylesType }>`
  ${({ styles }) => getStyles(styles.optionsContainer)}
`;
