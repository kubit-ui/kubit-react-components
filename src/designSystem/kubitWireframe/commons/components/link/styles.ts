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
  ...transformShadow(RADIUS.radius_00),
  ...shadowAfterStylesSpecificProps(
    RADIUS.radius_300,
    COLORS,
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
            color: COLORS.ACCENT.color_accent_default_font_100,
          },
          icon: {
            ...commonIconTokens,
            color: COLORS.ACCENT.color_accent_default_icon_100,
          },
        },
        [LinkStateType.PRESSED]: {
          ...commonTokens,
          container: {
            ...commonContainerTokens(COLORS),
            color: COLORS.PRESSED.color_accent_pressed_font_200,
            background_color: COLORS.PRESSED.color_accent_pressed_bg_100,
          },
          icon: {
            ...commonIconTokens,
            color: COLORS.PRESSED.color_accent_pressed_icon_200,
          },
        },
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
            color: COLORS.ACCENT.color_accent_default_font_100,
          },
          icon: {
            ...commonIconTokens,
            color: COLORS.ACCENT.color_accent_default_icon_100,
          },
        },
      },
      [LinkVariantType.SECONDARY]: {
        [LinkStateType.DEFAULT]: {
          ...commonTokens,
          container: {
            ...commonContainerTokens(COLORS),
            color: COLORS.ACCENT.color_accent_default_font_50,
          },
          icon: {
            ...commonIconTokens,
            color: COLORS.ACCENT.color_accent_default_icon_50,
          },
        },
        [LinkStateType.PRESSED]: {
          ...commonTokens,
          container: {
            ...commonContainerTokens(COLORS),
            color: COLORS.PRESSED.color_accent_pressed_font_150,
            background_color: COLORS.PRESSED.color_accent_pressed_bg_100,
          },
          icon: {
            ...commonIconTokens,
            color: COLORS.PRESSED.color_accent_pressed_icon_150,
          },
        },
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
            ...commonContainerTokens(COLORS),
            color: COLORS.ACCENT.color_accent_default_font_50,
          },
          icon: {
            ...commonIconTokens,
            color: COLORS.ACCENT.color_accent_default_icon_50,
          },
        },
      },
      [LinkVariantType.SECONDARY_ALT]: {
        [LinkStateType.DEFAULT]: {
          ...commonTokens,
          container: {
            ...commonContainerTokens(COLORS),
            color: COLORS.ACCENT.color_accent_default_font_150,
          },
          icon: {
            ...commonIconTokens,
            color: COLORS.ACCENT.color_accent_default_icon_150,
          },
        },
        [LinkStateType.PRESSED]: {
          ...commonTokens,
          container: {
            ...commonContainerTokens(COLORS),
            color: COLORS.PRESSED.color_accent_pressed_font_100,
            background_color: COLORS.PRESSED.color_accent_pressed_bg_200,
          },
          icon: {
            ...commonIconTokens,
            color: COLORS.PRESSED.color_accent_pressed_icon_100,
          },
        },
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
            ...commonContainerTokens(COLORS),
            color: COLORS.ACCENT.color_accent_default_font_150,
          },
          icon: {
            ...commonIconTokens,
            color: COLORS.ACCENT.color_accent_default_icon_150,
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
            color: COLORS.ACCENT.color_accent_default_font_100,
          },
          icon: {
            ...commonIconTokens,
            color: COLORS.ACCENT.color_accent_default_icon_100,
          },
        },
        [LinkStateType.PRESSED]: {
          ...commonTokens,
          container: {
            ...commonContainerTokens(COLORS),
            color: COLORS.PRESSED.color_accent_pressed_font_200,
            background_color: COLORS.PRESSED.color_accent_pressed_bg_100,
          },
          icon: {
            ...commonIconTokens,
            color: COLORS.PRESSED.color_accent_pressed_icon_200,
          },
        },
        [LinkStateType.VISITED]: {},
        [LinkStateType.DISABLED]: {
          ...commonTokens,
          container: {
            ...commonContainerTokens(COLORS),
            color: COLORS.DISABLED.color_accentDisabled_font_100,
          },
          icon: {
            color: COLORS.DISABLED.color_accentDisabled_icon_100,
            width: SPACINGS.spacing_350,
            height: SPACINGS.spacing_350,
          },
        },
        [LinkStateType.HOVER]: {
          ...commonTokens,
          container: {
            ...commonContainerTokens(COLORS),
            color: COLORS.ACCENT.color_accent_default_font_100,
          },
          icon: {
            ...commonIconTokens,
            color: COLORS.ACCENT.color_accent_default_icon_100,
          },
        },
      },
      [LinkVariantType.SECONDARY]: {
        [LinkStateType.DEFAULT]: {
          ...commonTokens,
          container: {
            ...commonContainerTokens(COLORS),
            color: COLORS.ACCENT.color_accent_default_font_50,
          },
          icon: {
            ...commonIconTokens,
            color: COLORS.ACCENT.color_accent_default_icon_50,
          },
        },
        [LinkStateType.PRESSED]: {
          ...commonTokens,
          container: {
            ...commonContainerTokens(COLORS),
            color: COLORS.PRESSED.color_accent_pressed_font_150,
            background_color: COLORS.PRESSED.color_accent_pressed_bg_100,
          },
          icon: {
            ...commonIconTokens,
            color: COLORS.PRESSED.color_accent_pressed_icon_150,
          },
        },
        [LinkStateType.VISITED]: {},
        [LinkStateType.DISABLED]: {
          ...commonTokens,
          container: {
            ...commonContainerTokensWithouShadow,
            color: COLORS.DISABLED.color_accentDisabled_font_100,
          },
          icon: {
            color: COLORS.DISABLED.color_accentDisabled_icon_100,
            width: SPACINGS.spacing_350,
            height: SPACINGS.spacing_350,
          },
        },
        [LinkStateType.HOVER]: {
          ...commonTokens,
          container: {
            ...commonContainerTokens(COLORS),
            color: COLORS.ACCENT.color_accent_default_font_50,
          },
          icon: {
            ...commonIconTokens,
            color: COLORS.ACCENT.color_accent_default_icon_50,
          },
        },
      },
      [LinkVariantType.SECONDARY_ALT]: {
        [LinkStateType.DEFAULT]: {
          ...commonTokens,
          container: {
            ...commonContainerTokens(COLORS),
            color: COLORS.ACCENT.color_accent_default_font_150,
          },
          icon: {
            ...commonIconTokens,
            color: COLORS.ACCENT.color_accent_default_icon_150,
          },
        },
        [LinkStateType.PRESSED]: {
          ...commonTokens,
          container: {
            ...commonContainerTokens(COLORS),
            color: COLORS.PRESSED.color_accent_pressed_font_100,
            background_color: COLORS.PRESSED.color_accent_pressed_bg_200,
          },
          icon: {
            ...commonIconTokens,
            color: COLORS.PRESSED.color_accent_pressed_icon_100,
          },
        },
        [LinkStateType.VISITED]: {},
        [LinkStateType.DISABLED]: {
          ...commonTokens,
          container: {
            ...commonContainerTokensWithouShadow,
            color: COLORS.DISABLED.color_accentDisabled_font_100,
          },
          icon: {
            color: COLORS.DISABLED.color_accentDisabled_icon_100,
            width: SPACINGS.spacing_350,
            height: SPACINGS.spacing_350,
          },
        },
        [LinkStateType.HOVER]: {
          ...commonTokens,
          container: {
            ...commonContainerTokens(COLORS),
            color: COLORS.ACCENT.color_accent_default_font_150,
          },
          icon: {
            ...commonIconTokens,
            color: COLORS.ACCENT.color_accent_default_icon_150,
          },
        },
      },
    },
  };
};
