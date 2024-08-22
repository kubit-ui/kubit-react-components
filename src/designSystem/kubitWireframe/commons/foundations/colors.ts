export const getColors = (
  accentColor = '#DF2B51',
  accentColorPressed = '#99354B'
): {
  [key: string]: { [key: string]: string };
} => {
  return {
    BRAND: {
      color_brand_font_50: accentColor,
      color_brand_icon_50: accentColor,
      color_brand_border_50: accentColor,
      color_brand_bg_50: accentColor,

      color_brand_border_100: '#050505',
      color_brand_font_100: '#050505',
    },
    SECONDARY: {
      color_secondary_font_50: '#000000',
      color_secondary_font_100: accentColor,
      color_secondary_font_150: '#FFC8D3',

      color_secondary_icon_50: '#000000',
      color_secondary_icon_100: accentColor,
      color_secondary_icon_150: '#FFC8D3',

      color_secondary_border_50: '#000000',
      color_secondary_border_100: accentColor,
      color_secondary_border_150: '#FFC8D3',

      color_secondary_bg_50: '#000000',
      color_secondary_bg_100: accentColor,
      color_secondary_bg_150: '#D1D1D1',
      color_secondary_bg_200: '#F4F4F4',
    },
    NEUTRAL: {
      color_neutral_font_50: '#1A1A1A',
      color_neutral_font_100: '#4F4F4F',
      color_neutral_font_150: '#767676',
      color_neutral_font_200: '#D1D1D1',
      color_neutral_font_250: '#FFFFFF',

      color_neutral_icon_50: '#1A1A1A',
      color_neutral_icon_100: '#4F4F4F',
      color_neutral_icon_150: '#767676',
      color_neutral_icon_200: '#D1D1D1',
      color_neutral_icon_250: '#FFFFFF',

      color_neutral_border_50: '#1A1A1A',
      color_neutral_border_100: '#4F4F4F',
      color_neutral_border_150: '#767676',
      color_neutral_border_200: '#D1D1D1',
      color_neutral_border_250: '#FFFFFF',

      color_neutral_bg_50: '#1A1A1A',
      color_neutral_bg_100: '#4F4F4F',
      color_neutral_bg_150: '#767676',
      color_neutral_bg_200: '#F4F4F4',
      color_neutral_bg_250: '#FFFFFF',
    },
    ACCENT: {
      color_accent_default_font_50: '#000000',
      color_accent_default_font_100: accentColor,
      color_accent_default_font_150: '#FFFFFF',

      color_accent_default_icon_50: '#000000',
      color_accent_default_icon_100: accentColor,
      color_accent_default_icon_150: '#FFFFFF',

      color_accent_default_border_50: '#000000',
      color_accent_default_border_100: accentColor,
      color_accent_default_border_150: '#FFFFFF',

      color_accent_default_bg_50: '#000000',
      color_accent_default_bg_100: accentColor,
      color_accent_default_bg_150: '#FFFFFF',

      color_accent_hover_bg_50: '#E44B66',
      color_accent_hover_bg_100: '#F6F6F6',
      color_accent_hover_bg_150: '#696969',

      color_accent_pressed_bg_50: '#A01D39',
      color_accent_pressed_bg_150: '#4F4F4F',

      color_accent_pressed_font_250: '#FFFFFF',

      color_accent_loading_icon_50: '#000000',
      color_accent_loading_icon_100: '#FFFFFF',
      color_accent_loading_border_50: '#000000',
      color_accent_loading_border_100: '#FFFFFF',
      color_accent_loading_bg_50: accentColor,
      color_accent_loading_bg_100: '#FFFFFF',
      color_accent_loading_bg_150: '#000000',
    },
    PRESSED: {
      color_accent_pressed_font_50: '#A01D39',
      color_accent_pressed_font_100: '#F4F4F4',
      color_accent_pressed_font_150: '#4F4F4F',
      color_accent_pressed_font_200: accentColorPressed,

      color_accent_pressed_bg_50: '#A01D39',
      color_accent_pressed_bg_100: '#F4F4F4',
      color_accent_pressed_bg_200: '#767676',

      color_accent_pressed_icon_50: '#A01D39',
      color_accent_pressed_icon_100: '#F4F4F4',
      color_accent_pressed_icon_150: '#4F4F4F',
      color_accent_pressed_icon_200: accentColorPressed,
      color_accent_pressed_icon_250: '#FFFFFF',

      color_accent_pressed_border_50: '#A01D39',
    },
    KEYBOARD_FOCUS: {
      color_accentKeyboardFocus_border_50: '#2360C5',
      color_accentKeyboardFocus_border_100: '#FFFFFF',
    },
    DISABLED: {
      color_accentDisabled_font_50: '#444444',
      color_accentDisabled_font_100: '#AAAAAA',
      color_accentDisabled_font_150: '#E6E6E6',

      color_accentDisabled_icon_50: '#444444',
      color_accentDisabled_icon_100: '#AAAAAA',
      color_accentDisabled_icon_150: '#E6E6E6',

      color_accentDisabled_border_50: '#444444',
      color_accentDisabled_border_100: '#AAAAAA',
      color_accentDisabled_border_150: '#E6E6E6',

      color_accentDisabled_bg_50: '#444444',
      color_accentDisabled_bg_100: '#AAAAAA',
      color_accentDisabled_bg_150: '#E6E6E6',
    },
    FEEDBACK: {
      color_feedbackError_font_50: '#CC0000',
      color_feedbackSuccess_font_50: '#008035',

      color_feedbackInfo_icon_50: '#00A4A4',
      color_feedback_warning_icon_50: '#856300',
      color_feedback_success_icon_50: '#5CA40A',
      color_feedbackSuccess_icon_100: '#008035',
      color_feedback_error_icon_50: '#FF003C',
      color_feedbackError_icon_100: '#CC0000',

      color_feedback_info_border_50: '#00A4A4',
      color_feedbackInfo_border_100: '#23779A',
      color_feedback_warning_border_50: '#FFC000',
      color_feedbackWarning_border_100: '#856300',
      color_feedback_success_border_50: '#5CA40A',
      color_feedbackSuccess_border_100: '#008035',
      color_feedback_error_border_50: '#FF003C',
      color_feedbackError_border_100: '#CC0000',

      color_feedback_info_bg_50: '#E6F6F6',
      color_feedback_info_bg_100: '#00A4A4',
      color_feedback_info_bg_150: '#23779A',
      color_feedback_warning_bg_50: '#FFF9E6',
      color_feedback_warning_bg_100: '#FFC000',
      color_feedback_warning_bg_150: '#856300',
      color_feedback_success_bg_50: '#EFF7E7',
      color_feedback_success_bg_100: '#5CA40A',
      color_feedback_success_bg_150: '#008035',
      color_feedback_error_bg_50: '#FFE6EC',
      color_feedback_error_bg_100: '#FF003C',
      color_feedbackError_bg_150: '#CC0000',
    },
    HOVER: { color_accent_hover_bg_50: '#E44B66' },
  };
};
