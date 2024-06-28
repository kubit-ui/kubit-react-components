import styled from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { ValidationStatusStylesProps } from './types';

type ValidationStatusProps = {
  styles: ValidationStatusStylesProps;
};

export const ValidationStatusFrame = styled.ul<ValidationStatusProps>`
  ${props => getStyles(props.styles.container)}
`;

export const ValidationStatusRow = styled.li<ValidationStatusProps>`
  ${props => getStyles(props.styles.row)}
`;
