import styled, { css } from 'styled-components';

import { getStyles } from '@/utils/getStyles/getStyles';

import { ALIGN_TYPE, AlignTypeConfirmationMessage } from './types';
import { ConfirmationMessagePropsStylesType } from './types/confirmationMessageTheme';

type DescriptionPropsStyles = {
  align?: AlignTypeConfirmationMessage[ALIGN_TYPE];
};

type ConfirmationMessagePropsStyles = {
  styles?: ConfirmationMessagePropsStylesType;
};
const flexColumnMixin = css`
  display: flex;
  flex-direction: column;
`;

export const ConfirmationMessageStyled = styled.div<ConfirmationMessagePropsStyles>`
  width: 100%;
  height: 100%;
  ${flexColumnMixin}
  align-items: center;
  justify-content: center;
  ${props => getStyles(props.styles?.container)}
`;

export const TitleAndDescriptionStyled = styled.div<
  ConfirmationMessagePropsStyles & DescriptionPropsStyles
>`
  ${flexColumnMixin}
  align-self: ${({ align }) => align};
  ${props => getStyles(props.styles?.titleAndDescriptionContainer)}
`;

export const TitleTextStyled = styled.div<ConfirmationMessagePropsStyles & DescriptionPropsStyles>`
  ${flexColumnMixin}
  align-items: center;

  ${({ align }) =>
    align === ALIGN_TYPE.CENTER
      ? css`
          flex-direction: column;
        `
      : css`
          flex-direction: row;
          justify-content: ${align};
        `};
  ${props => getStyles(props.styles?.titleContainer)}
`;

export const DescriptionTextStyled = styled.div<
  ConfirmationMessagePropsStyles & DescriptionPropsStyles
>`
  ${flexColumnMixin}
  white-space: pre-line;
  ${({ align }) =>
    align === ALIGN_TYPE.CENTER
      ? css`
          align-items: ${align};
          text-align: ${align};
        `
      : css`
          align-items: ${align};
        `};
  ${props => getStyles(props.styles?.descriptionContainer)}
`;

export const ContentContainerStyled = styled.div<
  ConfirmationMessagePropsStyles & DescriptionPropsStyles
>`
  width: 100%;
  display: flex;
  justify-content: ${({ align }) => align};
  ${props => getStyles(props.styles?.content)}
`;
export const FooterWrapperStyled = styled.div<DescriptionPropsStyles>`
  width: 100%;
  ${({ align }) =>
    align === ALIGN_TYPE.CENTER
      ? css`
          justify-content: center;
        `
      : css`
          width: 100%;
        `};
`;

export const FooterStyled = styled.div.withConfig({
  shouldForwardProp: () => true,
})<{ customFooterStyles?: ConfirmationMessagePropsStylesType }>`
  bottom: 0;
  width: 100%;
  ${props => getStyles(props.customFooterStyles?.footer)}
`;
