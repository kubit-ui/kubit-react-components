import styled from 'styled-components';

import { CommonStyleType } from '../../types/styles/commonStyle';
import { getStyles } from '../../utils/getStyles/getStyles';

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
