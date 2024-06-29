import styled, { CSSProp, css } from 'styled-components';

import {
  LineSeparatorLinePropsStylesType,
  LineSeparatorPositionType,
} from '@/components/lineSeparator';
import { srOnlyMixin } from '@/styles/mixins/srOnly.mixin';
import { CommonStyleType, DeviceBreakpointsType } from '@/types';
import { getStyles, getTypographyStyles } from '@/utils/getStyles/getStyles';

import {
  FlexWidthType,
  TableHeaderStylesTypes,
  TableRowHeaderTypes,
  TableRowStylesTypes,
} from './types';

/******** UTILS STYLES *******/

const applyCustomCellStyles = ({
  customWidth,
  customAlign,
  flexWidth,
  customBackgroundColor,
}: {
  customWidth?: string;
  customAlign?: string;
  flexWidth?: string | number | FlexWidthType;
  customBackgroundColor?: string;
}) => css`
  flex-basis: ${customWidth};
  max-width: ${customWidth};
  justify-content: ${customAlign};
  text-align: ${customAlign};
  flex: ${flexWidth};
  background-color: ${customBackgroundColor};
`;

const applySrOnlyStyles = () => css`
  ${srOnlyMixin}
`;

/******** TABLE STYLES *******/

export const TableStyled = styled.table<{ styles?: CommonStyleType }>`
  ${({ styles }) => getStyles(styles)}
`;

export const TableCaptionStyled = styled.caption`
  display: flex;
  font-style: italic;
  ${srOnlyMixin}
`;

/******** TABLE HEADER STYLES *******/

export const TableRowGroupHeaderStyled = styled.thead<{
  styles?: TableHeaderStylesTypes;
  lineSeparatorLineStyles?: LineSeparatorLinePropsStylesType;
  lineSeparatorTopOnHeader?: boolean;
  lineSeparatorBottomOnHeader?: boolean;
  $scrolling?: boolean;
}>`
  ${({ styles }) => getStyles(styles?.container)}
  ${({ styles }) => getTypographyStyles(styles?.typography)}
  &[hidden] {
    ${srOnlyMixin}
  }
  ${({ lineSeparatorLineStyles, lineSeparatorTopOnHeader, lineSeparatorBottomOnHeader }) => {
    const lineSeparator: (CSSProp | undefined)[] = [];
    if (lineSeparatorTopOnHeader) {
      lineSeparator.push(lineSeparatorLineStyles?.buildLineStyles?.(LineSeparatorPositionType.TOP));
    }
    if (lineSeparatorBottomOnHeader) {
      lineSeparator.push(
        lineSeparatorLineStyles?.buildLineStyles?.(LineSeparatorPositionType.BOTTOM)
      );
    }
    return lineSeparator;
  }}
  ${() =>
    ({
      theme: {
        MEDIA_QUERIES: { onlyDesktop },
      },
      styles,
      $scrolling,
    }) => {
      return css`
        ${onlyDesktop} {
          ${$scrolling
            ? css`
                box-shadow: ${styles?.container?.[DeviceBreakpointsType.DESKTOP]?.box_shadow ??
                'none'};
              `
            : css`
                box-shadow: none;
              `}
        }
      `;
    }}
`;

export const TableRowHeaderStyled = styled.tr<{
  styles?: TableHeaderStylesTypes;
  hasSomeDivider: boolean;
  hasSomeDividerContent: boolean;
  hasSomeExpandedContent: boolean;
  numberOfCells: number;
}>`
  ${({ styles }) => getStyles(styles?.row)}
  // When has expanded content, the last column has no border
  th:nth-last-of-type(2) {
    ${({ hasSomeExpandedContent, styles }) =>
      hasSomeExpandedContent && getStyles(styles?.column?.lastColumn)}
  }
  th:last-of-type {
    ${({ hasSomeExpandedContent, styles }) =>
      !hasSomeExpandedContent && getStyles(styles?.column?.lastColumn)}
  }
  // When hasSomeDivider && hasSomeDividerContent, should apply padding to the first and last visible column
  ${({ hasSomeDivider, hasSomeDividerContent, styles, numberOfCells }) =>
    hasSomeDivider &&
    hasSomeDividerContent &&
    css`
      th:nth-of-type(2) {
        padding-left: ${styles?.rowPaddingWhenDividerShown};
      }
      th:nth-of-type(${numberOfCells}) {
        padding-right: ${styles?.rowPaddingWhenDividerShown};
      }
    `}
`;

