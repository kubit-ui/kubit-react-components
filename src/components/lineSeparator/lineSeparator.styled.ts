import styled from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import {
  ILineSeparatorLabelStyled,
  ILineSeparatorLineStyled,
  LineSeparatorPositionType,
} from './types';

export const LineSeparatorRootWrapperStyled = styled.div<ILineSeparatorLineStyled>`
  position: relative;
  width: 100%;
  ${props => getStyles(props.styles.lineSeparatorRootWrapper)}
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    ${({ styles }) => styles.buildLineStyles?.(LineSeparatorPositionType.TOP)}
  }
`;

export const LineSeparatorTextWrapperStyled = styled.div<ILineSeparatorLabelStyled>`
  ${props => getStyles(props.styles.labelContainer)}
`;
