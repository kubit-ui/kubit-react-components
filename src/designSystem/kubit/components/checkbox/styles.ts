import { CheckboxStateType, CheckboxStylesType } from '@/components/checkbox/types';

import { BORDERS, COLORS, FONT_WEIGHT, SIZES, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text/variants';
import { CheckboxVariantType } from './variants';

const commonProps = {
  label: {
    font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
    color: COLORS.NEUTRAL.color_neutral_font_50,
    font_weight: FONT_WEIGHT.font_weight_400,
  },
  specialLabel: {
    font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
    color: COLORS.NEUTRAL.color_neutral_font_50,
    font_weight: FONT_WEIGHT.font_weight_500,
  },
  extraContentWrapper: {
    // Checkbox width + checkbox margin_right
    padding_left: SPACINGS.spacing_450,
    display: 'flex',
    flex_direction: 'column',
  },
  helpContentTextWrapper: {
    display: 'flex',
    flex_direction: 'column',
  },
  errorWrapper: {
    display: 'flex',
    align_items: 'flex-start',
    gap: '0.375rem',
  },
  errorIcon: {
    height: SIZES.size_150,
    width: SIZES.size_150,
    color: COLORS.FEEDBACK.color_feedbackError_font_50,
  },
  textError: {
    font_variant: TextVariantType.PARAGRAPH_CAPTION_EXTENDED,
    color: COLORS.FEEDBACK.color_feedbackError_font_50,
    font_weight: FONT_WEIGHT.font_weight_400,
  },
};

const commonCheckboxProps = {
  height: SIZES.size_200,
  width: SIZES.size_200,
  border_style: 'solid',
  border_radius: BORDERS.border_00,
  margin_right: SPACINGS.spacing_150,
};

const commonCheckedIconProps = {
  height: SIZES.size_200,
  width: SIZES.size_200,
};

export const CHECKBOX_STYLES: CheckboxStylesType<CheckboxVariantType> = {
  [CheckboxVariantType.DEFAULT]: {
    [CheckboxStateType.DEFAULT_UNSELECTED]: {
      ...commonProps,
      checkbox: {
        ...commonCheckboxProps,
        border_width: BORDERS.border_50,
        border_color: COLORS.NEUTRAL.color_neutral_border_100,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      },
    },
    [CheckboxStateType.DEFAULT_SELECTED]: {
      ...commonProps,
      checkbox: {
        ...commonCheckboxProps,
        border_width: BORDERS.border_50,
        border_color: COLORS.ACCENT.color_accent_default_border_100,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      },
      checkedIcon: {
        ...commonCheckedIconProps,
        color: COLORS.ACCENT.color_accent_default_icon_100,
      },
    },
    [CheckboxStateType.DISABLED_UNSELECTED]: {
      ...commonProps,
      checkbox: {
        ...commonCheckboxProps,
        border_width: BORDERS.border_50,
        border_color: COLORS.DISABLED.color_accentDisabled_border_50,
        background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
      },
    },
    [CheckboxStateType.DISABLED_SELECTED]: {
      ...commonProps,
      checkbox: {
        ...commonCheckboxProps,
        border_width: BORDERS.border_50,
        border_color: COLORS.DISABLED.color_accentDisabled_border_50,
        background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
      },
      checkedIcon: {
        ...commonCheckedIconProps,
        color: COLORS.DISABLED.color_accentDisabled_icon_50,
      },
    },
    [CheckboxStateType.ERROR]: {
      ...commonProps,
      checkbox: {
        ...commonCheckboxProps,
        border_width: BORDERS.border_50,
        border_color: COLORS.ACCENT.color_accent_default_border_100,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      },
    },
  },
};
