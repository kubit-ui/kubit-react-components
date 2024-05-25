import styled, { css } from 'styled-components';

import { CommonStyleType, POSITIONS } from '@/types';
import { getStyles } from '@/utils/getStyles/getStyles';

import { ToggleStyleType } from './types';

type TogglePropsStyleType = {
  styles?: ToggleStyleType;
  hasThreePositions: boolean;
};

type CirclePropsType = {
  disabled?: boolean;
  togglePosition?: POSITIONS;
  showLabel?: boolean;
};

type TextType = {
  margin?: string;
};

type ToggleRadioSwitchType = {
  $height?: string;
  $width?: string;
};

const getTransform = (wrapperStyles, componentStyles, borderWidth, borderMultiple) => {
  if (wrapperStyles?.padding_right && wrapperStyles?.padding_left) {
    return css`
      transform: translateX(
        calc(
          ${wrapperStyles?.width} - ${componentStyles?.width} - ${wrapperStyles?.padding_left} -
            ${wrapperStyles?.padding_right} - ${borderWidth} * ${borderMultiple}
        )
      );
    `;
  }
  return css`
    transform: translateX(
      calc(${wrapperStyles?.width} - ${componentStyles?.width} - ${borderWidth} * ${borderMultiple})
    );
  `;
};

// function  to calculate the dot translate
const getTranslate = (
  togglePosition?: POSITIONS,
  wrapperStyles?: CommonStyleType,
  componentStyles?: CommonStyleType
) => {
  const themeBorder = (() =>
    !!wrapperStyles?.border_width ||
    (wrapperStyles?.border_width && wrapperStyles?.border_width !== '0'))();
  const borderWidth = themeBorder ? wrapperStyles?.border_width : '0.0625rem';
  const borderMultiple = themeBorder ? 2 : 1;

  if (togglePosition === POSITIONS.CENTER) {
    return css`
      transition: ${componentStyles?.transition};
      transform: translateX(calc((${wrapperStyles?.width} / 2) - (${componentStyles?.width} / 2)));
    `;
  } else if (togglePosition === POSITIONS.RIGHT) {
    return css`
      transition: ${componentStyles?.transition};
      ${getTransform(wrapperStyles, componentStyles, borderWidth, borderMultiple)}
    `;
  }
  return css`
    transition: ${componentStyles?.transition};
    transform: ${!themeBorder ? `translateX(${borderWidth});` : undefined};
  `;
};

export const ToggleWrapperStyled = styled.div<TogglePropsStyleType & CirclePropsType>`
  ${({ styles, hasThreePositions }) =>
    getStyles(hasThreePositions ? styles?.wrapperThreePositions : styles?.wrapper)}
  ${({ disabled }) =>
    disabled
      ? css`
          pointer-events: none;
        `
      : ''}
`;

export const ToggleRadioSwitchStyled = styled.input<ToggleRadioSwitchType>`
  opacity: 0;
  cursor: pointer;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  flex: 1;
  margin: 0;
`;
export const ToggleSpanSwitchStyled = styled.span<ToggleRadioSwitchType>`
  opacity: 0;
  cursor: pointer;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  flex: 1;
  margin: 0;
`;

export const SliderContainerStyled = styled.span<TogglePropsStyleType & CirclePropsType>`
  // Thumb styles
  ${({ styles }) => getStyles(styles?.thumb)}
  cursor: ${({ hasThreePositions }) => !hasThreePositions && 'pointer'};
  // transition styles
  ${({ togglePosition, styles, hasThreePositions }) =>
    getTranslate(
      togglePosition,
      hasThreePositions ? styles?.wrapperThreePositions : styles?.wrapper,
      styles?.thumb
    )}
`;

export const LabelWrapperStyled = styled(SliderContainerStyled)`
  z-index: ${props => props.theme.Z_INDEX?.INTERN_1};
  pointer-events: none;
  ${({ showLabel }) =>
    !showLabel &&
    css`
      opacity: 0;
    `}
`;

export const IconWrapperStyled = styled(SliderContainerStyled)`
  z-index: ${props => props.theme.Z_INDEX?.INTERN_1};
  pointer-events: none;
  ${({ showLabel }) =>
    !showLabel &&
    css`
      opacity: 0;
    `}
`;

export const TextLeftWrapperStyled = styled.div<TextType & CirclePropsType>`
  display: flex;
  left: ${({ margin }) => margin};
  position: absolute;
  cursor: pointer;
`;

export const TextRightWrapperStyled = styled.div<TextType & CirclePropsType>`
  display: flex;
  right: ${({ margin }) => margin};
  position: absolute;
  cursor: pointer;
`;
