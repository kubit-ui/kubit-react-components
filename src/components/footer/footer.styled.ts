import styled, { css } from 'styled-components';

import { getStyles } from '@/utils';

import { LineSeparatorLinePropsStylesType, LineSeparatorPositionType } from '../lineSeparator';
import { FooterPropsStylesType } from './types';

type FooterStylesType = {
  styles: FooterPropsStylesType;
  $setVertical?: boolean;
  $flexReverse?: boolean;
  /**
   * @deprecated
   */
  $alignItems?: string;
};

type FooterSectionStyledType = FooterStylesType & {
  $justifyContent: string;
};

type RootContainerStyledType = FooterStylesType & {
  lineSeparatorLineStyles: LineSeparatorLinePropsStylesType;
};

export const FooterSectionStyled = styled.div<FooterSectionStyledType>`
  ${props => getStyles(props.styles?.contentContainer)}

  display: flex;
  width: 100%;
  ${({
    $justifyContent,
    $setVertical,
    $flexReverse,
    $alignItems,
    theme: {
      MEDIA_QUERIES: { onlyMobile, tabletAndDesktop },
    },
  }) => css`
    ${onlyMobile} {
      flex-direction: ${$flexReverse ? 'column-reverse' : 'column'};
    }

    ${tabletAndDesktop} {
      align-items: ${$alignItems};
      justify-content: ${$setVertical ? 'center' : $justifyContent};
      flex-direction: ${$setVertical
        ? $flexReverse
          ? 'column-reverse'
          : 'column'
        : $flexReverse
          ? 'row-reverse'
          : 'row'};
    }
  `};
`;

export const FooterStyled = styled.div<RootContainerStyledType>`
  ${({ lineSeparatorLineStyles }) =>
    lineSeparatorLineStyles?.buildLineStyles?.(LineSeparatorPositionType.TOP)}
  ${props => getStyles(props.styles?.rootContainer)}

  display: flex;
  ${({
    $setVertical,
    $flexReverse,
    theme: {
      MEDIA_QUERIES: { onlyMobile, tabletAndDesktop },
    },
  }) => css`
    ${onlyMobile} {
      flex-direction: ${$flexReverse ? 'column-reverse' : 'column'};
    }

    ${tabletAndDesktop} {
      flex-direction: ${$setVertical
        ? $flexReverse
          ? 'column-reverse'
          : 'column'
        : $flexReverse
          ? 'row-reverse'
          : 'row'};
    }
  `};
`;
