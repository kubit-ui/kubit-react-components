import type { MessageVariantStyles } from '@/components/message/types/messageTheme';

import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';

import { BUTTON } from '../button/styles';
import { ButtonVariantType } from '../button/variants';
import { TEXT } from '../text/styles';
import { TextVariantType } from '../text/variants';
import { MessageVariantType } from './variants';

type MessageVariants = keyof typeof MessageVariantType;

export const MESSAGE: MessageVariantStyles<MessageVariants> = {
  $foreign: {
    action_button: {
      component: BUTTON,
      name: 'button',
      variant: ButtonVariantType.ACTION_PRIMARY,
    },
  },
  _actionButtonContainer: {
    padding: cssVars.spacings_spacing_0,
  },
  _buttonSectionContainer: {
    align_items: 'flex-start',
    display: 'flex',
    flex_direction: 'column',
    width: cssVars.spacings_spacing_100_percent,
  },
  _closeIcon: {
    height: cssVars.sizes_size_250,
    width: cssVars.sizes_size_250,
  },
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
  _contentContainerLargeMessage: {
    $mediaQueries: {
      mobile: {
        margin_left: cssVars.spacings_spacing_0,
      },
    },
    padding: cssVars.spacings_spacing_0,
  },
  _description: {
    ...TEXT[TextVariantType.PARAGRAPH_SMALL_EXTENDED],
    color: cssVars.colors_neutral_color_font_150,
    font_weight: cssVars.font_weight_400,
    word_break: 'break-word',
  },
  _extraActionButtonContainer: {
    padding: cssVars.spacings_spacing_0,
  },
  _headerContainer: {
    align_items: 'flex-start',
    display: 'flex',
    flex_direction: 'column',
    gap: cssVars.spacings_spacing_300,
  },
  _headerContainerLargeMessage: {
    $mediaQueries: {
      mobile: {
        flex_direction: 'column',
      },
    },
    padding: cssVars.spacings_spacing_0,
  },
  _infoIcon: {
    height: cssVars.sizes_size_250,
    width: cssVars.sizes_size_250,
  },
  _linkContainer: {
    padding: cssVars.spacings_spacing_0,
  },
  _linksContainer: {
    display: 'flex',
    gap: cssVars.spacings_spacing_150,
  },
  _title: {
    ...TEXT[TextVariantType.PARAGRAPH_MEDIUM_EXTENDED],
    color: cssVars.colors_neutral_color_font_50,
    font_weight: cssVars.font_weight_500,
    word_break: 'break-word',
  },
  _titleContainer: {
    display: 'flex',
    flex_direction: 'column',
    word_break: 'break-word',
  },
  [MessageVariantType.ERROR]: {
    _container: {
      background_color: cssVars.colors_feedback_color_error_bg_50,
      border_color: cssVars.colors_feedback_color_feedbackerror_border_100,
    },
    _infoIcon: {
      color: cssVars.colors_feedback_color_feedbackerror_icon_100,
    },
  },
  [MessageVariantType.INFORMATIVE]: {
    _container: {
      background_color: cssVars.colors_feedback_color_info_bg_50,
      border_color: cssVars.colors_feedback_color_feedbackinfo_border_100,
    },
    _infoIcon: {
      color: cssVars.colors_feedback_color_feedbackinfo_border_100,
    },
  },
  [MessageVariantType.SUCCESS]: {
    _container: {
      background_color: cssVars.colors_feedback_color_success_bg_50,
      border_color: cssVars.colors_feedback_color_feedbacksuccess_border_100,
    },
    _infoIcon: {
      color: cssVars.colors_feedback_color_feedbacksuccess_icon_100,
    },
  },
  [MessageVariantType.WARNING]: {
    _container: {
      background_color: cssVars.colors_feedback_color_warning_bg_50,
      border_color: cssVars.colors_feedback_color_feedbackwarning_border_100,
    },
    _infoIcon: {
      color: cssVars.colors_feedback_color_warning_icon_50,
    },
  },
  padding: cssVars.spacings_spacing_0,
};
