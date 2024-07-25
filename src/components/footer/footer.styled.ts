import styled, { css } from 'styled-components';

import { getStyles } from '@/utils';

import { LineSeparatorLinePropsStylesType, LineSeparatorPositionType } from '../lineSeparator';
import { FooterPropsStylesType } from './types';

type FooterStylesType = {
  styles: FooterPropsStylesType;
  $forceVertical?: boolean;
  $tabInverse?: boolean;
};

type FooterSectionStyledType = FooterStylesType & {
  $justifyContent: string;
};

type RootContainerStyledType = FooterStylesType & {
  lineSeparatorLineStyles: LineSeparatorLinePropsStylesType;
};

export const FooterStyled = styled.div<RootContainerStyledType>`
  ${({ lineSeparatorLineStyles }) =>
    lineSeparatorLineStyles?.buildLineStyles?.(LineSeparatorPositionType.TOP)}
  ${props => getStyles(props.styles?.rootContainer)}

  display: flex;
  ${() =>
    ({
      theme: {
        MEDIA_QUERIES: { onlyMobile, tabletAndDesktop },
      },
      $forceVertical,
      $tabInverse,
    }) => css`
      ${tabletAndDesktop} {
        flex-direction: ${$forceVertical
          ? $tabInverse
            ? 'column-reverse'
            : 'column'
          : $tabInverse
            ? 'row-reverse'
            : 'row'};
      }
      ${onlyMobile} {
        flex-direction: ${$tabInverse ? 'column-reverse' : 'column'};
        justify-content: center;
      }
    `};
`;

export const FooterSectionStyled = styled.div<FooterSectionStyledType>`
  ${props => getStyles(props.styles?.contentContainer)}

  display: flex;
  width: 100%;
  ${() =>
    ({
      theme: {
        MEDIA_QUERIES: { onlyMobile, tabletAndDesktop },
      },

      $justifyContent,
      $forceVertical,
      $tabInverse,
    }) => css`
      ${tabletAndDesktop} {
        justify-content: ${$forceVertical ? 'center' : $justifyContent};
        flex-direction: ${$forceVertical
          ? $tabInverse
            ? 'column-reverse'
            : 'column'
          : $tabInverse
            ? 'row-reverse'
            : 'row'};

        align-items: ${$forceVertical && 'center'};
      }
      ${onlyMobile} {
        flex-direction: ${$tabInverse ? 'column-reverse' : 'column'};
        align-items: center;
      }
    `};
`;
