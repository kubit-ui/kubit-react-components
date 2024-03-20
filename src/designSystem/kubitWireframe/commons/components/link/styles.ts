import { LinkActionType, LinkStateType, LinkStylesType } from '@/components/link/types';
import { TextDisplayType } from '@/components/text/types';
import {
  shadowAfterStylesSpecificProps,
  transformShadow,
} from '@/designSystem/kubitWireframe/utils/wireframe';

import { FONT_WEIGHT, RADIUS, SPACINGS } from '../../foundations';
import { LinkVariantType, TextVariantType } from '../variants';

const commonTokens = {
  labelIconContainer: {
    display: TextDisplayType.INLINE_FLEX,
    align_items: 'center',
    color: 'inherit',
    gap: SPACINGS.spacing_100,
  },
};

const commonContainerTokens = COLORS => ({
  display: TextDisplayType.INLINE_FLEX,
  // Used to border on focus
  border_radius: RADIUS.radius_full,
  font_variant: TextVariantType.PARAGRAPH_SMALL_EXPANDED,
  font_weight: FONT_WEIGHT.font_weight_400,
  cursor: 'pointer',
  ...transformShadow(RADIUS.radius_300),
  ...shadowAfterStylesSpecificProps(
    RADIUS.radius_300,
    COLORS.BRAND.color_brand_bg_50,
    SPACINGS.spacing_50,
    `calc(100% + ${SPACINGS.spacing_100})`,
    SPACINGS.spacing_50,
    SPACINGS.spacing_0,
    `calc(100% + ${SPACINGS.spacing_100})`
  ),
});

const commonContainerTokensWithouShadow = {
  display: TextDisplayType.INLINE_FLEX,
  // Used to border on focus
  border_radius: RADIUS.radius_full,
  font_variant: TextVariantType.PARAGRAPH_SMALL_EXPANDED,
  font_weight: FONT_WEIGHT.font_weight_400,
  cursor: 'pointer',
};

const commonIconTokens = {
  width: SPACINGS.spacing_350,
  height: SPACINGS.spacing_350,
};

export const getLinkStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): LinkStylesType<LinkVariantType> => {
  return {
    [LinkActionType.NAVIGATION]: {
      [LinkVariantType.PRIMARY]: {
        [LinkStateType.DEFAULT]: {
          ...commonTokens,
          container: {
            ...commonContainerTokens(COLORS),
            color: COLORS.ACCENT.color_neutral_font_50,
          },
          icon: {
            ...commonIconTokens,
            color: COLORS.ACCENT.color_neutral_icon_50,
          },
        },
        [LinkStateType.PRESSED]: {},
        [LinkStateType.VISITED]: {},
        [LinkStateType.DISABLED]: {
          ...commonTokens,
          container: {
            ...commonContainerTokens(COLORS),
            color: COLORS.DISABLED.color_accentDisabled_font_100,
          },
          icon: {
            ...commonIconTokens,
            color: COLORS.DISABLED.color_accentDisabled_icon_100,
          },
        },
        [LinkStateType.HOVER]: {
          ...commonTokens,
          container: {
            ...commonContainerTokens(COLORS),
            color: COLORS.ACCENT.color_neutral_font_50,
          },
          icon: {
            ...commonIconTokens,
            color: COLORS.ACCENT.color_neutral_icon_50,
          },
        },
      },
      [LinkVariantType.SECONDARY]: {
        [LinkStateType.DEFAULT]: {
          ...commonTokens,
          container: {
            ...commonContainerTokensWithouShadow,
            color: COLORS.ACCENT.color_neutral_font_50,
          },
          icon: {
            ...commonIconTokens,
            color: COLORS.ACCENT.color_neutral_icon_50,
          },
        },
        [LinkStateType.PRESSED]: {},
        [LinkStateType.VISITED]: {},
        [LinkStateType.DISABLED]: {
          ...commonTokens,
          container: {
            ...commonContainerTokensWithouShadow,
            color: COLORS.DISABLED.color_accentDisabled_font_100,
          },
          icon: {
            ...commonIconTokens,
            color: COLORS.DISABLED.color_accentDisabled_icon_100,
          },
        },
        [LinkStateType.HOVER]: {
          ...commonTokens,
          container: {
            ...commonContainerTokensWithouShadow,
            color: COLORS.ACCENT.color_neutral_font_50,
          },
          icon: {
            ...commonIconTokens,
            color: COLORS.ACCENT.color_neutral_icon_50,
          },
        },
      },
    },
    [LinkActionType.INLINE]: {
      [LinkVariantType.PRIMARY]: {
        [LinkStateType.DEFAULT]: {
          ...commonTokens,
          container: {
            ...commonContainerTokens(COLORS),
            color: COLORS.ACCENT.color_neutral_font_50,
          },
          icon: {
            ...commonIconTokens,
            color: COLORS.ACCENT.color_neutral_icon_50,
          },
        },
        [LinkStateType.PRESSED]: {},
        [LinkStateType.VISITED]: {},
        [LinkStateType.DISABLED]: {
          ...commonTokens,
          container: {
            ...commonContainerTokens(COLORS),
            color: COLORS.DISABLED.color_accentDisabled_font_100,
          },
          icon: {
            color: COLORS.DISABLED.color_accentDisabled_icon_100,
          },
        },
        [LinkStateType.HOVER]: {
          ...commonTokens,
          container: {
            ...commonContainerTokens(COLORS),
            color: COLORS.ACCENT.color_neutral_font_50,
          },
          icon: {
            ...commonIconTokens,
            color: COLORS.ACCENT.color_neutral_icon_50,
          },
        },
      },
      [LinkVariantType.SECONDARY]: {
        [LinkStateType.DEFAULT]: {
          ...commonTokens,
          container: {
            ...commonContainerTokensWithouShadow,
            color: COLORS.ACCENT.color_neutral_font_50,
          },
          icon: {
            ...commonIconTokens,
            color: COLORS.ACCENT.color_neutral_icon_50,
          },
        },
        [LinkStateType.PRESSED]: {},
        [LinkStateType.VISITED]: {},
        [LinkStateType.DISABLED]: {
          ...commonTokens,
          container: {
            ...commonContainerTokensWithouShadow,
            color: COLORS.DISABLED.color_accentDisabled_font_100,
          },
          icon: {
            color: COLORS.DISABLED.color_accentDisabled_icon_100,
          },
        },
        [LinkStateType.HOVER]: {
          ...commonTokens,
          container: {
            ...commonContainerTokensWithouShadow,
            color: COLORS.ACCENT.color_neutral_font_50,
          },
          icon: {
            ...commonIconTokens,
            color: COLORS.ACCENT.color_neutral_icon_50,
          },
        },
      },
    },
  };
};
