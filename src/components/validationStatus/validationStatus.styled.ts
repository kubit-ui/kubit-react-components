import styled from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { ValidationStatusStylesProps } from './types';

type ValidationStatusProps = {
  styles: ValidationStatusStylesProps;
};

export const ValidationStatusFrame = styled.div<ValidationStatusProps>`
  ${props => getStyles(props.styles.container)}
`;

export const ValidationStatusRow = styled.div<ValidationStatusProps>`
  ${props => getStyles(props.styles.row)}
`;
