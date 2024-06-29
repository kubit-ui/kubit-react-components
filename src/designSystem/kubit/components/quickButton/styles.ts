import { QuickButtonState, QuickButtonStylesType } from '@/components/quickButton/types';

import { BORDERS, COLORS, FONT_WEIGHT, SIZES, SPACINGS, TEXT_ALIGN } from '../../foundations';
import { TextVariantType } from '../text';
import { QuickButtonVariantType } from './variants';

const QUICK_BUTTON_TOKENS = {
  container: {
    display: 'flex',
    flex_direction: 'column',
    align_items: 'center',
    gap: SPACINGS.spacing_100,
  },
  label: {
    font_family: TextVariantType.PARAGRAPH_CAPTION_EXTENDED,
    font_weight: FONT_WEIGHT.font_weight_400,
    color: COLORS.ACCENT.color_accent_default_font_50,
    text_align: TEXT_ALIGN.center,
  },
  icon: {
    width: SIZES.size_200,
    height: SIZES.size_200,
    color: COLORS.ACCENT.color_accent_default_icon_50,
  },
  button: {
    padding: SPACINGS.spacing_250,
    display: 'flex',
    align_items: 'center',
    justify_content: 'center',
  },
};

const actionButtonBorder = {
  border_width: BORDERS.border_50,
  border_style: 'solid',
  border_color: COLORS.ACCENT.color_accent_default_border_50,
};

export const QUICK_BUTTON_STYLES: QuickButtonStylesType<QuickButtonVariantType> = {
  [QuickButtonVariantType.PRIMARY]: {
    [QuickButtonState.DEFAULT]: {
      ...QUICK_BUTTON_TOKENS,
      button: {
        ...QUICK_BUTTON_TOKENS.button,
        background_color: COLORS.ACCENT.color_accent_default_bg_100,
      },
    },
    [QuickButtonState.HOVER]: {
      ...QUICK_BUTTON_TOKENS,
      button: {
        ...QUICK_BUTTON_TOKENS.button,
        background_color: COLORS.ACCENT.color_accent_hover_bg_50,
      },
    },
    [QuickButtonState.PRESSED]: {
      ...QUICK_BUTTON_TOKENS,
      icon: {
        ...QUICK_BUTTON_TOKENS.icon,
        color: COLORS.ACCENT.color_accent_default_icon_150,
      },
      button: {
        ...QUICK_BUTTON_TOKENS.button,
        background_color: COLORS.ACCENT.color_accent_pressed_bg_50,
      },
    },
    [QuickButtonState.DISABLED]: {
      ...QUICK_BUTTON_TOKENS,
      icon: {
        ...QUICK_BUTTON_TOKENS.icon,
        color: COLORS.NEUTRAL.color_neutral_icon_100,
      },
      button: {
        ...QUICK_BUTTON_TOKENS.button,
        background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
      },
    },
  },
  [QuickButtonVariantType.SECONDARY]: {
    [QuickButtonState.DEFAULT]: {
      ...QUICK_BUTTON_TOKENS,
      button: {
        ...QUICK_BUTTON_TOKENS.button,
        ...actionButtonBorder,
        background_color: COLORS.ACCENT.color_accent_default_bg_150,
      },
    },
    [QuickButtonState.HOVER]: {
      ...QUICK_BUTTON_TOKENS,
      icon: {
        ...QUICK_BUTTON_TOKENS.icon,
        color: COLORS.ACCENT.color_accent_hover_icon_150,
      },
      button: {
        ...QUICK_BUTTON_TOKENS.button,
        ...actionButtonBorder,
        background_color: COLORS.ACCENT.color_accent_hover_bg_100,
      },
    },
    [QuickButtonState.PRESSED]: {
      ...QUICK_BUTTON_TOKENS,
      icon: {
        ...QUICK_BUTTON_TOKENS.icon,
        color: COLORS.PRESSED.color_accent_pressed_icon_150,
      },
      button: {
        ...QUICK_BUTTON_TOKENS,
        ...actionButtonBorder,
        background_color: COLORS.PRESSED.color_accent_pressed_bg_100,
      },
    },
    [QuickButtonState.DISABLED]: {
      ...QUICK_BUTTON_TOKENS,
      icon: {
        ...QUICK_BUTTON_TOKENS.icon,
        color: COLORS.NEUTRAL.color_neutral_icon_100,
      },
      button: {
        ...QUICK_BUTTON_TOKENS.button,
        border: '0',
        background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
      },
    },
  },
};
