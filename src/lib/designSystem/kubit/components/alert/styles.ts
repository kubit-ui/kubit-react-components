import type { AlertVariantStyles } from '@/components/alert/types/alertTheme';
import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';

import { TEXT } from '../text/styles';
import { TextVariantType } from '../text/variants';
import { AlertVariantType } from './variants';

type AlertVariants = keyof typeof AlertVariantType;

export const ALERT: AlertVariantStyles<AlertVariants> = {
  _container: {
    align_items: 'flex-start',
    border_radius: cssVars.radius_00,
    border_style: 'solid',
    border_width: cssVars.borders_border_50,
    display: 'flex',
    flex_direction: 'row',
    gap: cssVars.spacings_spacing_150,
    justify_content: 'flex-start',
    padding: cssVars.spacings_spacing_300,
    position: 'relative',
  },
  _contentContainer: {
    padding: cssVars.spacings_spacing_0,
  },
  _description: {
    ...TEXT[TextVariantType.PARAGRAPH_SMALL_EXTENDED],
    color: cssVars.colors_neutral_color_font_150,
    font_weight: cssVars.font_weight_400,
    word_break: 'break-word',
  },
  [AlertVariantType.ERROR]: {
    _container: {
      background_color: cssVars.colors_feedback_color_error_bg_50,
      border_color: cssVars.colors_feedback_color_feedbackerror_border_100,
    },
  },
  [AlertVariantType.INFORMATIVE]: {
    _container: {
      background_color: cssVars.colors_feedback_color_info_bg_50,
      border_color: cssVars.colors_feedback_color_feedbackinfo_border_100,
    },
  },
  [AlertVariantType.SUCCESS]: {
    _container: {
      background_color: cssVars.colors_feedback_color_success_bg_50,
      border_color: cssVars.colors_feedback_color_feedbacksuccess_border_100,
    },
  },
  [AlertVariantType.WARNING]: {
    _container: {
      background_color: cssVars.colors_feedback_color_warning_bg_50,
      border_color: cssVars.colors_feedback_color_feedbackwarning_border_100,
    },
  },
};
