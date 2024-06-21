import { MessageStylesType } from '@/components/message/types';
import { DeviceBreakpointsType } from '@/types';

import { BORDERS, COLORS, FONT_WEIGHT, RADIUS, SIZES, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text/variants';
import { MessageVariantType } from './variants';

const commonProps = {
  container: {
    display: 'flex',
    flex_direction: 'row',
    align_items: 'flex-start',
    justify_content: 'flex-start',
    position: 'relative',
    border_style: 'solid',
    border_radius: RADIUS.radius_00,
    border_width: BORDERS.border_50,
    padding: SPACINGS.spacing_300,
    gap: SPACINGS.spacing_150,
  },
  headerContainer: {
    display: 'flex',
    flex_direction: 'column',
    align_items: 'flex-start',
    gap: SPACINGS.spacing_300,
    margin_right: SPACINGS.spacing_450,
  },
  headerContainerLargeMessage: {
    [DeviceBreakpointsType.MOBILE]: {
      flex_direction: 'column',
    },
  },
  title: {
    font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
    color: COLORS.NEUTRAL.color_neutral_font_50,
    font_weight: FONT_WEIGHT.font_weight_500,
    word_break: 'break-word',
  },
  contentContainerLargeMessage: {
    [DeviceBreakpointsType.MOBILE]: {
      margin_left: SPACINGS.spacing_0,
    },
  },
  description: {
    font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
    color: COLORS.NEUTRAL.color_neutral_font_150,
    font_weight: FONT_WEIGHT.font_weight_400,
    word_break: 'break-word',
  },
  infoIcon: {
    width: SIZES.size_250,
    height: SIZES.size_250,
  },
  closeIcon: {
    width: SIZES.size_250,
    height: SIZES.size_250,
  },
  closeIconContainer: {
    gap: SPACINGS.spacing_150,
    right: SPACINGS.spacing_300,
    position: 'absolute',
    top: SPACINGS.spacing_300,
  },
  buttonSectionContainer: {
    display: 'flex',
    flex_direction: 'column',
    width: '100%',
    align_items: 'flex-start',
  },
  linksContainer: {
    display: 'flex',
    gap: SPACINGS.spacing_150,
  },
};

export const MESSAGE_STYLES: MessageStylesType<MessageVariantType> = {
  [MessageVariantType.INFORMATIVE]: {
    ...commonProps,
    container: {
      ...commonProps.container,
      border_color: COLORS.FEEDBACK.color_feedbackInfo_border_100,
      background_color: COLORS.FEEDBACK.color_feedback_info_bg_50,
    },
    infoIcon: {
      ...commonProps.infoIcon,
      color: COLORS.FEEDBACK.color_feedbackInfo_border_100,
    },
  },
  [MessageVariantType.WARNING]: {
    ...commonProps,
    container: {
      ...commonProps.container,
      border_color: COLORS.FEEDBACK.color_feedbackWarning_border_100,
      background_color: COLORS.FEEDBACK.color_feedback_warning_bg_50,
    },
    infoIcon: {
      ...commonProps.infoIcon,
      color: COLORS.FEEDBACK.color_feedback_warning_icon_50,
    },
  },
  [MessageVariantType.SUCCESS]: {
    ...commonProps,
    container: {
      ...commonProps.container,
      border_color: COLORS.FEEDBACK.color_feedbackSuccess_border_100,
      background_color: COLORS.FEEDBACK.color_feedback_success_bg_50,
    },
    infoIcon: {
      ...commonProps.infoIcon,
      color: COLORS.FEEDBACK.color_feedbackSuccess_icon_100,
    },
  },
  [MessageVariantType.ERROR]: {
    ...commonProps,
    container: {
      ...commonProps.container,
      border_color: COLORS.FEEDBACK.color_feedbackError_border_100,
      background_color: COLORS.FEEDBACK.color_feedback_error_bg_50,
    },
    infoIcon: {
      ...commonProps.infoIcon,
      color: COLORS.FEEDBACK.color_feedbackError_icon_100,
    },
  },
};
