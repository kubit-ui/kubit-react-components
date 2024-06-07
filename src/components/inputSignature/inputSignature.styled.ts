import styled from 'styled-components';

import { CommonStyleType } from '@/types';
import { getStyles } from '@/utils';

type ComponentStyles = {
  styles: CommonStyleType;
};

export const InputSignatureContainerStyled = styled.div<ComponentStyles>`
  ${({ styles }) => getStyles(styles)}
`;

export const InputSignatureCanvasStyled = styled.canvas`
  height: 100%;
  width: 100%;
`;

export const InputSignaturePlaceholderStyled = styled.div<ComponentStyles>`
  ${({ styles }) => getStyles(styles)}
`;
