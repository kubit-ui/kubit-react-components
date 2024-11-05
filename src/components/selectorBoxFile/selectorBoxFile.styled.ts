import styled from 'styled-components';

// mixins
import { srOnlyMixin } from '@/styles/mixins/srOnly.mixin';
import { getStyles } from '@/utils/getStyles/getStyles';

import { SelectorBoxFilePropsStylesType, SelectorBoxFileStateType } from './types';

type SelectorBoxFileStyles = {
  styles: SelectorBoxFilePropsStylesType;
  state: SelectorBoxFileStateType;
};

export const WrapperStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainerBoxWrapperStyled = styled.div<{
  styles: SelectorBoxFilePropsStylesType;
}>`
  ${({ styles }) => getStyles(styles.header)}
`;

export const HeaderTitleSubtitleWrapperStyled = styled.div<{
  styles: SelectorBoxFilePropsStylesType;
}>`
  ${({ styles }) => getStyles(styles.titleSubtitleContainer)}
`;

export const HeaderSubtitleTooltipWrapperStyled = styled.div`
  > *:nth-child(1) {
    display: inline;
  }
  > *:nth-child(2) {
    vertical-align: middle;
  }
`;

export const HeaderDescriptionWrapperStyled = styled.div<{
  styles: SelectorBoxFilePropsStylesType;
}>`
  ${({ styles }) => getStyles(styles.descriptionContainer)}
`;

export const SubtitleTooltipIconWrapperStyled = styled.div<{
  styles: SelectorBoxFilePropsStylesType;
}>`
  ${({ styles }) => getStyles(styles.tooltipIconContainer)}
`;

export const BorderContainerStyled = styled.div<SelectorBoxFileStyles>`
  ${({ styles, state }) => getStyles(styles?.states?.[state]?.borderAnimationContainer)}
`;

export const ContainerBoxStyled = styled.label<SelectorBoxFileStyles>`
  ${({ styles, state }) => getStyles(styles?.states?.[state]?.containerBoxContainer)}
  &[data-focus='true'] {
    ${({ theme }) => theme.FOCUS_STYLES};
  }
`;

export const ContainerBoxTextWrapper = styled.span<SelectorBoxFileStyles>`
  word-break: break-word;
  ${({ styles, state }) => getStyles(styles?.states?.[state]?.containerBoxTextsContainer)}
`;

export const ActionIconAndActionTextContainerStyled = styled.span<SelectorBoxFileStyles>`
  ${({ styles, state }) => getStyles(styles?.states?.[state]?.actionIconAndActionTextContainer)}
`;

export const ContainerBoxActionDescriptionTextWrapper = styled.span`
  display: flex;
  flex-direction: column;
`;

export const HiddenInputFile = styled.input`
  ${srOnlyMixin}
`;

export const ErrorWrapperStyled = styled.div<{
  styles: SelectorBoxFilePropsStylesType;
}>`
  ${({ styles }) => getStyles(styles.errorMessageContainer)}
`;

// Animations
export const AnimationContainerStyled = styled.div<SelectorBoxFileStyles>`
  ${({ styles, state }) => getStyles(styles?.states?.[state]?.animationContainer)}
  &[data-focus='true'] {
    ${({ theme }) => theme.FOCUS_STYLES};
  }
`;

export const TopAnimationStyled = styled.div<SelectorBoxFileStyles>`
  ${({ styles, state }) => getStyles(styles?.states?.[state]?.topAnimationContainer)}
`;

export const RightAnimationStyled = styled.div<SelectorBoxFileStyles>`
  ${({ styles, state }) => getStyles(styles?.states?.[state]?.rightAnimationContainer)}
`;

export const BottomAnimationStyled = styled.div<SelectorBoxFileStyles>`
  ${({ styles, state }) => getStyles(styles?.states?.[state]?.bottomAnimationContainer)}
`;

export const LeftAnimationStyled = styled.div<SelectorBoxFileStyles>`
  ${({ styles, state }) => getStyles(styles?.states?.[state]?.leftAnimationContainer)}
`;
