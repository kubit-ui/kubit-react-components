import { ToggleStateType, ToggleStylesType } from '@/components/toggle/types';

import {
  BORDERS,
  COLORS,
  FONT_WEIGHT,
  RADIUS,
  SIZES,
  SPACINGS,
  TEXT_ALIGN,
} from '../../foundations';
import { TextVariantType } from '../text';
import { ToggleVariantType } from './variants';

const commonWrapperProps = {
  border_radius: RADIUS.radius_50,
  width: '3.625rem',
  height: SIZES.size_250,
  margin: 'auto',
  display: 'inline-flex',
  position: 'relative',
  text_align: TEXT_ALIGN.center,
  align_items: 'center',
  padding_left: SPACINGS.spacing_25,
};

const commonLabelProps = {
  color: COLORS.NEUTRAL.color_neutral_font_50,
  font_weight: FONT_WEIGHT.font_weight_600,
  font_variant: TextVariantType.PARAGRAPH_CAPTION_EXTENDED,
  margin_left: SPACINGS.spacing_150,
  margin_right: SPACINGS.spacing_150,
};

const commonProps = {
  wrapper: {
    ...commonWrapperProps,
    width: '3.625rem',
  },
  thumb: {
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    height: SIZES.size_200,
    width: SIZES.size_200,
    display: 'flex',
    position: 'absolute',
    border_radius: RADIUS.radius_50,
    justify_content: 'center',
    align_items: 'center',
    transition: '0.4s',
  },
  icon: {
    height: SIZES.size_100,
    width: SIZES.size_100,
  },
  wrapperThreePositions: {
    ...commonWrapperProps,
    width: '5.75rem',
  },
  label: {
    ...commonLabelProps,
  },
  labelWithIcons: {
    ...commonLabelProps,
  },
};

export const TOGGLE_STYLES: ToggleStylesType<ToggleVariantType> = {
  [ToggleVariantType.DEFAULT]: {
    [ToggleStateType.DEFAULT]: {
      ...commonProps,
      wrapperThreePositions: {
        ...commonProps.wrapperThreePositions,
        background_color: COLORS.NEUTRAL.color_neutral_bg_150,
      },
      icon: {
        ...commonProps.icon,
        color: COLORS.ACCENT.color_accent_default_icon_100,
      },
      label: {
        ...commonProps.label,
        color: COLORS.NEUTRAL.color_neutral_font_250,
      },
    },
    [ToggleStateType.DEFAULT_SELECTED]: {
      ...commonProps,
      wrapper: {
        ...commonProps.wrapper,
        background_color: COLORS.ACCENT.color_accent_default_font_100,
        border_width: BORDERS.border_50,
      },
      wrapperThreePositions: {
        ...commonProps.wrapperThreePositions,
        border_width: BORDERS.border_50,
        background_color: COLORS.FEEDBACK.color_feedback_success_bg_100,
      },
      icon: {
        ...commonProps.icon,
        color: COLORS.NEUTRAL.color_neutral_icon_50,
      },
      label: {
        ...commonProps.label,
        color: COLORS.FEEDBACK.color_feedbackSuccess_font_50,
      },
    },
    [ToggleStateType.DEFAULT_UNSELECTED]: {
      ...commonProps,
      wrapper: {
        ...commonProps.wrapper,
        background_color: COLORS.NEUTRAL.color_neutral_bg_150,
        border_width: BORDERS.border_50,
      },
      wrapperThreePositions: {
        ...commonProps.wrapperThreePositions,
        border_width: BORDERS.border_50,
        background_color: COLORS.FEEDBACK.color_feedbackError_border_100,
      },
      icon: {
        ...commonProps.icon,
        color: COLORS.NEUTRAL.color_neutral_icon_150,
      },
      label: {
        ...commonProps.label,
        color: COLORS.FEEDBACK.color_feedbackError_font_50,
      },
    },
    [ToggleStateType.DISABLED_SELECTED]: {
      ...commonProps,
      wrapper: {
        ...commonProps.wrapper,
        background_color: COLORS.DISABLED.color_accentDisabled_bg_50,
        border_color: COLORS.DISABLED.color_accentDisabled_border_50,
        border_width: BORDERS.border_50,
      },
      icon: {
        ...commonProps.icon,
        color: COLORS.DISABLED.color_accentDisabled_icon_50,
      },
    },
    [ToggleStateType.DISABLED_UNSELECTED]: {
      ...commonProps,
      wrapper: {
        ...commonProps.wrapper,
        background_color: COLORS.DISABLED.color_accentDisabled_bg_100,
        border_color: COLORS.DISABLED.color_accentDisabled_border_50,
        border_width: BORDERS.border_50,
      },
      icon: {
        ...commonProps.icon,
        color: COLORS.DISABLED.color_accentDisabled_bg_50,
      },
    },
  },
};
