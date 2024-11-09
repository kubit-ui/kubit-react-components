import styled from 'styled-components';

// styles
import { getStyles } from '../../utils/getStyles/getStyles';
import {
  LineSeparatorLinePropsStylesType,
  LineSeparatorPositionType,
} from '../lineSeparator/types/lineSeparatorTheme';
import { SummaryDetailsPropsStylesType } from './types/summaryDetailsTheme';

export const ContainerStyled = styled.details<{ styles: SummaryDetailsPropsStylesType }>`
  ${({ styles }) => getStyles(styles.container)};
`;

export const HeaderStyled = styled.summary<{
  styles: SummaryDetailsPropsStylesType;
  lineSeparatorLineStyles: LineSeparatorLinePropsStylesType;
  $isOpen: boolean;
  hasLineSeparator?: boolean;
}>`
  ${({ styles }) => getStyles(styles.header)};
  user-select: none;
  // hide default agent arrow
  list-style: none;
  ::-webkit-details-marker {
    display: none;
  }
  > :last-child {
    ${({ styles }) => getStyles(styles.header?.lastChild)};
    ${({ styles, lineSeparatorLineStyles, $isOpen, hasLineSeparator }) =>
      styles.hasLineSeparator && !$isOpen && hasLineSeparator
        ? lineSeparatorLineStyles.buildLineStyles?.(LineSeparatorPositionType.BOTTOM)
        : undefined}
  }
`;

export const HeaderTitleIconStyled = styled.span<{ styles: SummaryDetailsPropsStylesType }>`
  ${({ styles }) => getStyles(styles.header?.firstChild)};
`;

export const TitleWrapper = styled.span<{ styles: SummaryDetailsPropsStylesType }>`
  ${({ styles }) => getStyles(styles.titleContainer)};
`;

export const LeftIconWrapper = styled.span<{ styles: SummaryDetailsPropsStylesType }>`
  ${({ styles }) => getStyles(styles.leftIconContainer)};
`;

export const RightIconWrapper = styled.span<{ styles: SummaryDetailsPropsStylesType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(0deg);
  transition: 'transform 0.15s ease-in-out';
  ${({ styles }) => getStyles(styles.rightIconContainer)};
`;

export const BodyStyled = styled.div<{ styles: SummaryDetailsPropsStylesType }>`
  ${({ styles }) => getStyles(styles.body)};
`;
