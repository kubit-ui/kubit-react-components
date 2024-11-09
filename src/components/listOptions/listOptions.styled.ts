import styled from 'styled-components';

import { getStyles } from '../../utils/getStyles/getStyles';
import { ListOptionsPropsStylesType } from './types/listOptionsTheme';

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