export const TableEmptyColumnHeaderStyled = styled.td<{ styles?: TableHeaderStylesTypes }>`
  ${({ styles }) => getStyles(styles?.column)}
`;

export const TableColumnHeaderStyled = styled.th<{
  styles?: TableHeaderStylesTypes;
  hasDivider?: boolean;
  customWidth?: string;
  customAlign?: string;
  flexWidth?: string | number | FlexWidthType;
  customBackgroundColor?: string;
}>`
  ${props => getStyles(props.styles?.column)}
  ${({ styles }) => getTypographyStyles(styles?.typography)}
  // Apply custom styles
  ${({ customWidth, customAlign, flexWidth, customBackgroundColor }) =>
    applyCustomCellStyles({ customWidth, customAlign, flexWidth, customBackgroundColor })}
  ${props => props.hasDivider && applySrOnlyStyles()}
`;

/******** TABLE BODY STYLES *******/

export const TableRowGroupBodyStyled = styled.tbody<{ styles?: TableRowHeaderTypes }>`
  ${({ styles }) => getStyles(styles?.bodyContainer)}
`;

export const TableRowBodyStyled = styled.tr<{
  styles?: TableRowStylesTypes;
  borderPosition?: LineSeparatorPositionType;
  lineSeparatorLineStyles: LineSeparatorLinePropsStylesType;
  hasSomeDivider: boolean;
  hasSomeDividerContent: boolean;
  numberOfCells: number;
  hasDivider: boolean;
  hasDividerContent: boolean;
  hasFooter: boolean;
  hasSomeExpandedContent?: boolean;
}>`
  display: flex;
  // Do not apply border when has divider, the divider already has the border
  ${({
    lineSeparatorLineStyles,
    hasDivider,
    borderPosition = LineSeparatorPositionType.BOTTOM,
  }) => {
    return !hasDivider && lineSeparatorLineStyles.buildLineStyles?.(borderPosition);
  }}

  ${({ styles }) => css`
    ${getStyles(styles?.row)}
    ${getTypographyStyles(styles?.typography)}
  `}
  // When hasSomeDivider && hasSomeDividerContent, should apply padding to the first and last visible column
  ${({ hasDivider, hasSomeDivider, hasSomeDividerContent, styles, numberOfCells }) =>
    hasSomeDivider &&
    hasSomeDividerContent &&
    css`
      td:nth-of-type(${hasDivider ? 2 : 1}) {
        padding-left: ${styles?.rowPaddingWhenDividerShown};
      }
      td:nth-of-type(${hasDivider ? numberOfCells : numberOfCells - 1}) {
        padding-right: ${styles?.rowPaddingWhenDividerShown};
      }
    `}
  position: relative;
  flex-wrap: wrap;
  &:last-of-type {
    ${({ styles }) => getStyles(styles?.row?.lastRow)}
  }
  // When has expanded content, the last column has no border
  td:nth-last-of-type(2) {
    ${({ hasSomeExpandedContent, styles }) =>
      hasSomeExpandedContent && getStyles(styles?.column?.lastColumn)}
  }
  td:last-of-type {
    ${({ hasSomeExpandedContent, styles }) =>
      !hasSomeExpandedContent && getStyles(styles?.column?.lastColumn)}
  }
`;

