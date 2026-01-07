import type { ButtonVariantStyles } from '@/components/button/types/buttonTheme';

import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';

import { FONT_FAMILY } from '../../foundations/typography';
import { ButtonSizeType, ButtonVariantType } from './variants';

const mergeVariants = { ...ButtonSizeType, ...ButtonVariantType };

type ButtonVariants = keyof typeof mergeVariants;

const actionCommonProps = {
  icon_size: cssVars.sizes_size_200,
  label_font_weight: cssVars.font_weight_600,
  padding_bottom: cssVars.spacings_spacing_0,
  padding_left: cssVars.spacings_spacing_0,
  padding_right: cssVars.spacings_spacing_0,
  padding_top: cssVars.spacings_spacing_0,
  radius_size: cssVars.borders_border_100,
  text_decoration: 'underline',
};

const commonPropsDefault = {
  border_radius: cssVars.borders_border_00,
  font_family: FONT_FAMILY.font_family_nunito_sans,
};

export const BUTTON: ButtonVariantStyles<ButtonVariants> = {
  $attributes: {
    'data-full-width': {
      true: {
        width: '100%',
      },
    },
    'data-loading': {
      true: {
        $pseudoElements: {
          after: {
            display: 'block',
          },
        },
      },
    },
    'data-position': {
      LEFT: {
        flex_direction: 'row',
      },
      RIGHT: {
        flex_direction: 'row-reverse',
      },
    },
  },
  $dynamicValues: ['$alignText'],
  $pseudoClasses: {
    disabled: {
      cursor: 'not-allowed',
    },
  },
  $pseudoElements: {
    after: {
      $content: 'attr(--data-content)',
      // display: 'var(--after-display)',
      display: 'none',
      visibility: 'hidden',
    },
  },
  _icon: {
    color: 'currentColor',
    display: 'inline-flex',
    fill: 'currentColor',
  },
  _loader: {
    align_items: 'center',
    display: 'flex',
    position: 'absolute',
  },
  align_items: 'center',
  [ButtonSizeType.LARGE]: {
    _icon: {
      height: cssVars.sizes_size_250,
      width: cssVars.sizes_size_250,
    },
    font_size: cssVars.font_size_body_100,
    gap: cssVars.spacings_spacing_150,
    line_height: cssVars.line_height_200,
    padding_bottom: cssVars.spacings_spacing_250,
    padding_left: cssVars.spacings_spacing_300,
    padding_right: cssVars.spacings_spacing_300,
    padding_top: cssVars.spacings_spacing_250,
  },
  [ButtonSizeType.SMALL]: {
    _icon: {
      height: cssVars.sizes_size_200,
      width: cssVars.sizes_size_200,
    },
    font_size: cssVars.font_size_body_150,
    gap: cssVars.spacings_spacing_100,
    line_height: cssVars.line_height_250,
    padding_bottom: cssVars.spacings_spacing_150,
    padding_left: cssVars.spacings_spacing_250,
    padding_right: cssVars.spacings_spacing_250,
    padding_top: cssVars.spacings_spacing_150,
  },
  [ButtonVariantType.ACTION_PRIMARY]: {
    ...actionCommonProps,
    $pseudoClasses: {
      active: {
        color: cssVars.colors_accent_color_default_font_100,
        text_decoration: 'none',
      },
      disabled: {
        color: cssVars.colors_disabled_color_accentdisabled_font_100,
        hover: {
          color: cssVars.colors_disabled_color_accentdisabled_font_100,
        },
      },
      hover: {
        background_color: cssVars.colors_pressed_color_accent_bg_100,
        color: cssVars.colors_pressed_color_accent_font_50,
      },
    },
    color: cssVars.colors_accent_color_default_font_100,
  },
  [ButtonVariantType.ACTION_SECONDARY]: {
    ...actionCommonProps,
    $pseudoClasses: {
      active: {
        color: cssVars.colors_accent_color_default_font_50,
        text_decoration: 'none',
      },
      disabled: {
        color: cssVars.colors_disabled_color_accentdisabled_font_100,
        hover: {
          color: cssVars.colors_disabled_color_accentdisabled_font_100,
        },
      },
      hover: {
        background_color: cssVars.colors_pressed_color_accent_bg_100,
        color: cssVars.colors_pressed_color_accent_font_150,
      },
    },
    color: cssVars.colors_accent_color_default_font_50,
  },
  [ButtonVariantType.ACTION_SECONDARY_ALT]: {
    ...actionCommonProps,
    $pseudoClasses: {
      active: {
        color: cssVars.colors_accent_color_default_font_150,
        text_decoration: 'none',
      },
      disabled: {
        color: cssVars.colors_disabled_color_accentdisabled_font_100,
        hover: {
          color: cssVars.colors_disabled_color_accentdisabled_font_100,
        },
      },
      hover: {
        background_color: cssVars.colors_pressed_color_accent_bg_200,
        color: cssVars.colors_pressed_color_accent_font_100,
      },
    },
    color: cssVars.colors_accent_color_default_font_150,
  },
  [ButtonVariantType.PRIMARY]: {
    ...commonPropsDefault,
    $attributes: {
      'data-loading': {
        background_color: cssVars.colors_accent_color_default_bg_100,
      },
    },
    $pseudoClasses: {
      active: {
        background_color: cssVars.colors_accent_color_pressed_bg_50,
        color: cssVars.colors_accent_color_pressed_font_200,
      },
      disabled: {
        background_color: cssVars.colors_disabled_color_accentdisabled_bg_150,
        color: cssVars.colors_disabled_color_accentdisabled_icon_100,
        hover: {
          background_color: cssVars.colors_disabled_color_accentdisabled_bg_150,
          color: cssVars.colors_disabled_color_accentdisabled_icon_100,
        },
      },
      hover: {
        background_color: cssVars.colors_accent_color_hover_bg_50,
        color: cssVars.colors_accent_color_hover_font_200,
      },
    },
    background_color: cssVars.colors_accent_color_default_bg_100,
    color: cssVars.colors_accent_color_default_font_50,
  },
  [ButtonVariantType.SECONDARY]: {
    ...commonPropsDefault,
    $attributes: {
      'data-loading': {
        background_color: cssVars.colors_accent_color_loading_bg_100,
        border_color: cssVars.colors_accent_color_loading_border_50,
      },
    },
    $pseudoClasses: {
      active: {
        background_color: cssVars.colors_accent_color_hover_bg_100,
        color: cssVars.colors_accent_color_default_font_50,
        text_decoration: 'none',
      },
      disabled: {
        background_color: cssVars.colors_disabled_color_accentdisabled_bg_150,
        border_color: cssVars.colors_disabled_color_accentdisabled_border_100,
        color: cssVars.colors_disabled_color_accentdisabled_font_100,
        hover: {
          background_color: cssVars.colors_disabled_color_accentdisabled_bg_150,
          border_color: cssVars.colors_disabled_color_accentdisabled_border_100,
          color: cssVars.colors_disabled_color_accentdisabled_font_100,
        },
      },
      hover: {
        background_color: cssVars.colors_accent_color_hover_bg_100,
        color: cssVars.colors_accent_color_default_font_50,
      },
    },
    background_color: cssVars.colors_accent_color_default_bg_150,
    border: cssVars.borders_border_100,
    border_color: cssVars.colors_accent_color_default_border_50,
    border_style: 'solid',
    color: cssVars.colors_accent_color_default_font_50,
  },
  [ButtonVariantType.SECONDARY_ALT]: {
    ...commonPropsDefault,
    $attributes: {
      'data-loading': {
        background_color: cssVars.colors_accent_color_loading_bg_150,
        border_color: cssVars.colors_accent_color_loading_border_100,
      },
    },
    $pseudoClasses: {
      active: {
        background_color: cssVars.colors_accent_color_pressed_bg_150,
        color: cssVars.colors_accent_color_default_font_150,
        text_decoration: 'none',
      },
      disabled: {
        background_color: cssVars.colors_disabled_color_accentdisabled_bg_50,
        border_color: cssVars.colors_disabled_color_accentdisabled_border_100,
        color: cssVars.colors_disabled_color_accentdisabled_font_100,
        hover: {
          background_color: cssVars.colors_disabled_color_accentdisabled_bg_50,
          border_color: cssVars.colors_disabled_color_accentdisabled_border_100,
          color: cssVars.colors_disabled_color_accentdisabled_font_100,
        },
      },
      hover: {
        background_color: cssVars.colors_accent_color_hover_bg_150,
        color: cssVars.colors_accent_color_default_font_150,
      },
    },
    background_color: cssVars.colors_accent_color_default_bg_50,
    border: cssVars.borders_border_100,
    border_color: cssVars.colors_accent_color_default_border_150,
    border_style: 'solid',
    color: cssVars.colors_accent_color_default_font_150,
  },
  cursor: 'pointer',
  display: 'inline-flex',
  justify_content: 'center',
  text_align: '$alignText',
  width: 'auto',
};
