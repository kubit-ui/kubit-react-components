import { BORDERS, RADIUS } from '../../foundations/borders';
import { COLORS } from '../../foundations/colors';
import { SIZES } from '../../foundations/sizes';
import { SPACINGS } from '../../foundations/spacings';
import { FONT_WEIGHT } from '../../foundations/typography';
import { TEXT } from '../text/styles';
import { TextVariantType } from '../text/variants';
import { MessageVariantType } from './variants';

const commonProps = {
  _buttonSectionContainer: {
    align_items: 'flex-start',
    display: 'flex',
    flex_direction: 'column',
    width: '100%',
  },
  _closeIcon: {
    height: SIZES.size_250,
    width: SIZES.size_250,
  },
  _contentContainerLargeMessage: {
    $mediaQueries: {
      mobile: {
        margin_left: SPACINGS.spacing_0,
      },
    },
  },
  _description: {
    ...TEXT[TextVariantType.PARAGRAPH_SMALL_EXTENDED],
    color: COLORS.NEUTRAL.color_neutral_font_150,
    font_weight: FONT_WEIGHT.font_weight_400,
    word_break: 'break-word',
  },
  _headerContainer: {
    align_items: 'flex-start',
    display: 'flex',
    flex_direction: 'column',
    gap: SPACINGS.spacing_300,
  },
  _headerContainerLargeMessage: {
    $mediaQueries: {
      mobile: {
        flex_direction: 'column',
      },
    },
  },
  _linksContainer: {
    display: 'flex',
    gap: SPACINGS.spacing_150,
  },
  _title: {
    ...TEXT[TextVariantType.PARAGRAPH_MEDIUM_EXTENDED],
    color: COLORS.NEUTRAL.color_neutral_font_50,
    font_weight: FONT_WEIGHT.font_weight_500,
    word_break: 'break-word',
  },
  container: {
    align_items: 'flex-start',
    border_radius: RADIUS.radius_00,
    border_style: 'solid',
    border_width: BORDERS.border_50,
    display: 'flex',
    flex_direction: 'row',
    gap: SPACINGS.spacing_150,
    justify_content: 'flex-start',
    padding: SPACINGS.spacing_300,
    position: 'relative',
  },
  infoIcon: {
    height: SIZES.size_250,
    width: SIZES.size_250,
  },
};

export const MESSAGE = {
  [MessageVariantType.ERROR]: {
    ...commonProps,
    _container: {
      ...commonProps.container,
      background_color: COLORS.FEEDBACK.color_feedback_error_bg_50,
      border_color: COLORS.FEEDBACK.color_feedbackError_border_100,
    },
    _infoIcon: {
      ...commonProps.infoIcon,
      color: COLORS.FEEDBACK.color_feedbackError_icon_100,
    },
  },
  [MessageVariantType.INFORMATIVE]: {
    ...commonProps,
    _container: {
      ...commonProps.container,
      background_color: COLORS.FEEDBACK.color_feedback_info_bg_50,
      border_color: COLORS.FEEDBACK.color_feedbackInfo_border_100,
    },
    _infoIcon: {
      ...commonProps.infoIcon,
      color: COLORS.FEEDBACK.color_feedbackInfo_border_100,
    },
  },
  [MessageVariantType.SUCCESS]: {
    ...commonProps,
    _container: {
      ...commonProps.container,
      background_color: COLORS.FEEDBACK.color_feedback_success_bg_50,
      border_color: COLORS.FEEDBACK.color_feedbackSuccess_border_100,
    },
    _infoIcon: {
      ...commonProps.infoIcon,
      color: COLORS.FEEDBACK.color_feedbackSuccess_icon_100,
    },
  },
  [MessageVariantType.WARNING]: {
    ...commonProps,
    _container: {
      ...commonProps.container,
      background_color: COLORS.FEEDBACK.color_feedback_warning_bg_50,
      border_color: COLORS.FEEDBACK.color_feedbackWarning_border_100,
    },
    _infoIcon: {
      ...commonProps.infoIcon,
      color: COLORS.FEEDBACK.color_feedback_warning_icon_50,
    },
  },
};
