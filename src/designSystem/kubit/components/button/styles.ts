// types
import { ButtonStateType, ButtonStylesType } from '@/components/button/types';
import { DeviceBreakpointsType } from '@/types';

// constants
import {
  BORDERS,
  COLORS,
  FONT_FAMILY,
  FONT_WEIGHT,
  PARAGRAPH,
  SIZES,
  SPACINGS,
  TEXT_ALIGN,
} from '../../foundations';
import { ButtonSizeType, ButtonVariantType } from './variants';

const actionCommonProps = {
  text_align: TEXT_ALIGN.center,
  icon_size: SIZES.size_200,
  label_font_weight: FONT_WEIGHT.font_weight_600,
  radius_size: BORDERS.border_100,
  text_decoration: 'underline',
  padding_right: SPACINGS.spacing_0,
  padding_left: SPACINGS.spacing_0,
  padding_top: SPACINGS.spacing_0,
  padding_bottom: SPACINGS.spacing_0,
};

const commonPropsDefault = {
  border_radius: BORDERS.border_00,
  text_align: TEXT_ALIGN.center,
  font_family: FONT_FAMILY.font_family_nunito_sans,
};

export const BUTTON_STYLES: ButtonStylesType<ButtonVariantType, ButtonSizeType> = {
  [ButtonSizeType.SMALL]: {
    padding_right: SPACINGS.spacing_250,
    padding_left: SPACINGS.spacing_250,
    padding_top: SPACINGS.spacing_150,
    padding_bottom: SPACINGS.spacing_150,
    gap: SPACINGS.spacing_100,

    font_size: PARAGRAPH.SMALL[DeviceBreakpointsType.DESKTOP].font_size,
    line_height: PARAGRAPH.SMALL[DeviceBreakpointsType.DESKTOP].line_height,

    icon: {
      width: SIZES.size_200,
      height: SIZES.size_200,
    },
  },
  [ButtonSizeType.MEDIUM]: {
    padding_right: SPACINGS.spacing_300,
    padding_left: SPACINGS.spacing_300,
    padding_top: SPACINGS.spacing_250,
    padding_bottom: SPACINGS.spacing_250,
    gap: SPACINGS.spacing_150,

    font_size: PARAGRAPH.MEDIUM[DeviceBreakpointsType.DESKTOP].font_size,
    line_height: PARAGRAPH.MEDIUM[DeviceBreakpointsType.DESKTOP].line_height,

    icon: {
      width: SIZES.size_250,
      height: SIZES.size_250,
    },
  },
  [ButtonSizeType.LARGE]: {
    padding_right: SPACINGS.spacing_300,
    padding_left: SPACINGS.spacing_300,
    padding_top: SPACINGS.spacing_250,
    padding_bottom: SPACINGS.spacing_250,
    gap: SPACINGS.spacing_150,

    font_size: PARAGRAPH.MEDIUM[DeviceBreakpointsType.DESKTOP].font_size,
    line_height: PARAGRAPH.MEDIUM[DeviceBreakpointsType.DESKTOP].line_height,

    icon: {
      width: SIZES.size_250,
      height: SIZES.size_250,
    },
  },
  [ButtonVariantType.PRIMARY]: {
    [ButtonStateType.DEFAULT]: {
      ...commonPropsDefault,
      altVariant: true,
      background_color: COLORS.ACCENT.color_accent_default_bg_100,
      color: COLORS.ACCENT.color_accent_default_font_50,
      icon: {
        color: COLORS.ACCENT.color_accent_default_icon_50,
      },
    },
    [ButtonStateType.HOVER]: {
      ...commonPropsDefault,
      altVariant: true,
      background_color: COLORS.ACCENT.color_accent_hover_bg_50,
      color: COLORS.ACCENT.color_accent_hover_font_200,
      icon: {
        color: COLORS.ACCENT.color_accent_hover_icon_200,
      },
    },
    [ButtonStateType.PRESSED]: {
      ...commonPropsDefault,
      altVariant: true,
      background_color: COLORS.ACCENT.color_accent_pressed_bg_50,
      color: COLORS.ACCENT.color_accent_pressed_font_250,
      icon: {
        color: COLORS.ACCENT.color_accent_pressed_icon_250,
      },
      text_decoration: 'none',
    },
    [ButtonStateType.LOADING]: {
      ...commonPropsDefault,
      altVariant: true,
      background_color: COLORS.ACCENT.color_accent_default_bg_100,
    },
    [ButtonStateType.DISABLED]: {
      ...commonPropsDefault,
      altVariant: true,
      background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
      color: COLORS.DISABLED.color_accentDisabled_icon_100,
      icon: {
        color: COLORS.DISABLED.color_accentDisabled_font_100,
      },
    },
  },
  [ButtonVariantType.ACTION_PRIMARY]: {
    [ButtonStateType.DEFAULT]: {
      ...actionCommonProps,
      altVariant: true,
      color: COLORS.ACCENT.color_accent_default_font_100,
      icon: {
        color: COLORS.ACCENT.color_accent_default_icon_100,
      },
    },
    [ButtonStateType.PRESSED]: {
      ...actionCommonProps,
      altVariant: true,
      color: COLORS.ACCENT.color_accent_default_font_100,
      text_decoration: 'none',
      icon: {
        color: COLORS.ACCENT.color_accent_default_icon_100,
      },
    },
    [ButtonStateType.HOVER]: {
      ...actionCommonProps,
      altVariant: true,
      color: COLORS.PRESSED.color_accent_pressed_font_50,
      background_color: COLORS.PRESSED.color_accent_pressed_bg_100,
      icon: {
        color: COLORS.PRESSED.color_accent_pressed_icon_50,
      },
    },
    [ButtonStateType.DISABLED]: {
      ...actionCommonProps,
      altVariant: true,
      color: COLORS.DISABLED.color_accentDisabled_font_100,
      icon: {
        color: COLORS.DISABLED.color_accentDisabled_icon_100,
      },
    },
  },
  [ButtonVariantType.ACTION_SECONDARY]: {
    [ButtonStateType.DEFAULT]: {
      ...actionCommonProps,
      altVariant: true,
      color: COLORS.ACCENT.color_accent_default_font_50,
      icon: {
        color: COLORS.ACCENT.color_accent_default_icon_50,
      },
    },
    [ButtonStateType.PRESSED]: {
      ...actionCommonProps,
      altVariant: true,
      color: COLORS.ACCENT.color_accent_default_font_50,
      text_decoration: 'none',
      icon: {
        color: COLORS.ACCENT.color_accent_default_icon_50,
      },
    },
    [ButtonStateType.HOVER]: {
      ...actionCommonProps,
      altVariant: true,
      color: COLORS.PRESSED.color_accent_pressed_font_150,
      background_color: COLORS.PRESSED.color_accent_pressed_bg_100,
      icon: {
        color: COLORS.PRESSED.color_accent_pressed_icon_150,
      },
    },
    [ButtonStateType.DISABLED]: {
      ...actionCommonProps,
      altVariant: true,
      color: COLORS.DISABLED.color_accentDisabled_font_100,
      icon: {
        color: COLORS.DISABLED.color_accentDisabled_icon_100,
      },
    },
  },
  [ButtonVariantType.ACTION_SECONDARY_ALT]: {
    [ButtonStateType.DEFAULT]: {
      ...actionCommonProps,
      altVariant: true,
      color: COLORS.ACCENT.color_accent_default_font_150,
      icon: {
        color: COLORS.ACCENT.color_accent_default_icon_150,
      },
    },
    [ButtonStateType.PRESSED]: {
      ...actionCommonProps,
      altVariant: true,
      text_decoration: 'none',
      color: COLORS.ACCENT.color_accent_default_font_150,
      icon: {
        color: COLORS.ACCENT.color_accent_default_icon_150,
      },
    },
    [ButtonStateType.HOVER]: {
      ...actionCommonProps,
      altVariant: true,
      color: COLORS.PRESSED.color_accent_pressed_font_100,
      background_color: COLORS.PRESSED.color_accent_pressed_bg_200,
      icon: {
        color: COLORS.PRESSED.color_accent_pressed_icon_100,
      },
    },
    [ButtonStateType.DISABLED]: {
      ...actionCommonProps,
      altVariant: true,
      color: COLORS.DISABLED.color_accentDisabled_font_100,
      icon: {
        color: COLORS.DISABLED.color_accentDisabled_icon_100,
      },
    },
  },
  [ButtonVariantType.SECONDARY]: {
    [ButtonStateType.DEFAULT]: {
      ...commonPropsDefault,
      altVariant: true,
      background_color: COLORS.ACCENT.color_accent_default_bg_150,
      color: COLORS.ACCENT.color_accent_default_font_50,
      border: BORDERS.border_100,
      border_style: 'solid',
      border_color: COLORS.ACCENT.color_accent_default_border_50,
      icon: {
        color: COLORS.ACCENT.color_accent_default_font_50,
      },
    },
    [ButtonStateType.HOVER]: {
      ...commonPropsDefault,
      altVariant: true,
      background_color: COLORS.ACCENT.color_accent_hover_bg_100,
      color: COLORS.ACCENT.color_accent_default_font_50,
      border: BORDERS.border_100,
      border_style: 'solid',
      border_color: COLORS.ACCENT.color_accent_default_border_50,
      icon: {
        color: COLORS.ACCENT.color_accent_pressed_icon_200,
      },
    },
    [ButtonStateType.PRESSED]: {
      ...commonPropsDefault,
      altVariant: true,
      background_color: COLORS.ACCENT.color_accent_hover_bg_100,
      color: COLORS.ACCENT.color_accent_default_font_50,
      border: BORDERS.border_100,
      border_style: 'solid',
      border_color: COLORS.ACCENT.color_accent_default_border_50,
      icon: {
        color: COLORS.NEUTRAL.color_neutral_font_50,
      },
      text_decoration: 'none',
    },
    [ButtonStateType.LOADING]: {
      ...commonPropsDefault,
      altVariant: true,
      background_color: COLORS.ACCENT.color_accent_loading_bg_100,
      border: BORDERS.border_100,
      border_style: 'solid',
      border_color: COLORS.ACCENT.color_accent_loading_border_50,
    },
    [ButtonStateType.DISABLED]: {
      ...commonPropsDefault,
      altVariant: true,
      background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
      color: COLORS.DISABLED.color_accentDisabled_font_100,
      border: BORDERS.border_100,
      border_style: 'solid',
      border_color: COLORS.DISABLED.color_accentDisabled_border_100,
      icon: {
        color: COLORS.DISABLED.color_accentDisabled_icon_100,
      },
    },
  },
  [ButtonVariantType.SECONDARY_ALT]: {
    [ButtonStateType.DEFAULT]: {
      ...commonPropsDefault,
      altVariant: true,
      background_color: COLORS.ACCENT.color_accent_default_bg_50,
      color: COLORS.ACCENT.color_accent_default_font_150,
      border: BORDERS.border_100,
      border_style: 'solid',
      border_color: COLORS.ACCENT.color_accent_default_border_150,
      icon: {
        color: COLORS.ACCENT.color_accent_default_icon_150,
      },
    },
    [ButtonStateType.HOVER]: {
      ...commonPropsDefault,
      altVariant: true,
      background_color: COLORS.ACCENT.color_accent_hover_bg_150,
      color: COLORS.ACCENT.color_accent_default_font_150,
      border: BORDERS.border_100,
      border_style: 'solid',
      border_color: COLORS.ACCENT.color_accent_default_border_150,
      icon: {
        color: COLORS.ACCENT.color_accent_default_font_150,
      },
    },
    [ButtonStateType.PRESSED]: {
      ...commonPropsDefault,
      altVariant: true,
      background_color: COLORS.ACCENT.color_accent_pressed_bg_150,
      color: COLORS.ACCENT.color_accent_default_font_150,
      border: BORDERS.border_100,
      border_style: 'solid',
      border_color: COLORS.ACCENT.color_accent_default_border_150,
      icon: {
        color: COLORS.ACCENT.color_accent_default_font_150,
      },
      text_decoration: 'none',
    },
    [ButtonStateType.LOADING]: {
      ...commonPropsDefault,
      altVariant: true,
      background_color: COLORS.ACCENT.color_accent_loading_bg_150,
      border: BORDERS.border_100,
      border_style: 'solid',
      border_color: COLORS.ACCENT.color_accent_loading_border_100,
    },
    [ButtonStateType.DISABLED]: {
      ...commonPropsDefault,
      altVariant: true,
      background_color: COLORS.DISABLED.color_accentDisabled_bg_50,
      color: COLORS.DISABLED.color_accentDisabled_font_100,
      border: BORDERS.border_100,
      border_style: 'solid',
      border_color: COLORS.DISABLED.color_accentDisabled_border_100,
      icon: {
        color: COLORS.DISABLED.color_accentDisabled_icon_100,
      },
    },
  },
};
