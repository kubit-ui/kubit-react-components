import styled from 'styled-components';

import { IThirdPartyAnimationStyled } from './types';

export const ThirdPartyAnimationStyled = styled.div<IThirdPartyAnimationStyled>`
  width: ${props => props.$width};
  height: ${props => props.$height};
`;
