import styled from 'styled-components';

import { getStyles } from '@/utils';

import { OliveMenuGlobalStylesType } from './types/oliveMenuTheme';

type OliveMenuStylesProps = {
  styles: OliveMenuGlobalStylesType;
};

export const OliveMenuStyled = styled.div<OliveMenuStylesProps>`
  ${({ styles }) => getStyles(styles.container)};
`;

export const ButtonContainer = styled.div<OliveMenuStylesProps>`
  ${({ styles }) => getStyles(styles.buttonContainer)};
`;

export const ListboxStyled = styled.div<OliveMenuStylesProps>`
  ${({ styles }) => getStyles(styles.listOptionsContainer)};
`;
