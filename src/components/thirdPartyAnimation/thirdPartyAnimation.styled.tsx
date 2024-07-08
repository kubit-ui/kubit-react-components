import styled from 'styled-components';

import { IThirdPartyAnimationStyled } from './types';

export const ThirdPartyAnimationStyled = styled.span<IThirdPartyAnimationStyled>`
  display: block;
  width: ${props => props.$width};
  height: ${props => props.$height};
`;