export const TableColumnBodyStyled = styled.td<{
  styles?: TableRowStylesTypes;
  hasSomeExpandedContent?: boolean;
  customWidth?: string;
  customAlign?: string;
  flexWidth?: string | number | FlexWidthType;
  customBackgroundColor?: string;
}>`
  ${({ styles }) => css`
    ${getStyles(styles?.column)}
    ${getTypographyStyles(styles?.typography)}
  `}
  align-items: ${({ hasSomeExpandedContent, styles }) =>
    hasSomeExpandedContent ? styles?.column?.align_items : undefined};
  gap: ${props => (props.hasSomeExpandedContent ? props.styles?.column?.gap : 0)};
  // Apply custom styles
  ${({ customWidth, customAlign, flexWidth, customBackgroundColor }) =>
    applyCustomCellStyles({ customWidth, customAlign, flexWidth, customBackgroundColor })}
`;

export const TableExpandedCellStyled = styled.td<{
  styles?: TableRowStylesTypes;
  showExpandedContent: boolean;
}>`
  ${({ styles }) => getStyles(styles?.expanded)}
  ${props => !props.showExpandedContent && applySrOnlyStyles()}
`;

/******** TABLE BODY EXPANDED CONTENT STYLES *******/

export const TableEmptyExpandedContentRow = styled.div<{ styles?: TableRowStylesTypes }>`
  width: ${({ styles }) =>
    `calc(${styles?.accordionIcon?.width} + (${styles?.accordionIconContainer?.padding_left ?? '0%'} + ${styles?.accordionIconContainer?.padding_right ?? '0%'}))`};
  height: ${({ styles }) =>
    `calc(${styles?.accordionIcon?.height} + (${styles?.accordionIconContainer?.padding_top ?? '0%'} + ${styles?.accordionIconContainer?.padding_bottom ?? '0%'}))`};
`;

export const TableExpandedButton = styled.button<{ styles?: TableRowStylesTypes }>`
  ${({ styles }) => getStyles(styles?.accordionIconContainer)}
`;

/******** TABLE BODY DIVIDER WRAPPER STYLES *******/

export const DividerInternalWrapper = styled.td`
  width: 100%;
`;

/******** LIST STYLES *******/

export const ListContainerStyled = styled.ul<{
  styles?: TableRowHeaderTypes;
  hasFormatSideBySideInList?: boolean;
}>`
  ${({ styles }) => getStyles(styles?.listContainer)};
  ${({ hasFormatSideBySideInList, styles }) =>
    hasFormatSideBySideInList && getStyles(styles?.listContainerSydeBySyde)}
`;

export const ListContainerHeaderPriorityStyled = styled.ul<{
  styles?: TableRowHeaderTypes;
}>`
  ${({ styles }) => getStyles(styles?.listContainerHeaderPriority)};
`;

export const ListRowContainerStyled = styled.li<{
  styles?: TableRowHeaderTypes;
  lineSeparatorLineStyles: LineSeparatorLinePropsStylesType;
  hasDivider: boolean;
}>`
  ${({ styles }) => getStyles(styles?.listRowContainer)};
  // styles?.listRowContainerBorder check is done because in some themes the line separtor may not be wanted
  // If is required in all themes, listRowContainerBorder token should be deleted
  ${({ lineSeparatorLineStyles, hasDivider, styles }) => {
    return (
      styles?.listRowContainerBorder &&
      !hasDivider &&
      lineSeparatorLineStyles.buildLineStyles?.(LineSeparatorPositionType.BOTTOM)
    );
  }}
`;

export const ListRowContainerHeaderPriorityStyled = styled.li<{
  styles?: TableRowHeaderTypes;
  lineSeparatorLineStyles: LineSeparatorLinePropsStylesType;
  hasDivider: boolean;
}>`
  ${({ styles }) => getStyles(styles?.listRowContainerHeaderPriority)};
  // styles?.listRowContainerBorder check is done because in some themes the line separtor may not be wanted
  // If is required in all themes, listRowContainerBorder token should be deleted
  ${({ lineSeparatorLineStyles, hasDivider, styles }) => {
    return (
      styles?.listRowContainerBorder &&
      !hasDivider &&
      lineSeparatorLineStyles.buildLineStyles?.(LineSeparatorPositionType.BOTTOM)
    );
  }}
`;

