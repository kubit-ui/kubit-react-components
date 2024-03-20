import styled from 'styled-components';

import { getStyles } from '@/utils';

import { LineSeparatorLinePropsStylesType, LineSeparatorPositionType } from '../lineSeparator';
import { ContentDirectionType, FooterPropsStylesType } from './types';

type FooterStylesType = {
  styles: FooterPropsStylesType;
  contentDirection?: ContentDirectionType;
  flexDirectionDesktopTablet?: string;
  alignItems?: string;
};

type RootContainerStyledType = FooterStylesType & {
  lineSeparatorLineStyles: LineSeparatorLinePropsStylesType;
};

export const FooterStyled = styled.div<RootContainerStyledType>`
  display: flex;
  width: 100%;
  align-items: ${props => props.alignItems || 'center'};
  justify-content: space-between;
  box-sizing: border-box;

  ${({ lineSeparatorLineStyles }) =>
    lineSeparatorLineStyles?.buildLineStyles?.(LineSeparatorPositionType.TOP)}
  ${props => getStyles(props.styles?.rootContainer)}
  ${props =>
    props.contentDirection && getStyles(props.styles?.rootContainer?.[props.contentDirection])}
`;

export const FooterContentStyled = styled.div<FooterStylesType>`
  display: flex;
  flex-direction: ${props => props.flexDirectionDesktopTablet};
  justify-content: ${props =>
    props.contentDirection === ContentDirectionType.HORIZONTAL ? 'flex-start' : 'center'};
  ${props => getStyles(props.styles?.contentContainer)}
`;
