import { CSSProp, css } from 'styled-components';

import {
  InputBasicStateProps,
  InputIconPosition,
  InputState,
  LABEL_TYPE,
} from '@/components/input/types';
import { InputStyledProps, LabelStyledProps } from '@/components/input/types/inputStyledPropsType';
import { getTypographyStyles } from '@/utils';
import { pxToRem } from '@/utils/pxToRem/pxToRem';

import { getPaddingLeftFromContainer, getPaddingRightFromContainer } from './input.mixin.utils';

const isStandardLabel = (labelType: string | undefined): boolean => {
  return labelType === LABEL_TYPE.STANDARD;
};

const labelFilledMixin = (margin?: string, width?: string): CSSProp => css`
  margin-top: ${margin};
  position: absolute;
  z-index: ${props => props.theme.Z_INDEX?.INTERN_1};
  // new
  white-space: nowrap;
  text-overflow: ellipsis;
  width: ${width};
  overflow: hidden;
`;

const labelFilledWithTransitionMixin = (width?: string): CSSProp => css`
  transform: translate(-0%, 50%);
  transition: all 0.2s linear;
  position: absolute;
  z-index: ${props => props.theme.Z_INDEX?.INTERN_1};
  // new
  white-space: nowrap;
  text-overflow: ellipsis;
  width: ${width};
  overflow: hidden;
`;

const labelOutlineMixin = (backgroundColor?: string): CSSProp => css`
  position: absolute;
  z-index: ${props => props.theme.Z_INDEX?.INTERN_1};
  background-color: ${backgroundColor};
`;

const labelStandardMixin = (): CSSProp => css`
  z-index: ${props => props.theme.Z_INDEX?.INTERN_1};
`;

export const getLeft = (styles?: InputBasicStateProps): string => {
  const paddingSplit = styles?.inputContainer?.padding?.split(' ') || [];
  switch (paddingSplit.length) {
    case 1:
      return paddingSplit[0];
    case 2:
    case 3:
      return paddingSplit[1];
    case 4:
      return paddingSplit[3];
    default:
      return '0';
  }
};

export const mapLabelTypeStyles = (props: LabelStyledProps): CSSProp => {
  const isOutlineLabel = ({ styles }: LabelStyledProps): CSSProp =>
    styles?.label?.type === LABEL_TYPE.OUTLINED
      ? css`
          padding-left: ${getLeft(styles)};
          display: flex;
        `
      : css`
          display: inline-block;
          width: 100%;
        `;

  const isFilledLabel = ({ styles, leftExtraStyles }: LabelStyledProps): CSSProp =>
    leftExtraStyles
      ? css`
          padding-left: ${getLeft(styles)};
        `
      : css``;

  const isFilledLabelWithAffixOut = ({ styles, topExtraStyles }: LabelStyledProps): CSSProp =>
    topExtraStyles
      ? css`
          /* We need to write the CSS code inside this CSS extension, which will only be applied to the web page when opening the Firefox browser. */
          /* Firefox need a explicit position when you use position:absolute; */
          @-moz-document url-prefix() {
            padding-left: ${getLeft(styles)};
          }
        `
      : css``;

  const labelTypeStyle = ({
    styles,
    $placeholder,
    state,
    $maxLabelSize,
  }: LabelStyledProps): CSSProp => {
    if (styles?.label?.type === LABEL_TYPE.OUTLINED) {
      return css`
        ${labelOutlineMixin(styles?.labelContainer?.background_color)}
      `;
    } else if (
      styles?.label?.type === LABEL_TYPE.FILLED &&
      (($placeholder &&
        [InputState.EMPTY, InputState.ERROR_EMPTY, InputState.DISABLED_EMPTY].includes(
          state as InputState
        )) ||
        [
          InputState.ACTIVE,
          InputState.FILLED,
          InputState.ERROR_FILLED,
          InputState.DISABLED_FILLED,
          InputState.DISABLED_FILLED_WITH_INFO,
          InputState.ERROR_ACTIVE,
          InputState.ERROR_FILLED_WITH_INFO,
        ].includes(state as InputState))
    ) {
      return css`
        ${labelFilledMixin(props.styles?.inputContainer?.margin_top, $maxLabelSize)}
        ${isFilledLabelWithAffixOut(props)};
      `;
    }
    return css`
      ${labelFilledWithTransitionMixin($maxLabelSize)}
    `;
  };

  return isStandardLabel(props.styles?.label?.type)
    ? css`
        position: relative;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: ${props.styles?.labelContainer?.justify_content};

        label {
          ${labelStandardMixin()}
        }
      `
    : css`
        position: absolute;
        ${isOutlineLabel(props)};
        ${isFilledLabel(props)};
        label {
          ${labelTypeStyle(props)}
        }
      `;
};

