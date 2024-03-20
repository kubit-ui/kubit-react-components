// fundations
import { ConfirmationMessageStylesType } from '@/components/confirmationMessage/types';

import { COLORS, FONT_WEIGHT, SPACINGS, TEXT_ALIGN } from '../../foundations';
import { TextVariantType } from '../text';
import { FooterVariants } from '../variants';
import { ConfirmationMessageStateType, ConfirmationMessageVariantType } from './variants';

const commonProps = {
  titleContainer: {
    margin_bottom: SPACINGS.spacing_150,
    gap: SPACINGS.spacing_400,
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
    margin: `${SPACINGS.spacing_400} ${SPACINGS.spacing_0}`,
  },
};

export const CONFIRMATION_MESSAGE_STYLES: ConfirmationMessageStylesType<ConfirmationMessageVariantType> =
  {
    [ConfirmationMessageVariantType.DEFAULT]: {
      [ConfirmationMessageStateType.SUCCESS]: {
        ...commonProps,
        icon: {
          width: '4rem',
          height: '4rem',
          color: COLORS.FEEDBACK.color_feedbackSuccess_icon_100,
        },
        footer: {
          variant: FooterVariants.DEFAULT,
        },
      },
      [ConfirmationMessageStateType.ERROR]: {
        ...commonProps,
        icon: {
          width: '4rem',
          height: '4rem',
          color: COLORS.FEEDBACK.color_feedbackError_icon_100,
        },
        footer: {
          variant: FooterVariants.DEFAULT,
        },
      },
      [ConfirmationMessageStateType.WARNING]: {
        ...commonProps,
        icon: {
          width: '4rem',
          height: '4rem',
          color: COLORS.FEEDBACK.color_feedback_warning_icon_50,
        },
        footer: {
          variant: FooterVariants.DEFAULT,
        },
      },
    },
  };
