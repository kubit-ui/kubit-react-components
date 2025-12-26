import type { BadgeStylesType } from '@/components/badge/types/badgeTheme';
import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';

import { TEXT } from '../text/styles';
import { TextVariantType } from '../text/variants';
import { BadgeSize, BadgeVariant } from './variants';

type VariantType = keyof typeof BadgeVariant;
type SizeVariantType = keyof typeof BadgeSize;

export const BADGE: BadgeStylesType<VariantType, SizeVariantType> = {
  _button: {
    align_items: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    flex_direction: 'column',
    gap: cssVars.spacings_spacing_150,
  },
  _dot: {
    line_height: '0',
    position: 'absolute',
    right: '0',
    top: '0',
    transform: 'translate(30%, -30%)',
    z_index: cssVars.z_index_intern_1,
  },
  _dotContainer: {
    display: 'inline-flex',
    position: 'relative',
  },
  _icon: {
    display: 'inline-flex',
  },
  _label: {
    display: 'inline-flex',
  },
  _labelContainer: {
    align_items: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    flex_direction: 'row',
  },
  _labelIcon: {
    display: 'inline-flex',
  },
  [BadgeSize.DEFAULT]: {
    _icon: {
      height: cssVars.sizes_size_250,
      width: cssVars.sizes_size_250,
    },
  },
  [BadgeVariant.ALTERNATIVE]: {
    _icon: {
      color: cssVars.colors_neutral_color_icon_250,
    },
    _label: {
      ...TEXT[TextVariantType.PARAGRAPH_CAPTION_EXTENDED],
      color: cssVars.colors_neutral_color_font_250,
      font_weight: cssVars.font_weight_400,
    },
    _labelIcon: {
      $pseudoClasses: {
        active: {
          color: cssVars.colors_neutral_color_icon_250,
        },
        disabled: {
          color: cssVars.colors_disabled_color_accentdisabled_font_150,
        },
      },
      color: cssVars.colors_neutral_color_icon_250,
      height: cssVars.sizes_size_150,
      width: cssVars.sizes_size_150,
    },
  },
  [BadgeVariant.PRIMARY]: {
    _icon: {
      $pseudoClasses: {
        active: {
          color: cssVars.colors_accent_color_default_icon_100,
        },
        disabled: {
          color: cssVars.colors_disabled_color_accentdisabled_icon_150,
        },
      },
      color: cssVars.colors_neutral_color_icon_50,
    },
    _label: {
      ...TEXT[TextVariantType.PARAGRAPH_CAPTION_EXTENDED],
      $pseudoClasses: {
        active: {
          color: cssVars.colors_neutral_color_font_50,
        },
        disabled: {
          color: cssVars.colors_disabled_color_accentdisabled_font_150,
        },
      },
      color: cssVars.colors_neutral_color_font_50,
      font_weight: cssVars.font_weight_400,
    },
    _labelIcon: {
      $pseudoClasses: {
        active: {
          color: cssVars.colors_neutral_color_icon_50,
        },
        disabled: {
          color: cssVars.colors_disabled_color_accentdisabled_font_150,
        },
      },
      color: cssVars.colors_neutral_color_icon_50,
      height: cssVars.sizes_size_150,
      width: cssVars.sizes_size_150,
    },
  },
  position: 'relative',
};
