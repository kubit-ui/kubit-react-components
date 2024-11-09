import styled from 'styled-components';

import { IThirdPartyAnimationStyled } from './types/thirdPartyAnimation';

export const ThirdPartyAnimationStyled = styled.span<IThirdPartyAnimationStyled>`
  display: block;
  width: ${props => props.$width};
  height: ${props => props.$height};
`;
