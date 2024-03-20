// types
import { LinkActionType, LinkStateType, LinkStylesType } from '@/components/link/types';
import { TextDisplayType } from '@/components/text/types';

// constants
import { COLORS, FONT_WEIGHT, RADIUS, SPACINGS } from '../../foundations';
import { LinkVariantType } from './variants';

const commonTokens = {
  labelIconContainer: {
    display: TextDisplayType.INLINE_FLEX,
    align_items: 'center',
    color: 'inherit',
    gap: SPACINGS.spacing_100,
  },
  container: {
    display: TextDisplayType.INLINE_FLEX,
    // Used to border on focus
    border_radius: RADIUS.radius_00,
    font_weight: FONT_WEIGHT.font_weight_500,
    cursor: 'pointer',
  },
};

export const LINK_STYLES: LinkStylesType<LinkVariantType> = {
  [LinkActionType.INLINE]: {
    [LinkVariantType.PRIMARY]: {
      [LinkStateType.DEFAULT]: {
        ...commonTokens,
        container: {
          ...commonTokens.container,
          color: COLORS.ACCENT.color_accent_default_font_100,
        },
        icon: {
          color: COLORS.ACCENT.color_accent_default_icon_100,
          width: SPACINGS.spacing_350,
          height: SPACINGS.spacing_350,
        },
      },
      [LinkStateType.HOVER]: {
        ...commonTokens,
        container: {
          ...commonTokens.container,
          color: COLORS.ACCENT.color_accent_default_font_100,
        },
        icon: {
          color: COLORS.ACCENT.color_accent_default_icon_100,
          width: SPACINGS.spacing_350,
          height: SPACINGS.spacing_350,
        },
      },
      [LinkStateType.PRESSED]: {
        ...commonTokens,
        container: {
          ...commonTokens.container,
          color: COLORS.PRESSED.color_accent_pressed_font_50,
          background_color: COLORS.PRESSED.color_accent_pressed_bg_100,
        },
        icon: {
          color: COLORS.ACCENT.color_accent_default_icon_100,
          width: SPACINGS.spacing_350,
          height: SPACINGS.spacing_350,
        },
      },
      [LinkStateType.VISITED]: {},
      [LinkStateType.DISABLED]: {
        ...commonTokens,
        ...commonTokens,
        container: {
          ...commonTokens.container,
          color: COLORS.DISABLED.color_accentDisabled_font_100,
        },
        icon: {
          color: COLORS.DISABLED.color_accentDisabled_icon_100,
          width: SPACINGS.spacing_350,
          height: SPACINGS.spacing_350,
        },
      },
    },
    [LinkVariantType.SECONDARY]: {
      [LinkStateType.DEFAULT]: {
        ...commonTokens,
        container: {
          ...commonTokens.container,
          color: COLORS.ACCENT.color_accent_default_font_50,
        },
        icon: {
          color: COLORS.ACCENT.color_accent_default_icon_50,
          width: SPACINGS.spacing_350,
          height: SPACINGS.spacing_350,
        },
      },
      [LinkStateType.HOVER]: {
        ...commonTokens,
        container: {
          ...commonTokens.container,
          color: COLORS.ACCENT.color_accent_default_font_50,
        },
        icon: {
          color: COLORS.ACCENT.color_accent_default_icon_50,
          width: SPACINGS.spacing_350,
          height: SPACINGS.spacing_350,
        },
      },
      [LinkStateType.PRESSED]: {
        ...commonTokens,
        container: {
          ...commonTokens.container,
          color: COLORS.PRESSED.color_accent_pressed_font_150,
          background_color: COLORS.PRESSED.color_accent_pressed_bg_100,
        },
        icon: {
          color: COLORS.PRESSED.color_accent_pressed_icon_150,
          width: SPACINGS.spacing_350,
          height: SPACINGS.spacing_350,
        },
      },
      [LinkStateType.VISITED]: {},
      [LinkStateType.DISABLED]: {
        ...commonTokens,
        container: {
          ...commonTokens.container,
          color: COLORS.DISABLED.color_accentDisabled_font_100,
        },
        icon: {
          color: COLORS.DISABLED.color_accentDisabled_icon_100,
          width: SPACINGS.spacing_350,
          height: SPACINGS.spacing_350,
        },
      },
    },
    [LinkVariantType.SECONDARY_ALT]: {
      [LinkStateType.DEFAULT]: {
        ...commonTokens,
        container: {
          ...commonTokens.container,
          color: COLORS.ACCENT.color_accent_default_font_150,
        },
        icon: {
          color: COLORS.ACCENT.color_accent_default_icon_150,
          width: SPACINGS.spacing_350,
          height: SPACINGS.spacing_350,
        },
      },
      [LinkStateType.HOVER]: {
        ...commonTokens,
        container: {
          ...commonTokens.container,
          color: COLORS.ACCENT.color_accent_default_font_150,
        },
        icon: {
          color: COLORS.ACCENT.color_accent_default_icon_150,
          width: SPACINGS.spacing_350,
          height: SPACINGS.spacing_350,
        },
      },
      [LinkStateType.PRESSED]: {
        ...commonTokens,
        container: {
          ...commonTokens.container,
          color: COLORS.PRESSED.color_accent_pressed_font_100,
          background_color: COLORS.PRESSED.color_accent_pressed_bg_200,
        },
        icon: {
          color: COLORS.PRESSED.color_accent_pressed_icon_100,
          width: SPACINGS.spacing_350,
          height: SPACINGS.spacing_350,
        },
      },
      [LinkStateType.VISITED]: {},
      [LinkStateType.DISABLED]: {
        ...commonTokens,
        container: {
          ...commonTokens.container,
          color: COLORS.DISABLED.color_accentDisabled_font_100,
        },
        icon: {
          color: COLORS.DISABLED.color_accentDisabled_icon_100,
          width: SPACINGS.spacing_350,
          height: SPACINGS.spacing_350,
        },
      },
    },
  },
  [LinkActionType.NAVIGATION]: {
    [LinkVariantType.PRIMARY]: {
      [LinkStateType.DEFAULT]: {
        ...commonTokens,
        container: {
          ...commonTokens.container,
          color: COLORS.ACCENT.color_accent_default_font_100,
        },
        icon: {
          color: COLORS.ACCENT.color_accent_default_icon_100,
          width: SPACINGS.spacing_350,
          height: SPACINGS.spacing_350,
        },
      },
      [LinkStateType.HOVER]: {
        ...commonTokens,
        container: {
          ...commonTokens.container,
          color: COLORS.ACCENT.color_accent_default_font_100,
          text_decoration: 'none',
        },
        icon: {
          color: COLORS.ACCENT.color_accent_default_icon_100,
          width: SPACINGS.spacing_350,
          height: SPACINGS.spacing_350,
        },
      },
      [LinkStateType.PRESSED]: {
        ...commonTokens,
        container: {
          ...commonTokens.container,
          color: COLORS.PRESSED.color_accent_pressed_font_50,
          background_color: COLORS.PRESSED.color_accent_pressed_bg_100,
        },
        icon: {
          color: COLORS.PRESSED.color_accent_pressed_icon_50,
          width: SPACINGS.spacing_350,
          height: SPACINGS.spacing_350,
        },
      },
      [LinkStateType.VISITED]: {},
      [LinkStateType.DISABLED]: {
        ...commonTokens,
        ...commonTokens,
        container: {
          ...commonTokens.container,
          color: COLORS.DISABLED.color_accentDisabled_font_100,
        },
        icon: {
          color: COLORS.DISABLED.color_accentDisabled_icon_100,
          width: SPACINGS.spacing_350,
          height: SPACINGS.spacing_350,
        },
      },
    },
    [LinkVariantType.SECONDARY]: {
      [LinkStateType.DEFAULT]: {
        ...commonTokens,
        container: {
          ...commonTokens.container,
          color: COLORS.ACCENT.color_accent_default_font_50,
        },
        icon: {
          color: COLORS.ACCENT.color_accent_default_icon_50,
          width: SPACINGS.spacing_350,
          height: SPACINGS.spacing_350,
        },
      },
      [LinkStateType.HOVER]: {
        ...commonTokens,
        container: {
          ...commonTokens.container,
          color: COLORS.ACCENT.color_accent_default_font_50,
          text_decoration: 'none',
        },
        icon: {
          color: COLORS.ACCENT.color_accent_default_icon_50,
          width: SPACINGS.spacing_350,
          height: SPACINGS.spacing_350,
        },
      },
      [LinkStateType.PRESSED]: {
        ...commonTokens,
        container: {
          ...commonTokens.container,
          color: COLORS.PRESSED.color_accent_pressed_font_150,
          background_color: COLORS.PRESSED.color_accent_pressed_bg_100,
        },
        icon: {
          color: COLORS.PRESSED.color_accent_pressed_icon_150,
          width: SPACINGS.spacing_350,
          height: SPACINGS.spacing_350,
        },
      },
      [LinkStateType.VISITED]: {},
      [LinkStateType.DISABLED]: {
        ...commonTokens,
        container: {
          ...commonTokens.container,
          color: COLORS.DISABLED.color_accentDisabled_font_100,
        },
        icon: {
          color: COLORS.DISABLED.color_accentDisabled_icon_100,
          width: SPACINGS.spacing_350,
          height: SPACINGS.spacing_350,
        },
      },
    },
    [LinkVariantType.SECONDARY_ALT]: {
      [LinkStateType.DEFAULT]: {
        ...commonTokens,
        container: {
          ...commonTokens.container,
          color: COLORS.ACCENT.color_accent_default_font_150,
        },
        icon: {
          color: COLORS.ACCENT.color_accent_default_icon_150,
          width: SPACINGS.spacing_350,
          height: SPACINGS.spacing_350,
        },
      },
      [LinkStateType.HOVER]: {
        ...commonTokens,
        container: {
          ...commonTokens.container,
          color: COLORS.ACCENT.color_accent_default_font_150,
          text_decoration: 'none',
        },
        icon: {
          color: COLORS.ACCENT.color_accent_default_icon_150,
          width: SPACINGS.spacing_350,
          height: SPACINGS.spacing_350,
        },
      },
      [LinkStateType.PRESSED]: {
        ...commonTokens,
        container: {
          ...commonTokens.container,
          color: COLORS.PRESSED.color_accent_pressed_font_100,
          background_color: COLORS.PRESSED.color_accent_pressed_bg_200,
        },
        icon: {
          color: COLORS.PRESSED.color_accent_pressed_icon_100,
          width: SPACINGS.spacing_350,
          height: SPACINGS.spacing_350,
        },
      },
      [LinkStateType.VISITED]: {},
      [LinkStateType.DISABLED]: {
        ...commonTokens,
        container: {
          ...commonTokens.container,
          color: COLORS.DISABLED.color_accentDisabled_font_100,
        },
        icon: {
          color: COLORS.DISABLED.color_accentDisabled_icon_100,
          width: SPACINGS.spacing_350,
          height: SPACINGS.spacing_350,
        },
      },
    },
  },
};