export const ListRowStyled = styled.ul<{
  styles?: TableRowHeaderTypes;
  formatSideBySideInList?: boolean;
}>`
  ${({ styles }) => getStyles(styles?.listRow)};
  ${({ formatSideBySideInList, styles }) =>
    formatSideBySideInList && getStyles(styles?.listRowSideBySide)}
`;

export const ListRowHeaderPriorityStyled = styled.ul<{
  styles?: TableRowHeaderTypes;
}>`
  ${({ styles }) => getStyles(styles?.listRowHeaderPriority)};
`;

export const ListHeaderItemStylesStyled = styled.span<{
  index?: number;
  hasSomeExpandedContent?: boolean;
  lineSeparatorLineStyles?: LineSeparatorLinePropsStylesType;
  lineSeparatorTopOnHeader?: boolean;
  lineSeparatorBottomOnHeader?: boolean;
  styles?: TableHeaderStylesTypes;
  customWidth?: string;
  customAlign?: string;
  flexWidth?: string | number | FlexWidthType;
  customBackgroundColor?: string;
}>`
  ${({ index, lineSeparatorLineStyles, lineSeparatorTopOnHeader, lineSeparatorBottomOnHeader }) => {
    const lineSeparator: (CSSProp | undefined)[] = [];
    // Only add lineSeparator on top when it is the first row
    if (lineSeparatorTopOnHeader && index === 0) {
      lineSeparator.push(lineSeparatorLineStyles?.buildLineStyles?.(LineSeparatorPositionType.TOP));
    }
    if (lineSeparatorBottomOnHeader) {
      lineSeparator.push(
        lineSeparatorLineStyles?.buildLineStyles?.(LineSeparatorPositionType.BOTTOM)
      );
    }
    return lineSeparator;
  }}
  ${({ styles }) => getStyles(styles?.column)};
  // Apply custom styles
  ${({ customWidth, customAlign, flexWidth, customBackgroundColor }) =>
    applyCustomCellStyles({ customWidth, customAlign, flexWidth, customBackgroundColor })}
  &[hidden] {
    ${srOnlyMixin}
  }
`;

// Should be deprecated, it does not appears in the new designs ?
export const ListItemStyled = styled.li<{
  hasSomeExpandedContent?: boolean;
  styles?: TableRowHeaderTypes;
}>`
  ${({ hasSomeExpandedContent }) =>
    hasSomeExpandedContent &&
    css`
      display: flex;
      align-items: baseline;
    `}
  ${({ styles }) => getStyles(styles?.listItem)};
`;

export const ListItemHeaderPriorityStyled = styled.li<{
  hasSomeExpandedContent?: boolean;
  lineSeparatorLineStyles: LineSeparatorLinePropsStylesType;
  borderPosition?: LineSeparatorPositionType;
  styles?: TableRowStylesTypes;
  customBackgroundColor?: string;
  customWidth?: string;
  customAlign?: string;
  flexWidth?: string | number | FlexWidthType;
}>`
  ${({ hasSomeExpandedContent }) =>
    hasSomeExpandedContent &&
    css`
      display: flex;
      align-items: baseline;
    `}
  ${({ styles }) => css`
    ${getStyles(styles?.column)}
    ${getTypographyStyles(styles?.typography)}
  `}
  ${({ lineSeparatorLineStyles, borderPosition = LineSeparatorPositionType.BOTTOM }) => {
    return lineSeparatorLineStyles.buildLineStyles?.(borderPosition);
  }}
  // Apply custom styles
  ${({ customWidth, customAlign, flexWidth, customBackgroundColor }) =>
    applyCustomCellStyles({ customWidth, customAlign, flexWidth, customBackgroundColor })}
`;

export const ListItemExpandedStyled = styled.div<{
  styles?: TableRowStylesTypes;
  showExpandedContent: boolean;
}>`
  ${({ styles }) => getStyles(styles?.expanded)}
  ${props => !props.showExpandedContent && applySrOnlyStyles()}
`;

// Should be deprecated, it does not appears in the new designs ?
export const ListEmptyExpandedContentItem = styled.div`
  width: 0;
  height: 0;
`;
