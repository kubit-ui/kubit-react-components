import type { LinkVariantStyles } from '@/components/link/types/linkTheme';

import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';

import { LinkVariant } from './variants';

export interface LinkVariantType {
  INLINE_PRIMARY: 'INLINE_PRIMARY';
  INLINE_SECONDARY: 'INLINE_SECONDARY';
  INLINE_SECONDARY_ALT: 'INLINE_SECONDARY_ALT';
  NAVIGATION_PRIMARY: 'NAVIGATION_PRIMARY';
  NAVIGATION_SECONDARY: 'NAVIGATION_SECONDARY';
  NAVIGATION_SECONDARY_ALT: 'NAVIGATION_SECONDARY_ALT';
}

// type VariantType = keyof typeof LinkVariant;
const linkVariants = Object.keys(LinkVariant).reduce((acc, key) => {
  const inlineVariant = `INLINE_${key}`;
  const navigationVariant = `NAVIGATION_${key}`;
  acc[inlineVariant] = inlineVariant;
  acc[navigationVariant] = navigationVariant;
  return acc;
}, {}) as LinkVariantType;

type VariantType = keyof typeof linkVariants;

export const LINK: LinkVariantStyles<VariantType> = {
  _childrenContainer: {
    position: 'static',
  },
  _icon: {
    height: cssVars.spacings_spacing_350,
    width: cssVars.spacings_spacing_350,
  },
  _labelAndIconContainer: {
    align_items: 'center',
    color: 'inherit',
    display: 'inline-flex',
    gap: cssVars.spacings_spacing_100,
  },
  border_radius: cssVars.radius_00,
  cursor: 'pointer',
  display: 'inline-flex',
  font_weight: cssVars.font_weight_500,
  [linkVariants.INLINE_PRIMARY]: {
    $pseudoClasses: {
      active: {
        background_color: cssVars.colors_pressed_color_accent_bg_100,
        color: cssVars.colors_pressed_color_accent_font_50,
      },
      disabled: {
        color: cssVars.colors_disabled_color_accentdisabled_font_100,
        cursor: 'not-allowed',
      },
      hover: {
        color: cssVars.colors_accent_color_default_font_100,
      },
    },
    _icon: {
      $pseudoClasses: {
        active: {
          color: cssVars.colors_pressed_color_accent_icon_50,
        },
        disabled: {
          color: cssVars.colors_disabled_color_accentdisabled_icon_100,
        },
        hover: {
          color: cssVars.colors_accent_color_default_icon_100,
        },
      },
      color: cssVars.colors_accent_color_default_icon_100,
    },
    color: cssVars.colors_accent_color_default_font_100,
  },
  [linkVariants.INLINE_SECONDARY]: {
    $pseudoClasses: {
      active: {
        background_color: cssVars.colors_pressed_color_accent_bg_100,
        color: cssVars.colors_accent_color_pressed_font_200,
      },

      disabled: {
        color: cssVars.colors_disabled_color_accentdisabled_font_100,
        cursor: 'not-allowed',
      },

      hover: {
        color: cssVars.colors_accent_color_default_font_50,
      },
    },
    _icon: {
      $pseudoClasses: {
        active: {
          color: cssVars.colors_pressed_color_accent_icon_150,
        },

        disabled: {
          color: cssVars.colors_disabled_color_accentdisabled_icon_100,
          cursor: 'not-allowed',
        },

        hover: {
          color: cssVars.colors_accent_color_default_icon_50,
        },
      },
      color: cssVars.colors_accent_color_default_icon_50,
    },
    color: cssVars.colors_accent_color_default_font_50,
  },
  [linkVariants.INLINE_SECONDARY_ALT]: {
    $pseudoClasses: {
      active: {
        background_color: cssVars.colors_pressed_color_accent_bg_200,
        color: cssVars.colors_pressed_color_accent_font_100,
      },

      disabled: {
        color: cssVars.colors_disabled_color_accentdisabled_font_100,
        cursor: 'not-allowed',
      },

      hover: {
        color: cssVars.colors_accent_color_default_font_150,
      },
    },
    _icon: {
      $pseudoClasses: {
        active: {
          color: cssVars.colors_pressed_color_accent_icon_100,
        },

        disabled: {
          color: cssVars.colors_disabled_color_accentdisabled_icon_100,
        },

        hover: {
          color: cssVars.colors_accent_color_default_icon_150,
        },
      },
      color: cssVars.colors_accent_color_default_icon_150,
    },
    color: cssVars.colors_accent_color_default_font_150,
  },
  [linkVariants.NAVIGATION_PRIMARY]: {
    $pseudoClasses: {
      active: {
        background_color: cssVars.colors_pressed_color_accent_bg_100,
        color: cssVars.colors_pressed_color_accent_font_50,
      },
      disabled: {
        color: cssVars.colors_disabled_color_accentdisabled_font_100,
        cursor: 'not-allowed',
      },

      hover: {
        color: cssVars.colors_accent_color_default_font_100,
        text_decoration: 'none',
      },
    },
    _icon: {
      $pseudoClasses: {
        active: {
          color: cssVars.colors_pressed_color_accent_icon_50,
        },

        disabled: {
          color: cssVars.colors_disabled_color_accentdisabled_icon_100,
          cursor: 'not-allowed',
        },

        hover: {
          color: cssVars.colors_accent_color_default_icon_100,
        },
      },
      color: cssVars.colors_accent_color_default_icon_100,
    },
    color: cssVars.colors_accent_color_default_font_100,
  },
  [linkVariants.NAVIGATION_SECONDARY]: {
    $pseudoClasses: {
      active: {
        background_color: cssVars.colors_pressed_color_accent_bg_100,
        color: cssVars.colors_pressed_color_accent_font_150,
      },

      disabled: {
        color: cssVars.colors_disabled_color_accentdisabled_font_100,
        cursor: 'not-allowed',
      },

      hover: {
        color: cssVars.colors_accent_color_default_font_50,
        text_decoration: 'none',
      },
    },
    _icon: {
      $pseudoClasses: {
        active: {
          color: cssVars.colors_pressed_color_accent_icon_150,
        },

        disabled: {
          color: cssVars.colors_disabled_color_accentdisabled_icon_100,
          cursor: 'not-allowed',
        },

        hover: {
          color: cssVars.colors_accent_color_default_icon_50,
        },
      },
      color: cssVars.colors_accent_color_default_icon_50,
    },
    color: cssVars.colors_accent_color_default_font_50,
  },
  [linkVariants.NAVIGATION_SECONDARY_ALT]: {
    $pseudoClasses: {
      active: {
        background_color: cssVars.colors_pressed_color_accent_bg_200,
        color: cssVars.colors_pressed_color_accent_font_100,
      },

      disabled: {
        color: cssVars.colors_disabled_color_accentdisabled_font_100,
        cursor: 'not-allowed',
      },

      hover: {
        color: cssVars.colors_accent_color_default_font_150,
        text_decoration: 'none',
      },
    },
    _icon: {
      $pseudoClasses: {
        active: {
          color: cssVars.colors_pressed_color_accent_icon_100,
        },

        disabled: {
          color: cssVars.colors_disabled_color_accentdisabled_icon_100,
          cursor: 'not-allowed',
        },

        hover: {
          color: cssVars.colors_accent_color_default_icon_150,
        },
      },
      color: cssVars.colors_accent_color_default_icon_150,
    },
    color: cssVars.colors_accent_color_default_font_150,
  },
};
