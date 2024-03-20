// fundations
import { ConfirmationMessageStylesType } from '@/components/confirmationMessage/types';
import { shadowAfterStyles, transformShadow } from '@/designSystem/kubitWireframe/utils/wireframe';

import { BORDERS, FONT_WEIGHT, RADIUS, SPACINGS, TEXT_ALIGN } from '../../foundations';
import { TextVariantType } from '../text';
import { FooterVariants } from '../variants';
import { ConfirmationMessageStateType, ConfirmationMessageVariantType } from './variants';

const commonProps = COLORS => {
  return {
    container: {
      border_width: BORDERS.border_50,
      border_style: 'solid',
      border_color: COLORS.SECONDARY.color_secondary_border_50,
      ...transformShadow(RADIUS.radius_300),
      ...shadowAfterStyles(RADIUS.radius_300, COLORS.BRAND.color_brand_bg_50, SPACINGS.spacing_50),
      background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    },
    titleAndDescriptionContainer: {
      margin: `${SPACINGS.spacing_400} ${SPACINGS.spacing_400} 0 ${SPACINGS.spacing_400}`,
    },
    titleContainer: {
      margin_bottom: SPACINGS.spacing_400,
      gap: SPACINGS.spacing_300,
    },
    title: {
      font_variant: TextVariantType.HEADING_H2_EXTENDED,
      font_weight: FONT_WEIGHT.font_weight_500,
      text_align: TEXT_ALIGN.center,
      color: COLORS.NEUTRAL.color_neutral_font_50,
    },
    descriptionContainer: {
      gap: SPACINGS.spacing_150,
    },
    description: {
      font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
      font_weight: FONT_WEIGHT.font_weight_400,
      text_align: TEXT_ALIGN.center,
      color: COLORS.NEUTRAL.color_neutral_font_50,
    },
    secondaryDescription: {
      font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
      font_weight: FONT_WEIGHT.font_weight_400,
      text_align: TEXT_ALIGN.center,
      color: COLORS.NEUTRAL.color_neutral_font_50,
    },
    content: {
      padding: `${SPACINGS.spacing_400} ${SPACINGS.spacing_400}`,
    },
    footer: {
      background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      position: 'sticky',
      bottom: SPACINGS.spacing_0,
      border_top: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
      border_bottom_left_radius: RADIUS.radius_300,
      border_bottom_right_radius: RADIUS.radius_300,
      variant: FooterVariants.EMPTY,
      padding: `${SPACINGS.spacing_400} ${SPACINGS.spacing_450}`,
      width: SPACINGS.spacing_100_percent,
    },
  };
};

export const getConfirmationMessageStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): ConfirmationMessageStylesType<ConfirmationMessageVariantType> => ({
  [ConfirmationMessageVariantType.DEFAULT]: {
    [ConfirmationMessageStateType.SUCCESS]: {
      ...commonProps(COLORS),
      icon: {
        width: '4rem',
        height: '4rem',
        color: COLORS.FEEDBACK.color_feedbackSuccess_icon_100,
      },
    },
    [ConfirmationMessageStateType.ERROR]: {
      ...commonProps(COLORS),
      icon: {
        width: '4rem',
        height: '4rem',
        color: COLORS.FEEDBACK.color_feedbackError_icon_100,
      },
    },
    [ConfirmationMessageStateType.WARNING]: {
      ...commonProps(COLORS),
      icon: {
        width: '4rem',
        height: '4rem',
        color: COLORS.FEEDBACK.color_feedback_warning_icon_50,
      },
    },
  },
});
