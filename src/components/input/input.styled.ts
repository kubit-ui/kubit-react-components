import styled, { css } from 'styled-components';

// mixins
import {
  getIconPadding,
  getIconPaddingDeprecated,
  inputFocusWidthMixin,
  mapBaseStyles,
  mapLabelTypeStyles,
  mapVariableStyles,
} from '@/styles/mixins';
import { getStyles } from '@/utils/getStyles/getStyles';

import { InputCounterStateProps } from '../inputCounter/types/inputCounterTheme';
import { InputIconPosition, InputState } from './types';
import {
  ErrorMessageStyledProps,
  HelpMessageStyledProps,
  InformationAssociatedStyledProps,
  InputIconStyledProps,
  InputStyledProps,
  InputWrapperStyledProps,
  LabelStyledProps,
  LoaderStyledProps,
  TitleStyledProps,
  TopContentWrapperStyledProps,
} from './types/inputStyledPropsType';

// Component styles
export const TitleWrapperStyled = styled.div.withConfig({
  shouldForwardProp: () => true,
})<TitleStyledProps>`
  margin-bottom: ${({ $titleStyles }) => $titleStyles?.titleContainer?.margin_bottom};
`;

export const LabelWrapperStyled = styled.div<LabelStyledProps>`
  ${mapLabelTypeStyles}
`;

export const InformationAssociatedWrapperStyled = styled.div<InformationAssociatedStyledProps>`
  flex-direction: ${({ iconPosition }) =>
    iconPosition === InputIconPosition.RIGHT ? 'row-reverse' : 'row'};
  ${({ styles }) => getStyles(styles?.informationAssociatedContainer)};
`;

export const InfoAssociatedTextAndDecorativeStyled = styled.div<InformationAssociatedStyledProps>`
  ${({ styles }) => getStyles(styles?.informationAssociatedTextAndDecorativeContainer)};
`;

export const InfoAssociatedButtonStyled = styled.div<InformationAssociatedStyledProps>``;

export const InputErrorAndHelpMessageWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputErrorStyled = styled.div<ErrorMessageStyledProps>`
  ${({ styles }) => getStyles(styles?.errorMessageContainer)};

  p {
    display: flex;
  }
`;

export const ErrorIconWrapperStyled = styled.span<ErrorMessageStyledProps>`
  ${({ styles }) => getStyles(styles?.errorMessageIconContainer)};
`;

export const HelpMessageWrapperStyled = styled.div<HelpMessageStyledProps>`
  ${({ align }) =>
    !align &&
    css`
      margin-left: auto;
    `};
  ${({ styles }) => getStyles(styles?.helpMessageContainer)};
`;

export const TextCounterStyled = styled.div<{ styles?: InputCounterStateProps }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${({ styles }) => getStyles(styles?.textCounterContainer)};
`;

export const LoaderWrapperStyled = styled.div<LoaderStyledProps>`
  ${({ styles }) => getStyles(styles?.loaderContainer)};
`;

export const InputIconStyled = styled.div<InputIconStyledProps>`
  ${({ iconPosition, styles }) => css`
    ${getStyles(
      iconPosition === InputIconPosition.RIGHT
        ? styles?.inputIconContainerRight
        : styles?.inputIconContainer
    )};
  `}
`;

// Input Styles
export const TopContentWrapperStyled = styled.div<TopContentWrapperStyledProps>`
  ${({ styles }) => getStyles(styles?.topContentContainer)};
`;

export const BottomContentWrapperStyled = styled.div<{ isExpanded?: boolean }>`
  ${({ isExpanded }) =>
    isExpanded &&
    css`
      display: none;
    `}
`;

export const MessagesAndCounterWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RightContentWrapperStyled = styled.div``;

export const LeftContentWrapperStyled = styled.div``;

export const InputStyled = styled.input<InputStyledProps>`
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-ms-reveal {
    display: none;
  }

  width: 100%;
  box-sizing: border-box;
  ${mapBaseStyles}

  &:not(:placeholder-shown) {
    ${({ styles }) => mapVariableStyles(styles?.[InputState.FILLED])}
    ${({ icon, iconPosition, leftIcon, rightIcon, styles, state }) =>
      icon
        ? getIconPaddingDeprecated(iconPosition, styles?.[state])
        : getIconPadding(!!leftIcon?.icon, !!rightIcon?.icon, styles?.[state])}
  }

  &:placeholder-shown {
    ${({ styles }) => mapVariableStyles(styles?.[InputState.EMPTY])}
    ${({ icon, iconPosition, leftIcon, rightIcon, styles, state }) =>
      icon
        ? getIconPaddingDeprecated(iconPosition, styles?.[state])
        : getIconPadding(!!leftIcon?.icon, !!rightIcon?.icon, styles?.[state])}
  }

  &:disabled {
    ${({ styles, state }) => mapVariableStyles(styles?.[state])}
  }

  &:is([aria-invalid='true']) {
    ${({ styles, state }) => mapVariableStyles(styles?.[state])}
  }

  &:focus {
    ${({ styles, state }) => mapVariableStyles(styles?.[state])}
  }

  &:focus-visible {
    ${inputFocusWidthMixin}
  }

  &[data-truncate='true'] {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  ${({ cursorPointer }) =>
    cursorPointer &&
    `
    cursor: ${cursorPointer};
  `}

  padding-left: ${({ styles, state, leftIcon }) =>
    leftIcon && styles?.[state]?.inputContainer?.padding_left};
  box-shadow: ${({ styles, state }) => styles?.[state]?.inputContainer?.box_shadow};
  ${({
    theme: {
      MEDIA_QUERIES: { onlyDesktop, onlyTablet, onlyMobile },
    },
    styles,
    state,
  }) => css`
    ${onlyDesktop} {
      caret-color: ${styles?.[state]?.inputCaretColor?.DESKTOP};
    }
    ${onlyTablet} {
      caret-color: ${styles?.[state]?.inputCaretColor?.TABLET};
    }
    ${onlyMobile} {
      caret-color: ${styles?.[state]?.inputCaretColor?.MOBILE};
    }
  `};
`;

export const InputWrapperStyled = styled.div<InputWrapperStyledProps>`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  ${({ styles }) => getStyles(styles?.inputWrapperContainer)};
  /* to avoid "-internal-autofill-selected" style to be applied */
  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition:
      background-color 600000s 0s,
      color 600000s 0s;
  }
`;
