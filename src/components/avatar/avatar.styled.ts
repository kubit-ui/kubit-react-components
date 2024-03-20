import styled, { css } from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { AvatarBackgroundColor, AvatarContentStylesType } from './types';

type AvatarPropStylesType = {
  styles?: AvatarContentStylesType;
  image?: string;
  backgroundColor: AvatarBackgroundColor;
};

const getBorderStyle = (
  styles: AvatarContentStylesType | undefined,
  backgroundColor: AvatarBackgroundColor
) => css`
  border: ${`${styles?.containerBorderWidth} solid ${styles?.containerBackgroundColor?.[backgroundColor]?.borderColor}`};
`;

export const AvatarStyled = styled.span<AvatarPropStylesType>`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  ${props => getBorderStyle(props.styles, props.backgroundColor)};
  background-color: ${props =>
    props.styles?.containerBackgroundColor?.[props.backgroundColor]?.backgroundColor};
  background-image: url(${props => props.image});
  background-position: 50%, 50%;
  background-size: 100%;
  cursor: pointer;
  ${props => getStyles(props.styles?.linkContainer)}
`;

export const AvatarLinkStyled = styled.div<AvatarPropStylesType>`
  position: relative;
  ${props => getBorderStyle(props.styles, props.backgroundColor)};
  background-color: ${props =>
    props.styles?.containerBackgroundColor?.[props.backgroundColor]?.backgroundColor};
  background-image: url(${props => props.image});
  background-position: 50%, 50%;
  background-size: 100%;
  cursor: pointer;
  ${props => getStyles(props.styles?.linkContainer)}

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    &:focus {
      border-radius: 50%;
    }
  }
`;

export const AvatarDotStyled = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
`;
