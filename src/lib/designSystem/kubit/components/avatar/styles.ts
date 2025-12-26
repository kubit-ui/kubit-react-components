import type { AvatarSizeStyles } from '@/components/avatar/types/avatarTheme';
import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';

import { TEXT } from '../text/styles';
import { TextVariantType } from '../text/variants';
import { AvatarBackgroundColor, AvatarContent, AvatarSize } from './variants';

type SizeVariantType = keyof typeof AvatarSize;

export const AVATAR: AvatarSizeStyles<SizeVariantType> = {
  $attributes: {
    ['data-background-type']: {
      [AvatarBackgroundColor.COLOR_DEFAULT]: {
        background_color: cssVars.colors_neutral_color_bg_200,
        border_color: cssVars.colors_neutral_color_border_50,
        color: cssVars.colors_neutral_color_icon_50,
      },
      [AvatarBackgroundColor.COLOR_RED]: {
        background_color: cssVars.colors_accent_color_default_bg_100,
        border_color: cssVars.colors_accent_color_default_border_100,
        color: cssVars.colors_accent_color_default_icon_100,
      },
      [AvatarBackgroundColor.COLOR_WHITE]: {
        background_color: cssVars.colors_neutral_color_bg_250,
        border_color: cssVars.colors_neutral_color_border_50,
        color: cssVars.colors_neutral_color_icon_50,
      },
    },
    ['data-content-type']: {
      [AvatarContent.WITH_ICON]: {
        border_radius: cssVars.radius_circle,
        text_decoration: 'none',
      },
    },
  },
  _dot: {
    display: 'flex',
    position: 'absolute',
    right: '0',
    top: '0',
  },
  _icon: {
    display: 'block',
  },
  _initials: {
    $attributes: {
      ['data-background-type']: {
        [AvatarBackgroundColor.COLOR_DEFAULT]: {
          color: cssVars.colors_neutral_color_icon_50,
        },
        [AvatarBackgroundColor.COLOR_RED]: {
          color: cssVars.colors_accent_color_default_icon_100,
        },
        [AvatarBackgroundColor.COLOR_WHITE]: {
          color: cssVars.colors_neutral_color_icon_50,
        },
      },
      ['data-content-type']: {
        [AvatarContent.WITH_INITIALS]: {
          ...TEXT[TextVariantType.PARAGRAPH_CAPTION_EXTENDED],
          font_weight: cssVars.font_weight_600,
          text_align: cssVars.text_align_center,
        },
      },
    },
  },
  align_items: 'center',
  [AvatarSize.LARGE]: {
    $attributes: {
      ['data-content-type']: {
        [AvatarContent.WITH_ICON]: {
          height: cssVars.spacings_spacing_600,
          width: cssVars.spacings_spacing_600,
        },
      },
    },
    _icon: {
      height: cssVars.spacings_spacing_350,
      width: cssVars.spacings_spacing_350,
    },
    height: cssVars.spacings_spacing_600,
    max_height: cssVars.spacings_spacing_600,
    max_width: cssVars.spacings_spacing_600,
    width: cssVars.spacings_spacing_600,
  },
  [AvatarSize.MEDIUM]: {
    $attributes: {
      ['data-content-type']: {
        [AvatarContent.WITH_ICON]: {
          height: cssVars.spacings_spacing_500,
          width: cssVars.spacings_spacing_500,
        },
      },
    },
    _icon: {
      height: cssVars.spacings_spacing_250,
      width: cssVars.spacings_spacing_250,
    },
    height: cssVars.spacings_spacing_500,
    max_height: cssVars.spacings_spacing_500,
    max_width: cssVars.spacings_spacing_500,
    width: cssVars.spacings_spacing_500,
  },
  [AvatarSize.SMALL]: {
    $attributes: {
      ['data-content-type']: {
        [AvatarContent.WITH_ICON]: {
          height: cssVars.spacings_spacing_450,
          width: cssVars.spacings_spacing_450,
        },
      },
    },
    _icon: {
      height: cssVars.spacings_spacing_150,
      width: cssVars.spacings_spacing_150,
    },
    height: cssVars.spacings_spacing_450,
    max_height: cssVars.spacings_spacing_450,
    max_width: cssVars.spacings_spacing_450,
    width: cssVars.spacings_spacing_450,
  },
  [AvatarSize['EXTRA-LARGE']]: {
    $attributes: {
      ['data-content-type']: {
        [AvatarContent.WITH_ICON]: {
          height: cssVars.spacings_spacing_675,
          width: cssVars.spacings_spacing_675,
        },
      },
    },
    _icon: {
      height: cssVars.spacings_spacing_450,
      width: cssVars.spacings_spacing_450,
    },

    height: cssVars.spacings_spacing_675,
    max_height: cssVars.spacings_spacing_675,
    max_width: cssVars.spacings_spacing_675,
    width: cssVars.spacings_spacing_675,
  },
  background_position: '50%, 50%',
  background_size: '100%',
  border_radius: cssVars.radius_circle,
  cursor: 'pointer',
  display: 'inline-flex',
  justify_content: 'center',
  position: 'relative',
  text_decoration: 'none',
};
