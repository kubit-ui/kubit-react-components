import styled from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { BackToTopStateType, IBackTopButtonStyled } from './types';

export const BackToTopStyled = styled.button<IBackTopButtonStyled>`
  position: fixed;
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: unset;
  animation: fadeIn 0.5s ease-in both;
  ${props => getStyles(props.styles[BackToTopStateType.DEFAULT]?.container)}
  &:hover {
    ${props => getStyles(props.styles[BackToTopStateType.HOVER]?.container)}
  }
  &:active {
    ${props => getStyles(props.styles[BackToTopStateType.PRESSED]?.container)}
  }
`;
