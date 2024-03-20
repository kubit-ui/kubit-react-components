import styled from 'styled-components';

import { getStyles, getTypographyStyles } from '@/utils';

import { TextAreaPropsThemeType } from './types';

type StylesType = {
  styles?: TextAreaPropsThemeType;
};

export const TextAreaContainerStyled = styled.div<StylesType>`
  ${({ styles }) => getStyles(styles?.container)};
`;

export const TextAreaBoxStyled = styled.div<StylesType & { height?: string }>`
  ${({ styles }) => getStyles(styles?.labelTextAreaContainer)};
  height: ${({ height }) => height};
`;

export const TextAreaStyled = styled.textarea<StylesType & { height?: string }>`
  resize: ${({ styles }) => styles?.textArea?.resize};
  ${({ styles }) => getStyles(styles?.textArea)};
  ${({ styles }) => getTypographyStyles(styles?.textArea)};
  height: ${({ height }) => height};
  &::placeholder {
    ${({ styles }) => getTypographyStyles(styles?.placeholder)};
  }
`;

export const TextAreaBottomStyled = styled.div<StylesType>`
  ${({ styles }) => getStyles(styles?.bottomContainer)};
`;

export const HelperTextAndErrorWrapperStyled = styled.div<StylesType>`
  ${({ styles }) => getStyles(styles?.helpMessageErrorContainer)};
`;

export const ErrorWrapperStyled = styled.div<StylesType>`
  ${({ styles }) => getStyles(styles?.errorContainer)};
`;

export const TitleWrapperStyled = styled.div<StylesType>`
  ${({ styles }) => getStyles(styles?.titleContainer)};
`;

export const LabelAndAdditionalInfoContainer = styled.div<StylesType>`
  display: flex;
  align-items: center;
  ${({ styles }) => getStyles(styles?.labelAndAdditionalInfoContainer)};
`;
