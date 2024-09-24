import styled, { css } from 'styled-components';

import { focusVisibleAlt } from '@/styles/mixins';
import { getStyles } from '@/utils/getStyles/getStyles';

import { TooltipAlignType, TooltipVariantStylesProps } from './types';

type TooltipStylesPropsTypes = {
  styles: TooltipVariantStylesProps;
  hasCloseIcon?: boolean;
  hasTitle?: boolean;
  hasBorder?: boolean;
  align?: TooltipAlignType;
};

export const TooltipStyled = styled.div<{ tooltipAsModal?: boolean }>`
  display: inline-block;
`;

export const TooltipExternalContainerStyled = styled.div<TooltipStylesPropsTypes>`
  display: flex;
  ${({ styles }) => getStyles(styles.tooltipExternalContainer)}
`;

export const TooltipDragIconStyled = styled.div<TooltipStylesPropsTypes>`
  ${({ styles }) => getStyles(styles.dragIconContainer)}
`;

export const TooltipInternalContainerStyled = styled.div<TooltipStylesPropsTypes>`
  ${({ styles }) => getStyles(styles.tooltipInternalContainer)}
`;

// Apply padding in the inner content in order to the scroll is shown next to the right border
export const TooltipInnerContentStyled = styled.div<TooltipStylesPropsTypes>`
  overflow-y: auto;
`;

export const TooltipTitleStyled = styled.div<TooltipStylesPropsTypes>`
  word-break: break-word;
`;

export const TooltipParagraphStyled = styled.div<TooltipStylesPropsTypes>`
  word-break: break-word;
  ${({ styles, hasBorder }) => hasBorder && getStyles(styles.divider)}
  ${({ styles }) => getStyles(styles.paragraphContainer)}
`;

// Apply padding in the inner content in order to the scroll is shown next to the right border
export const TooltipCloseIconStyled = styled.div<TooltipStylesPropsTypes>`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  ${({ styles }) => getStyles(styles.closeButtonContainer)}
  ${({ styles }) =>
    styles.closeButtonContainer?.altVariant &&
    css`
      & > :first-child {
        ${focusVisibleAlt()}
      }
    `}
`;

export const TooltipArrowStyled = styled.div<TooltipStylesPropsTypes>`
  position: absolute;
  ${({ styles }) => getStyles(styles.arrowContainer)}
  ${({ styles, align = TooltipAlignType.TOP }) =>
    getStyles(styles.arrowContainer?.tooltipAlignStyles?.[align])}
  width: ${props => props.styles.arrowContainer?.arrow_size};
  height: ${props => props.styles.arrowContainer?.arrow_size};
  transform: rotate(45deg);
`;

export const TooltipArrowContentStyled = styled.div<TooltipStylesPropsTypes>`
  ${({ styles }) => getStyles(styles.arrow)}
`;

export const TooltipHeaderContentStyled = styled.div<TooltipStylesPropsTypes>`
  display: flex;
  ${({ styles }) => getStyles(styles.title)}

  ${({ hasTitle, hasCloseIcon }) => {
    if (hasTitle && hasCloseIcon) {
      return css`
        justify-content: space-between;
      `;
    }
    if (hasTitle) {
      return css`
        justify-content: flex-end;
      `;
    }
    if (hasCloseIcon) {
      return css`
        justify-content: flex-start;
      `;
    }
    return css`
      display: none;
    `;
  }};
  align-items: flex-start;
  ${({ styles }) => getStyles(styles.headerContainer)}
`;

export const TooltipTriggerWrapperStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: none;

  min-height: 1.5rem; // accessible min-size
  min-width: 1.5rem; // accessible min-size
`;
