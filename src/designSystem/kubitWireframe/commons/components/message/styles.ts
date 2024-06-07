import { MessageStylesType } from '@/components/message/types';
import { shadowAfterStyles, transformShadow } from '@/designSystem/kubitWireframe/utils/wireframe';
import { DeviceBreakpointsType } from '@/types';

import { BORDERS, FONT_WEIGHT, RADIUS, SIZES, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text/variants';
import { MessageVariantType } from './variants';

const commonProps = COLORS => {
  return {
    container: {
      display: 'flex',
      flex_direction: 'row',
      align_items: 'flex-start',
      justify_content: 'flex-start',
      gap: SPACINGS.spacing_150,
      position: 'relative',
      padding: SPACINGS.spacing_300,
      border_width: BORDERS.border_50,
      border_style: 'solid',
      border_color: COLORS.SECONDARY.color_secondary_border_50,
      ...transformShadow(RADIUS.radius_150),
      ...shadowAfterStyles(RADIUS.radius_150, COLORS.BRAND.color_brand_bg_50, SPACINGS.spacing_50),
      background_color: COLORS.NEUTRAL.color_neutral_bg_250,
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
  };
};

export const getMessageStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): MessageStylesType<MessageVariantType> => {
  return {
    [MessageVariantType.INFORMATIVE]: {
      ...commonProps(COLORS),
      container: {
        ...commonProps(COLORS).container,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      },
      infoIcon: {
        ...commonProps(COLORS).infoIcon,
        color: COLORS.FEEDBACK.color_feedbackInfo_border_100,
      },
    },
    [MessageVariantType.WARNING]: {
      ...commonProps(COLORS),
      container: {
        ...commonProps(COLORS).container,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      },
      infoIcon: {
        ...commonProps(COLORS).infoIcon,
        color: COLORS.FEEDBACK.color_feedback_warning_icon_50,
      },
    },
    [MessageVariantType.SUCCESS]: {
      ...commonProps(COLORS),
      container: {
        ...commonProps(COLORS).container,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      },
      infoIcon: {
        ...commonProps(COLORS).infoIcon,
        color: COLORS.FEEDBACK.color_feedbackSuccess_icon_100,
      },
    },
    [MessageVariantType.ERROR]: {
      ...commonProps(COLORS),
      container: {
        ...commonProps(COLORS).container,
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      },
      infoIcon: {
        ...commonProps(COLORS).infoIcon,
        color: COLORS.FEEDBACK.color_feedbackError_icon_100,
      },
    },
  };
};