export const mapBaseStyles = ({
  state,
  labelType,
  placeholder,
  styles,
}: InputStyledProps): CSSProp => css`
  ${() =>
    !isStandardLabel(labelType) && placeholder && state !== InputState.ACTIVE
      ? css`
          padding: ${styles?.[InputState.ACTIVE]?.inputContainer?.padding};
        `
      : css`
          padding: ${styles?.[state]?.inputContainer?.padding};
        `}
  border-width: ${styles?.[state]?.inputContainer?.border_width};
  border-style: ${styles?.[state]?.inputContainer?.border_style};
  border-radius: ${styles?.[state]?.inputContainer?.border_radius};
  opacity: ${styles?.[state]?.inputContainer?.opacity};
`;

// deprecated - remove this `getIconPaddingDeprecated` function when icon prop is removed
export const getIconPaddingDeprecated = (
  position?: InputIconPosition,
  styles?: InputBasicStateProps
): CSSProp => {
  const iconWidth = styles?.inputIcon?.width;

  if (position === InputIconPosition.RIGHT) {
    const paddingRight = getPaddingRightFromContainer(styles?.inputContainer);
    return css`
      padding-right: calc(${paddingRight} + ${iconWidth});
    `;
  }
  const paddingLeft = getPaddingLeftFromContainer(styles?.inputContainer);
  return css`
    padding-left: calc(${paddingLeft} + ${iconWidth});
  `;
};

export const getIconPadding = (
  leftIcon?: boolean,
  rightIcon?: boolean,
  styles?: InputBasicStateProps
): CSSProp | undefined => {
  const iconWidth = styles?.inputIcon?.width;

  if (leftIcon && rightIcon) {
    const paddingLeft = getPaddingLeftFromContainer(styles?.inputContainer);
    const paddingRight = getPaddingRightFromContainer(styles?.inputContainer);
    return css`
      padding-left: calc(${paddingLeft} + ${iconWidth});
      padding-right: calc(${paddingRight} + ${iconWidth});
    `;
  } else if (leftIcon) {
    const paddingLeft = getPaddingLeftFromContainer(styles?.inputContainer);
    return css`
      padding-left: calc(${paddingLeft} + ${iconWidth});
    `;
  } else if (rightIcon) {
    const paddingRight = getPaddingRightFromContainer(styles?.inputContainer);
    return css`
      padding-right: calc(${paddingRight} + ${iconWidth});
    `;
  }
  return undefined;
};

export const mapVariableStyles = (styles?: InputBasicStateProps): CSSProp => css`
  ${getTypographyStyles(styles?.input)};
  background-color: ${styles?.inputContainer?.background_color};
  border-color: ${styles?.inputContainer?.border_color};
  ${() =>
    styles?.inputContainer?.border_bottom &&
    styles?.inputContainer?.border_bottom_color &&
    css`
      border-bottom: ${styles?.inputContainer?.border_bottom} solid
        ${styles?.inputContainer?.border_bottom_color};
    `};
  ::placeholder {
    ${getTypographyStyles(styles?.placeholder)};
  }
`;

// position the left content inside the input
export const innerLeftContentPosition = (): CSSProp => css`
  position: absolute;
  left: 0;
  z-index: ${props => props.theme.Z_INDEX?.INTERN_1};
`;

// position the right content inside the input
export const innerRightContentPosition = (): CSSProp => css`
  position: absolute;
  right: 0;
`;

// help message styles when label is not STANDARD and input has inner left content
export const helpMessageMargin = (marginLeft: number): CSSProp => css`
  div:has(> span) {
    margin-left: ${pxToRem(marginLeft)}rem;
  }
`;

// label is not STANDARD (absolute position) and input has inner left content
export const labelInTopStyles = (marginLeft: number): CSSProp => css`
  div:has(> label) {
    margin-left: ${marginLeft}rem;
    width: calc(100% - ${marginLeft}rem);
  }
  /* We need to write the CSS code inside this CSS extension, which will only be applied to the web page when opening the Firefox browser. */
  /* Firefox need a explicit position when you use position:absolute; */
  @-moz-document url-prefix() {
    label {
      left: calc(${marginLeft}rem);
      width: calc(100% - ${marginLeft}rem);
    }
  }
`;

// add margin to bottom content there is right external content
export const contentTopMargin = (marginRight: number): CSSProp => css`
  margin-right: ${marginRight}rem;
`;

// add margin to bottom content there is left or right external content
export const contentBottomMargin = (marginLeft: number, marginRight: number): CSSProp => css`
  margin-left: ${marginLeft}rem;
  margin-right: ${marginRight}rem;
`;

// add padding to input content when input has left inner content
export const inputPadding = (marginLeft: number, marginRight: number): CSSProp => css`
  input {
    padding-left: ${marginLeft}rem;
    padding-right: ${marginRight}rem;
  }
`;

export const inputFocusWidthMixin = css`
  outline-offset: 0.063rem;
  outline-width: 0.063rem;
`;
