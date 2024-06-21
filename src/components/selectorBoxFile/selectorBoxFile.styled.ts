import styled from 'styled-components';

// mixins
import { srOnlyMixin } from '@/styles/mixins/srOnly.mixin';
import { getStyles } from '@/utils/getStyles/getStyles';

import { SelectorBoxFilePropsStylesType, SelectorBoxFileStateType } from './types';

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

export const ContainerBoxStyled = styled.label<{
  styles: SelectorBoxFilePropsStylesType;
  state: SelectorBoxFileStateType;
}>`
  ${({ styles, state }) => getStyles(styles?.states?.[state]?.containerBoxContainer)}
  &[data-focus='true'] {
    ${({ theme }) => theme.FOCUS_STYLES};
  }
`;

export const ContainerBoxTextWrapper = styled.span<{
  styles: SelectorBoxFilePropsStylesType;
  state: SelectorBoxFileStateType;
}>`
  word-break: break-word;
  ${({ styles, state }) => getStyles(styles?.states?.[state]?.containerBoxTextsContainer)}
`;

export const ActionIconAndActionTextContainerStyled = styled.div<{
  styles: SelectorBoxFilePropsStylesType;
  state: SelectorBoxFileStateType;
}>`
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
