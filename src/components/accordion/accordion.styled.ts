import styled, { css } from 'styled-components';

import { CommonStyleType } from '@/types/styles';
import { getStyles } from '@/utils/getStyles/getStyles';

import { LineSeparatorLinePropsStylesType, LineSeparatorPositionType } from '../lineSeparator';

export interface IAccordionStyles {
  styles?: CommonStyleType;
  lineSeparatorLineStyles?: LineSeparatorLinePropsStylesType;
  displayOption?: string;
  $rotate?: boolean;
}

export const AccordionContainerStyled = styled.div<IAccordionStyles>`
  ${props => getStyles(props.styles)}
`;

export const AccordionDecorativeBackgroundStyled = styled.div<IAccordionStyles>`
  ${props => getStyles(props.styles)}
`;

export const AccordionHeaderExternalContainerStyled = styled.div<IAccordionStyles>`
  ${props => getStyles(props.styles)}
`;

export const AccordionHeaderInternalContainerStyled = styled.div<IAccordionStyles>`
  ${props => getStyles(props.styles)}
`;

export const AccordionHeaderMainContainerStyled = styled.div<IAccordionStyles>`
  ${props => getStyles(props.styles)}
`;

export const AccordionHeaderMainStyled = styled.div`
  ${({ theme: { MEDIA_QUERIES } }) => css`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    ${MEDIA_QUERIES?.onlyMobile} {
      flex-direction: column;
      justify-content: left;
      align-items: flex-start;
    }
  `}
  ${({ theme: { MEDIA_QUERIES } }) => css`
    ${MEDIA_QUERIES?.onlyMobile} {
      flex-direction: row;
      align-items: center;
    }
  `}
`;

export const AccordionHeaderTitleHeadlineStyled = styled.span`
  display: flex;
  width: 100%;
`;

export const AccordionTitleStyled = styled.span<IAccordionStyles>`
  ${props => getStyles(props.styles)}
`;

export const AccordionHeaderRightContentStyled = styled.div<IAccordionStyles>`
  ${props => getStyles(props.styles)}
`;

export const AccordionSubHeaderContainerStyled = styled.div<IAccordionStyles>`
  ${props => getStyles(props.styles)}
`;

export const AccordionTriggerStyled = styled.button<IAccordionStyles>`
  ${props => getStyles(props.styles)}
`;

export const AccordionTriggerLinkStyled = styled.div<IAccordionStyles>`
  ${props => getStyles(props.styles)}
`;

export const AccordionTriggerIconStyled = styled.span<IAccordionStyles>`
  ${({ $rotate }) =>
    $rotate &&
    css`
      svg {
        transform: rotate(180deg);
      }
    `};
  ${props => getStyles(props.styles)}
`;

export const AccordionTriggerIconLinkStyled = styled.button<IAccordionStyles>`
  cursor: pointer;
  ${({ $rotate }) =>
    $rotate &&
    css`
      svg {
        transform: rotate(180deg);
      }
    `};
  ${props => getStyles(props.styles)}
`;

export const AccordionContentStyled = styled.section<IAccordionStyles>`
  display: ${({ displayOption }) => displayOption};
  ${props => getStyles(props.styles)}
`;

export const LineSeparatorContainerStyled = styled.div<IAccordionStyles>`
  ${({ lineSeparatorLineStyles }) =>
    lineSeparatorLineStyles?.buildLineStyles?.(LineSeparatorPositionType.TOP)}
  ${props => getStyles(props.styles)}
`;

export const AccordionPanelStyled = styled.div<IAccordionStyles>`
  ${props => getStyles(props.styles)}
`;

export const AccordionFooterStyled = styled.div<IAccordionStyles>`
  border-top: ${({ styles }) =>
    `solid ${styles?.border_top_width || 0} ${styles?.border_top_color}`};
  ${props => getStyles(props.styles)}
`;

export const AccordionTitleIconWrapper = styled.span<IAccordionStyles>`
  ${props => getStyles(props.styles)}
`;
